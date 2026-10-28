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

// Confirmed schedule events (populated dynamically upon institutional approval)
export const INITIAL_SCHEDULE = [];

// Requests (populated dynamically via student council submissions)
export const INITIAL_REQUESTS = [];
