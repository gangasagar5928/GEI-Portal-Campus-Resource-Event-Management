import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useData } from '../context/DataContext';
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  MapPin, 
  Calendar, 
  Users, 
  Package, 
  Eye, 
  Sparkles,
  ShieldCheck,
  AlertTriangle
} from 'lucide-react';
import RequestDetailsModal from './RequestDetailsModal';

export default function CeoDashboard() {
  const { currentUser } = useAuth();
  const { requests, approveRequest, rejectRequest, checkAuditoriumConflict } = useData();
  
  const [selectedReqForModal, setSelectedReqForModal] = useState(null);
  const [decisionModal, setDecisionModal] = useState(null); // { type: 'APPROVE'|'REJECT', req }
  const [decisionNote, setDecisionNote] = useState('');

  // Requests forwarded for CEO review
  const forwardedRequests = requests.filter(r => r.status === 'Forwarded for Approval');
  const pastDecisions = requests.filter(r => 
    r.history?.some(h => h.actorRole === 'CEO')
  );

  const handleExecuteDecision = () => {
    if (!decisionModal) return;
    const { type, req } = decisionModal;

    if (type === 'APPROVE') {
      approveRequest(req.requestId, currentUser, decisionNote || 'Approved at Executive Level.');
    } else {
      if (!decisionNote.trim()) {
        alert('Executive rationale required for rejection.');
        return;
      }
      rejectRequest(req.requestId, currentUser, decisionNote);
    }

    setDecisionModal(null);
    setDecisionNote('');
  };

  return (
    <div className="space-y-6">
      
      {/* CEO Executive Banner */}
      <div className="bg-gradient-to-r from-purple-950 via-indigo-950 to-slate-900 rounded-2xl p-6 sm:p-7 text-white shadow-xl border border-purple-800/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-purple-400 text-purple-950 uppercase tracking-wider">
              Executive Higher Approver
            </span>
            <span className="text-xs text-purple-300 font-semibold">Dhruv Galgotia, CEO</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black">
            Executive Leadership Review Queue
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
            Higher-tier review for major auditorium events, celebrity programs, and high-value resource allocations forwarded by Administrative Head.
          </p>
        </div>

        <div className="bg-purple-900/50 p-3 rounded-xl border border-purple-700/50 text-center shrink-0">
          <span className="text-xs text-purple-200 block font-medium">Pending Sign-off</span>
          <span className="text-2xl font-black text-white">{forwardedRequests.length}</span>
        </div>
      </div>

      {/* Forwarded Requests List */}
      <div className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <Clock className="w-4 h-4 text-purple-600" />
          Requests Awaiting Higher Approval ({forwardedRequests.length})
        </h2>

        {forwardedRequests.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 text-center border border-slate-200 shadow-sm">
            <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto mb-2" />
            <h3 className="text-sm font-bold text-slate-800">Review Queue Clear</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              No forwarded requests are currently awaiting executive approval.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {forwardedRequests.map(req => {
              const conflict = checkAuditoriumConflict(req.venue, req.requestedDate, req.startTime, req.endTime, req.requestId);

              return (
                <div
                  key={req.requestId}
                  className="bg-white rounded-2xl border border-purple-200/80 p-5 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-600" />

                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mt-1">
                    
                    {/* Left Details */}
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-400">{req.requestId}</span>
                        <span className="text-slate-300">•</span>
                        <span className="px-2 py-0.5 rounded text-xs font-bold bg-blue-50 text-blue-700">
                          {req.clubName}
                        </span>
                        <span className="text-slate-300">•</span>
                        <span className="text-xs text-purple-700 font-semibold bg-purple-50 px-2 py-0.5 rounded">
                          Forwarded by Ashish Nath Awasthi
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900">{req.title}</h3>
                      <p className="text-xs text-slate-600 max-w-2xl">{req.description}</p>

                      <div className="flex flex-wrap gap-3 pt-1 text-xs text-slate-500 font-medium">
                        <span>📍 <strong className="text-slate-800">{req.venue}</strong></span>
                        <span>📅 {req.requestedDate}</span>
                        <span>⏰ {req.startTime} – {req.endTime}</span>
                        <span>👥 Attendance: <strong>{req.expectedAttendance}</strong></span>
                      </div>

                      {/* Equipment items */}
                      {req.equipmentRequirements?.length > 0 && (
                        <div className="flex items-center gap-1.5 pt-1 text-xs text-slate-600">
                          <Package className="w-3.5 h-3.5 text-blue-600" />
                          <span>Equipment: </span>
                          <span className="font-semibold text-slate-800">
                            {req.equipmentRequirements.map(e => `${e.name} (${e.qty})`).join(', ')}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Right Actions */}
                    <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-3 shrink-0 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                      
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setDecisionModal({ type: 'APPROVE', req });
                            setDecisionNote('Approved. Ensure all logistical preparations are completed.');
                          }}
                          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md shadow-emerald-600/20 flex items-center gap-1.5 transition-all"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Executive Approval
                        </button>

                        <button
                          onClick={() => {
                            setDecisionModal({ type: 'REJECT', req });
                            setDecisionNote('');
                          }}
                          className="px-3.5 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-xl text-xs font-bold border border-rose-200 transition-colors flex items-center gap-1"
                        >
                          <XCircle className="w-3.5 h-3.5" />
                          Decline
                        </button>
                      </div>

                      <button
                        onClick={() => setSelectedReqForModal(req)}
                        className="text-xs text-purple-700 hover:text-purple-900 font-semibold flex items-center gap-1"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        Inspect Audit Trail
                      </button>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Decision Modal */}
      {decisionModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-purple-600" />
              Executive Decision: {decisionModal.type}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Event: <strong>{decisionModal.req.title}</strong> ({decisionModal.req.requestId})
            </p>

            <div className="mt-4">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Executive Remarks & Directives *
              </label>
              <textarea
                rows={3}
                required
                value={decisionNote}
                onChange={(e) => setDecisionNote(e.target.value)}
                placeholder="Institutional remarks will be recorded in the immutable audit log..."
                className="w-full p-3 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 font-medium"
              />
            </div>

            <div className="mt-5 flex justify-end gap-2">
              <button
                onClick={() => setDecisionModal(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleExecuteDecision}
                className="px-4 py-2 text-xs font-bold text-white bg-purple-700 hover:bg-purple-800 rounded-lg shadow-md"
              >
                Confirm Executive Decision
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Full Details Modal */}
      <RequestDetailsModal
        request={selectedReqForModal}
        onClose={() => setSelectedReqForModal(null)}
      />

    </div>
  );
}
