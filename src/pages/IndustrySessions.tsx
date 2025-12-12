import { PageLayout } from "@/components/PageLayout";
import industrySessionsData from "@/data/industrySessions.json";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface IndustrySession {
  sessionId: string;
  duration: string;
  companies: string[];
}

export default function IndustrySessions() {
  return (
    <PageLayout
      title="Industry Sessions"
      description="Presentations from industry partners"
    >
      <div className="rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-border/50 hover:bg-transparent">
              <TableHead className="text-primary font-semibold w-[180px]">Session ID</TableHead>
              <TableHead className="text-primary font-semibold">Companies / Experts</TableHead>
              <TableHead className="text-primary font-semibold text-right w-[150px]">Duration</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {(industrySessionsData as IndustrySession[]).map((session, index) => (
              <TableRow 
                key={index} 
                className="border-border/50 hover:bg-primary/5 transition-colors"
              >
                <TableCell className="font-medium text-muted-foreground">
                  {session.sessionId.replace("Industry Session - ", "IS")}
                </TableCell>
                <TableCell className="text-foreground">
                  {session.companies.length > 0 
                    ? session.companies.join(", ")
                    : <span className="text-muted-foreground italic">TBA</span>
                  }
                </TableCell>
                <TableCell className="text-right">
                  {session.duration && (
                    <span className="inline-flex rounded-full bg-orange-500/20 px-3 py-1 text-xs font-medium text-orange-400">
                      {session.duration}
                    </span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <p className="text-sm text-muted-foreground mt-4">
        Showing {industrySessionsData.length} of {industrySessionsData.length} entries
      </p>
    </PageLayout>
  );
}
