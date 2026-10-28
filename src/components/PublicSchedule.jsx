import React, { useState, useMemo } from 'react';
import { useData } from '../context/DataContext';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  Users, 
  Search, 
  Filter, 
  ShieldCheck, 
  CalendarDays,
  Info
} from 'lucide-react';
import { VENUES } from '../data/initialRegistry';

export default function PublicSchedule({ onOpenRequest }) {
  const { schedule } = useData();
  const [selectedVenue, setSelectedVenue] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Filter confirmed public events
  const filteredEvents = useMemo(() => {
    return schedule.filter(event => {
      // Must be public visibility
      if (event.visibility !== 'public') return false;

      // Venue filter
      if (selectedVenue !== 'ALL' && event.venue !== selectedVenue) return false;

      // Date filter
      if (dateFilter && event.date !== dateFilter) return false;

      // Search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = event.title?.toLowerCase().includes(query);
        const matchesClub = event.clubName?.toLowerCase().includes(query);
        const matchesDesc = event.publicDescription?.toLowerCase().includes(query);
        if (!matchesTitle && !matchesClub && !matchesDesc) return false;
      }

      return true;
    }).sort((a, b) => {
      // Sort chronologically by date and start time
      const dateA = new Date(`${a.date}T${a.startTime}`);
      const dateB = new Date(`${b.date}T${b.startTime}`);
      return dateA - dateB;
    });
  }, [schedule, selectedVenue, searchQuery, dateFilter]);

  return (
    <div className="space-y-6">
      
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-red-950 via-stone-900 to-slate-950 rounded-2xl p-6 sm:p-8 text-white shadow-xl border border-red-900/60">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            Official Confirmed Bookings
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Auditorium & Campus Venues Schedule
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Real-time verified availability across Galgotias Educational Institutions. Pending requests are shielded until formal institutional approval.
          </p>
        </div>

        {/* Quick Venue Badges */}
        <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-red-900/60">
          <button
            onClick={() => setSelectedVenue('ALL')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedVenue === 'ALL'
                ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
                : 'bg-red-950/70 text-amber-200 hover:bg-red-900/60 border border-red-800/60'
            }`}
          >
            All Venues ({schedule.length})
          </button>
          {VENUES.map(venue => {
            const count = schedule.filter(s => s.venue === venue.name).length;
            return (
              <button
                key={venue.id}
                onClick={() => setSelectedVenue(venue.name)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedVenue === venue.name
                    ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
                    : 'bg-red-950/70 text-amber-200 hover:bg-red-900/60 border border-red-800/60'
                }`}
              >
                {venue.name} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/80 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <label htmlFor="schedule-search-input" className="sr-only">Search scheduled events</label>
          <input
            id="schedule-search-input"
            type="text"
            placeholder="Search by event title, club name, or keyword..."
            aria-label="Search scheduled events by title, club or keyword"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white text-slate-800"
          />
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <label htmlFor="schedule-date-filter" className="sr-only">Filter events by date</label>
            <input
              id="schedule-date-filter"
              type="date"
              aria-label="Filter events by date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="py-2 px-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-800 font-medium"
            />
          </div>

          {dateFilter && (
            <button
              onClick={() => setDateFilter('')}
              className="px-2.5 py-2 text-xs text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg font-medium transition-colors"
            >
              Clear Date
            </button>
          )}
        </div>
      </div>

      {/* Schedule Feed */}
      {filteredEvents.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-sm">
          <CalendarDays className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h2 className="text-base font-bold text-slate-800">No Confirmed Events Found</h2>
          <p className="text-sm text-slate-600 max-w-sm mx-auto mt-1">
            {searchQuery || dateFilter || selectedVenue !== 'ALL'
              ? 'No scheduled events match your current filter criteria.'
              : 'The auditorium is currently free with no active confirmed bookings for this period.'}
          </p>
          {(searchQuery || dateFilter || selectedVenue !== 'ALL') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setDateFilter('');
                setSelectedVenue('ALL');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-red-700 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
            >
              Reset Filters
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredEvents.map(event => (
            <div
              key={event.eventId}
              onClick={() => setSelectedEvent(event)}
              className="group bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-red-400 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Header tags */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-red-50 text-red-800 border border-red-200/60">
                    {event.clubName}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                    <ShieldCheck className="w-3 h-3" />
                    Confirmed
                  </span>
                </div>

                {/* Event Title */}
                <h2 className="text-base font-bold text-slate-900 group-hover:text-red-700 transition-colors line-clamp-2">
                  {event.title}
                </h2>

                {/* Description */}
                <p className="mt-2 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {event.publicDescription}
                </p>
              </div>

              {/* Time and Venue Footer */}
              <div className="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-2 text-slate-700">
                  <MapPin className="w-3.5 h-3.5 text-red-600 shrink-0" />
                  <span className="font-semibold truncate">{event.venue}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span className="font-semibold">{event.startTime} - {event.endTime}</span>
                  </div>
                </div>

                {event.expectedAttendance > 0 && (
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <Users className="w-3.5 h-3.5" />
                    <span>Est. Attendance: {event.expectedAttendance}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Public Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-150">
            
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-red-100 text-red-800">
                  {selectedEvent.clubName}
                </span>
                <h2 className="mt-2 text-xl font-extrabold text-slate-900">
                  {selectedEvent.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="mt-5 space-y-3.5 bg-slate-50 p-4 rounded-xl text-sm border border-slate-200/60">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-red-600 shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block">Venue</span>
                  <span className="font-semibold text-slate-800">{selectedEvent.venue}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <CalendarIcon className="w-4 h-4 text-amber-600 shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block">Date</span>
                  <span className="font-semibold text-slate-800">{selectedEvent.date}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block">Time Slot</span>
                  <span className="font-semibold text-slate-800">{selectedEvent.startTime} – {selectedEvent.endTime}</span>
                </div>
              </div>

              {selectedEvent.expectedAttendance > 0 && (
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400 block">Expected Attendance</span>
                    <span className="font-semibold text-slate-800">{selectedEvent.expectedAttendance} Participants</span>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                Event Overview
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {selectedEvent.publicDescription}
              </p>
            </div>

            {/* Privacy notice compliant with PRD section 7 */}
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-400">
              <Info className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>Internal notes, requisition equipment, and approver contact details are shielded.</span>
            </div>

            <div className="mt-5 flex justify-end">
              <button
                onClick={() => setSelectedEvent(null)}
                className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
