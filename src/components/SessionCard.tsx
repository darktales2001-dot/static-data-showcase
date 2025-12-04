import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ArrowRight, Clock, MapPin, User } from "lucide-react";

interface SessionCardProps {
  title: string;
  time?: string;
  location?: string;
  description?: string;
  link: string;
  variant?: "oral" | "poster" | "vision" | "industry" | "plenary" | "break" | "workshop";
  icon?: React.ReactNode;
  speaker?: string;
}

const variantStyles = {
  oral: {
    card: "bg-gradient-to-br from-session-oral-bg to-white dark:to-card border-session-oral/20 hover:border-session-oral/40",
    accent: "bg-session-oral",
    icon: "text-session-oral",
    glow: "group-hover:shadow-[0_8px_30px_-10px_hsl(var(--session-oral)/0.3)]",
  },
  poster: {
    card: "bg-gradient-to-br from-session-poster-bg to-white dark:to-card border-session-poster/20 hover:border-session-poster/40",
    accent: "bg-session-poster",
    icon: "text-session-poster",
    glow: "group-hover:shadow-[0_8px_30px_-10px_hsl(var(--session-poster)/0.3)]",
  },
  vision: {
    card: "bg-gradient-to-br from-session-vision-bg to-white dark:to-card border-session-vision/20 hover:border-session-vision/40",
    accent: "bg-session-vision",
    icon: "text-session-vision",
    glow: "group-hover:shadow-[0_8px_30px_-10px_hsl(var(--session-vision)/0.3)]",
  },
  industry: {
    card: "bg-gradient-to-br from-session-industry-bg to-white dark:to-card border-session-industry/20 hover:border-session-industry/40",
    accent: "bg-session-industry",
    icon: "text-session-industry",
    glow: "group-hover:shadow-[0_8px_30px_-10px_hsl(var(--session-industry)/0.3)]",
  },
  plenary: {
    card: "bg-gradient-to-br from-session-plenary-bg to-white dark:to-card border-session-plenary/20 hover:border-session-plenary/40",
    accent: "bg-session-plenary",
    icon: "text-session-plenary",
    glow: "group-hover:shadow-[0_8px_30px_-10px_hsl(var(--session-plenary)/0.3)]",
  },
  break: {
    card: "bg-gradient-to-br from-session-break-bg to-white dark:to-card border-session-break/20 hover:border-session-break/40",
    accent: "bg-session-break",
    icon: "text-session-break",
    glow: "group-hover:shadow-[0_8px_30px_-10px_hsl(var(--session-break)/0.3)]",
  },
  workshop: {
    card: "bg-gradient-to-br from-session-workshop-bg to-white dark:to-card border-session-workshop/20 hover:border-session-workshop/40",
    accent: "bg-session-workshop",
    icon: "text-session-workshop",
    glow: "group-hover:shadow-[0_8px_30px_-10px_hsl(var(--session-workshop)/0.3)]",
  },
};

export function SessionCard({
  title,
  time,
  location,
  description,
  link,
  variant = "oral",
  icon,
  speaker,
}: SessionCardProps) {
  const styles = variantStyles[variant];

  return (
    <Link
      to={link}
      className={cn(
        "group relative flex flex-col rounded-2xl border p-5 transition-all duration-500 hover:-translate-y-1",
        styles.card,
        styles.glow
      )}
    >
      {/* Top accent bar */}
      <div className={cn("absolute top-0 left-6 right-6 h-1 rounded-b-full", styles.accent)} />
      
      <div className="flex items-start justify-between gap-3 mt-2">
        <div className="flex-1 min-w-0">
          {/* Icon and Title */}
          <div className="flex items-center gap-2.5 mb-3">
            {icon && (
              <div className={cn(
                "flex items-center justify-center w-9 h-9 rounded-xl bg-white/80 dark:bg-card shadow-sm",
                styles.icon
              )}>
                {icon}
              </div>
            )}
            <h3 className="font-semibold text-foreground group-hover:gradient-text transition-all duration-300 line-clamp-2">
              {title}
            </h3>
          </div>
          
          {/* Speaker */}
          {speaker && (
            <div className="flex items-center gap-2 mb-2">
              <User className="h-3.5 w-3.5 text-muted-foreground" />
              <p className="text-sm font-medium text-foreground/80">
                {speaker}
              </p>
            </div>
          )}
          
          {/* Time and Location */}
          {(time || location) && (
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-2">
              {time && (
                <span className="flex items-center gap-1.5 bg-white/50 dark:bg-white/10 px-2 py-1 rounded-lg">
                  <Clock className="h-3 w-3" />
                  {time}
                </span>
              )}
              {location && (
                <span className="flex items-center gap-1.5 bg-white/50 dark:bg-white/10 px-2 py-1 rounded-lg">
                  <MapPin className="h-3 w-3" />
                  {location}
                </span>
              )}
            </div>
          )}
          
          {/* Description */}
          {description && (
            <p className="text-sm text-muted-foreground line-clamp-2 mt-2">
              {description}
            </p>
          )}
        </div>
        
        {/* Arrow */}
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/50 dark:bg-white/10 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          <ArrowRight className="h-4 w-4 text-foreground" />
        </div>
      </div>
    </Link>
  );
}
