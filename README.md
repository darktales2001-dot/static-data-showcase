# ICVGIP 2025 Conference Schedule

A polished, responsive single-page React application displaying the ICVGIP 2025 conference schedule. All data is hard-coded - no runtime network requests.

## Features

- 📅 **Schedule View**: Browse all sessions with search, category filters, tag filters, and pagination
- 📆 **Calendar View**: Interactive FullCalendar with month/week/day views
- 🎨 **Modern Design**: Glassmorphism effects, soft gradients, smooth animations
- 🌓 **Dark/Light Mode**: Theme persisted to localStorage
- 📱 **Responsive**: Mobile-first design, works on all devices
- ♿ **Accessible**: Semantic HTML, ARIA labels, keyboard navigation, focus traps
- 📥 **Data Export**: Download schedule as JSON or CSV
- 🔗 **Deep Links**: Direct links to sessions and events work without network

## Tech Stack

- **Vite** + **React 18** + **TypeScript**
- **React Router v6** for routing
- **Tailwind CSS** for styling
- **FullCalendar** for calendar view
- **Framer Motion** for animations
- **shadcn/ui** components

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd <project-folder>

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx       # Navigation header with search
│   ├── Footer.tsx       # Footer with export buttons
│   ├── ItemCard.tsx     # Session card component
│   ├── ItemList.tsx     # Session list with filters
│   ├── SearchBar.tsx    # Filter controls
│   ├── Pagination.tsx   # Pagination component
│   ├── EventModal.tsx   # Calendar event modal
│   ├── CalendarLegend.tsx # Event category legend
│   └── PageTransition.tsx # Framer Motion wrapper
├── contexts/
│   └── AppContext.tsx   # Global state management
├── data/
│   ├── data.ts          # Hard-coded schedule data
│   └── events.ts        # Hard-coded calendar events
├── pages/
│   ├── Index.tsx        # Home/Schedule page
│   ├── Detail.tsx       # Session detail page
│   ├── CalendarPage.tsx # Calendar view
│   ├── EventDetail.tsx  # Event detail page
│   ├── About.tsx        # About page
│   └── NotFound.tsx     # 404 page
├── index.css            # Design system & Tailwind
└── App.tsx              # Root component with routing
```

## Updating Data

### Schedule Data (`src/data/data.ts`)

Edit the `DATA` array to update conference sessions:

```typescript
export const DATA: DataItem[] = [
  {
    id: '1',
    name: 'session-slug',
    title: 'Session Title',
    shortDescription: 'Brief description...',
    fullDescription: 'Full details...',
    category: 'Oral Session', // Must match CATEGORIES
    date: '2025-12-17',
    time: '9:00 AM - 10:30 AM',
    venue: 'Auditorium',
    speaker: 'Dr. Name', // Optional
    tags: ['research', 'day-1'],
  },
  // ... more items
];
```

### Calendar Events (`src/data/events.ts`)

Edit the `EVENTS` array to update calendar events:

```typescript
export const EVENTS: CalendarEvent[] = [
  {
    id: 'evt-1',
    title: 'Event Title',
    start: '2025-12-17T09:00:00',
    end: '2025-12-17T10:30:00',
    allDay: false,
    category: 'Oral Session',
    description: 'Event description...',
    location: 'Auditorium',
    color: '#0ea5e9', // Use EVENT_COLORS or custom hex
    speaker: 'Dr. Name', // Optional
  },
  // ... more events
];
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Home - Schedule list with filters |
| `/item/:id` | Session detail page |
| `/calendar` | Calendar view |
| `/calendar/event/:id` | Event detail page |
| `/about` | About the conference |

## Acceptance Checklist

- [x] `npm run dev` starts the app
- [x] Home page lists items from `src/data/data.ts`
- [x] `/item/:id` loads without network requests
- [x] `/calendar/event/:id` loads without network requests
- [x] Calendar renders events from `src/data/events.ts`
- [x] Event colors display correctly
- [x] Event modal shows full details
- [x] Search/filter/pagination works
- [x] Back navigation preserves state
- [x] No runtime calls to Google Sheets or external APIs
- [x] Dark/light theme toggle persisted to localStorage
- [x] CSV/JSON download buttons work
- [x] Responsive on mobile and desktop
- [x] Accessible (keyboard nav, ARIA, focus trap)

## Testing

Run the date validation test:

```typescript
import { validateEventDates } from './src/data/events';
console.log('All dates valid:', validateEventDates()); // Should be true
```

## License

MIT
