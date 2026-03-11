export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import SiteContainer from "@/components/SiteContainer";
import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroSpotlight />
      </div>
      <section className="py-20 md:py-28 animate-fade-in-up">
        <SiteContainer>
          <SectionHeader headline="Summary" subheadline="A simple overview of acceptable use and disclaimers." />
          <div className="mt-8 grid gap-6">
            <Card className="card-hover rounded-xl border border-border bg-card p-6">
              <h3 className="text-xl font-semibold">Health disclaimer</h3>
              <p className="mt-2 text-muted-foreground">
                Fitness activities involve risk. Consult a physician before starting any exercise program. Participate at your own risk.
              </p>
            </Card>
            <Card className="card-hover rounded-xl border border-border bg-card p-6">
              <h3 className="text-xl font-semibold">Content accuracy</h3>
              <p className="mt-2 text-muted-foreground">
                Schedules and pricing may change. Contact the gym to confirm current offerings.
              </p>
            </Card>
            <Card className="card-hover rounded-xl border border-border bg-card p-6">
              <h3 className="text-xl font-semibold">Intellectual property</h3>
              <p className="mt-2 text-muted-foreground">
                All website content and branding are property of Iron Peak Fitness unless otherwise noted.
              </p>
            </Card>
          </div>
        </SiteContainer>
      </section>
    </main>
  );
}
