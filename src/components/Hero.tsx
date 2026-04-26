import heroPhone from "@/assets/hero-phone.png";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-44 pb-20 md:pb-28">
      {/* Aurora glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 h-[600px] bg-radial-gold opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/4 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[140px] animate-aurora"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-1/4 top-1/2 h-[400px] w-[400px] translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px] animate-aurora"
        style={{ animationDelay: "-7s" }}
      />

      {/* Subtle grid pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, #000 30%, transparent 70%)",
        }}
      />

      <div className="container-light relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="reveal inline-flex items-center gap-2 rounded-full border hairline bg-card/50 backdrop-blur px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-accent/40">
            <Sparkles className="h-3 w-3 text-accent" strokeWidth={2} />
            A digital city upon a hill
          </div>

          <h1 className="reveal mt-6 font-display text-5xl md:text-7xl font-bold tracking-tight text-balance leading-[1.05]">
            Your faith, <br className="hidden sm:block" />
            <span className="text-shimmer">beautifully unified.</span>
          </h1>

          <p className="reveal mt-6 text-base md:text-lg text-muted-foreground text-balance max-w-xl mx-auto">
            The Lightapp brings your Bible, sermons, worship, podcasts, devotionals, ebooks, AI guide and community into one place — built for believers, built for this generation.
          </p>

          <div className="reveal mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#features"
              className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition-all w-full sm:w-auto overflow-hidden"
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                Explore Features
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-accent/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
            </a>
            <a
              href="#download"
              className="inline-flex items-center justify-center gap-2 rounded-full border hairline bg-card/40 backdrop-blur px-6 py-3 text-sm font-medium text-foreground hover:bg-card hover:border-accent/30 transition-all w-full sm:w-auto"
            >
              <Play className="h-4 w-4 fill-current" />
              Download on Google Play
            </a>
          </div>
        </div>

        {/* Phone mockup */}
        <div className="reveal relative mt-20 md:mt-28 mx-auto max-w-[720px]">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 mx-auto h-[80%] w-[80%] translate-y-10 rounded-[60px] bg-accent/10 blur-[100px] animate-glow-pulse"
          />
          <div className="float">
            <img
              src={heroPhone}
              alt="The Lightapp interface on a modern smartphone"
              width={1024}
              height={1280}
              className="mx-auto w-full max-w-[520px] drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
