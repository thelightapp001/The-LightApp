import { BookOpen, Sparkles, Globe2, Shield, Heart, Flame } from "lucide-react";

const items = [
  { icon: BookOpen, label: "Built for believers" },
  { icon: Sparkles, label: "Crafted with excellence" },
  { icon: Globe2, label: "From cities to unreached regions" },
  { icon: Shield, label: "Distraction-free by design" },
  { icon: Heart, label: "A space for His presence" },
  { icon: Flame, label: "The undiluted Kingdom" },
];

export const TrustStrip = () => (
  <section className="border-y hairline bg-[hsl(var(--surface))]/40 overflow-hidden">
    <div className="py-8 md:py-10">
      <div className="marquee">
        <div className="marquee-track">
          {[...items, ...items].map(({ icon: Icon, label }, i) => (
            <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground whitespace-nowrap">
              <Icon className="h-4 w-4 text-accent" strokeWidth={1.75} />
              <span className="tracking-wide uppercase text-xs font-medium">{label}</span>
              <span className="text-accent/30">•</span>
            </div>
          ))}
        </div>
        <div className="marquee-track" aria-hidden>
          {[...items, ...items].map(({ icon: Icon, label }, i) => (
            <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground whitespace-nowrap">
              <Icon className="h-4 w-4 text-accent" strokeWidth={1.75} />
              <span className="tracking-wide uppercase text-xs font-medium">{label}</span>
              <span className="text-accent/30">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
