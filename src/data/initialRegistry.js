// Preloaded Club Registry: 2026-27 Academic Year
// Institution: Galgotias Educational Institutions (GEI)
// Source: Student Council GCET Announcement (Names sanitized for privacy)

export const INITIAL_CLUBS = [
  { id: 'apex', name: 'Apex', head1: 'Club Head 1', head2: 'Club Head 2', active: true, academicYear: '2026-27' },
  { id: 'athlon', name: 'Athlon', head1: 'Club Head 1', head2: 'Club Head 2', active: true, academicYear: '2026-27' },
  { id: 'campus-connectus', name: 'Campus Connectus', head1: 'Club Head 1', head2: 'Club Head 2', active: true, academicYear: '2026-27' },
  { id: 'chromatrix', name: 'Chromatrix', head1: 'Club Head 1', head2: 'Club Head 2', active: true, academicYear: '2026-27' },
  { id: 'creatrix', name: 'Creatrix', head1: 'Club Head 1', head2: 'Club Head 2', active: true, academicYear: '2026-27' },
  { id: 'enthiran', name: 'Enthiran', head1: 'Club Head 1', head2: 'Club Head 2', active: true, academicYear: '2026-27' },
  { id: 'eventus', name: 'Eventus', head1: 'Club Head 1', head2: 'Club Head 2', active: true, academicYear: '2026-27' },
  { id: 'iris', name: 'Iris', head1: 'Club Head 1', head2: 'Club Head 2', active: true, academicYear: '2026-27' },
  { id: 'lingua-franca', name: 'Lingua Franca', head1: 'Club Head 1', head2: 'Club Head 2', active: true, academicYear: '2026-27' },
  { id: 'loop', name: 'Loop', head1: 'Club Head 1', head2: 'Club Head 2', active: true, academicYear: '2026-27' },
  { id: 'mercatus', name: 'Mercatus', head1: 'Club Head 1', head2: 'Club Head 2', active: true, academicYear: '2026-27' },
  { id: 'mudra', name: 'Mudra', head1: 'Club Head 1', head2: 'Club Head 2', active: true, academicYear: '2026-27' },
  { id: 'nrityax', name: 'NrityaX', head1: 'Club Head 1', head2: 'Club Head 2', active: true, academicYear: '2026-27' },
  { id: 'online-promotions', name: 'Online Promotions', head1: 'Club Head 1', head2: 'Club Head 2', active: true, academicYear: '2026-27' },
  { id: 'raag', name: 'Raag', head1: 'Club Head 1', head2: 'Club Head 2', active: true, academicYear: '2026-27' },
  { id: 'rangmanch', name: 'Rangmanch', head1: 'Club Head 1', head2: 'Club Head 2', active: true, academicYear: '2026-27' },
  { id: 'scintillations', name: 'Scintillations', head1: 'Club Head 1', head2: 'Club Head 2', active: true, academicYear: '2026-27' },
  { id: 'scriptus', name: 'Scriptus', head1: 'Club Head 1', head2: 'Club Head 2', active: true, academicYear: '2026-27' },
  { id: 'sorotic-pegasus', name: 'Sorotic Pegasus', head1: 'Club Head 1', head2: 'Club Head 2', active: true, academicYear: '2026-27' },
  { id: 'stagex', name: 'StageX', head1: 'Club Head 1', head2: 'Club Head 2', active: true, academicYear: '2026-27' },
  { id: 'udyam', name: 'Udyam', head1: 'Club Head 1', head2: 'Club Head 2', active: true, academicYear: '2026-27' }
];

// Initial Institutional Accounts & Provisioned Leadership
export const INITIAL_LEADERSHIP = [
  {
    uid: 'admin_awasthi',
    name: 'Ashish Nath Awasthi',
    institutionalEmail: 'ashish.awasthi@galgotias.edu',
    role: 'ADMIN', // Administrative Head
    title: 'Administrative Head',
    active: true,
    mustChangePassword: false,
    createdAt: '2026-08-01T09:00:00.000Z'
  },
  {
    uid: 'ceo_dhruv',
    name: 'Dhruv Galgotia',
    institutionalEmail: 'ceo@galgotias.edu',
    role: 'CEO', // Higher Approver
    title: 'Chief Executive Officer',
    active: true,
    mustChangePassword: false,
    createdAt: '2026-08-01T09:00:00.000Z'
  }
];

