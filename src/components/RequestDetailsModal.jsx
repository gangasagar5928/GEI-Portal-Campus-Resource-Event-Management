import React from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Package, 
  FileText, 
  History, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  SendHorizontal,
  ShieldAlert
} from 'lucide-react';

export default function RequestDetailsModal({ request, onClose, onActionClick, canTakeAction = false }) {
  if (!request) return null;

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Approved':
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5" /> Approved</span>;
      case 'Rejected':
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 flex items-center gap-1.5"><XCircle className="w-3.5 h-3.5" /> Rejected</span>;
      case 'Need Clarification':
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 flex items-center gap-1.5"><HelpCircle className="w-3.5 h-3.5" /> Need Clarification</span>;
      case 'Forwarded for Approval':
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 flex items-center gap-1.5"><SendHorizontal className="w-3.5 h-3.5" /> Forwarded to CEO</span>;
      default:
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Under Review</span>;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full my-auto max-h-[90vh] overflow-y-auto p-5 sm:p-7 shadow-2xl border border-slate-100 relative animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {request.requestId}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-red-50 text-red-800">
                {request.clubName}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              {request.title}
            </h2>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {getStatusBadge(request.status)}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors font-bold"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="mt-5 space-y-5">
          
          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200/60 text-xs">
            <div>
              <span className="text-slate-400 block font-medium">Category</span>
              <span className="font-bold text-slate-800 capitalize">{request.category?.replace('_', ' ')}</span>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">Requested Date</span>
              <span className="font-bold text-slate-800">{request.requestedDate}</span>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">Time Window</span>
              <span className="font-bold text-slate-800">{request.startTime} - {request.endTime}</span>
            </div>
            <div className="col-span-2">
              <span className="text-slate-400 block font-medium">Venue</span>
              <span className="font-bold text-slate-800">{request.venue || 'None Specified'}</span>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">Expected Attendance</span>
              <span className="font-bold text-slate-800">{request.expectedAttendance || 0} People</span>
            </div>
          </div>

          {/* Submitter Info */}
          <div className="flex items-center justify-between text-xs text-slate-500 px-1">
            <div>
              <span>Submitted by: </span>
              <strong className="text-slate-800 font-semibold">{request.submittedByName}</strong>
            </div>
            <div>
              <span>Submission Time: </span>
              <strong className="text-slate-800 font-semibold">{new Date(request.createdAt).toLocaleString()}</strong>
            </div>
          </div>

          {/* Purpose & Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Event Purpose & Description
            </h4>
            <p className="text-sm text-slate-700 bg-slate-50/70 p-3 rounded-lg border border-slate-200/40 leading-relaxed whitespace-pre-wrap">
              {request.description}
            </p>
          </div>

          {/* Clarification Box if active */}
          {request.status === 'Need Clarification' && request.clarificationPrompt && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs">
              <div className="font-bold text-amber-900 flex items-center gap-1.5 mb-1">
                <HelpCircle className="w-4 h-4 text-amber-600" />
                Administrative Clarification Requested:
              </div>
              <p className="text-amber-800 font-medium">{request.clarificationPrompt}</p>
            </div>
          )}

          {request.clarificationResponse && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs">
              <div className="font-bold text-amber-900 mb-1">
                Club Head Response:
              </div>
              <p className="text-amber-800">{request.clarificationResponse}</p>
            </div>
          )}

          {/* Equipment Requested */}
          {request.equipmentRequirements && request.equipmentRequirements.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1.5">
                <Package className="w-3.5 h-3.5 text-amber-600" />
                Requested Equipment & AV Resources
              </h4>
              <div className="flex flex-wrap gap-2">
                {request.equipmentRequirements.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 text-slate-800 font-semibold text-xs border border-slate-200"
                  >
                    <span>{item.name}</span>
                    <span className="px-1.5 py-0.2 rounded bg-white text-red-700 text-[11px] font-bold border border-slate-200">
                      ×{item.qty}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Additional Notes */}
          {request.additionalNotes && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                Additional Notes
              </h4>
              <p className="text-xs text-slate-600 italic">
                {request.additionalNotes}
              </p>
            </div>
          )}

          {/* Immutable Approval History Timeline (PRD Section 12) */}
          <div className="pt-3 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
              <History className="w-3.5 h-3.5 text-slate-600" />
              Immutable Approval & Decision Audit History
            </h4>

            <div className="space-y-3 relative before:absolute before:inset-0 before:left-2 before:w-0.5 before:bg-slate-200 pl-6">
              {request.history?.map((step, idx) => (
                <div key={step.id || idx} className="relative text-xs">
                  <div className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-red-600 ring-4 ring-white" />
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900">
                      {step.action?.replace(/_/g, ' ')}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {new Date(step.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} • {new Date(step.timestamp).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    By: <strong className="text-slate-700">{step.actorName}</strong> ({step.actorRole})
                  </div>
                  {step.comment && (
                    <div className="mt-1 p-2 rounded bg-slate-50 border border-slate-200/60 text-slate-700 text-xs">
                      "{step.comment}"
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end gap-2">
          {canTakeAction && onActionClick && (
            <button
              onClick={() => onActionClick(request)}
              className="px-4 py-2 bg-gradient-to-r from-red-700 to-amber-600 hover:from-red-800 hover:to-amber-700 text-white rounded-lg text-xs font-bold shadow-md shadow-red-700/25 transition-colors"
            >
              Take Approver Action
            </button>
          )}
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
