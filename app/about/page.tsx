import type { Metadata } from "next";
import MotionSection from "@/components/MotionSection";
import { siteConfig } from "@/lib/site-config";
import { Award, Users, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name}, a trusted dental practice in Cantt, Lahore.`,
};

export default function AboutPage() {
  return (
    <div className="container-page py-16 sm:py-24">
      <MotionSection>
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Our Story</p>
        <h1 className="mt-2 font-display text-4xl font-bold text-ink-900 sm:text-5xl">
          A Trusted Name in Cantt Dentistry
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-800/70">
          {siteConfig.name} has provided honest, gentle dental care to families across Cantt, Lahore for over 15
          years. Our approach is simple: listen to the patient, recommend only what's needed, and treat every visit
          with the same care we'd want for our own families.
        </p>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-800/70">
          That approach has built a community of over 15,900 people online — patients who trust us not just for
          treatment, but for straightforward advice they can rely on.
        </p>
      </MotionSection>

      <MotionSection delay={0.1} className="mt-16 grid gap-6 sm:grid-cols-3">
        {[
          { icon: Award, title: "15+ Years", desc: "Serving the Cantt community since our founding." },
          { icon: Users, title: "15,900+ Community", desc: "One of Cantt's most-followed dental practices." },
          { icon: ShieldCheck, title: "Honest Advice", desc: "No unnecessary treatments — just what you actually need." },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl border border-black/5 bg-brand-50 p-6">
            <item.icon className="h-8 w-8 text-brand-600" />
            <p className="mt-4 font-display text-xl font-bold text-ink-900">{item.title}</p>
            <p className="mt-2 text-sm text-ink-800/60">{item.desc}</p>
          </div>
        ))}
      </MotionSection>
    </div>
  );
}
