import React from 'react';
import { Calendar, Users, Mic, MapPin } from 'lucide-react';
import ItemList from '@/components/ItemList';
import PageTransition from '@/components/PageTransition';
import { DATA } from '@/data/data';

const Index: React.FC = () => {
  // Calculate stats
  const totalSessions = DATA.length;
  const plenaryCount = DATA.filter(d => d.category === 'Plenary').length;
  const speakers = DATA.filter(d => d.speaker).map(d => d.speaker);
  const uniqueSpeakers = new Set(speakers).size;

  const stats = [
    { icon: Calendar, label: 'Sessions', value: totalSessions },
    { icon: Mic, label: 'Keynotes', value: plenaryCount },
    { icon: Users, label: 'Speakers', value: uniqueSpeakers },
    { icon: MapPin, label: 'Days', value: 4 },
  ];

  return (
    <PageTransition>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 gradient-bg-subtle" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="container mx-auto px-4 py-12 md:py-20 relative">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                December 17-20, 2025
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                ICVGIP 2025{' '}
                <span className="gradient-text">Conference Schedule</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The Indian Conference on Computer Vision, Graphics and Image Processing.
                Explore sessions, keynotes, and networking events.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass-card glass-card-dark rounded-2xl p-4 text-center hover-lift"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-5 w-5 text-white" />
                  </div>
                  <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="container mx-auto px-4 py-8 md:py-12">
          <div className="mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Conference Schedule
            </h2>
            <p className="text-muted-foreground">
              Browse all sessions, filter by category, and find events that interest you.
            </p>
          </div>

          <ItemList />
        </section>
      </main>
    </PageTransition>
  );
};

export default Index;
