import { PageLayout } from "@/components/PageLayout";
import { Building2 } from "lucide-react";

export default function IndustrySessions() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 rounded-xl bg-session-industry/20">
            <Building2 className="h-8 w-8 text-session-industry" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Industry Sessions</h1>
            <p className="text-muted-foreground">Presentations from industry partners</p>
          </div>
        </div>

        <div className="glass rounded-2xl p-8 text-center">
          <p className="text-muted-foreground text-lg">
            Industry session details will be updated soon.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
