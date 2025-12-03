import React from 'react';
import { EVENT_COLORS, EventCategory } from '@/data/events';

const CalendarLegend: React.FC = () => {
  const categories: EventCategory[] = [
    'Plenary',
    'Oral Session',
    'Poster Session',
    'Industry Session',
    'Workshop',
    'Social Event',
    'Break',
  ];

  return (
    <div className="glass-card glass-card-dark rounded-xl p-4">
      <h3 className="font-display text-sm font-semibold text-foreground mb-3">
        Event Categories
      </h3>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <div key={category} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full flex-shrink-0"
              style={{ backgroundColor: EVENT_COLORS[category] }}
              aria-hidden="true"
            />
            <span className="text-xs text-muted-foreground">{category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarLegend;
