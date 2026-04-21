import appPreview from "@/assets/app-preview.png";

export const AppPreview = () => (
  <section id="preview" className="py-24 md:py-36 relative overflow-hidden">
    <div className="container-light">
      <div className="max-w-2xl">
        <p className="reveal text-xs uppercase tracking-[0.2em] text-accent">Preview</p>
        <h2 className="reveal mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight text-balance">
          Designed to honor God through excellence.
        </h2>
        <p className="reveal mt-5 text-muted-foreground text-balance">
          Every screen is intentional. Every interaction, considered. A space worthy of the message it carries.
        </p>
      </div>

      <div className="reveal mt-16 relative">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 mx-auto h-[60%] w-[80%] translate-y-20 rounded-full bg-accent/10 blur-[120px]"
        />
        <div className="rounded-3xl border hairline bg-[hsl(var(--surface))] p-6 md:p-12 shadow-card">
          <img
            src={appPreview}
            alt="The Light App screens preview"
            width={1600}
            height={1024}
            loading="lazy"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  </section>
);
