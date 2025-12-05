import { PageLayout } from "@/components/PageLayout";
import { DataTable } from "@/components/DataTable";
import industrySessionsData from "@/data/industrySessions.json";
import React from "react";

interface IndustrySessionEntry {
  sessionId: string;
  duration: string;
  company: string;
}

const columns: {
  key: keyof IndustrySessionEntry;
  header: string;
  className?: string;
  render?: (value: IndustrySessionEntry[keyof IndustrySessionEntry], row: IndustrySessionEntry) => React.ReactNode;
}[] = [
  {
    key: "sessionId",
    header: "Session",
    className: "min-w-[180px]",
    render: (value, row) => (
      <div>
        <div className="font-medium">{String(value)}</div>
        <div className="text-xs text-muted-foreground">{row.duration}</div>
      </div>
    ),
  },
  {
    key: "company",
    header: "Company / Expert",
    className: "min-w-[200px] font-medium",
  },
  {
    key: "duration",
    header: "Duration",
    className: "min-w-[100px]",
    render: (value) => (
      <span className="inline-flex rounded-full bg-session-industry/10 px-3 py-1 text-xs font-medium text-session-industry">
        {String(value)}
      </span>
    ),
  },
];

export default function IndustrySessions() {
  return (
    <PageLayout
      title="Industry Sessions"
      description="Presentations from industry partners"
    >
      <DataTable<IndustrySessionEntry>
        data={industrySessionsData}
        columns={columns}
      />
    </PageLayout>
  );
}
