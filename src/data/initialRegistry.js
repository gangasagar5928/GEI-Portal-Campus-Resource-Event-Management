// Preloaded Club Registry: 2026-27 Academic Year
// Institution: Galgotias Educational Institutions (GEI)
// 21 Student Council GCET Clubs ready for administrator account provisioning

export const INITIAL_CLUBS = [
  { id: 'apex', name: 'Apex', head1: '', head2: '', active: true, academicYear: '2026-27' },
  { id: 'athlon', name: 'Athlon', head1: '', head2: '', active: true, academicYear: '2026-27' },
  { id: 'campus-connectus', name: 'Campus Connectus', head1: '', head2: '', active: true, academicYear: '2026-27' },
  { id: 'chromatrix', name: 'Chromatrix', head1: '', head2: '', active: true, academicYear: '2026-27' },
  { id: 'creatrix', name: 'Creatrix', head1: '', head2: '', active: true, academicYear: '2026-27' },
  { id: 'enthiran', name: 'Enthiran', head1: '', head2: '', active: true, academicYear: '2026-27' },
  { id: 'eventus', name: 'Eventus', head1: '', head2: '', active: true, academicYear: '2026-27' },
  { id: 'iris', name: 'Iris', head1: '', head2: '', active: true, academicYear: '2026-27' },
  { id: 'lingua-franca', name: 'Lingua Franca', head1: '', head2: '', active: true, academicYear: '2026-27' },
  { id: 'loop', name: 'Loop', head1: '', head2: '', active: true, academicYear: '2026-27' },
  { id: 'mercatus', name: 'Mercatus', head1: '', head2: '', active: true, academicYear: '2026-27' },
  { id: 'mudra', name: 'Mudra', head1: '', head2: '', active: true, academicYear: '2026-27' },
  { id: 'nrityax', name: 'NrityaX', head1: '', head2: '', active: true, academicYear: '2026-27' },
  { id: 'online-promotions', name: 'Online Promotions', head1: '', head2: '', active: true, academicYear: '2026-27' },
  { id: 'raag', name: 'Raag', head1: '', head2: '', active: true, academicYear: '2026-27' },
  { id: 'rangmanch', name: 'Rangmanch', head1: '', head2: '', active: true, academicYear: '2026-27' },
  { id: 'scintillations', name: 'Scintillations', head1: '', head2: '', active: true, academicYear: '2026-27' },
  { id: 'scriptus', name: 'Scriptus', head1: '', head2: '', active: true, academicYear: '2026-27' },
  { id: 'sorotic-pegasus', name: 'Sorotic Pegasus', head1: '', head2: '', active: true, academicYear: '2026-27' },
  { id: 'stagex', name: 'StageX', head1: '', head2: '', active: true, academicYear: '2026-27' },
  { id: 'udyam', name: 'Udyam', head1: '', head2: '', active: true, academicYear: '2026-27' }
];

// Dummy Accounts for System Demonstration and Evaluation
export const INITIAL_USERS = [
  {
    uid: 'demo_admin_01',
    name: 'Demo Administrator',
    institutionalEmail: 'admin@gei.edu',
    phone: '9876543210',
    role: 'ADMIN',
    title: 'Administrative Head',
    password: 'Galgotias@2026',
    temporaryPassword: 'Galgotias@2026',
    mustChangePassword: false,
    active: true,
    createdAt: '2026-10-28T00:00:00.000Z'
  },
  {
    uid: 'demo_club_01',
    name: 'Demo Club Head',
    institutionalEmail: 'club@gei.edu',
    phone: '9876543211',
    role: 'CLUB_HEAD',
    clubId: 'apex',
    clubName: 'Apex',
    password: 'Galgotias@2026',
    temporaryPassword: 'Galgotias@2026',
    mustChangePassword: false,
    active: true,
    createdAt: '2026-10-28T00:00:00.000Z'
  },
  {
    uid: 'demo_ceo_01',
    name: 'Demo Executive Approver',
    institutionalEmail: 'ceo@gei.edu',
    phone: '9876543212',
    role: 'CEO',
    title: 'Executive Approver',
    password: 'Galgotias@2026',
    temporaryPassword: 'Galgotias@2026',
    mustChangePassword: false,
    active: true,
    createdAt: '2026-10-28T00:00:00.000Z'
  }
];

