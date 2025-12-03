import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, User, Share2 } from 'lucide-react';
import { getEventById, EVENTS, EVENT_COLORS } from '@/data/events';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import PageTransition from '@/components/PageTransition';

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const event = id ? getEventById(id) : undefined;

  if (!event) {
    return (
      <PageTransition>
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
              <Calendar className="h-10 w-10 text-muted-foreground" />
            </div>
            <h1 className="font-display text-2xl font-bold text-foreground mb-3">
              Event Not Found
            </h1>
            <p className="text-muted-foreground mb-6">
              The event you're looking for doesn't exist or has been removed.
            </p>
            <Button onClick={() => navigate('/calendar')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Calendar
            </Button>
          </div>
        </div>
      </PageTransition>
    );
  }

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  // Get related events (same category, different id)
  const relatedEvents = EVENTS
    .filter(e => e.category === event.category && e.id !== event.id)
    .slice(0, 3);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: event.title,
          text: event.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <PageTransition>
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundColor: event.color }}
          />
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ backgroundColor: event.color }}
          />

          <div className="container mx-auto px-4 py-8 md:py-12 relative">
            {/* Breadcrumb */}
            <nav className="mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm">
                <li>
                  <Link to="/calendar" className="text-muted-foreground hover:text-foreground transition-colors">
                    Calendar
                  </Link>
                </li>
                <li className="text-muted-foreground">/</li>
                <li className="text-foreground font-medium truncate max-w-[200px]">
                  {event.title}
                </li>
              </ol>
            </nav>

            <div className="max-w-4xl">
              {/* Back Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate(-1)}
                className="mb-6 -ml-2"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>

              {/* Category Badge */}
              <Badge
                variant="outline"
                className="text-sm font-medium mb-4"
                style={{
                  backgroundColor: `${event.color}20`,
                  borderColor: `${event.color}50`,
                  color: event.color,
                }}
              >
                {event.category}
              </Badge>

              {/* Title */}
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {event.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>{formatDate(event.start)}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>{formatTime(event.start)} - {formatTime(event.end)}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{event.location}</span>
                </div>
              </div>

              {/* Speaker */}
              {event.speaker && (
                <div className="flex items-center gap-3 mb-6 p-4 glass-card glass-card-dark rounded-xl">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: event.color }}
                  >
                    {event.speaker.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{event.speaker}</p>
                    <p className="text-sm text-muted-foreground">Speaker</p>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3">
                <Button variant="outline" size="sm" onClick={handleShare}>
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button size="sm" asChild>
                  <Link to="/calendar">
                    <Calendar className="h-4 w-4 mr-2" />
                    View Calendar
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl">
            {/* Description */}
            <div className="glass-card glass-card-dark rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="font-display text-xl font-bold text-foreground mb-4">
                About This Event
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {event.description}
              </p>
            </div>

            {/* Event Details */}
            <div className="glass-card glass-card-dark rounded-2xl p-6 mb-8">
              <h3 className="font-display text-lg font-bold text-foreground mb-4">
                Event Details
              </h3>
              <dl className="space-y-4">
                <div className="flex justify-between py-2 border-b border-border/50">
                  <dt className="text-muted-foreground">Duration</dt>
                  <dd className="font-medium text-foreground">
                    {Math.round((new Date(event.end).getTime() - new Date(event.start).getTime()) / (1000 * 60))} minutes
                  </dd>
                </div>
                <div className="flex justify-between py-2 border-b border-border/50">
                  <dt className="text-muted-foreground">Location</dt>
                  <dd className="font-medium text-foreground">{event.location}</dd>
                </div>
                <div className="flex justify-between py-2 border-b border-border/50">
                  <dt className="text-muted-foreground">Category</dt>
                  <dd className="font-medium text-foreground">{event.category}</dd>
                </div>
                {event.allDay && (
                  <div className="flex justify-between py-2">
                    <dt className="text-muted-foreground">Type</dt>
                    <dd className="font-medium text-foreground">All-day event</dd>
                  </div>
                )}
              </dl>
            </div>

            {/* Related Events */}
            {relatedEvents.length > 0 && (
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-6">
                  Related Events
                </h3>
                <div className="grid gap-4">
                  {relatedEvents.map(relatedEvent => (
                    <Link
                      key={relatedEvent.id}
                      to={`/calendar/event/${relatedEvent.id}`}
                      className="glass-card glass-card-dark rounded-xl p-4 hover-lift flex items-center gap-4"
                    >
                      <div
                        className="w-2 h-12 rounded-full flex-shrink-0"
                        style={{ backgroundColor: relatedEvent.color }}
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground truncate">{relatedEvent.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {formatTime(relatedEvent.start)} - {relatedEvent.location}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default EventDetail;
