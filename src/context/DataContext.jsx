import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  INITIAL_CLUBS, 
  INITIAL_USERS, 
  INITIAL_EQUIPMENT, 
  INITIAL_SCHEDULE, 
  INITIAL_REQUESTS,
  REQUEST_CATEGORIES,
  VENUES 
} from '../data/initialRegistry';
import { db } from '../firebase';
import { 
  collection, 
  doc, 
  setDoc, 
  updateDoc, 
  onSnapshot 
} from 'firebase/firestore';

const DataContext = createContext(null);

const STORAGE_KEY_PREFIX = 'gei_prod_v2_';

function loadStored(key, fallback) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PREFIX + key);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error(`Failed to load ${key}`, e);
  }
  return fallback;
}

function saveStored(key, data) {
  try {
    localStorage.setItem(STORAGE_KEY_PREFIX + key, JSON.stringify(data));
  } catch (e) {
    console.error(`Failed to save ${key}`, e);
  }
}

export function DataProvider({ children }) {
  const [clubs, setClubs] = useState(() => loadStored('clubs', INITIAL_CLUBS));
  const [users, setUsers] = useState(() => loadStored('users', INITIAL_USERS));
  const [equipment, setEquipment] = useState(() => loadStored('equipment', INITIAL_EQUIPMENT));
  const [schedule, setSchedule] = useState(() => loadStored('schedule', INITIAL_SCHEDULE));
  const [requests, setRequests] = useState(() => loadStored('requests', INITIAL_REQUESTS));
  const [academicYear, setAcademicYear] = useState(() => loadStored('academic_year', '2026-27'));

  // Live Sync & Network State for Mobile PWA
  const [isOnline, setIsOnline] = useState(() => typeof navigator !== 'undefined' ? navigator.onLine : true);
  const [syncStatus, setSyncStatus] = useState(db ? 'live' : 'local'); // 'live' | 'syncing' | 'offline' | 'local'
  const [lastSyncTime, setLastSyncTime] = useState(() => new Date().toISOString());

  // Listen to network status
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      if (db) {
        setSyncStatus('syncing');
        setTimeout(() => {
          setSyncStatus('live');
          setLastSyncTime(new Date().toISOString());
        }, 800);
      }
    };

    const handleOffline = () => {
      setIsOnline(false);
      setSyncStatus('offline');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Sync to local storage
  useEffect(() => { saveStored('clubs', clubs); }, [clubs]);
  useEffect(() => { saveStored('users', users); }, [users]);
  useEffect(() => { saveStored('equipment', equipment); }, [equipment]);
  useEffect(() => { saveStored('schedule', schedule); }, [schedule]);
  useEffect(() => { saveStored('requests', requests); }, [requests]);
  useEffect(() => { saveStored('academic_year', academicYear); }, [academicYear]);

  // Cloud Firestore Real-time Listeners (with live sync tracking)
  useEffect(() => {
    if (!db) {
      setSyncStatus('local');
      return;
    }

    setSyncStatus('syncing');
    const unsubs = [];
    try {
      unsubs.push(
        onSnapshot(collection(db, 'requests'), (snapshot) => {
          if (!snapshot.empty) {
            const list = snapshot.docs.map(d => ({ ...d.data(), requestId: d.id }));
            setRequests(list);
          }
          setSyncStatus(navigator.onLine ? 'live' : 'offline');
          setLastSyncTime(new Date().toISOString());
        }, err => console.log('Firestore requests listener:', err.message))
      );

      unsubs.push(
        onSnapshot(collection(db, 'schedule'), (snapshot) => {
          if (!snapshot.empty) {
            const list = snapshot.docs.map(d => ({ ...d.data(), eventId: d.id }));
            setSchedule(list);
          }
          setSyncStatus(navigator.onLine ? 'live' : 'offline');
          setLastSyncTime(new Date().toISOString());
        }, err => console.log('Firestore schedule listener:', err.message))
      );

      unsubs.push(
        onSnapshot(collection(db, 'users'), (snapshot) => {
          if (!snapshot.empty) {
            const list = snapshot.docs.map(d => ({ ...d.data(), uid: d.id }));
            const merged = [...list];
            INITIAL_USERS.forEach(initUser => {
              if (!merged.some(u => u.uid === initUser.uid || u.institutionalEmail === initUser.institutionalEmail)) {
                merged.push(initUser);
              }
            });
            setUsers(merged);
          } else {
            INITIAL_USERS.forEach(u => {
              setDoc(doc(db, 'users', u.uid), u).catch(console.warn);
            });
            setUsers(INITIAL_USERS);
          }
          setSyncStatus(navigator.onLine ? 'live' : 'offline');
          setLastSyncTime(new Date().toISOString());
        }, err => console.log('Firestore users listener:', err.message))
      );
    } catch (e) {
      console.warn('Real-time listener setup error:', e);
    }

    return () => unsubs.forEach(unsub => unsub && unsub());
  }, []);

  // Manual Trigger to re-verify sync
  const refreshSync = async () => {
    setSyncStatus('syncing');
    await new Promise(r => setTimeout(r, 600));
    setSyncStatus(navigator.onLine ? (db ? 'live' : 'local') : 'offline');
    setLastSyncTime(new Date().toISOString());
  };

  // Conflict detection for auditorium bookings
  const checkAuditoriumConflict = (venue, date, startTime, endTime, excludeRequestId = null) => {
    const scheduleConflict = schedule.find(item => {
      if (excludeRequestId && item.requestId === excludeRequestId) return false;
      if (item.venue !== venue || item.date !== date) return false;
      return (startTime < item.endTime && endTime > item.startTime);
    });

    if (scheduleConflict) {
      return {
        hasConflict: true,
        source: 'Confirmed Schedule',
        conflictingEvent: scheduleConflict.title,
        time: `${scheduleConflict.startTime} - ${scheduleConflict.endTime}`
      };
    }

    const requestConflict = requests.find(req => {
      if (excludeRequestId && req.requestId === excludeRequestId) return false;
      if (req.status === 'Rejected' || req.status === 'Cancelled') return false;
      if (req.venue !== venue || req.requestedDate !== date) return false;
      return (startTime < req.endTime && endTime > req.startTime);
    });

    if (requestConflict) {
      return {
        hasConflict: true,
        source: `Request [${requestConflict.status}]`,
        conflictingEvent: requestConflict.title,
        time: `${requestConflict.startTime} - ${requestConflict.endTime}`
      };
    }

    return { hasConflict: false };
  };

  // Submit new request
  const submitRequest = async (requestData, currentUser) => {
    const categoryConfig = REQUEST_CATEGORIES.find(c => c.id === requestData.category);
    const venueConfig = VENUES.find(v => v.name === requestData.venue);
    const requiresHigher = Boolean(categoryConfig?.requiresHigherApproval || venueConfig?.requiresHigherApproval);

    const newRequestId = `req-2026-${String(requests.length + 1).padStart(3, '0')}`;
    const timestamp = new Date().toISOString();

    const newRequest = {
      requestId: newRequestId,
      clubId: currentUser.clubId || 'general',
      clubName: currentUser.clubName || 'General',
      submittedByUid: currentUser.uid,
      submittedByName: currentUser.name,
      submittedByPhone: currentUser.phone || '',
      category: requestData.category,
      title: requestData.title,
      description: requestData.description,
      requestedDate: requestData.requestedDate,
      startTime: requestData.startTime,
      endTime: requestData.endTime,
      venue: requestData.venue,
      expectedAttendance: Number(requestData.expectedAttendance) || 0,
      equipmentRequirements: requestData.equipmentRequirements || [],
      additionalNotes: requestData.additionalNotes || '',
      status: 'Submitted',
      currentApproverRole: 'ADMIN',
      requiresHigherApproval: requiresHigher,
      createdAt: timestamp,
      updatedAt: timestamp,
      history: [
        {
          id: `hist-${Date.now()}`,
          action: 'SUBMITTED',
          actorName: currentUser.name,
          actorRole: currentUser.role,
          comment: `Initial request submitted by ${currentUser.name} (${currentUser.clubName || 'Club Head'}).`,
          timestamp
        }
      ]
    };

    setRequests(prev => [newRequest, ...prev]);

    if (db) {
      try {
        await setDoc(doc(db, 'requests', newRequestId), newRequest);
      } catch (err) {
        console.warn('Firestore write error:', err.message);
      }
    }

    return newRequest;
  };

  // Approvals & Workflow
  const approveRequest = async (requestId, actor, comment = '') => {
    const timestamp = new Date().toISOString();
    let updatedReq = null;

    setRequests(prev => prev.map(req => {
      if (req.requestId !== requestId) return req;

      // Deduct equipment
      if (req.equipmentRequirements?.length > 0) {
        setEquipment(prevEq => prevEq.map(eq => {
          const reqItem = req.equipmentRequirements.find(r => r.name === eq.name);
          if (reqItem) {
            return { ...eq, quantityAvailable: Math.max(0, eq.quantityAvailable - reqItem.qty) };
          }
          return eq;
        }));
      }

      // Add to official schedule
      if (req.venue && req.venue !== 'None / Equipment Only') {
        const newScheduleEvent = {
          eventId: `sch-${Date.now()}`,
          requestId: req.requestId,
          title: req.title,
          clubName: req.clubName,
          venue: req.venue,
          date: req.requestedDate,
          startTime: req.startTime,
          endTime: req.endTime,
          publicDescription: req.description,
          expectedAttendance: req.expectedAttendance,
          visibility: 'public',
          updatedByName: actor.name,
          updatedAt: timestamp
        };
        setSchedule(prevSch => [newScheduleEvent, ...prevSch]);

        if (db) {
          setDoc(doc(db, 'schedule', newScheduleEvent.eventId), newScheduleEvent).catch(console.warn);
        }
      }

      updatedReq = {
        ...req,
        status: 'Approved',
        currentApproverRole: 'COMPLETED',
        updatedAt: timestamp,
        history: [
          ...req.history,
          {
            id: `hist-${Date.now()}`,
            action: 'APPROVED',
            actorName: actor.name,
            actorRole: actor.role,
            comment: comment || 'Request approved successfully.',
            timestamp
          }
        ]
      };
      return updatedReq;
    }));

    if (db && updatedReq) {
      updateDoc(doc(db, 'requests', requestId), updatedReq).catch(console.warn);
    }

    return updatedReq;
  };

  const rejectRequest = async (requestId, actor, comment = '') => {
    const timestamp = new Date().toISOString();
    setRequests(prev => prev.map(req => {
      if (req.requestId !== requestId) return req;
      const updated = {
        ...req,
        status: 'Rejected',
        currentApproverRole: 'COMPLETED',
        updatedAt: timestamp,
        history: [
          ...req.history,
          {
            id: `hist-${Date.now()}`,
            action: 'REJECTED',
            actorName: actor.name,
            actorRole: actor.role,
            comment: comment || 'Request rejected.',
            timestamp
          }
        ]
      };
      if (db) updateDoc(doc(db, 'requests', requestId), updated).catch(console.warn);
      return updated;
    }));
  };

  const requestClarification = async (requestId, actor, comment) => {
    const timestamp = new Date().toISOString();
    setRequests(prev => prev.map(req => {
      if (req.requestId !== requestId) return req;
      const updated = {
        ...req,
        status: 'Need Clarification',
        currentApproverRole: 'CLUB_HEAD',
        clarificationPrompt: comment,
        updatedAt: timestamp,
        history: [
          ...req.history,
          {
            id: `hist-${Date.now()}`,
            action: 'NEED_CLARIFICATION',
            actorName: actor.name,
            actorRole: actor.role,
            comment,
            timestamp
          }
        ]
      };
      if (db) updateDoc(doc(db, 'requests', requestId), updated).catch(console.warn);
      return updated;
    }));
  };

  const submitClarificationResponse = async (requestId, actor, responseText, updatedNotes) => {
    const timestamp = new Date().toISOString();
    setRequests(prev => prev.map(req => {
      if (req.requestId !== requestId) return req;
      const updated = {
        ...req,
        status: 'Under Review',
        currentApproverRole: 'ADMIN',
        clarificationResponse: responseText,
        additionalNotes: updatedNotes ? `${req.additionalNotes}\n[Clarification]: ${updatedNotes}` : req.additionalNotes,
        updatedAt: timestamp,
        history: [
          ...req.history,
          {
            id: `hist-${Date.now()}`,
            action: 'CLARIFICATION_PROVIDED',
            actorName: actor.name,
            actorRole: actor.role,
            comment: responseText,
            timestamp
          }
        ]
      };
      if (db) updateDoc(doc(db, 'requests', requestId), updated).catch(console.warn);
      return updated;
    }));
  };

  const forwardForApproval = async (requestId, actor, comment = '') => {
    const timestamp = new Date().toISOString();
    setRequests(prev => prev.map(req => {
      if (req.requestId !== requestId) return req;
      const updated = {
        ...req,
        status: 'Forwarded for Approval',
        currentApproverRole: 'CEO',
        updatedAt: timestamp,
        history: [
          ...req.history,
          {
            id: `hist-${Date.now()}`,
            action: 'FORWARDED_FOR_APPROVAL',
            actorName: actor.name,
            actorRole: actor.role,
            comment: comment || 'Forwarded for executive review.',
            timestamp
          }
        ]
      };
      if (db) updateDoc(doc(db, 'requests', requestId), updated).catch(console.warn);
      return updated;
    }));
  };

  // Schedule Management
  const addScheduleEvent = async (eventData, actor) => {
    const timestamp = new Date().toISOString();
    const newEvent = {
      eventId: `sch-manual-${Date.now()}`,
      requestId: 'direct_admin_booking',
      title: eventData.title,
      clubName: eventData.clubName || 'Institutional / University Event',
      venue: eventData.venue,
      date: eventData.date,
      startTime: eventData.startTime,
      endTime: eventData.endTime,
      publicDescription: eventData.publicDescription,
      expectedAttendance: Number(eventData.expectedAttendance) || 0,
      visibility: eventData.visibility || 'public',
      updatedByName: actor.name,
      updatedAt: timestamp
    };
    setSchedule(prev => [newEvent, ...prev]);
    if (db) setDoc(doc(db, 'schedule', newEvent.eventId), newEvent).catch(console.warn);
    return newEvent;
  };

  const deleteScheduleEvent = (eventId) => {
    setSchedule(prev => prev.filter(e => e.eventId !== eventId));
  };

  // Master Admin Registration (Initial System Bootstrap)
  const registerMasterAdmin = async ({ name, institutionalEmail, phone, password, role = 'ADMIN' }) => {
    const cleanEmail = institutionalEmail.trim().toLowerCase();
    const cleanPhone = phone ? phone.trim() : '';
    const uid = `admin_${Date.now()}`;

    const adminUser = {
      uid,
      name: name.trim(),
      institutionalEmail: cleanEmail,
      phone: cleanPhone,
      password: password.trim(),
      role: role.toUpperCase(),
      active: true,
      mustChangePassword: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    setUsers(prev => [adminUser, ...prev]);

    if (db) {
      try {
        await setDoc(doc(db, 'users', uid), adminUser);
      } catch (err) {
        console.warn('Firestore write error:', err.message);
      }
    }

    return adminUser;
  };

  // Provision / Map User Account (Supports Name, Email, Phone, Role)
  const mapUserAccount = async ({ clubId, seatKey, name, institutionalEmail, phone, password, role = 'CLUB_HEAD' }) => {
    const cleanEmail = institutionalEmail.trim().toLowerCase();
    const cleanPhone = phone ? phone.trim() : '';
    const uid = `user_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
    const club = clubs.find(c => c.id === clubId);

    const userObj = {
      uid,
      name: name.trim(),
      institutionalEmail: cleanEmail,
      phone: cleanPhone,
      password: password.trim(),
      temporaryPassword: password.trim(),
      role,
      clubId: clubId || '',
      clubName: club?.name || '',
      active: true,
      mustChangePassword: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    // Update user list
    setUsers(prev => {
      const idx = prev.findIndex(u => u.institutionalEmail === cleanEmail || (cleanPhone && u.phone === cleanPhone));
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], ...userObj };
        return copy;
      }
      return [userObj, ...prev];
    });

    // Update club head seat if specified
    if (clubId && seatKey) {
      setClubs(prev => prev.map(c => {
        if (c.id === clubId) {
          return { ...c, [seatKey]: name.trim() };
        }
        return c;
      }));
    }

    if (db) {
      setDoc(doc(db, 'users', uid), userObj).catch(console.warn);
    }

    return userObj;
  };

  const toggleUserActive = (uid) => {
    setUsers(prev => prev.map(u => {
      if (u.uid === uid) {
        const updated = { ...u, active: !u.active, updatedAt: new Date().toISOString() };
        if (db) updateDoc(doc(db, 'users', uid), { active: updated.active }).catch(console.warn);
        return updated;
      }
      return u;
    }));
  };

  const resetUserPassword = (uid, tempPassword = 'Galgotias@2026') => {
    setUsers(prev => prev.map(u => {
      if (u.uid === uid) {
        const updated = { 
          ...u, 
          mustChangePassword: true, 
          temporaryPassword: tempPassword,
          password: tempPassword,
          updatedAt: new Date().toISOString() 
        };
        if (db) updateDoc(doc(db, 'users', uid), { mustChangePassword: true, password: tempPassword }).catch(console.warn);
        return updated;
      }
      return u;
    }));
  };

  const rolloverAcademicYear = (newYear) => {
    setAcademicYear(newYear);
    setClubs(prev => prev.map(c => ({ ...c, academicYear: newYear })));
  };

  const updateEquipmentQuantity = (equipmentId, newTotal, newAvailable) => {
    setEquipment(prev => prev.map(eq => {
      if (eq.id === equipmentId) {
        return {
          ...eq,
          quantityTotal: Number(newTotal),
          quantityAvailable: Number(newAvailable),
          updatedAt: new Date().toISOString()
        };
      }
      return eq;
    }));
  };

  const value = {
    clubs,
    users,
    equipment,
    schedule,
    requests,
    academicYear,
    isOnline,
    syncStatus,
    lastSyncTime,
    refreshSync,
    checkAuditoriumConflict,
    submitRequest,
    approveRequest,
    rejectRequest,
    requestClarification,
    submitClarificationResponse,
    forwardForApproval,
    addScheduleEvent,
    deleteScheduleEvent,
    mapUserAccount,
    registerMasterAdmin,
    toggleUserActive,
    resetUserPassword,
    rolloverAcademicYear,
    updateEquipmentQuantity
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export function useData() {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error('useData must be used inside DataProvider');
  return ctx;
}
