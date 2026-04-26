import { ArrowRight, Play } from "lucide-react";

export const FinalCTA = () => (
  <section id="download" className="relative py-24 md:py-36 overflow-hidden border-t hairline">
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[140px]"
    />
    <div className="container-light relative text-center">
      <p className="reveal text-xs uppercase tracking-[0.2em] text-accent">A digital city upon a hill</p>
      <h2 className="reveal mt-4 font-display text-4xl md:text-6xl font-bold tracking-tight text-balance max-w-3xl mx-auto leading-[1.05]">
        Let <span className="text-shimmer">The Lightapp</span> shine<br />in your everyday.
      </h2>
      <p className="reveal mt-6 text-muted-foreground text-balance max-w-xl mx-auto">
        Bring your Bible, sermons, worship, podcasts and community home. Built for believers. Built for this generation.
      </p>

      <div className="reveal mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
        <a
          href="#"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition-all w-full sm:w-auto"
        >
          <Play className="h-4 w-4 fill-current" />
          Download on Google Play
        </a>
        <a
          href="#features"
          className="group inline-flex items-center justify-center gap-2 rounded-full border hairline bg-card/40 px-6 py-3 text-sm font-medium text-foreground hover:bg-card transition-all w-full sm:w-auto"
        >
          Explore Features
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  </section>
);
