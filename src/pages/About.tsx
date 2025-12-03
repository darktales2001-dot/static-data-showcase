import React from 'react';
import { Calendar, MapPin, Users, Award, Globe, Mail } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Calendar,
      title: '4 Days',
      description: 'Dec 17-20, 2025',
    },
    {
      icon: Users,
      title: '5+ Keynotes',
      description: 'World-class speakers',
    },
    {
      icon: Award,
      title: '30+ Sessions',
      description: 'Research & Industry',
    },
    {
      icon: Globe,
      title: 'International',
      description: 'Global participation',
    },
  ];

  return (
    <PageTransition>
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg-subtle" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="container mx-auto px-4 py-12 md:py-20 relative">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                About the Conference
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                ICVGIP <span className="gradient-text">2025</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Indian Conference on Computer Vision, Graphics and Image Processing
                is the premier forum for the presentation of new advances and research results
                in these interconnected fields.
              </p>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card glass-card-dark rounded-2xl p-5 text-center hover-lift"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-3">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Content */}
        <section className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* About */}
            <div className="glass-card glass-card-dark rounded-2xl p-6 md:p-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                About ICVGIP
              </h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  ICVGIP is a biennial conference that brings together researchers, practitioners,
                  and students working in computer vision, graphics, and image processing. Since its
                  inception, ICVGIP has grown to become one of the most significant conferences in
                  Asia for these research areas.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The conference features keynote presentations from world-renowned researchers,
                  oral and poster sessions presenting the latest research findings, industry sessions
                  highlighting real-world applications, and workshops and tutorials on cutting-edge topics.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  ICVGIP 2025 will be held from December 17-20, 2025, featuring tutorials and workshops
                  on the first day followed by three days of main conference activities including
                  plenary talks, oral sessions, poster sessions, and industry presentations.
                </p>
              </div>
            </div>

            {/* Conference Tracks */}
            <div className="glass-card glass-card-dark rounded-2xl p-6 md:p-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Conference Tracks
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Research Papers</h3>
                  <p className="text-sm text-muted-foreground">
                    Original research contributions in computer vision, graphics, and image processing,
                    presented as oral or poster presentations.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Vision India</h3>
                  <p className="text-sm text-muted-foreground">
                    Special track showcasing innovative research and applications from Indian institutions
                    and industry.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Industry Sessions</h3>
                  <p className="text-sm text-muted-foreground">
                    Presentations from leading technology companies on real-world applications
                    and deployment challenges.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Tiny Papers Track</h3>
                  <p className="text-sm text-muted-foreground">
                    Concise, impactful contributions that present novel ideas or preliminary results
                    in a focused format.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Note */}
            <div className="glass-card glass-card-dark rounded-2xl p-6 md:p-8 border-l-4 border-primary">
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                About This Application
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                This conference schedule application is built with React, Vite, and Tailwind CSS.
                All data is hard-coded and works completely offline - no network requests are made
                to external APIs or Google Sheets.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                <strong className="text-foreground">Data files:</strong>
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mb-4">
                <li><code className="bg-muted px-1 rounded">src/data/data.ts</code> - Conference schedule items</li>
                <li><code className="bg-muted px-1 rounded">src/data/events.ts</code> - Calendar events</li>
              </ul>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To update the schedule, simply modify these files and rebuild the application.
              </p>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default About;
