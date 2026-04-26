import { Check, X } from "lucide-react";

const compare = [
  { ours: "One unified home for your spiritual life.", theirs: "Five different apps, scattered and noisy." },
  { ours: "The undiluted message of the Kingdom.", theirs: "Endless distraction engineered for time-on-app." },
  { ours: "Built for believers, by believers.", theirs: "Generic platforms that weren't made for your walk." },
  { ours: "Calm, focused, distraction-free.", theirs: "Algorithms that pull you away from what matters." },
];

export const Differentiation = () => (
  <section className="py-24 md:py-36 border-t hairline bg-[hsl(var(--surface))]/30 relative overflow-hidden">
    <div
      aria-hidden
      className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/5 blur-[140px]"
    />
    <div className="container-light relative">
      <div className="max-w-2xl">
        <p className="reveal text-xs uppercase tracking-[0.2em] text-accent">The difference</p>
        <h2 className="reveal mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight text-balance">
          The Kingdom deserves <span className="text-gradient-gold">its own space.</span>
        </h2>
        <p className="reveal mt-5 text-muted-foreground text-balance">
          In a world full of distractions, we built a home where your faith can breathe — without compromise.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="reveal shimmer-border rounded-2xl border border-accent/30 bg-background p-8 md:p-10 shadow-glow lift">
          <div className="flex items-center gap-2 text-accent text-xs uppercase tracking-[0.2em]">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-glow-pulse" /> The Lightapp
          </div>
          <ul className="mt-6 space-y-4">
            {compare.map((c, i) => (
              <li
                key={c.ours}
                className="flex gap-3 text-sm reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <Check className="h-5 w-5 shrink-0 text-accent" strokeWidth={2} />
                <span>{c.ours}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal rounded-2xl border hairline bg-background/50 p-8 md:p-10 lift">
          <div className="text-muted-foreground text-xs uppercase tracking-[0.2em]">The old way</div>
          <ul className="mt-6 space-y-4">
            {compare.map((c, i) => (
              <li
                key={c.theirs}
                className="flex gap-3 text-sm text-muted-foreground reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <X className="h-5 w-5 shrink-0" strokeWidth={2} />
                <span>{c.theirs}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);
