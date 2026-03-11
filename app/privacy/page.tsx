export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import SiteContainer from "@/components/SiteContainer";
import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroSpotlight />
      </div>
      <section className="py-20 md:py-28 animate-fade-in-up">
        <SiteContainer>
          <SectionHeader headline="Summary" subheadline="Plain-language overview of what we collect and why." />
          <div className="mt-8 grid gap-6">
            <Card className="card-hover rounded-xl border border-border bg-card p-6">
              <h3 className="text-xl font-semibold">Information we collect</h3>
              <p className="mt-2 text-muted-foreground">
                When you submit the contact form, we may collect your name, email, phone number, and message content.
              </p>
            </Card>
            <Card className="card-hover rounded-xl border border-border bg-card p-6">
              <h3 className="text-xl font-semibold">How we use it</h3>
              <p className="mt-2 text-muted-foreground">
                We use your information to respond to your inquiry, schedule visits, and provide membership information.
              </p>
            </Card>
            <Card className="card-hover rounded-xl border border-border bg-card p-6">
              <h3 className="text-xl font-semibold">Third-party services</h3>
              <p className="mt-2 text-muted-foreground">
                If a third-party form endpoint is configured, your submission may be processed by that provider under their policies.
              </p>
            </Card>
          </div>
        </SiteContainer>
      </section>
    </main>
  );
}
