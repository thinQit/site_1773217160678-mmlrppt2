export const dynamic = 'force-dynamic';

import HeroStarfield from "@/components/HeroStarfield";
import TransformationGallery from "@/components/TransformationGallery";
import CTASparkles from "@/components/CTASparkles";
import ScrollReveal from "@/components/ScrollReveal";

export default function TransformationsPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroStarfield />
      </div>
      <ScrollReveal>
        <div className="animate-fade-in-up">
          <TransformationGallery />
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
