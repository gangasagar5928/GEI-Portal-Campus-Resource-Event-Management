import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useData } from '../context/DataContext';
import { 
  FilePlus, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  SendHorizontal, 
  AlertTriangle, 
  Calendar, 
  MapPin, 
  Users, 
  Plus, 
  Trash2, 
  Eye, 
  MessageSquareQuote,
  Sparkles,
  Info
} from 'lucide-react';
import { VENUES, REQUEST_CATEGORIES } from '../data/initialRegistry';
import RequestDetailsModal from './RequestDetailsModal';

export default function ClubHeadDashboard({ initialMode = 'my-requests', onSwitchToSchedule }) {
  const { currentUser } = useAuth();
  const { 
    requests, 
    equipment, 
    submitRequest, 
    submitClarificationResponse, 
    checkAuditoriumConflict 
  } = useData();

  const [activeSubTab, setActiveSubTab] = useState(initialMode); // 'my-requests' or 'new-request'
  const [selectedRequestForView, setSelectedRequestForView] = useState(null);
  const [clarificationModalReq, setClarificationModalReq] = useState(null);
  const [clarificationText, setClarificationText] = useState('');

  // Form State
  const [category, setCategory] = useState(REQUEST_CATEGORIES[0].id);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [requestedDate, setRequestedDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 2);
    return tomorrow.toISOString().split('T')[0];
  });
  const [startTime, setStartTime] = useState('10:00');
  const [endTime, setEndTime] = useState('14:00');
  const [venue, setVenue] = useState(VENUES[0].name);
  const [expectedAttendance, setExpectedAttendance] = useState(150);
  const [selectedEquipment, setSelectedEquipment] = useState([
    { name: 'Cordless Handheld Microphones', qty: 2 }
  ]);
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  // Filter requests belonging to this club
  const clubRequests = requests.filter(r => r.clubId === currentUser?.clubId);

  // Live Conflict Detection for currently chosen venue, date, and times
  const conflictCheck = checkAuditoriumConflict(venue, requestedDate, startTime, endTime);

  // Equipment add/remove
  const handleAddEquipment = (eqName) => {
    if (selectedEquipment.some(e => e.name === eqName)) return;
    setSelectedEquipment(prev => [...prev, { name: eqName, qty: 1 }]);
  };

  const handleUpdateEquipmentQty = (name, qty) => {
    const parsed = Math.max(1, parseInt(qty) || 1);
    setSelectedEquipment(prev => prev.map(e => e.name === name ? { ...e, qty: parsed } : e));
  };

  const handleRemoveEquipment = (name) => {
    setSelectedEquipment(prev => prev.filter(e => e.name !== name));
  };

  // Submit Handler
  const handleSubmitNewRequest = (e) => {
    e.preventDefault();
    setFormError('');
    setFormSuccess('');

    // Validations (PRD Section 6)
    if (!title.trim() || !description.trim()) {
      setFormError('Please fill in both event title and purpose description.');
      return;
    }

    if (startTime >= endTime) {
      setFormError('End time must be strictly after start time.');
      return;
    }

    const todayStr = new Date().toISOString().split('T')[0];
    if (requestedDate < todayStr) {
      setFormError('Past dates are not permitted for new bookings.');
      return;
    }

    if (conflictCheck.hasConflict) {
      setFormError(`Venue scheduling conflict: "${conflictCheck.conflictingEvent}" is already booked on ${requestedDate} (${conflictCheck.time}). Select an alternate time or venue.`);
      return;
    }

    // Submit request
    const newReq = submitRequest({
      category,
      title: title.trim(),
      description: description.trim(),
      requestedDate,
      startTime,
      endTime,
      venue,
      expectedAttendance,
      equipmentRequirements: selectedEquipment,
      additionalNotes: additionalNotes.trim()
    }, currentUser);

    setFormSuccess(`Request ${newReq.requestId} submitted successfully! Your request has been queued for Administrative review.`);
    
    // Reset form
    setTitle('');
    setDescription('');
    setAdditionalNotes('');
    
    // Switch to requests tab after short delay
    setTimeout(() => {
      setActiveSubTab('my-requests');
      setFormSuccess('');
    }, 2000);
  };

  // Clarification Responder
  const handleSendClarification = () => {
    if (!clarificationText.trim() || !clarificationModalReq) return;
    submitClarificationResponse(clarificationModalReq.requestId, currentUser, clarificationText.trim());
    setClarificationModalReq(null);
    setClarificationText('');
  };

  return (
    <div className="space-y-6">
      
      {/* Club Head Welcome Banner */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200/60">
              {currentUser?.clubName || 'Authorized Club'}
            </span>
            <span className="text-xs text-slate-400 font-medium">Head: {currentUser?.name}</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900">
            Club Resource & Booking Portal
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Submit auditorium reservations and track equipment requisitions directly to GEI Administration.
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center gap-2 self-stretch sm:self-auto">
          <button
            onClick={() => setActiveSubTab('my-requests')}
            className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeSubTab === 'my-requests'
                ? 'bg-gradient-to-r from-red-700 to-amber-600 text-white shadow-md shadow-red-700/20'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            My Requests ({clubRequests.length})
          </button>
          <button
            onClick={() => setActiveSubTab('new-request')}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeSubTab === 'new-request'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                : 'bg-emerald-50 text-emerald-700 border border-emerald-200/60 hover:bg-emerald-100'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            + New Request
          </button>
        </div>
      </div>

      {/* VIEW 1: MY REQUESTS TAB */}
      {activeSubTab === 'my-requests' && (
        <div className="space-y-4">
          
          {clubRequests.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-sm">
              <FilePlus className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800">No Requests Submitted Yet</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1">
                You haven't submitted any auditorium or resource requests for {currentUser?.clubName}.
              </p>
              <button
                onClick={() => setActiveSubTab('new-request')}
                className="mt-4 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-md"
              >
                Create Your First Request
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {clubRequests.map(req => {
                const isClarificationNeeded = req.status === 'Need Clarification';
                return (
                  <div
                    key={req.requestId}
                    className={`bg-white rounded-xl border p-5 shadow-sm transition-all hover:shadow-md ${
                      isClarificationNeeded ? 'border-amber-300 ring-2 ring-amber-100' : 'border-slate-200'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-slate-500">{req.requestId}</span>
                          <span className="text-slate-300">•</span>
                          <span className="text-xs font-medium text-slate-500 capitalize">{req.category.replace('_', ' ')}</span>
                          <span className="text-slate-300">•</span>
                          <span className="text-xs text-slate-400">{new Date(req.createdAt).toLocaleDateString()}</span>
                        </div>
                        <h3 className="text-base font-bold text-slate-900">{req.title}</h3>
                      </div>

                      <div className="flex items-center gap-2 self-start sm:self-center">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1 ${
                          req.status === 'Approved' ? 'bg-emerald-100 text-emerald-800' :
                          req.status === 'Rejected' ? 'bg-rose-100 text-rose-800' :
                          req.status === 'Need Clarification' ? 'bg-amber-100 text-amber-800 animate-pulse' :
                          req.status === 'Forwarded for Approval' ? 'bg-amber-100 text-amber-900 border border-amber-300' :
                          'bg-amber-100 text-amber-900'
                        }`}>
                          {req.status}
                        </span>
                      </div>
                    </div>

                    {/* Booking Details Strip */}
                    <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-red-600" />
                        <span className="font-semibold">{req.venue}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-amber-600" />
                        <span>{req.requestedDate}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-amber-600" />
                        <span>{req.startTime} – {req.endTime}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Est: {req.expectedAttendance}</span>
                      </div>
                    </div>

                    {/* Clarification Alert Box if applicable */}
                    {isClarificationNeeded && (
                      <div className="mt-3 p-3 bg-amber-50 rounded-lg border border-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                        <div className="flex items-start gap-2">
                          <HelpCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-amber-900 block">Clarification requested by Administrative Head:</span>
                            <span className="text-amber-800 italic">"{req.clarificationPrompt}"</span>
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            setClarificationModalReq(req);
                            setClarificationText('');
                          }}
                          className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg transition-colors shrink-0 shadow-sm"
                        >
                          Respond Now
                        </button>
                      </div>
                    )}

                    {/* Action Footer */}
                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-400">
                        {req.history?.length} audit events logged
                      </span>
                      <button
                        onClick={() => setSelectedRequestForView(req)}
                        className="flex items-center gap-1 text-red-700 hover:text-red-900 font-semibold"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        View Full Details & History
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>
          )}

        </div>
      )}

      {/* VIEW 2: NEW REQUEST FORM */}
      {activeSubTab === 'new-request' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          
          <div className="max-w-3xl">
            <h2 className="text-xl font-extrabold text-slate-900">
              Submit Resource & Event Booking Request
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Required fields cannot be empty. Conflict checks are evaluated in real-time.
            </p>

            {/* Success Banner */}
            {formSuccess && (
              <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{formSuccess}</span>
              </div>
            )}

            {/* Error Banner */}
            {formError && (
              <div className="mt-4 p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-xl flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            {/* Live Conflict Warning Banner */}
            {conflictCheck.hasConflict && (
              <div className="mt-4 p-3.5 bg-amber-50 border border-amber-300 rounded-xl text-xs flex items-start gap-2.5 animate-pulse">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-amber-900 block">
                    Venue Collision Warning!
                  </span>
                  <p className="text-amber-800 mt-0.5">
                    <strong>{venue}</strong> has an overlapping booking for <em>"{conflictCheck.conflictingEvent}"</em> ({conflictCheck.time}).
                    Auditorium double-booking is prohibited by institutional policy.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmitNewRequest} className="mt-6 space-y-6">
              
              {/* Row 1: Club (read-only) & Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Authorized Club
                  </label>
                  <input
                    type="text"
                    disabled
                    value={`${currentUser?.clubName || 'General Club'} (Logged In)`}
                    className="w-full px-3.5 py-2 text-xs bg-slate-100 border border-slate-200 rounded-lg text-slate-600 font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Request Category *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 font-medium"
                  >
                    {REQUEST_CATEGORIES.map(cat => (
                      <option key={cat.id} value={cat.id}>
                        {cat.label} {cat.requiresHigherApproval ? '(Includes CEO review)' : ''}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 2: Event Title */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Event / Activity Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Annual Hackathon 2026 Opening Keynote"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-slate-800 font-medium"
                />
              </div>

              {/* Row 3: Description & Purpose */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Purpose and Detailed Description *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Provide complete event objective, student participation scope, guest speakers, and schedule flow..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-slate-800 font-medium"
                />
              </div>

              {/* Row 4: Date, Start Time, End Time */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-50/70 p-4 rounded-xl border border-slate-200/60">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Requested Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={requestedDate}
                    onChange={(e) => setRequestedDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Start Time *
                  </label>
                  <input
                    type="time"
                    required
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    End Time *
                  </label>
                  <input
                    type="time"
                    required
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 font-medium"
                  />
                </div>
              </div>

              {/* Row 5: Venue and Expected Attendance */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Venue / Campus Location *
                  </label>
                  <select
                    value={venue}
                    onChange={(e) => setVenue(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 font-medium"
                  >
                    {VENUES.map(v => (
                      <option key={v.id} value={v.name}>
                        {v.name} (Cap: {v.capacity})
                      </option>
                    ))}
                    <option value="None / Equipment Only">None / Equipment Only (Off-Stage)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Expected Attendance (Students & Guests)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="3000"
                    value={expectedAttendance}
                    onChange={(e) => setExpectedAttendance(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 font-medium"
                  />
                </div>
              </div>

              {/* Row 6: Equipment Picker with Availability Watch */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Required AV & Campus Equipment
                  </label>
                  <span className="text-[11px] text-slate-400">Inventory reserved upon approval</span>
                </div>

                {/* Currently selected items */}
                <div className="space-y-2 mb-3">
                  {selectedEquipment.map(item => (
                    <div key={item.name} className="flex items-center justify-between gap-3 bg-white p-2 rounded-lg border border-slate-200 text-xs">
                      <span className="font-semibold text-slate-800">{item.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400 text-[11px]">Qty:</span>
                        <input
                          type="number"
                          min="1"
                          max="20"
                          value={item.qty}
                          onChange={(e) => handleUpdateEquipmentQty(item.name, e.target.value)}
                          className="w-14 px-2 py-1 text-xs border border-slate-200 rounded text-center font-bold"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveEquipment(item.name)}
                          className="p-1 text-slate-400 hover:text-rose-500 rounded"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Equipment quick-add chips */}
                <div className="pt-2 border-t border-slate-200/60">
                  <span className="text-[11px] text-slate-500 block mb-1.5 font-medium">Add from available inventory:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {equipment.map(eq => {
                      const isAdded = selectedEquipment.some(e => e.name === eq.name);
                      return (
                        <button
                          key={eq.id}
                          type="button"
                          onClick={() => handleAddEquipment(eq.name)}
                          disabled={isAdded || eq.quantityAvailable === 0}
                          className={`px-2.5 py-1 rounded-md text-[11px] font-medium flex items-center gap-1 transition-all ${
                            isAdded
                              ? 'bg-red-100 text-red-800 cursor-default'
                              : eq.quantityAvailable === 0
                              ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                              : 'bg-white border border-slate-200 hover:border-amber-400 text-slate-700'
                          }`}
                        >
                          <Plus className="w-3 h-3" />
                          {eq.name} ({eq.quantityAvailable} avail)
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Row 7: Additional Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Additional Notes / Specific Set-up Requirements
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. VIP guest arrival time, special banner setup, extra microphones..."
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-slate-800"
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setActiveSubTab('my-requests')}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={conflictCheck.hasConflict}
                  className={`px-6 py-2.5 rounded-xl text-xs font-bold text-white shadow-lg transition-all flex items-center gap-1.5 ${
                    conflictCheck.hasConflict
                      ? 'bg-slate-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-red-700 to-amber-600 hover:from-red-800 hover:to-amber-700 shadow-red-700/30'
                  }`}
                >
                  <SendHorizontal className="w-3.5 h-3.5" />
                  Submit Request for Institutional Approval
                </button>
              </div>

            </form>
          </div>

        </div>
      )}

      {/* CLARIFICATION RESPONSE MODAL */}
      {clarificationModalReq && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-amber-500" />
              Respond to Administrative Clarification
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Request: <strong>{clarificationModalReq.title}</strong> ({clarificationModalReq.requestId})
            </p>

            <div className="mt-4 p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs">
              <span className="font-bold text-amber-900 block mb-0.5">Admin Request Note:</span>
              <p className="text-amber-800 italic">{clarificationModalReq.clarificationPrompt}</p>
            </div>

            <div className="mt-4">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Your Clarification Response *
              </label>
              <textarea
                rows={4}
                required
                value={clarificationText}
                onChange={(e) => setClarificationText(e.target.value)}
                placeholder="Provide requested details (e.g., exact security headcount, verified external guests list)..."
                className="w-full p-3 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div className="mt-5 flex justify-end gap-2">
              <button
                onClick={() => setClarificationModalReq(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSendClarification}
                disabled={!clarificationText.trim()}
                className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-red-700 to-amber-600 hover:from-red-800 hover:to-amber-700 rounded-lg shadow-md disabled:bg-slate-400"
              >
                Submit Response
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DETAILED REQUEST VIEW MODAL */}
      <RequestDetailsModal
        request={selectedRequestForView}
        onClose={() => setSelectedRequestForView(null)}
      />

    </div>
  );
}
