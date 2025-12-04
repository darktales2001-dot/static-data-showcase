import { SessionCard } from "./SessionCard";
import { Mic, Image, Eye, Building2, Award, Coffee, Wrench, UtensilsCrossed, PartyPopper } from "lucide-react";

export interface Session {
  id: string;
  title: string;
  time: string;
  location?: string;
  description?: string;
  variant: "oral" | "poster" | "vision" | "industry" | "plenary" | "break" | "workshop";
  link: string;
  speaker?: string;
}

interface DayScheduleProps {
  day: string;
  date: string;
  sessions: Session[];
}

const variantIcons = {
  oral: <Mic className="h-4 w-4" />,
  poster: <Image className="h-4 w-4" />,
  vision: <Eye className="h-4 w-4" />,
  industry: <Building2 className="h-4 w-4" />,
  plenary: <Award className="h-4 w-4" />,
  break: <Coffee className="h-4 w-4" />,
  workshop: <Wrench className="h-4 w-4" />,
};

export function DaySchedule({ day, date, sessions }: DayScheduleProps) {
  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {sessions.map((session) => (
          <SessionCard
            key={session.id}
            title={session.title}
            time={session.time}
            location={session.location}
            description={session.description}
            link={session.link}
            variant={session.variant}
            icon={variantIcons[session.variant]}
            speaker={session.speaker}
          />
        ))}
      </div>
    </div>
  );
}
