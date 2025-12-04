import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { ScheduleImage } from "@/components/ScheduleImage";
import { DaySchedule, Session } from "@/components/DaySchedule";
import { Calendar, ChevronRight, Mic, Image, Eye, Building2, Award, Coffee, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import scheduleImage from "@/assets/schedule.png";

const scheduleData: Record<string, { day: string; date: string; sessions: Session[] }> = {
  "dec17": {
    day: "Day 1",
    date: "December 17, 2025",
    sessions: [
      { id: "w1", title: "Tutorials & Workshops", time: "9:00 AM - 1:30 PM", location: "Workshop Hall", description: "Morning session including coffee break", variant: "workshop", link: "/" },
      { id: "b1", title: "Lunch", time: "1:30 - 2:30 PM", location: "Dining Hall", variant: "break", link: "/" },
      { id: "w2", title: "Tutorials & Workshops", time: "2:30 - 5:30 PM", location: "Workshop Hall", description: "Afternoon session including coffee break", variant: "workshop", link: "/" },
      { id: "s1", title: "Inauguration", time: "5:30 - 6:30 PM", location: "Auditorium", variant: "plenary", link: "/" },
      { id: "d1", title: "Dinner", time: "7:30 PM onwards", location: "Banquet Hall", variant: "break", link: "/" },
    ],
  },
  "dec18": {
    day: "Day 2",
    date: "December 18, 2025",
    sessions: [
      { id: "o1", title: "Oral Session-1", time: "9:00 - 10:30 AM", location: "Auditorium", variant: "oral", link: "/oral-sessions" },
      { id: "p1", title: "Plenary-1: Prof. Nicu Sebe", time: "10:30 - 11:30 AM", location: "Auditorium", speaker: "Prof. Nicu Sebe", variant: "plenary", link: "/" },
      { id: "b2", title: "Coffee Break", time: "11:30 AM - 12:00 PM", location: "Foyer", variant: "break", link: "/" },
      { id: "v1", title: "Vision India Session", time: "12:00 - 1:30 PM", location: "Auditorium", description: "Showcasing research from Indian institutions", variant: "vision", link: "/vision-india" },
      { id: "b3", title: "Lunch", time: "1:30 - 2:30 PM", location: "Dining Hall", variant: "break", link: "/" },
      { id: "p2", title: "Plenary-2: Dr. Srinath Sridhar", time: "2:30 - 3:30 PM", location: "Auditorium", speaker: "Dr. Srinath Sridhar", variant: "plenary", link: "/" },
      { id: "ps1", title: "Poster Session-1", time: "3:30 - 5:30 PM", location: "Exhibition Hall", description: "Includes poster/oral papers & Vision India posters + Coffee break", variant: "poster", link: "/poster-sessions" },
      { id: "p3", title: "Plenary-3: Prof. C V Jawahar", time: "5:30 - 6:30 PM", location: "Auditorium", speaker: "Prof. C V Jawahar", variant: "plenary", link: "/" },
      { id: "d2", title: "Dinner", time: "7:30 PM onwards", location: "Banquet Hall", variant: "break", link: "/" },
    ],
  },
  "dec19": {
    day: "Day 3",
    date: "December 19, 2025",
    sessions: [
      { id: "o2", title: "Oral Session-2", time: "9:00 - 10:30 AM", location: "Auditorium", variant: "oral", link: "/oral-sessions" },
      { id: "p4", title: "Plenary-4: Prof. Paul Thompson", time: "10:30 - 11:30 AM", location: "Auditorium", speaker: "Prof. Paul Thompson", variant: "plenary", link: "/" },
      { id: "b4", title: "Coffee Break", time: "11:30 AM - 12:00 PM", location: "Foyer", variant: "break", link: "/" },
      { id: "i1", title: "Industry Session-1", time: "12:00 - 1:30 PM", location: "Auditorium", variant: "industry", link: "/" },
      { id: "b5", title: "Lunch", time: "1:30 - 2:30 PM", location: "Dining Hall", variant: "break", link: "/" },
      { id: "o3", title: "Oral Session-3", time: "2:30 - 4:00 PM", location: "Auditorium", variant: "oral", link: "/oral-sessions" },
      { id: "ps2", title: "Poster Session-2", time: "4:00 - 5:30 PM", location: "Exhibition Hall", description: "Includes poster/oral papers & Tiny Papers Track + Coffee break", variant: "poster", link: "/poster-sessions" },
      { id: "p5", title: "Plenary-5: Dr. P. Anandan", time: "5:30 - 6:30 PM", location: "Auditorium", speaker: "Dr. P. Anandan", variant: "plenary", link: "/" },
      { id: "gbm", title: "GBM / Student-Industry Interaction", time: "6:30 - 7:30 PM", location: "Multiple Rooms", variant: "industry", link: "/" },
      { id: "cp", title: "Cultural Program & Banquet", time: "7:30 PM onwards", location: "Banquet Hall", variant: "break", link: "/" },
    ],
  },
  "dec20": {
    day: "Day 4",
    date: "December 20, 2025",
    sessions: [
      { id: "o4", title: "Oral Session-4", time: "9:00 - 10:30 AM", location: "Auditorium", variant: "oral", link: "/oral-sessions" },
      { id: "i2", title: "Industry Session-2", time: "10:30 AM - 12:00 PM", location: "Auditorium", variant: "industry", link: "/" },
      { id: "b6", title: "Coffee Break", time: "12:00 - 12:30 PM", location: "Foyer", variant: "break", link: "/" },
      { id: "i3", title: "Industry Session-3", time: "12:30 - 1:30 PM", location: "Auditorium", variant: "industry", link: "/" },
      { id: "b7", title: "Lunch", time: "1:30 - 2:30 PM", location: "Dining Hall", variant: "break", link: "/" },
      { id: "o5", title: "Oral Session-5", time: "2:30 - 4:00 PM", location: "Auditorium", variant: "oral", link: "/oral-sessions" },
      { id: "o6", title: "Oral Session-6", time: "4:00 - 5:30 PM", location: "Auditorium", variant: "oral", link: "/oral-sessions" },
      { id: "val", title: "Valedictory Function", time: "5:30 - 6:30 PM", location: "Auditorium", description: "Closing ceremony & awards", variant: "plenary", link: "/" },
      { id: "d3", title: "Dinner", time: "7:30 PM onwards", location: "Banquet Hall", variant: "break", link: "/" },
    ],
  },
};

const dayTabs = [
  { key: "dec17", label: "Dec 17", shortLabel: "Wed", day: "Day 1" },
  { key: "dec18", label: "Dec 18", shortLabel: "Thu", day: "Day 2" },
  { key: "dec19", label: "Dec 19", shortLabel: "Fri", day: "Day 3" },
  { key: "dec20", label: "Dec 20", shortLabel: "Sat", day: "Day 4" },
];

const legendItems = [
  { label: "Oral", color: "bg-session-oral", icon: Mic },
  { label: "Poster", color: "bg-session-poster", icon: Image },
  { label: "Plenary", color: "bg-session-plenary", icon: Award },
  { label: "Vision India", color: "bg-session-vision", icon: Eye },
  { label: "Industry", color: "bg-session-industry", icon: Building2 },
  { label: "Workshop", color: "bg-session-workshop", icon: Wrench },
  { label: "Break", color: "bg-session-break", icon: Coffee },
];

export default function Index() {
  const [activeDay, setActiveDay] = useState("dec18");
  const currentSchedule = scheduleData[activeDay];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="mb-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
          <Calendar className="h-4 w-4" />
          December 17-20, 2025
        </div>
        <h1 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl font-serif mb-3">
          ICVGIP 2025 Program Schedule
        </h1>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto">
          Indian Conference on Computer Vision, Graphics and Image Processing
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          Venue: Auditorium Complex
        </p>
      </div>

      {/* Schedule Image */}
      <div className="mb-10">
        <ScheduleImage
          src={scheduleImage}
          alt="ICVGIP 2025 Program Schedule"
        />
      </div>

      {/* Day Tabs */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-foreground">Daily Schedule</h2>
        </div>
        
        {/* Day Selector */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {dayTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveDay(tab.key)}
              className={cn(
                "flex flex-col items-center px-4 py-3 rounded-xl border-2 transition-all min-w-[80px]",
                activeDay === tab.key
                  ? "bg-primary text-primary-foreground border-primary shadow-md"
                  : "bg-card border-border hover:border-primary/50 hover:bg-secondary/50"
              )}
            >
              <span className="text-[10px] uppercase tracking-wide opacity-70">{tab.shortLabel}</span>
              <span className="font-bold text-lg">{tab.label.split(" ")[1]}</span>
              <span className="text-xs opacity-80">{tab.day}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="mb-6 p-4 rounded-xl bg-secondary/50 border border-border">
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Legend:</span>
          {legendItems.map((item) => (
            <div key={item.label} className="flex items-center gap-1.5">
              <div className={cn("w-3 h-3 rounded-full", item.color)} />
              <span className="text-xs text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Current Day Schedule */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-8 w-1 rounded-full bg-primary" />
          <div>
            <h3 className="font-semibold text-foreground">{currentSchedule.day}</h3>
            <p className="text-sm text-muted-foreground">{currentSchedule.date}</p>
          </div>
        </div>
        
        <DaySchedule
          day={currentSchedule.day}
          date={currentSchedule.date}
          sessions={currentSchedule.sessions}
        />
      </div>
    </PageLayout>
  );
}
