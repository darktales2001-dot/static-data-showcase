import { PageLayout } from "@/components/PageLayout";
import { DataTable } from "@/components/DataTable";
import tutorialsData from "@/data/tutorials.json";
import React from "react";
import { ExternalLink } from "lucide-react";

interface TutorialEntry {
  tutorialId: string;
  tutorialTitle: string;
  speaker: string;
  slot: string;
  website: string;
}

const columns: {
  key: keyof TutorialEntry;
  header: string;
  className?: string;
  render?: (value: TutorialEntry[keyof TutorialEntry], row: TutorialEntry) => React.ReactNode;
}[] = [
  {
    key: "tutorialId",
    header: "Tutorial ID",
    className: "w-24 text-center",
  },
  {
    key: "tutorialTitle",
    header: "Tutorial Title",
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
    key: "speaker",
    header: "Speaker",
    className: "min-w-[250px]",
  },
  {
    key: "slot",
    header: "Slot",
    className: "min-w-[120px]",
    render: (value) => (
      <span className="inline-flex rounded-full bg-session-workshop/10 px-3 py-1 text-xs font-medium text-session-workshop">
        {String(value)}
      </span>
    ),
  },
];

export default function Tutorials() {
  return (
    <PageLayout
      title="Tutorials"
      description="Educational tutorial sessions"
    >
      <DataTable<TutorialEntry>
        data={tutorialsData}
        columns={columns}
      />
    </PageLayout>
  );
}
