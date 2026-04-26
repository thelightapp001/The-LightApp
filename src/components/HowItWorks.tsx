const steps = [
  { n: "01", title: "Download", desc: "Get The Lightapp on Google Play and create your space in seconds." },
  { n: "02", title: "Gather", desc: "Bring your Bible, sermons, worship, podcasts and devotionals into one home." },
  { n: "03", title: "Grow", desc: "Walk consistently with God — guided, supported and surrounded by community." },
];

export const HowItWorks = () => (
  <section id="how" className="py-24 md:py-36 border-t hairline bg-[hsl(var(--surface))]/30 relative overflow-hidden">
    <div
      aria-hidden
      className="pointer-events-none absolute right-0 top-1/2 h-[400px] w-[400px] translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]"
    />
    <div className="container-light relative">
      <div className="max-w-2xl mb-14">
        <p className="reveal text-xs uppercase tracking-[0.2em] text-accent">How it works</p>
        <h2 className="reveal mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight text-balance">
          Three steps. <span className="text-gradient-gold">Deeper walk.</span>
        </h2>
      </div>

      <div className="relative">
        {/* Connecting line on desktop */}
        <div
          aria-hidden
          className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
        />

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className="reveal lift relative rounded-2xl border hairline bg-background p-8 hover:border-accent/30 transition-colors"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 bg-accent/5 text-accent font-display text-xs font-semibold">
                  {s.n}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-hairline to-transparent" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);
