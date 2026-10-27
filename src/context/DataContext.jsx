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

const DataContext = createContext(null);

const STORAGE_KEY_PREFIX = 'gei_mgmt_';

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

  // Sync to localStorage
  useEffect(() => { saveStored('clubs', clubs); }, [clubs]);
  useEffect(() => { saveStored('users', users); }, [users]);
  useEffect(() => { saveStored('equipment', equipment); }, [equipment]);
  useEffect(() => { saveStored('schedule', schedule); }, [schedule]);
  useEffect(() => { saveStored('requests', requests); }, [requests]);
  useEffect(() => { saveStored('academic_year', academicYear); }, [academicYear]);

  // High-precision interval overlap check for concurrent auditorium requests
  const checkAuditoriumConflict = (venue, date, startTime, endTime, excludeRequestId = null) => {
    // Check against official confirmed schedule
    const scheduleConflict = schedule.find(item => {
      if (excludeRequestId && item.requestId === excludeRequestId) return false;
      if (item.venue !== venue || item.date !== date) return false;

      // Time overlap condition: (StartA < EndB) and (EndA > StartB)
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

    // Also check other approved or under-review bookings
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
  const submitRequest = (requestData, currentUser) => {
    // Determine if higher approval is required
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
    return newRequest;
  };

  // Admin / CEO Actions
  const approveRequest = (requestId, actor, comment = '') => {
    const timestamp = new Date().toISOString();
    let updatedReq = null;

    setRequests(prev => prev.map(req => {
      if (req.requestId !== requestId) return req;

      // Deduct equipment inventory if applicable
      if (req.equipmentRequirements && req.equipmentRequirements.length > 0) {
        setEquipment(prevEq => prevEq.map(eq => {
          const reqItem = req.equipmentRequirements.find(r => r.name === eq.name);
          if (reqItem) {
            const newAvail = Math.max(0, eq.quantityAvailable - reqItem.qty);
            return { ...eq, quantityAvailable: newAvail };
          }
          return eq;
        }));
      }

      // Add to confirmed schedule if venue is specified
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

    return updatedReq;
  };

  const rejectRequest = (requestId, actor, comment = '') => {
    const timestamp = new Date().toISOString();
    setRequests(prev => prev.map(req => {
      if (req.requestId !== requestId) return req;
      return {
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
    }));
  };

  const requestClarification = (requestId, actor, comment) => {
    const timestamp = new Date().toISOString();
    setRequests(prev => prev.map(req => {
      if (req.requestId !== requestId) return req;
      return {
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
    }));
  };

  const submitClarificationResponse = (requestId, actor, responseText, updatedNotes) => {
    const timestamp = new Date().toISOString();
    setRequests(prev => prev.map(req => {
      if (req.requestId !== requestId) return req;
      return {
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
    }));
  };

  const forwardForApproval = (requestId, actor, comment = '') => {
    const timestamp = new Date().toISOString();
    setRequests(prev => prev.map(req => {
      if (req.requestId !== requestId) return req;
      return {
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
            comment: comment || 'Forwarded to CEO for higher review.',
            timestamp
          }
        ]
      };
    }));
  };

  // Official Schedule Management
  const addScheduleEvent = (eventData, actor) => {
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
    return newEvent;
  };

  const deleteScheduleEvent = (eventId) => {
    setSchedule(prev => prev.filter(e => e.eventId !== eventId));
  };

  // Club & User Management
  const mapClubHeadEmail = (clubId, headName, email, temporaryPassword = 'Galgotias@2026') => {
    const cleanEmail = email.trim().toLowerCase();
    const uid = `user_${headName.toLowerCase().replace(/[^a-z0-9]/g, '_')}`;

    // Update or add user in users list
    setUsers(prev => {
      const existingIdx = prev.findIndex(u => u.name === headName);
      const userObj = {
        uid: existingIdx >= 0 ? prev[existingIdx].uid : uid,
        name: headName,
        institutionalEmail: cleanEmail,
        role: 'CLUB_HEAD',
        clubId,
        clubName: clubs.find(c => c.id === clubId)?.name || 'Club',
        active: true,
        mustChangePassword: true,
        temporaryPassword,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      if (existingIdx >= 0) {
        const copy = [...prev];
        copy[existingIdx] = { ...copy[existingIdx], ...userObj };
        return copy;
      }
      return [...prev, userObj];
    });
  };

  const toggleUserActive = (uid) => {
    setUsers(prev => prev.map(u => {
      if (u.uid === uid) {
        return { ...u, active: !u.active, updatedAt: new Date().toISOString() };
      }
      return u;
    }));
  };

  const resetUserPassword = (uid, tempPassword = 'Galgotias@2026') => {
    setUsers(prev => prev.map(u => {
      if (u.uid === uid) {
        return { 
          ...u, 
          mustChangePassword: true, 
          temporaryPassword: tempPassword,
          updatedAt: new Date().toISOString() 
        };
      }
      return u;
    }));
  };

  const rolloverAcademicYear = (newYear) => {
    setAcademicYear(newYear);
    // Mark clubs with new academic year
    setClubs(prev => prev.map(c => ({ ...c, academicYear: newYear })));
  };

  // Equipment Management
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

  const resetToDefaults = () => {
    localStorage.clear();
    setClubs(INITIAL_CLUBS);
    setUsers(INITIAL_USERS);
    setEquipment(INITIAL_EQUIPMENT);
    setSchedule(INITIAL_SCHEDULE);
    setRequests(INITIAL_REQUESTS);
    setAcademicYear('2026-27');
  };

  const value = {
    clubs,
    users,
    equipment,
    schedule,
    requests,
    academicYear,
    checkAuditoriumConflict,
    submitRequest,
    approveRequest,
    rejectRequest,
    requestClarification,
    submitClarificationResponse,
    forwardForApproval,
    addScheduleEvent,
    deleteScheduleEvent,
    mapClubHeadEmail,
    toggleUserActive,
    resetUserPassword,
    rolloverAcademicYear,
    updateEquipmentQuantity,
    resetToDefaults
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export function useData() {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error('useData must be used inside DataProvider');
  return ctx;
}