// Preloaded Equipment & Campus Venues
export const INITIAL_EQUIPMENT = [
  { id: 'eq-1', name: 'Cordless Handheld Microphones', category: 'Audio', quantityTotal: 12, quantityAvailable: 12, status: 'Operational' },
  { id: 'eq-2', name: 'Collar / Lapel Wireless Mics', category: 'Audio', quantityTotal: 6, quantityAvailable: 6, status: 'Operational' },
  { id: 'eq-3', name: 'Digital Podium System', category: 'Stage', quantityTotal: 3, quantityAvailable: 3, status: 'Operational' },
  { id: 'eq-4', name: 'High-Lumen Laser Projector', category: 'Visual', quantityTotal: 4, quantityAvailable: 4, status: 'Operational' },
  { id: 'eq-5', name: 'LED Stage Lighting Bar', category: 'Lighting', quantityTotal: 16, quantityAvailable: 16, status: 'Operational' },
  { id: 'eq-6', name: 'Heavy Duty Sound Console (32 Ch)', category: 'Audio', quantityTotal: 2, quantityAvailable: 2, status: 'Operational' },
  { id: 'eq-7', name: 'Power Extension Spools (25m)', category: 'Electrical', quantityTotal: 20, quantityAvailable: 20, status: 'Operational' },
  { id: 'eq-8', name: 'Stage Monitors (Active)', category: 'Audio', quantityTotal: 8, quantityAvailable: 8, status: 'Operational' }
];

export const VENUES = [
  { id: 'auditorium-main', name: 'Main Auditorium (Block C)', capacity: 1200, type: 'Auditorium', requiresHigherApproval: true },
  { id: 'auditorium-mini', name: 'Mini Auditorium (Block E)', capacity: 400, type: 'Auditorium', requiresHigherApproval: false },
  { id: 'seminar-hall-1', name: 'Central Seminar Hall A', capacity: 250, type: 'Seminar Hall', requiresHigherApproval: false },
  { id: 'amphitheatre', name: 'Open Air Amphitheatre', capacity: 1500, type: 'Open Air', requiresHigherApproval: true }
];

export const REQUEST_CATEGORIES = [
  { id: 'auditorium', label: 'Auditorium Booking', requiresHigherApproval: true, description: 'Requires Administrative review and optional CEO sign-off' },
  { id: 'equipment', label: 'Equipment & AV Requisition', requiresHigherApproval: false, description: 'Handled independently by Administrative Head' },
  { id: 'venue_equipment', label: 'Venue & Equipment Bundle', requiresHigherApproval: true, description: 'Auditorium plus technical equipment support' },
  { id: 'special_event', label: 'High-Value / Exceptional Event', requiresHigherApproval: true, description: 'Celebrity guest, multi-day fest, requires CEO approval' }
];

