export const dynamic = 'force-dynamic';

import HeroWaves from "@/components/HeroWaves";
import TestimonialsAnimated from "@/components/TestimonialsAnimated";
import CTASparkles from "@/components/CTASparkles";
import ScrollReveal from "@/components/ScrollReveal";

export default function TestimonialsPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroWaves />
      </div>
      <ScrollReveal>
        <div className="animate-fade-in-up">
          <TestimonialsAnimated
            title="Reviews From the Floor"
            subtitle="A few words from members training in Austin."
            testimonials={[
              {
                quote:
                  "The coaching is the difference. I feel challenged without feeling lost. I’ve never been this consistent.",
                name: "Hannah R.",
                designation: "Peak Member",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577325/site-images/team-people/10347164.jpg",
              },
              {
                quote:
                  "Boxing is addictive—in the best way. Technique first, then a serious workout. I’m stronger and leaner.",
                name: "Luis M.",
                designation: "Elite Member",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577351/site-images/team-people/12903244.jpg",
              },
              {
                quote:
                  "Yoga improved my mobility and helped my back pain. The vibe is motivating, not intimidating.",
                name: "Alyssa K.",
                designation: "Starter Member",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577363/site-images/team-people/12903169.jpg",
              },
            ]}
            autoplay
          />
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
