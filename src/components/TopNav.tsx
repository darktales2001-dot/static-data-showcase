import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Calendar, Eye, Mic, Image, FileText, CheckCircle, Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";

const navItems = [
  { path: "/", label: "Schedule", icon: Calendar },
  { path: "/vision-india", label: "Vision India", icon: Eye },
  { path: "/oral-sessions", label: "Oral Sessions", icon: Mic },
  { path: "/poster-sessions", label: "Posters", icon: Image },
  { path: "/tiny-papers", label: "Tiny Papers", icon: FileText },
  { path: "/accept", label: "Accepted", icon: CheckCircle },
];

export function TopNav() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="glass-strong border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="h-11 w-11 rounded-xl gradient-primary animate-gradient flex items-center justify-center shadow-lg group-hover:shadow-glow transition-shadow duration-300">
                  <span className="text-white font-bold text-lg">IC</span>
                </div>
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-accent rounded-full animate-pulse-soft" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold gradient-text">ICVGIP 2025</h1>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Conference Program</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 p-1 rounded-2xl bg-secondary/50 backdrop-blur-sm">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "relative flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300",
                      isActive
                        ? "text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/50"
                    )}
                  >
                    {isActive && (
                      <span className="absolute inset-0 rounded-xl gradient-primary shadow-md animate-scale-in" />
                    )}
                    <Icon className={cn("h-4 w-4 relative z-10", isActive && "text-white")} />
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2.5 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-border/50 animate-fade-in-up">
              <div className="flex flex-col gap-1">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 animate-fade-in-up",
                        isActive
                          ? "gradient-primary text-white shadow-md"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      )}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <Icon className="h-5 w-5" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