// Confirmed schedule events for campus auditoriums (2026-27 Academic Year)
export const INITIAL_SCHEDULE = [
  {
    eventId: 'sch-2026-001',
    requestId: 'req-2026-001',
    clubId: 'apex',
    clubName: 'Apex',
    title: 'Galgotias Annual Technical Symposium (TechFest 2026)',
    publicDescription: 'Annual student technical paper presentation, project exhibition, and competitive coding finals.',
    venue: 'Main Auditorium (Block C)',
    date: '2026-11-05',
    startTime: '09:30',
    endTime: '17:00',
    expectedAttendance: 850,
    category: 'special_event',
    status: 'Confirmed'
  },
  {
    eventId: 'sch-2026-002',
    requestId: 'req-2026-002',
    clubId: 'nrityax',
    clubName: 'NrityaX',
    title: 'Inter-College Cultural Dance Showcase',
    publicDescription: 'Semi-classical, folk, and contemporary choreography performances celebrating student cultural talent.',
    venue: 'Mini Auditorium (Block E)',
    date: '2026-11-08',
    startTime: '14:00',
    endTime: '18:30',
    expectedAttendance: 350,
    category: 'auditorium',
    status: 'Confirmed'
  },
  {
    eventId: 'sch-2026-003',
    requestId: 'req-2026-003',
    clubId: 'athlon',
    clubName: 'Athlon',
    title: 'Annual Sports Meet Valedictory & Commendation',
    publicDescription: 'Ceremonial presentation of annual championship trophies, track awards, and athlete commendations.',
    venue: 'Open Air Amphitheatre',
    date: '2026-11-12',
    startTime: '16:00',
    endTime: '20:00',
    expectedAttendance: 1200,
    category: 'venue_equipment',
    status: 'Confirmed'
  },
  {
    eventId: 'sch-2026-004',
    requestId: 'req-2026-004',
    clubId: 'chromatrix',
    clubName: 'Chromatrix',
    title: 'UI/UX Design Systems Workshop & Sprint',
    publicDescription: 'Intensive student workshop on design thinking, accessibility guidelines, wireframing, and component libraries.',
    venue: 'Central Seminar Hall A',
    date: '2026-11-15',
    startTime: '10:00',
    endTime: '15:00',
    expectedAttendance: 180,
    category: 'venue_equipment',
    status: 'Confirmed'
  }
];

