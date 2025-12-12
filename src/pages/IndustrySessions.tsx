import { PageLayout } from "@/components/PageLayout";
import industrySessionsData from "@/data/industrySessions.json";
import { Building2 } from "lucide-react";

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
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {(industrySessionsData as IndustrySession[]).map((session, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            
            <div className="relative">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {session.sessionId}
                </h3>
                {session.duration && (
                  <span className="inline-flex shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {session.duration}
                  </span>
                )}
              </div>
              
              {session.companies.length > 0 && (
                <div className="space-y-2">
                  {session.companies.map((company, companyIndex) => (
                    <div
                      key={companyIndex}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <Building2 className="h-4 w-4 text-primary/60" />
                      <span className="text-sm">{company}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