// Sample pre-mapped club heads (Anonymized identifiers for GitHub)
export const INITIAL_USERS = [
  ...INITIAL_LEADERSHIP,
  {
    uid: 'club_head_apex_1',
    name: 'Apex Head',
    institutionalEmail: 'head.apex@galgotias.edu',
    role: 'CLUB_HEAD',
    clubId: 'apex',
    clubName: 'Apex',
    active: true,
    mustChangePassword: false,
    createdAt: '2026-08-01T10:00:00.000Z'
  },
  {
    uid: 'club_head_athlon_1',
    name: 'Athlon Head',
    institutionalEmail: 'head.athlon@galgotias.edu',
    role: 'CLUB_HEAD',
    clubId: 'athlon',
    clubName: 'Athlon',
    active: true,
    mustChangePassword: false,
    createdAt: '2026-08-01T10:00:00.000Z'
  },
  {
    uid: 'club_head_chromatrix_1',
    name: 'Chromatrix Head',
    institutionalEmail: 'head.chromatrix@galgotias.edu',
    role: 'CLUB_HEAD',
    clubId: 'chromatrix',
    clubName: 'Chromatrix',
    active: true,
    mustChangePassword: false,
    createdAt: '2026-08-01T10:00:00.000Z'
  },
  {
    uid: 'club_head_eventus_1',
    name: 'Eventus Head',
    institutionalEmail: 'head.eventus@galgotias.edu',
    role: 'CLUB_HEAD',
    clubId: 'eventus',
    clubName: 'Eventus',
    active: true,
    mustChangePassword: false,
    createdAt: '2026-08-01T10:00:00.000Z'
  }
];

