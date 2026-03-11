export const dynamic = 'force-dynamic';

import HeroLamp from "@/components/HeroLamp";
import ContactForm from "@/components/ContactForm";
import LocationMap from "@/components/LocationMap";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroLamp />
      </div>
      <ScrollReveal>
        <div className="animate-fade-in-up" id="contact-form">
          <ContactForm
            headline="Contact Iron Peak Fitness"
            subheadline="We respond within 1 business day. For same-day questions, call the front desk."
            contactInfo={[
              { icon: "MapPin", label: "Address", value: "2710 S Lamar Blvd, Suite 120, Austin, TX 78704" },
              { icon: "Phone", label: "Phone", value: "(512) 555-0198" },
              { icon: "Mail", label: "Email", value: "hello@ironpeakfitness.com" },
            ]}
          />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="animate-fade-in-up">
          <LocationMap />
        </div>
      </ScrollReveal>
    </main>
  );
}
