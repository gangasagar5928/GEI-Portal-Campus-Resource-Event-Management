import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useData } from '../context/DataContext';
import { 
  FileText, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  SendHorizontal, 
  Package, 
  Users, 
  Calendar, 
  Search, 
  AlertTriangle, 
  Plus, 
  Eye, 
  ShieldCheck, 
  Clock, 
  Key, 
  UserCheck, 
  UserX,
  Edit,
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { VENUES, REQUEST_CATEGORIES } from '../data/initialRegistry';
import RequestDetailsModal from './RequestDetailsModal';

export default function AdminDashboard({ initialSubTab = 'requests' }) {
  const { currentUser } = useAuth();
  const { 
    requests, 
    clubs, 
    users, 
    equipment, 
    schedule, 
    academicYear,
    approveRequest, 
    rejectRequest, 
    requestClarification, 
    forwardForApproval, 
    addScheduleEvent,
    deleteScheduleEvent,
    mapClubHeadEmail, 
    toggleUserActive,
    resetUserPassword,
    rolloverAcademicYear,
    updateEquipmentQuantity,
    checkAuditoriumConflict
  } = useData();

  const [activeTab, setActiveTab] = useState(initialSubTab); // 'requests', 'schedule', 'equipment', 'registry'
  const [requestFilter, setRequestFilter] = useState('ALL');
  const [selectedRequestForModal, setSelectedRequestForModal] = useState(null);

  // Approver Action Dialog State
  const [actionDialog, setActionDialog] = useState(null); // { type: 'APPROVE'|'REJECT'|'CLARIFY'|'FORWARD', request: req }
  const [actionComment, setActionComment] = useState('');

  // Email Mapping Modal State
  const [mappingModal, setMappingModal] = useState(null); // { clubId, headName, currentEmail }
  const [mappedEmail, setMappedEmail] = useState('');
  const [tempPassword, setTempPassword] = useState('Galgotias@2026');

  // Manual Schedule Slot State
  const [showAddEventModal, setShowAddEventModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    clubName: 'GEI Administration',
    venue: VENUES[0].name,
    date: new Date().toISOString().split('T')[0],
    startTime: '09:00',
    endTime: '12:00',
    publicDescription: '',
    expectedAttendance: 200,
    visibility: 'public'
  });
  const [scheduleConflictWarn, setScheduleConflictWarn] = useState(null);

  // Rollover dialog state
  const [showRolloverModal, setShowRolloverModal] = useState(false);
  const [nextYearString, setNextYearString] = useState('2027-28');

  // Filter requests
  const filteredRequests = requests.filter(req => {
    if (requestFilter === 'PENDING') return req.status === 'Submitted' || req.status === 'Under Review';
    if (requestFilter === 'CLARIFICATION') return req.status === 'Need Clarification';
    if (requestFilter === 'FORWARDED') return req.status === 'Forwarded for Approval';
    if (requestFilter === 'RESOLVED') return req.status === 'Approved' || req.status === 'Rejected';
    return true;
  });

  // Action Dispatcher
  const handleExecuteAction = () => {
    if (!actionDialog) return;
    const { type, request } = actionDialog;

    if (type === 'APPROVE') {
      approveRequest(request.requestId, currentUser, actionComment);
    } else if (type === 'REJECT') {
      if (!actionComment.trim()) {
        alert('Rejection reason is required.');
        return;
      }
      rejectRequest(request.requestId, currentUser, actionComment);
    } else if (type === 'CLARIFY') {
      if (!actionComment.trim()) {
        alert('Please specify what clarification is needed from the club head.');
        return;
      }
      requestClarification(request.requestId, currentUser, actionComment);
    } else if (type === 'FORWARD') {
      forwardForApproval(request.requestId, currentUser, actionComment);
    }

    setActionDialog(null);
    setActionComment('');
    setSelectedRequestForModal(null);
  };

  // Save Mapped Institutional Email
  const handleSaveEmailMapping = (e) => {
    e.preventDefault();
    if (!mappingModal || !mappedEmail.trim()) return;

    mapClubHeadEmail(mappingModal.clubId, mappingModal.headName, mappedEmail.trim(), tempPassword.trim());
    setMappingModal(null);
    setMappedEmail('');
  };

  // Add Manual Schedule Event
  const handleCreateScheduleSlot = (e) => {
    e.preventDefault();
    const conflict = checkAuditoriumConflict(newEvent.venue, newEvent.date, newEvent.startTime, newEvent.endTime);
    if (conflict.hasConflict) {
      setScheduleConflictWarn(conflict);
      return;
    }

    addScheduleEvent(newEvent, currentUser);
    setShowAddEventModal(false);
    setScheduleConflictWarn(null);
    setNewEvent({
      title: '',
      clubName: 'GEI Administration',
      venue: VENUES[0].name,
      date: new Date().toISOString().split('T')[0],
      startTime: '09:00',
      endTime: '12:00',
      publicDescription: '',
      expectedAttendance: 200,
      visibility: 'public'
    });
  };

  return (
    <div className="space-y-6">
      
      {/* Admin Header Banner */}
      <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-400 text-slate-950 uppercase tracking-wider">
              Administrative Head
            </span>
            <span className="text-xs text-slate-400">Ashish Nath Awasthi</span>
            <span className="text-slate-600">•</span>
            <span className="text-xs text-blue-400 font-medium">Session: {academicYear}</span>
          </div>
          <h1 className="text-2xl font-black">
            Central Campus Administration Console
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Manage requests, prevent auditorium collisions, reserve AV equipment, and oversee authorized accounts.
          </p>
        </div>

        {/* Top Tab Bar */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-800 p-1.5 rounded-xl border border-slate-700/80 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('requests')}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
              activeTab === 'requests' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            Requests ({requests.length})
          </button>

          <button
            onClick={() => setActiveTab('schedule')}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
              activeTab === 'schedule' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-white'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            Auditorium ({schedule.length})
          </button>

          <button
            onClick={() => setActiveTab('equipment')}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
              activeTab === 'equipment' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-white'
            }`}
          >
            <Package className="w-3.5 h-3.5" />
            Equipment ({equipment.length})
          </button>

          <button
            onClick={() => setActiveTab('registry')}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
              activeTab === 'registry' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-white'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            Clubs & Accounts (21)
          </button>
        </div>
      </div>

      {/* ======================================================== */}
      {/* TAB 1: REQUESTS QUEUE & DECISION ENGINE */}
      {/* ======================================================== */}
      {activeTab === 'requests' && (
        <div className="space-y-4">
          
          {/* Filter Bar */}
          <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400 font-semibold mr-1">Filter Queue:</span>
              <button
                onClick={() => setRequestFilter('ALL')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  requestFilter === 'ALL' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All ({requests.length})
              </button>
              <button
                onClick={() => setRequestFilter('PENDING')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  requestFilter === 'PENDING' ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                }`}
              >
                Pending Review ({requests.filter(r => r.status === 'Submitted' || r.status === 'Under Review').length})
              </button>
              <button
                onClick={() => setRequestFilter('CLARIFICATION')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  requestFilter === 'CLARIFICATION' ? 'bg-amber-600 text-white' : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
                }`}
              >
                Awaiting Clarification ({requests.filter(r => r.status === 'Need Clarification').length})
              </button>
              <button
                onClick={() => setRequestFilter('FORWARDED')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  requestFilter === 'FORWARDED' ? 'bg-purple-600 text-white' : 'bg-purple-50 text-purple-700 hover:bg-purple-100'
                }`}
              >
                With CEO ({requests.filter(r => r.status === 'Forwarded for Approval').length})
              </button>
              <button
                onClick={() => setRequestFilter('RESOLVED')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  requestFilter === 'RESOLVED' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Resolved ({requests.filter(r => r.status === 'Approved' || r.status === 'Rejected').length})
              </button>
            </div>
          </div>

          {/* Requests Table / Cards */}
          <div className="space-y-3">
            {filteredRequests.map(req => {
              const isPending = req.status === 'Submitted' || req.status === 'Under Review';
              const conflict = checkAuditoriumConflict(req.venue, req.requestedDate, req.startTime, req.endTime, req.requestId);

              return (
                <div
                  key={req.requestId}
                  className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:border-slate-300 transition-all"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    
                    {/* Left: Summary Info */}
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-500">{req.requestId}</span>
                        <span className="text-slate-300">•</span>
                        <span className="px-2 py-0.5 rounded text-xs font-bold bg-blue-50 text-blue-700">
                          {req.clubName}
                        </span>
                        <span className="text-slate-300">•</span>
                        <span className="text-xs text-slate-400 capitalize">
                          {req.category?.replace('_', ' ')}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-slate-900">{req.title}</h3>
                      <p className="text-xs text-slate-600 line-clamp-2 max-w-2xl">{req.description}</p>

                      {/* Meta chips */}
                      <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-slate-500 font-medium">
                        <span>📍 <strong className="text-slate-700">{req.venue}</strong></span>
                        <span>📅 {req.requestedDate}</span>
                        <span>⏰ {req.startTime} – {req.endTime}</span>
                        <span>👥 Attendance: {req.expectedAttendance}</span>
                        <span>👤 Submitter: {req.submittedByName}</span>
                      </div>

                      {/* Overlap alert warning if any */}
                      {conflict.hasConflict && (
                        <div className="mt-2 text-xs text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200 flex items-center gap-1.5 font-medium">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>Venue Conflict: Overlaps with "{conflict.conflictingEvent}" ({conflict.time})</span>
                        </div>
                      )}
                    </div>

                    {/* Right: Status & Actions */}
                    <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-3 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                      
                      {/* Status Badge */}
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1 ${
                        req.status === 'Approved' ? 'bg-emerald-100 text-emerald-800' :
                        req.status === 'Rejected' ? 'bg-rose-100 text-rose-800' :
                        req.status === 'Need Clarification' ? 'bg-amber-100 text-amber-800' :
                        req.status === 'Forwarded for Approval' ? 'bg-purple-100 text-purple-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {req.status}
                      </span>

                      {/* Approver Action Buttons (PRD Section 5: Accept, Reject, Need Clarification, Forward for Approval) */}
                      {isPending && (
                        <div className="flex flex-wrap items-center gap-1.5">
                          {/* 1. Accept */}
                          <button
                            onClick={() => {
                              setActionDialog({ type: 'APPROVE', request: req });
                              setActionComment('Approved by Administrative Head.');
                            }}
                            className="px-2.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold flex items-center gap-1 shadow-xs transition-colors"
                            title="Approve request"
                          >
                            <CheckCircle2 className="w-3 h-3" />
                            Accept
                          </button>

                          {/* 2. Reject */}
                          <button
                            onClick={() => {
                              setActionDialog({ type: 'REJECT', request: req });
                              setActionComment('');
                            }}
                            className="px-2.5 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-lg text-xs font-bold flex items-center gap-1 border border-rose-200 transition-colors"
                            title="Reject request with reason"
                          >
                            <XCircle className="w-3 h-3" />
                            Reject
                          </button>

                          {/* 3. Need Clarification */}
                          <button
                            onClick={() => {
                              setActionDialog({ type: 'CLARIFY', request: req });
                              setActionComment('');
                            }}
                            className="px-2.5 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-800 rounded-lg text-xs font-bold flex items-center gap-1 border border-amber-200 transition-colors"
                            title="Ask club head for clarification"
                          >
                            <HelpCircle className="w-3 h-3" />
                            Clarify
                          </button>

                          {/* 4. Forward for Higher Approval (CEO) */}
                          <button
                            onClick={() => {
                              setActionDialog({ type: 'FORWARD', request: req });
                              setActionComment('Forwarding to CEO for final review.');
                            }}
                            className="px-2.5 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-xs font-bold flex items-center gap-1 shadow-xs transition-colors"
                            title="Forward to CEO (Dhruv Galgotia)"
                          >
                            <SendHorizontal className="w-3 h-3" />
                            Forward to CEO
                          </button>
                        </div>
                      )}

                      {/* View Details Link */}
                      <button
                        onClick={() => setSelectedRequestForModal(req)}
                        className="text-xs text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        Full Details & Audit Trail
                      </button>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 2: AUDITORIUM SCHEDULE MANAGEMENT & CONFLICT SOLVER */}
      {/* ======================================================== */}
      {activeTab === 'schedule' && (
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Official Auditorium & Venue Schedule
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Confirmed events are automatically published to the public portal. Controlled administrator editing.
              </p>
            </div>
            <button
              onClick={() => setShowAddEventModal(true)}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add Direct Institutional Event
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider">
                  <tr>
                    <th className="p-3.5">Venue</th>
                    <th className="p-3.5">Date & Slot</th>
                    <th className="p-3.5">Event Title</th>
                    <th className="p-3.5">Organizing Club</th>
                    <th className="p-3.5">Attendance</th>
                    <th className="p-3.5">Logged By</th>
                    <th className="p-3.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {schedule.map(evt => (
                    <tr key={evt.eventId} className="hover:bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">{evt.venue}</td>
                      <td className="p-3.5 whitespace-nowrap">
                        <span className="font-semibold block">{evt.date}</span>
                        <span className="text-[11px] text-slate-400">{evt.startTime} - {evt.endTime}</span>
                      </td>
                      <td className="p-3.5 font-semibold text-slate-800 max-w-xs truncate">{evt.title}</td>
                      <td className="p-3.5">
                        <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-[11px] font-bold">
                          {evt.clubName}
                        </span>
                      </td>
                      <td className="p-3.5">{evt.expectedAttendance || 0}</td>
                      <td className="p-3.5 text-slate-400 text-[11px]">{evt.updatedByName}</td>
                      <td className="p-3.5 text-right">
                        <button
                          onClick={() => {
                            if (confirm(`Remove "${evt.title}" from official schedule?`)) {
                              deleteScheduleEvent(evt.eventId);
                            }
                          }}
                          className="text-rose-600 hover:text-rose-800 font-semibold text-xs"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 3: EQUIPMENT INVENTORY */}
      {/* ======================================================== */}
      {activeTab === 'equipment' && (
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Campus AV & Stage Equipment Inventory</h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Real-time stock reservation system. Approved requests decrement available units.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {equipment.map(eq => (
              <div key={eq.id} className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>{eq.category}</span>
                    <span className="px-2 py-0.2 rounded bg-emerald-50 text-emerald-700 text-[10px] font-bold">
                      {eq.status}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">{eq.name}</h3>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Available</span>
                    <span className="text-xl font-extrabold text-blue-600">
                      {eq.quantityAvailable} <span className="text-xs font-normal text-slate-400">/ {eq.quantityTotal}</span>
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      const newTotal = prompt(`Update Total Quantity for "${eq.name}":`, eq.quantityTotal);
                      if (newTotal !== null) {
                        const newAvail = prompt(`Update Currently Available Quantity:`, eq.quantityAvailable);
                        if (newAvail !== null) {
                          updateEquipmentQuantity(eq.id, newTotal, newAvail);
                        }
                      }
                    }}
                    className="p-1.5 text-slate-500 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors text-xs font-semibold"
                    title="Edit Inventory Quantities"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 4: CLUB ROSTER & ACCOUNT PROVISIONING (PRD Section 3 & 4) */}
      {/* ======================================================== */}
      {activeTab === 'registry' && (
        <div className="space-y-4">
          
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-slate-900">
                  Preloaded Club Registry & Authorized User Mapping
                </h2>
                <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-xs font-extrabold">
                  {academicYear}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1 max-w-2xl">
                All 21 Student Council GCET clubs and 42 named club heads are registered. Map institutional emails to activate accounts. Verify the mapping to prevent unauthorized access.
              </p>
            </div>

            <button
              onClick={() => setShowRolloverModal(true)}
              className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Annual Rollover ({academicYear})
            </button>
          </div>

          {/* 21 Clubs Table */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider">
                  <tr>
                    <th className="p-3.5 w-12 text-center">#</th>
                    <th className="p-3.5">Club Name</th>
                    <th className="p-3.5">Club Head 1 & Institutional Account</th>
                    <th className="p-3.5">Club Head 2 & Institutional Account</th>
                    <th className="p-3.5">Academic Session</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {clubs.map((club, idx) => {
                    const head1User = users.find(u => u.name === club.head1);
                    const head2User = users.find(u => u.name === club.head2);

                    return (
                      <tr key={club.id} className="hover:bg-slate-50/70">
                        <td className="p-3.5 text-center font-bold text-slate-400">{idx + 1}</td>
                        <td className="p-3.5 font-bold text-slate-900 text-sm">
                          {club.name}
                        </td>

                        {/* Head 1 */}
                        <td className="p-3.5">
                          <div className="space-y-1">
                            <div className="font-semibold text-slate-800">{club.head1}</div>
                            {head1User?.institutionalEmail ? (
                              <div className="flex items-center gap-2">
                                <span className="text-[11px] text-emerald-700 font-medium">
                                  {head1User.institutionalEmail}
                                </span>
                                <button
                                  onClick={() => toggleUserActive(head1User.uid)}
                                  className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${
                                    head1User.active ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                                  }`}
                                  title="Toggle active status"
                                >
                                  {head1User.active ? 'Active' : 'Disabled'}
                                </button>
                                <button
                                  onClick={() => {
                                    resetUserPassword(head1User.uid);
                                    alert(`Temporary password reset for ${head1User.name} to Galgotias@2026`);
                                  }}
                                  className="text-slate-400 hover:text-blue-600"
                                  title="Reset Password"
                                >
                                  <Key className="w-3 h-3" />
                                </button>
                              </div>
                            ) : (
                              <button
                                onClick={() => {
                                  setMappingModal({ clubId: club.id, headName: club.head1, currentEmail: '' });
                                  setMappedEmail('');
                                }}
                                className="px-2 py-1 rounded bg-blue-50 text-blue-600 hover:bg-blue-100 font-bold text-[11px] inline-flex items-center gap-1"
                              >
                                <Plus className="w-3 h-3" />
                                Map Institutional Email
                              </button>
                            )}
                          </div>
                        </td>

                        {/* Head 2 */}
                        <td className="p-3.5">
                          <div className="space-y-1">
                            <div className="font-semibold text-slate-800">{club.head2}</div>
                            {head2User?.institutionalEmail ? (
                              <div className="flex items-center gap-2">
                                <span className="text-[11px] text-emerald-700 font-medium">
                                  {head2User.institutionalEmail}
                                </span>
                                <button
                                  onClick={() => toggleUserActive(head2User.uid)}
                                  className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${
                                    head2User.active ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                                  }`}
                                  title="Toggle active status"
                                >
                                  {head2User.active ? 'Active' : 'Disabled'}
                                </button>
                                <button
                                  onClick={() => {
                                    resetUserPassword(head2User.uid);
                                    alert(`Temporary password reset for ${head2User.name} to Galgotias@2026`);
                                  }}
                                  className="text-slate-400 hover:text-blue-600"
                                  title="Reset Password"
                                >
                                  <Key className="w-3 h-3" />
                                </button>
                              </div>
                            ) : (
                              <button
                                onClick={() => {
                                  setMappingModal({ clubId: club.id, headName: club.head2, currentEmail: '' });
                                  setMappedEmail('');
                                }}
                                className="px-2 py-1 rounded bg-blue-50 text-blue-600 hover:bg-blue-100 font-bold text-[11px] inline-flex items-center gap-1"
                              >
                                <Plus className="w-3 h-3" />
                                Map Institutional Email
                              </button>
                            )}
                          </div>
                        </td>

                        <td className="p-3.5 text-slate-400 font-medium">{club.academicYear}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}

      {/* ======================================================== */}
      {/* APPROVER ACTION DIALOG */}
      {/* ======================================================== */}
      {actionDialog && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900">
              Confirm Approver Action: {actionDialog.type}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Request: <strong>{actionDialog.request.title}</strong> ({actionDialog.request.requestId})
            </p>

            <div className="mt-4">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Decision Comments / Institutional Rationale *
              </label>
              <textarea
                rows={3}
                required
                value={actionComment}
                onChange={(e) => setActionComment(e.target.value)}
                placeholder={
                  actionDialog.type === 'REJECT'
                    ? 'State clear institutional reason for rejection...'
                    : actionDialog.type === 'CLARIFY'
                    ? 'What specific details or security plans are required?'
                    : 'Add decision note or approvals recommendation...'
                }
                className="w-full p-3 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
              />
            </div>

            <div className="mt-5 flex justify-end gap-2">
              <button
                onClick={() => setActionDialog(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleExecuteAction}
                className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md"
              >
                Confirm {actionDialog.type}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* INSTITUTIONAL EMAIL MAPPING MODAL */}
      {/* ======================================================== */}
      {mappingModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              Provision Institutional Account
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Authorizing: <strong>{mappingModal.headName}</strong>
            </p>

            <form onSubmit={handleSaveEmailMapping} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Institutional Email Address (@galgotias.edu) *
                </label>
                <input
                  type="email"
                  required
                  placeholder={`${mappingModal.headName.toLowerCase().replace(/\s+/g, '.')}@galgotias.edu`}
                  value={mappedEmail}
                  onChange={(e) => setMappedEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Temporary Initial Password
                </label>
                <input
                  type="text"
                  required
                  value={tempPassword}
                  onChange={(e) => setTempPassword(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                />
                <span className="text-[10px] text-slate-400 block mt-1">
                  User will be prompted to change password on first login.
                </span>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setMappingModal(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md"
                >
                  Save & Activate User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* DIRECT SCHEDULE EVENT MODAL */}
      {/* ======================================================== */}
      {showAddEventModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900">
              Direct Institutional Auditorium Booking
            </h3>

            {scheduleConflictWarn && (
              <div className="mt-3 p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Conflict: Overlaps with "{scheduleConflictWarn.conflictingEvent}" ({scheduleConflictWarn.time})</span>
              </div>
            )}

            <form onSubmit={handleCreateScheduleSlot} className="mt-4 space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Event Title *</label>
                <input
                  type="text"
                  required
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                  placeholder="e.g. University Convocation Rehearsal"
                  className="w-full p-2 border rounded-lg font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Venue *</label>
                  <select
                    value={newEvent.venue}
                    onChange={(e) => setNewEvent({ ...newEvent, venue: e.target.value })}
                    className="w-full p-2 border rounded-lg font-medium"
                  >
                    {VENUES.map(v => (
                      <option key={v.id} value={v.name}>{v.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Date *</label>
                  <input
                    type="date"
                    required
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                    className="w-full p-2 border rounded-lg font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Start Time *</label>
                  <input
                    type="time"
                    required
                    value={newEvent.startTime}
                    onChange={(e) => setNewEvent({ ...newEvent, startTime: e.target.value })}
                    className="w-full p-2 border rounded-lg font-medium"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">End Time *</label>
                  <input
                    type="time"
                    required
                    value={newEvent.endTime}
                    onChange={(e) => setNewEvent({ ...newEvent, endTime: e.target.value })}
                    className="w-full p-2 border rounded-lg font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Public Description</label>
                <textarea
                  rows={2}
                  value={newEvent.publicDescription}
                  onChange={(e) => setNewEvent({ ...newEvent, publicDescription: e.target.value })}
                  placeholder="Publicly visible summary..."
                  className="w-full p-2 border rounded-lg font-medium"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setShowAddEventModal(false)}
                  className="px-4 py-2 font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md"
                >
                  Publish to Schedule
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* ANNUAL ROLLOVER MODAL */}
      {/* ======================================================== */}
      {showRolloverModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <RotateCcw className="w-5 h-5 text-indigo-600" />
              Annual Roster Rollover
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Advance the academic year for student council leadership without redeploying code.
            </p>

            <div className="mt-4">
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                New Academic Session
              </label>
              <input
                type="text"
                value={nextYearString}
                onChange={(e) => setNextYearString(e.target.value)}
                placeholder="2027-28"
                className="w-full p-2 text-xs border rounded-lg font-bold text-slate-800"
              />
            </div>

            <div className="mt-5 flex justify-end gap-2">
              <button
                onClick={() => setShowRolloverModal(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  rolloverAcademicYear(nextYearString);
                  setShowRolloverModal(false);
                }}
                className="px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-md"
              >
                Apply Rollover
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VIEW FULL DETAILS MODAL */}
      <RequestDetailsModal
        request={selectedRequestForModal}
        onClose={() => setSelectedRequestForModal(null)}
        canTakeAction={selectedRequestForModal?.status === 'Submitted' || selectedRequestForModal?.status === 'Under Review'}
        onActionClick={(req) => {
          setSelectedRequestForModal(null);
          setActionDialog({ type: 'APPROVE', request: req });
        }}
      />

    </div>
  );
}
