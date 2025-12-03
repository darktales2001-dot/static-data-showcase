import React, { useState, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EVENTS, CalendarEvent, getEventById } from '@/data/events';
import CalendarLegend from '@/components/CalendarLegend';
import EventModal from '@/components/EventModal';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

const CalendarPage: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const calendarRef = useRef<FullCalendar>(null);

  // Transform events for FullCalendar
  const calendarEvents = EVENTS.map(event => ({
    id: event.id,
    title: event.title,
    start: event.start,
    end: event.end,
    allDay: event.allDay,
    backgroundColor: event.color,
    borderColor: event.color,
    extendedProps: {
      category: event.category,
      description: event.description,
      location: event.location,
      speaker: event.speaker,
    },
  }));

  const handleEventClick = (info: { event: { id: string } }) => {
    const event = getEventById(info.event.id);
    if (event) {
      setSelectedEvent(event);
      setModalOpen(true);
    }
  };

  const handlePrev = () => {
    calendarRef.current?.getApi().prev();
  };

  const handleNext = () => {
    calendarRef.current?.getApi().next();
  };

  const handleToday = () => {
    calendarRef.current?.getApi().today();
  };

  const handleGoToConference = () => {
    calendarRef.current?.getApi().gotoDate('2025-12-17');
  };

  return (
    <PageTransition>
      <main className="min-h-screen">
        {/* Header */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg-subtle" />
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

          <div className="container mx-auto px-4 py-8 md:py-12 relative">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                  Conference <span className="gradient-text">Calendar</span>
                </h1>
                <p className="text-muted-foreground">
                  Visual overview of all ICVGIP 2025 events
                </p>
              </div>

              {/* Quick Actions */}
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={handleGoToConference}>
                  <Calendar className="h-4 w-4 mr-2" />
                  Go to Dec 17
                </Button>
              </div>
            </div>

            {/* Legend */}
            <CalendarLegend />
          </div>
        </section>

        {/* Calendar */}
        <section className="container mx-auto px-4 py-6 md:py-8">
          <div className="glass-card glass-card-dark rounded-2xl p-4 md:p-6">
            {/* Custom Navigation */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" onClick={handlePrev} aria-label="Previous">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={handleNext} aria-label="Next">
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" onClick={handleToday} className="hidden sm:inline-flex">
                  Today
                </Button>
              </div>
            </div>

            {/* FullCalendar */}
            <div className="fc-wrapper">
              <FullCalendar
                ref={calendarRef}
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                initialDate="2025-12-17"
                events={calendarEvents}
                eventClick={handleEventClick}
                headerToolbar={{
                  left: '',
                  center: 'title',
                  right: 'dayGridMonth,timeGridWeek,timeGridDay',
                }}
                height="auto"
                eventDisplay="block"
                dayMaxEvents={3}
                moreLinkClick="popover"
                slotMinTime="08:00:00"
                slotMaxTime="23:00:00"
                allDaySlot={false}
                weekends={true}
                nowIndicator={true}
                eventTimeFormat={{
                  hour: 'numeric',
                  minute: '2-digit',
                  meridiem: 'short',
                }}
                slotLabelFormat={{
                  hour: 'numeric',
                  minute: '2-digit',
                  meridiem: 'short',
                }}
              />
            </div>

            {/* Mobile hint */}
            <p className="text-xs text-muted-foreground text-center mt-4 md:hidden">
              Tip: Use the buttons above to switch between month, week, and day views
            </p>
          </div>
        </section>

        {/* Event Modal */}
        <EventModal
          event={selectedEvent}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      </main>
    </PageTransition>
  );
};

export default CalendarPage;
