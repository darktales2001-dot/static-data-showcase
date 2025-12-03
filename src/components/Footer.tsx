import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Download, FileJson, FileSpreadsheet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DATA } from '@/data/data';
import { EVENTS } from '@/data/events';

const Footer: React.FC = () => {
  const downloadJSON = (data: unknown, filename: string) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadCSV = (data: Record<string, unknown>[], filename: string) => {
    if (data.length === 0) return;
    
    const headers = Object.keys(data[0]);
    const csvContent = [
      headers.join(','),
      ...data.map(row =>
        headers.map(header => {
          const value = row[header];
          const stringValue = Array.isArray(value) ? value.join('; ') : String(value ?? '');
          return `"${stringValue.replace(/"/g, '""')}"`;
        }).join(',')
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <footer className="mt-auto border-t border-border/50 bg-card/50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-bg">
                <span className="text-lg font-bold text-white">IC</span>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold gradient-text">ICVGIP 2025</h3>
                <p className="text-xs text-muted-foreground">Computer Vision & Image Processing</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The Indian Conference on Computer Vision, Graphics and Image Processing.
              December 17-20, 2025.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Conference Schedule
              </Link>
              <Link to="/calendar" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Calendar View
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About ICVGIP
              </Link>
            </nav>
          </div>

          {/* Downloads */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">Export Data</h4>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => downloadJSON(DATA, 'icvgip-schedule.json')}
                className="text-xs"
              >
                <FileJson className="h-3 w-3 mr-1" />
                Schedule JSON
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => downloadCSV(DATA as unknown as Record<string, unknown>[], 'icvgip-schedule.csv')}
                className="text-xs"
              >
                <FileSpreadsheet className="h-3 w-3 mr-1" />
                Schedule CSV
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => downloadJSON(EVENTS, 'icvgip-events.json')}
                className="text-xs"
              >
                <Calendar className="h-3 w-3 mr-1" />
                Events JSON
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © 2025 ICVGIP. All data is hard-coded and does not require network requests.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground">
              Built with React + Vite + Tailwind
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
