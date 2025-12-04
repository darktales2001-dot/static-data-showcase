import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ArrowRight, Clock, MapPin } from "lucide-react";

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
    card: "bg-session-oral-bg border-session-oral/20 hover:border-session-oral/50 hover:shadow-md",
    badge: "bg-session-oral text-white",
    icon: "text-session-oral",
  },
  poster: {
    card: "bg-session-poster-bg border-session-poster/20 hover:border-session-poster/50 hover:shadow-md",
    badge: "bg-session-poster text-white",
    icon: "text-session-poster",
  },
  vision: {
    card: "bg-session-vision-bg border-session-vision/20 hover:border-session-vision/50 hover:shadow-md",
    badge: "bg-session-vision text-white",
    icon: "text-session-vision",
  },
  industry: {
    card: "bg-session-industry-bg border-session-industry/20 hover:border-session-industry/50 hover:shadow-md",
    badge: "bg-session-industry text-white",
    icon: "text-session-industry",
  },
  plenary: {
    card: "bg-session-plenary-bg border-session-plenary/20 hover:border-session-plenary/50 hover:shadow-md",
    badge: "bg-session-plenary text-white",
    icon: "text-session-plenary",
  },
  break: {
    card: "bg-session-break-bg border-session-break/20 hover:border-session-break/50 hover:shadow-md",
    badge: "bg-session-break text-white",
    icon: "text-session-break",
  },
  workshop: {
    card: "bg-session-workshop-bg border-session-workshop/20 hover:border-session-workshop/50 hover:shadow-md",
    badge: "bg-session-workshop text-white",
    icon: "text-session-workshop",
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
        "group flex flex-col rounded-xl border p-4 transition-all duration-200",
        styles.card
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            {icon && (
              <span className={cn("flex-shrink-0", styles.icon)}>
                {icon}
              </span>
            )}
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
              {title}
            </h3>
          </div>
          
          {speaker && (
            <p className="text-sm font-medium text-foreground/80 mb-1.5">
              {speaker}
            </p>
          )}
          
          {(time || location) && (
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-2">
              {time && (
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {time}
                </span>
              )}
              {location && (
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {location}
                </span>
              )}
            </div>
          )}
          
          {description && (
            <p className="text-sm text-muted-foreground line-clamp-2">
              {description}
            </p>
          )}
        </div>
        
        <ArrowRight className="h-4 w-4 flex-shrink-0 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
