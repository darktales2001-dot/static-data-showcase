// ICVGIP 2025 Calendar Events
// Hard-coded events for the calendar view
// To update: Modify the EVENTS array with new calendar events

export interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  allDay: boolean;
  category: EventCategory;
  description: string;
  location: string;
  color: string;
  speaker?: string;
}

export type EventCategory = 
  | 'Plenary'
  | 'Oral Session'
  | 'Poster Session'
  | 'Industry Session'
  | 'Workshop'
  | 'Tutorial'
  | 'Social Event'
  | 'Break';

export const EVENT_COLORS: Record<EventCategory, string> = {
  'Plenary': '#14b8a6',
  'Oral Session': '#0ea5e9',
  'Poster Session': '#8b5cf6',
  'Industry Session': '#f97316',
  'Workshop': '#ec4899',
  'Tutorial': '#ec4899',
  'Social Event': '#eab308',
  'Break': '#22c55e',
};

export const EVENTS: CalendarEvent[] = [
  // Day 1 - December 17, 2025
  {
    id: 'evt-1',
    title: 'Tutorials & Workshops (Morning)',
    start: '2025-12-17T09:00:00',
    end: '2025-12-17T13:30:00',
    allDay: false,
    category: 'Workshop',
    description: 'Morning session of tutorials and workshops including a coffee break. Topics include deep learning, 3D reconstruction, and image processing techniques.',
    location: 'Workshop Hall',
    color: '#ec4899',
  },
  {
    id: 'evt-2',
    title: 'Lunch Break',
    start: '2025-12-17T13:30:00',
    end: '2025-12-17T14:30:00',
    allDay: false,
    category: 'Break',
    description: 'Networking lunch on Day 1.',
    location: 'Dining Hall',
    color: '#22c55e',
  },
  {
    id: 'evt-3',
    title: 'Tutorials & Workshops (Afternoon)',
    start: '2025-12-17T14:30:00',
    end: '2025-12-17T17:30:00',
    allDay: false,
    category: 'Tutorial',
    description: 'Afternoon tutorials on neural rendering, video analysis, and practical vision systems.',
    location: 'Workshop Hall',
    color: '#ec4899',
  },
  {
    id: 'evt-4',
    title: 'Inauguration Ceremony',
    start: '2025-12-17T17:30:00',
    end: '2025-12-17T18:30:00',
    allDay: false,
    category: 'Social Event',
    description: 'Official opening ceremony of ICVGIP 2025 with distinguished guests and organizing committee.',
    location: 'Auditorium Complex',
    color: '#eab308',
  },
  {
    id: 'evt-5',
    title: 'Welcome Dinner',
    start: '2025-12-17T19:30:00',
    end: '2025-12-17T22:00:00',
    allDay: false,
    category: 'Social Event',
    description: 'Welcome dinner reception for all attendees.',
    location: 'Banquet Hall',
    color: '#eab308',
  },

  // Day 2 - December 18, 2025
  {
    id: 'evt-6',
    title: 'Oral Session 1',
    start: '2025-12-18T09:00:00',
    end: '2025-12-18T10:30:00',
    allDay: false,
    category: 'Oral Session',
    description: 'Papers on object detection, semantic segmentation, and visual recognition.',
    location: 'Auditorium Complex',
    color: '#0ea5e9',
  },
  {
    id: 'evt-7',
    title: 'Plenary: Prof. Nicu Sebe',
    start: '2025-12-18T10:30:00',
    end: '2025-12-18T11:30:00',
    allDay: false,
    category: 'Plenary',
    description: 'Keynote on affective computing and human-centered AI.',
    location: 'Auditorium Complex',
    color: '#14b8a6',
    speaker: 'Prof. Nicu Sebe',
  },
  {
    id: 'evt-8',
    title: 'Coffee Break',
    start: '2025-12-18T11:30:00',
    end: '2025-12-18T12:00:00',
    allDay: false,
    category: 'Break',
    description: 'Morning coffee break.',
    location: 'Foyer',
    color: '#22c55e',
  },
  {
    id: 'evt-9',
    title: 'Vision India Session',
    start: '2025-12-18T12:00:00',
    end: '2025-12-18T13:30:00',
    allDay: false,
    category: 'Oral Session',
    description: 'Special session showcasing Indian contributions to computer vision.',
    location: 'Auditorium Complex',
    color: '#0ea5e9',
  },
  {
    id: 'evt-10',
    title: 'Lunch Break',
    start: '2025-12-18T13:30:00',
    end: '2025-12-18T14:30:00',
    allDay: false,
    category: 'Break',
    description: 'Networking lunch.',
    location: 'Dining Hall',
    color: '#22c55e',
  },
  {
    id: 'evt-11',
    title: 'Plenary: Dr. Srinath Sridhar',
    start: '2025-12-18T14:30:00',
    end: '2025-12-18T15:30:00',
    allDay: false,
    category: 'Plenary',
    description: '3D hand/body pose estimation and egocentric vision for AR/VR.',
    location: 'Auditorium Complex',
    color: '#14b8a6',
    speaker: 'Dr. Srinath Sridhar',
  },
  {
    id: 'evt-12',
    title: 'Poster Session 1',
    start: '2025-12-18T15:30:00',
    end: '2025-12-18T17:30:00',
    allDay: false,
    category: 'Poster Session',
    description: 'Research posters including Vision India contributions. Coffee break included.',
    location: 'Exhibition Hall',
    color: '#8b5cf6',
  },
  {
    id: 'evt-13',
    title: 'Plenary: Prof. C V Jawahar',
    start: '2025-12-18T17:30:00',
    end: '2025-12-18T18:30:00',
    allDay: false,
    category: 'Plenary',
    description: 'Document image analysis and Indian language computing.',
    location: 'Auditorium Complex',
    color: '#14b8a6',
    speaker: 'Prof. C V Jawahar',
  },
  {
    id: 'evt-14',
    title: 'Conference Dinner',
    start: '2025-12-18T19:30:00',
    end: '2025-12-18T22:00:00',
    allDay: false,
    category: 'Social Event',
    description: 'Evening dinner for all participants.',
    location: 'Banquet Hall',
    color: '#eab308',
  },

  // Day 3 - December 19, 2025
  {
    id: 'evt-15',
    title: 'Oral Session 2',
    start: '2025-12-19T09:00:00',
    end: '2025-12-19T10:30:00',
    allDay: false,
    category: 'Oral Session',
    description: 'Generative models, neural rendering, and image synthesis.',
    location: 'Auditorium Complex',
    color: '#0ea5e9',
  },
  {
    id: 'evt-16',
    title: 'Plenary: Prof. Paul Thompson',
    start: '2025-12-19T10:30:00',
    end: '2025-12-19T11:30:00',
    allDay: false,
    category: 'Plenary',
    description: 'Medical imaging and neuroimaging analysis.',
    location: 'Auditorium Complex',
    color: '#14b8a6',
    speaker: 'Prof. Paul Thompson',
  },
  {
    id: 'evt-17',
    title: 'Coffee Break',
    start: '2025-12-19T11:30:00',
    end: '2025-12-19T12:00:00',
    allDay: false,
    category: 'Break',
    description: 'Morning coffee break.',
    location: 'Foyer',
    color: '#22c55e',
  },
  {
    id: 'evt-18',
    title: 'Industry Session 1',
    start: '2025-12-19T12:00:00',
    end: '2025-12-19T13:30:00',
    allDay: false,
    category: 'Industry Session',
    description: 'Industry presentations and demos from leading tech companies.',
    location: 'Auditorium Complex',
    color: '#f97316',
  },
  {
    id: 'evt-19',
    title: 'Lunch Break',
    start: '2025-12-19T13:30:00',
    end: '2025-12-19T14:30:00',
    allDay: false,
    category: 'Break',
    description: 'Networking lunch.',
    location: 'Dining Hall',
    color: '#22c55e',
  },
  {
    id: 'evt-20',
    title: 'Oral Session 3',
    start: '2025-12-19T14:30:00',
    end: '2025-12-19T16:00:00',
    allDay: false,
    category: 'Oral Session',
    description: 'Video understanding, action recognition, temporal modeling.',
    location: 'Auditorium Complex',
    color: '#0ea5e9',
  },
  {
    id: 'evt-21',
    title: 'Poster Session 2',
    start: '2025-12-19T16:00:00',
    end: '2025-12-19T17:30:00',
    allDay: false,
    category: 'Poster Session',
    description: 'Posters including Tiny Papers Track. Coffee break included.',
    location: 'Exhibition Hall',
    color: '#8b5cf6',
  },
  {
    id: 'evt-22',
    title: 'Plenary: Dr. P. Anandan',
    start: '2025-12-19T17:30:00',
    end: '2025-12-19T18:30:00',
    allDay: false,
    category: 'Plenary',
    description: 'Evolution of computer vision and future directions.',
    location: 'Auditorium Complex',
    color: '#14b8a6',
    speaker: 'Dr. P. Anandan',
  },
  {
    id: 'evt-23',
    title: 'GBM / Student-Industry Interaction',
    start: '2025-12-19T18:30:00',
    end: '2025-12-19T19:30:00',
    allDay: false,
    category: 'Social Event',
    description: 'General body meeting and parallel student-industry networking sessions.',
    location: 'Multiple Rooms',
    color: '#eab308',
  },
  {
    id: 'evt-24',
    title: 'Cultural Program & Banquet',
    start: '2025-12-19T19:30:00',
    end: '2025-12-19T23:00:00',
    allDay: false,
    category: 'Social Event',
    description: 'Traditional performances followed by gala banquet dinner.',
    location: 'Banquet Hall',
    color: '#eab308',
  },

  // Day 4 - December 20, 2025
  {
    id: 'evt-25',
    title: 'Oral Session 4',
    start: '2025-12-20T09:00:00',
    end: '2025-12-20T10:30:00',
    allDay: false,
    category: 'Oral Session',
    description: 'Autonomous systems, robotics vision, sensor fusion.',
    location: 'Auditorium Complex',
    color: '#0ea5e9',
  },
  {
    id: 'evt-26',
    title: 'Industry Session 2',
    start: '2025-12-20T10:30:00',
    end: '2025-12-20T12:00:00',
    allDay: false,
    category: 'Industry Session',
    description: 'Deployment challenges and ML operations.',
    location: 'Auditorium Complex',
    color: '#f97316',
  },
  {
    id: 'evt-27',
    title: 'Coffee Break',
    start: '2025-12-20T12:00:00',
    end: '2025-12-20T12:30:00',
    allDay: false,
    category: 'Break',
    description: 'Morning coffee break.',
    location: 'Foyer',
    color: '#22c55e',
  },
  {
    id: 'evt-28',
    title: 'Industry Session 3',
    start: '2025-12-20T12:30:00',
    end: '2025-12-20T13:30:00',
    allDay: false,
    category: 'Industry Session',
    description: 'Panel discussions on future of computer vision.',
    location: 'Auditorium Complex',
    color: '#f97316',
  },
  {
    id: 'evt-29',
    title: 'Lunch Break',
    start: '2025-12-20T13:30:00',
    end: '2025-12-20T14:30:00',
    allDay: false,
    category: 'Break',
    description: 'Final networking lunch.',
    location: 'Dining Hall',
    color: '#22c55e',
  },
  {
    id: 'evt-30',
    title: 'Oral Session 5',
    start: '2025-12-20T14:30:00',
    end: '2025-12-20T16:00:00',
    allDay: false,
    category: 'Oral Session',
    description: 'Low-level vision, image enhancement, computational photography.',
    location: 'Auditorium Complex',
    color: '#0ea5e9',
  },
  {
    id: 'evt-31',
    title: 'Oral Session 6',
    start: '2025-12-20T16:00:00',
    end: '2025-12-20T17:30:00',
    allDay: false,
    category: 'Oral Session',
    description: 'Multimodal learning and vision-language models.',
    location: 'Auditorium Complex',
    color: '#0ea5e9',
  },
  {
    id: 'evt-32',
    title: 'Valedictory Function',
    start: '2025-12-20T17:30:00',
    end: '2025-12-20T18:30:00',
    allDay: false,
    category: 'Social Event',
    description: 'Closing ceremony with best paper awards and ICVGIP 2027 announcement.',
    location: 'Auditorium Complex',
    color: '#eab308',
  },
  {
    id: 'evt-33',
    title: 'Farewell Dinner',
    start: '2025-12-20T19:30:00',
    end: '2025-12-20T22:00:00',
    allDay: false,
    category: 'Social Event',
    description: 'Final dinner and goodbyes.',
    location: 'Banquet Hall',
    color: '#eab308',
  },
];

// Helper function to get event by ID
export const getEventById = (id: string): CalendarEvent | undefined => {
  return EVENTS.find(event => event.id === id);
};

// Helper function to get events by category
export const getEventsByCategory = (category: EventCategory): CalendarEvent[] => {
  return EVENTS.filter(event => event.category === category);
};

// Helper function to get events by date
export const getEventsByDate = (date: string): CalendarEvent[] => {
  return EVENTS.filter(event => event.start.startsWith(date));
};

// Validate ISO dates (for testing)
export const validateEventDates = (): boolean => {
  return EVENTS.every(event => {
    const startDate = new Date(event.start);
    const endDate = new Date(event.end);
    return !isNaN(startDate.getTime()) && !isNaN(endDate.getTime()) && startDate <= endDate;
  });
};
