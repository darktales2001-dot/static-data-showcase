import { PageLayout } from "@/components/PageLayout";
import { DataTable } from "@/components/DataTable";
import workshopsData from "@/data/workshops.json";
import React from "react";
import { ExternalLink } from "lucide-react";

interface WorkshopEntry {
  workshopId: string;
  workshopTitle: string;
  organizers: string;
  schedule: string;
  venue: string;
  website: string;
}

const columns: {
  key: keyof WorkshopEntry;
  header: string;
  className?: string;
  render?: (value: WorkshopEntry[keyof WorkshopEntry], row: WorkshopEntry) => React.ReactNode;
}[] = [
  {
    key: "workshopId",
    header: "Workshop ID",
    className: "w-24 text-center",
  },
  {
    key: "workshopTitle",
    header: "Workshop Title",
    className: "min-w-[300px] font-medium",
    render: (value, row) => (
      <a
        href={row.website}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline inline-flex items-center gap-1"
        onClick={(e) => e.stopPropagation()}
      >
        {String(value)}
        <ExternalLink className="h-3 w-3" />
      </a>
    ),
  },
  {
    key: "organizers",
    header: "Organizers",
    className: "min-w-[250px]",
  },
  {
    key: "schedule",
    header: "Schedule",
    className: "min-w-[120px]",
    render: (value) => (
      <span className="inline-flex rounded-full bg-session-workshop/10 px-3 py-1 text-xs font-medium text-session-workshop">
        {String(value)}
      </span>
    ),
  },
  {
    key: "venue",
    header: "Venue",
    className: "min-w-[80px]",
    render: (value) => (
      <span className="inline-flex rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground">
        {String(value)}
      </span>
    ),
  },
];

export default function Workshops() {
  return (
    <PageLayout
      title="Workshops"
      description="Hands-on workshop sessions"
    >
      <DataTable<WorkshopEntry>
        data={workshopsData}
        columns={columns}
      />
    </PageLayout>
  );
}