// Preloaded Equipment & Campus Venues
export const INITIAL_EQUIPMENT = [
  { id: 'eq-1', name: 'Cordless Handheld Microphones', category: 'Audio', quantityTotal: 12, quantityAvailable: 8, status: 'Operational' },
  { id: 'eq-2', name: 'Collar / Lapel Wireless Mics', category: 'Audio', quantityTotal: 6, quantityAvailable: 4, status: 'Operational' },
  { id: 'eq-3', name: 'Digital Podium System', category: 'Stage', quantityTotal: 3, quantityAvailable: 2, status: 'Operational' },
  { id: 'eq-4', name: 'High-Lumen Laser Projector', category: 'Visual', quantityTotal: 4, quantityAvailable: 3, status: 'Operational' },
  { id: 'eq-5', name: 'LED Stage Lighting Bar', category: 'Lighting', quantityTotal: 16, quantityAvailable: 10, status: 'Operational' },
  { id: 'eq-6', name: 'Heavy Duty Sound Console (32 Ch)', category: 'Audio', quantityTotal: 2, quantityAvailable: 1, status: 'Operational' },
  { id: 'eq-7', name: 'Power Extension Spools (25m)', category: 'Electrical', quantityTotal: 20, quantityAvailable: 15, status: 'Operational' },
  { id: 'eq-8', name: 'Stage Monitors (Active)', category: 'Audio', quantityTotal: 8, quantityAvailable: 6, status: 'Operational' }
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

// Initial confirmed schedule events for the public schedule view
export const INITIAL_SCHEDULE = [
  {
    eventId: 'sch-101',
    requestId: 'req-sample-01',
    title: 'CodeSprint 2026 Hackathon Final Pitch',
    clubName: 'Apex',
    venue: 'Main Auditorium (Block C)',
    date: '2026-10-30',
    startTime: '10:00',
    endTime: '16:00',
    publicDescription: 'Annual inter-college coding competition final project demos and prize distribution.',
    expectedAttendance: 600,
    visibility: 'public',
    updatedByName: 'Ashish Nath Awasthi',
    updatedAt: '2026-10-25T11:30:00.000Z'
  },
  {
    eventId: 'sch-102',
    requestId: 'req-sample-02',
    title: 'Galgotias Annual Intra-College Debate Championship',
    clubName: 'Lingua Franca',
    venue: 'Mini Auditorium (Block E)',
    date: '2026-11-02',
    startTime: '13:00',
    endTime: '17:30',
    publicDescription: 'Parliamentary debate tournament round 2 and semi-finals.',
    expectedAttendance: 250,
    visibility: 'public',
    updatedByName: 'Ashish Nath Awasthi',
    updatedAt: '2026-10-26T09:00:00.000Z'
  },
  {
    eventId: 'sch-103',
    requestId: 'req-sample-03',
    title: 'NrityaX Autumn Cultural Showcase',
    clubName: 'NrityaX',
    venue: 'Open Air Amphitheatre',
    date: '2026-11-05',
    startTime: '17:00',
    endTime: '21:00',
    publicDescription: 'Classical, folk, and contemporary dance performances by student dance troupe.',
    expectedAttendance: 900,
    visibility: 'public',
    updatedByName: 'Ashish Nath Awasthi',
    updatedAt: '2026-10-26T14:15:00.000Z'
  }
];

export const INITIAL_REQUESTS = [
  {
    requestId: 'req-2026-001',
    clubId: 'apex',
    clubName: 'Apex',
    submittedByUid: 'club_head_apex_1',
    submittedByName: 'Apex Head',
    category: 'auditorium',
    title: 'CodeSprint 2026 Hackathon Final Pitch',
    description: 'Annual inter-college coding competition final project demos and prize distribution.',
    requestedDate: '2026-10-30',
    startTime: '10:00',
    endTime: '16:00',
    venue: 'Main Auditorium (Block C)',
    expectedAttendance: 600,
    equipmentRequirements: [
      { name: 'Cordless Handheld Microphones', qty: 4 },
      { name: 'High-Lumen Laser Projector', qty: 1 }
    ],
    additionalNotes: 'Guest judges from tech industry arriving at 11:30 AM.',
    status: 'Approved',
    currentApproverRole: 'COMPLETED',
    requiresHigherApproval: true,
    createdAt: '2026-10-24T08:30:00.000Z',
    updatedAt: '2026-10-25T11:30:00.000Z',
    history: [
      {
        id: 'hist-1',
        action: 'SUBMITTED',
        actorName: 'Apex Head',
        actorRole: 'CLUB_HEAD',
        comment: 'Request submitted for Main Auditorium.',
        timestamp: '2026-10-24T08:30:00.000Z'
      },
      {
        id: 'hist-2',
        action: 'FORWARDED_FOR_APPROVAL',
        actorName: 'Ashish Nath Awasthi',
        actorRole: 'ADMIN',
        comment: 'Auditorium slot checked and available. Forwarded for CEO review.',
        timestamp: '2026-10-24T14:10:00.000Z'
      },
      {
        id: 'hist-3',
        action: 'APPROVED',
        actorName: 'Dhruv Galgotia',
        actorRole: 'CEO',
        comment: 'Approved. Best wishes to Apex team.',
        timestamp: '2026-10-25T11:30:00.000Z'
      }
    ]
  },
  {
    requestId: 'req-2026-002',
    clubId: 'athlon',
    clubName: 'Athlon',
    submittedByUid: 'club_head_athlon_1',
    submittedByName: 'Athlon Head',
    category: 'equipment',
    title: 'Annual Sports Meet AV Setup',
    description: 'PA audio system and handheld microphones for ground commentary.',
    requestedDate: '2026-11-04',
    startTime: '08:00',
    endTime: '18:00',
    venue: 'Main Sports Complex',
    expectedAttendance: 450,
    equipmentRequirements: [
      { name: 'Cordless Handheld Microphones', qty: 2 },
      { name: 'Heavy Duty Sound Console (32 Ch)', qty: 1 }
    ],
    additionalNotes: 'Need setup verified 30 minutes before start.',
    status: 'Under Review',
    currentApproverRole: 'ADMIN',
    requiresHigherApproval: false,
    createdAt: '2026-10-26T10:00:00.000Z',
    updatedAt: '2026-10-26T10:00:00.000Z',
    history: [
      {
        id: 'hist-4',
        action: 'SUBMITTED',
        actorName: 'Athlon Head',
        actorRole: 'CLUB_HEAD',
        comment: 'Equipment request submitted.',
        timestamp: '2026-10-26T10:00:00.000Z'
      }
    ]
  },
  {
    requestId: 'req-2026-003',
    clubId: 'chromatrix',
    clubName: 'Chromatrix',
    submittedByUid: 'club_head_chromatrix_1',
    submittedByName: 'Chromatrix Head',
    category: 'venue_equipment',
    title: 'National Design Conclave 2026',
    description: 'Design workshop with industry designers. Need high luminosity projection.',
    requestedDate: '2026-11-12',
    startTime: '11:00',
    endTime: '16:00',
    venue: 'Main Auditorium (Block C)',
    expectedAttendance: 500,
    equipmentRequirements: [
      { name: 'High-Lumen Laser Projector', qty: 1 },
      { name: 'Digital Podium System', qty: 1 }
    ],
    additionalNotes: 'Requesting stage setup from 10:00 AM.',
    status: 'Forwarded for Approval',
    currentApproverRole: 'CEO',
    requiresHigherApproval: true,
    createdAt: '2026-10-26T16:00:00.000Z',
    updatedAt: '2026-10-27T09:30:00.000Z',
    history: [
      {
        id: 'hist-5',
        action: 'SUBMITTED',
        actorName: 'Chromatrix Head',
        actorRole: 'CLUB_HEAD',
        comment: 'Conclave request submitted.',
        timestamp: '2026-10-26T16:00:00.000Z'
      },
      {
        id: 'hist-6',
        action: 'FORWARDED_FOR_APPROVAL',
        actorName: 'Ashish Nath Awasthi',
        actorRole: 'ADMIN',
        comment: 'Venue availability verified. High attendance event forwarded to CEO.',
        timestamp: '2026-10-27T09:30:00.000Z'
      }
    ]
  },
  {
    requestId: 'req-2026-004',
    clubId: 'eventus',
    clubName: 'Eventus',
    submittedByUid: 'club_head_eventus_1',
    submittedByName: 'Eventus Head',
    category: 'special_event',
    title: 'Inter-College Talent Hunt Auditions',
    description: 'Preliminary auditions for talent hunt.',
    requestedDate: '2026-11-08',
    startTime: '14:00',
    endTime: '19:00',
    venue: 'Mini Auditorium (Block E)',
    expectedAttendance: 300,
    equipmentRequirements: [
      { name: 'Cordless Handheld Microphones', qty: 3 }
    ],
    additionalNotes: 'Will provide guest list shortly.',
    status: 'Need Clarification',
    currentApproverRole: 'CLUB_HEAD',
    requiresHigherApproval: true,
    clarificationPrompt: 'Please specify the security plan and exact external visitor count before proceeding.',
    createdAt: '2026-10-27T11:00:00.000Z',
    updatedAt: '2026-10-27T13:45:00.000Z',
    history: [
      {
        id: 'hist-7',
        action: 'SUBMITTED',
        actorName: 'Eventus Head',
        actorRole: 'CLUB_HEAD',
        comment: 'Audition request submitted.',
        timestamp: '2026-10-27T11:00:00.000Z'
      },
      {
        id: 'hist-8',
        action: 'NEED_CLARIFICATION',
        actorName: 'Ashish Nath Awasthi',
        actorRole: 'ADMIN',
        comment: 'Please specify the security plan and exact external visitor count before proceeding.',
        timestamp: '2026-10-27T13:45:00.000Z'
      }
    ]
  }
];
