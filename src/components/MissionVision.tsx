import { Flame, Eye } from "lucide-react";

const pillars = [
  {
    icon: Flame,
    label: "Our Mission",
    title: "To declutter the digital spiritual life.",
    body: "Currently, a believer must jump between five different apps for Bible study, music, podcasts, and community. The Lightapp unifies these experiences into a seamless, high-performance environment that honors God through excellence and simplicity.",
  },
  {
    icon: Eye,
    label: "Our Vision",
    title: "To be the world's most accessible spiritual platform.",
    body: "Reaching from the most connected metropolises to the most remote unreached regions — ensuring that \"The Light\" shines everywhere.",
  },
];

export const MissionVision = () => (
  <section id="mission" className="relative py-24 md:py-36 border-t hairline overflow-hidden">
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[140px]"
    />

    <div className="container-light relative">
      <div className="max-w-2xl mx-auto text-center">
        <p className="reveal text-xs uppercase tracking-[0.2em] text-accent">Why we exist</p>
        <h2 className="reveal mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight text-balance">
          A digital city <span className="text-gradient-gold">built upon a hill.</span>
        </h2>
        <p className="reveal mt-5 text-muted-foreground text-balance">
          Every line of code, every pixel, every sound — written in service of a higher calling.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        {pillars.map(({ icon: Icon, label, title, body }) => (
          <article
            key={label}
            className="reveal shimmer-border lift group relative rounded-3xl border hairline bg-[hsl(var(--surface))]/40 p-8 md:p-12 transition-all hover:border-accent/30 hover:bg-[hsl(var(--surface))]/70"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
            />

            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-accent/5 text-accent">
                <Icon className="h-4 w-4" strokeWidth={1.75} />
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-accent">{label}</span>
            </div>

            <h3 className="mt-8 font-display text-2xl md:text-3xl font-semibold leading-tight tracking-tight text-balance">
              {title}
            </h3>

            <p className="mt-5 text-muted-foreground leading-relaxed text-balance">
              {body}
            </p>
          </article>
        ))}
      </div>

      <p className="reveal mt-16 text-center font-display text-lg md:text-xl text-foreground/80 italic">
        "We are The Lightapp."
      </p>
    </div>
  </section>
);