// Requisition Requests across approval workflow states
export const INITIAL_REQUESTS = [
  {
    requestId: 'req-2026-101',
    clubId: 'apex',
    clubName: 'Apex',
    submittedByUid: 'demo_club_01',
    submittedByName: 'Demo Club Head',
    category: 'auditorium',
    title: 'Annual Hackathon Opening Ceremony & Keynote',
    description: 'Inaugural ceremony for 36-hour inter-college hackathon with industry keynote speakers.',
    requestedDate: '2026-11-20',
    startTime: '09:00',
    endTime: '13:00',
    venue: 'Main Auditorium (Block C)',
    expectedAttendance: 450,
    equipmentRequirements: [
      { name: 'Cordless Handheld Microphones', qty: 2 },
      { name: 'Digital Podium System', qty: 1 }
    ],
    additionalNotes: 'Need AV sound check by 08:30 AM.',
    status: 'Submitted',
    currentApproverRole: 'ADMIN',
    requiresHigherApproval: true,
    createdAt: '2026-10-28T09:00:00.000Z',
    updatedAt: '2026-10-28T09:00:00.000Z',
    history: [
      {
        id: 'h-1',
        action: 'SUBMITTED',
        actorName: 'Demo Club Head',
        actorRole: 'CLUB_HEAD',
        comment: 'Requisition submitted for annual hackathon inaugural ceremony.',
        timestamp: '2026-10-28T09:00:00.000Z'
      }
    ]
  },
  {
    requestId: 'req-2026-102',
    clubId: 'enthiran',
    clubName: 'Enthiran',
    submittedByUid: 'club_lead_enthiran',
    submittedByName: 'Enthiran Lead',
    category: 'special_event',
    title: 'National Robotics Expo & BattleBots 2026',
    description: 'National robotics arena competition with high attendance and live technical demonstrations.',
    requestedDate: '2026-11-25',
    startTime: '10:00',
    endTime: '18:00',
    venue: 'Main Auditorium (Block C)',
    expectedAttendance: 750,
    equipmentRequirements: [
      { name: 'High-Lumen Laser Projector', qty: 1 },
      { name: 'Heavy Duty Sound Console (32 Ch)', qty: 1 },
      { name: 'Power Extension Spools (25m)', qty: 4 }
    ],
    additionalNotes: 'Safety barricades around arena arena pre-arranged.',
    status: 'Forwarded for Approval',
    currentApproverRole: 'CEO',
    requiresHigherApproval: true,
    createdAt: '2026-10-27T11:00:00.000Z',
    updatedAt: '2026-10-28T10:15:00.000Z',
    history: [
      {
        id: 'h-2',
        action: 'SUBMITTED',
        actorName: 'Enthiran Lead',
        actorRole: 'CLUB_HEAD',
        comment: 'National robotics expo request submitted.',
        timestamp: '2026-10-27T11:00:00.000Z'
      },
      {
        id: 'h-3',
        action: 'FORWARDED_FOR_APPROVAL',
        actorName: 'Demo Administrator',
        actorRole: 'ADMIN',
        comment: 'Auditorium slot checked and available. High-attendance event forwarded for final executive sanction.',
        timestamp: '2026-10-28T10:15:00.000Z'
      }
    ]
  },
  {
    requestId: 'req-2026-103',
    clubId: 'rangmanch',
    clubName: 'Rangmanch',
    submittedByUid: 'club_lead_rangmanch',
    submittedByName: 'Rangmanch Lead',
    category: 'venue_equipment',
    title: 'Theatrical Drama Stage Rehearsal & Lighting Check',
    description: 'Technical lighting rehearsal and stage orientation prior to youth festival competition.',
    requestedDate: '2026-11-18',
    startTime: '15:00',
    endTime: '20:00',
    venue: 'Mini Auditorium (Block E)',
    expectedAttendance: 150,
    equipmentRequirements: [
      { name: 'LED Stage Lighting Bar', qty: 4 },
      { name: 'Stage Monitors (Active)', qty: 2 }
    ],
    additionalNotes: 'Requires low ambient lighting for technical cue testing.',
    status: 'Need Clarification',
    currentApproverRole: 'CLUB_HEAD',
    requiresHigherApproval: false,
    clarificationPrompt: 'Please provide stage safety clearance and faculty coordinator sign-off for evening lighting.',
    createdAt: '2026-10-28T12:00:00.000Z',
    updatedAt: '2026-10-28T14:30:00.000Z',
    history: [
      {
        id: 'h-4',
        action: 'SUBMITTED',
        actorName: 'Rangmanch Lead',
        actorRole: 'CLUB_HEAD',
        comment: 'Dress rehearsal request submitted.',
        timestamp: '2026-10-28T12:00:00.000Z'
      },
      {
        id: 'h-5',
        action: 'NEED_CLARIFICATION',
        actorName: 'Demo Administrator',
        actorRole: 'ADMIN',
        comment: 'Please provide stage safety clearance and faculty coordinator sign-off for evening lighting.',
        timestamp: '2026-10-28T14:30:00.000Z'
      }
    ]
  },
  {
    requestId: 'req-2026-001',
    clubId: 'apex',
    clubName: 'Apex',
    submittedByUid: 'demo_club_01',
    submittedByName: 'Demo Club Head',
    category: 'special_event',
    title: 'Galgotias Annual Technical Symposium (TechFest 2026)',
    description: 'Annual technical symposium paper presentations, hardware projects, and code sprints.',
    requestedDate: '2026-11-05',
    startTime: '09:30',
    endTime: '17:00',
    venue: 'Main Auditorium (Block C)',
    expectedAttendance: 850,
    equipmentRequirements: [
      { name: 'High-Lumen Laser Projector', qty: 2 },
      { name: 'Cordless Handheld Microphones', qty: 4 },
      { name: 'Digital Podium System', qty: 1 }
    ],
    additionalNotes: 'VIP guests arriving at 10:00 AM.',
    status: 'Approved',
    currentApproverRole: 'COMPLETED',
    requiresHigherApproval: true,
    createdAt: '2026-10-25T10:00:00.000Z',
    updatedAt: '2026-10-26T11:00:00.000Z',
    history: [
      {
        id: 'h-6',
        action: 'SUBMITTED',
        actorName: 'Demo Club Head',
        actorRole: 'CLUB_HEAD',
        comment: 'Requisition submitted.',
        timestamp: '2026-10-25T10:00:00.000Z'
      },
      {
        id: 'h-7',
        action: 'FORWARDED_FOR_APPROVAL',
        actorName: 'Demo Administrator',
        actorRole: 'ADMIN',
        comment: 'Slot checked and technical requirements verified.',
        timestamp: '2026-10-25T14:00:00.000Z'
      },
      {
        id: 'h-8',
        action: 'APPROVED',
        actorName: 'Demo Executive Approver',
        actorRole: 'CEO',
        comment: 'Approved. Ensure audio coverage and crowd control.',
        timestamp: '2026-10-26T11:00:00.000Z'
      }
    ]
  }
];
