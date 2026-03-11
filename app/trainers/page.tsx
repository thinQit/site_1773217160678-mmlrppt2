export const dynamic = 'force-dynamic';

import HeroBeams from "@/components/HeroBeams";
import TrainerCards from "@/components/TrainerCards";
import ProcessSteps from "@/components/ProcessSteps";
import CTASparkles from "@/components/CTASparkles";
import ScrollReveal from "@/components/ScrollReveal";

export default function TrainersPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroBeams />
      </div>
      <ScrollReveal>
        <div className="animate-fade-in-up">
          <TrainerCards />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="animate-fade-in-up">
          <ProcessSteps />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="animate-fade-in-up">
          <CTASparkles />
        </div>
      </ScrollReveal>
    </main>
  );
}
