import { PageLayout } from "@/components/PageLayout";
import { GraduationCap } from "lucide-react";

export default function Tutorials() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 rounded-xl bg-session-workshop/20">
            <GraduationCap className="h-8 w-8 text-session-workshop" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Tutorials</h1>
            <p className="text-muted-foreground">Educational tutorial sessions</p>
          </div>
        </div>

        <div className="glass rounded-2xl p-8 text-center">
          <p className="text-muted-foreground text-lg">
            Tutorial details will be updated soon.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
