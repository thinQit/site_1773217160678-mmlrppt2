export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import ClassSchedule from "@/components/ClassSchedule";
import FeatureGrid from "@/components/FeatureGrid";
import CTABand from "@/components/CTABand";
import ScrollReveal from "@/components/ScrollReveal";

export default function ClassesPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroSpotlight />
      </div>
      <ScrollReveal>
        <div className="animate-fade-in-up" id="weekly">
          <ClassSchedule />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="animate-fade-in-up">
          <FeatureGrid />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="animate-fade-in-up">
          <CTABand />
        </div>
      </ScrollReveal>
    </main>
  );
}
