export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora";
import ClassSchedule from "@/components/ClassSchedule";
import TrainerCards from "@/components/TrainerCards";
import MembershipTiers from "@/components/MembershipTiers";
import TransformationGallery from "@/components/TransformationGallery";
import StatsCounter from "@/components/StatsCounter";
import CTASparkles from "@/components/CTASparkles";
import TestimonialsAnimated from "@/components/TestimonialsAnimated";
import AngledSectionDivider from "@/components/AngledSectionDivider";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroAurora
          badge="Austin, Texas • South Lamar"
          title="Austin’s High-Intensity Gym for Real Results"
          subtitle="Personal training, HIIT, yoga, spinning, and boxing—built into a weekly plan that fits your life. Start with a free trial session at Iron Peak Fitness."
          primaryCta={{ label: "Claim Free Trial", href: "/contact?intent=free-trial" }}
          secondaryCta={{ label: "View Class Schedule", href: "#classes" }}
        />
      </div>
      <AngledSectionDivider />
      <ScrollReveal>
        <div className="animate-fade-in-up">
          <ClassSchedule />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="animate-fade-in-up">
          <TrainerCards />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="animate-fade-in-up">
          <MembershipTiers />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="animate-fade-in-up">
          <TransformationGallery />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="animate-fade-in-up">
          <StatsCounter />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="animate-fade-in-up">
          <CTASparkles />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="animate-fade-in-up">
          <TestimonialsAnimated
            title="Members Who Found Their Peak"
            subtitle="From first-timers to athletes—Iron Peak is where Austin trains with purpose."
            testimonials={[
              {
                quote:
                  "I tried three gyms in Austin and this is the first one where I stayed consistent. The HIIT classes are tough but scalable, and the coaches actually correct form.",
                name: "Hannah R.",
                designation: "Peak Member • 6 months",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577358/site-images/team-people/1181401.jpg",
              },
              {
                quote:
                  "Boxing is my stress reset. I’m down two belt notches and my conditioning is the best it’s been since college.",
                name: "Luis M.",
                designation: "Elite Member • 12 weeks",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577335/site-images/team-people/1181734.jpg",
              },
              {
                quote:
                  "Yoga here isn’t just stretching—it’s strength and mobility. My back feels better at my desk job and I’m sleeping deeper.",
                name: "Alyssa K.",
                designation: "Starter Member • 2 months",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577357/site-images/team-people/1181738.jpg",
              },
            ]}
            autoplay
          />
        </div>
      </ScrollReveal>
    </main>
  );
}
