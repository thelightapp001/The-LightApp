import { BookOpen, Mic, Music2, Headphones, Sparkles, Library, Target, Radio, Users } from "lucide-react";
import { useRef } from "react";

const features = [
  { icon: BookOpen, title: "The Bible", desc: "Read, study and reflect on Scripture with a calm, distraction-free reader built for daily encounter." },
  { icon: Mic, title: "Sermons", desc: "A growing library of anointed messages — no more hunting across YouTube tabs and bookmarks." },
  { icon: Music2, title: "Worship Music", desc: "Worship that ushers in His presence. Curated playlists to soundtrack your walk with God." },
  { icon: Headphones, title: "Podcasts", desc: "Faith-building conversations and teachings, all in one place — ready when you are." },
  { icon: Sparkles, title: "AI Light Guide", desc: "An intelligent companion to help you study, reflect and grow — rooted in the Word." },
  { icon: Library, title: "Ebook Library", desc: "Christian books at your fingertips. Read deeply, anywhere, anytime." },
  { icon: Target, title: "Spiritual Goal Tracker", desc: "Set and track prayer, reading and devotional goals. Build a consistent walk with God." },
  { icon: Radio, title: "Livestream", desc: "Tune into live services and gatherings from wherever you are in the world." },
  { icon: Users, title: "Community", desc: "Connect with believers in a space designed for encouragement, not noise." },
];

const FeatureCard = ({ icon: Icon, title, desc }: typeof features[number]) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className="reveal spotlight group relative bg-background p-8 md:p-10 transition-colors hover:bg-card/60"
    >
      <div className="relative z-10">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border hairline bg-card text-foreground transition-all duration-500 group-hover:border-accent/50 group-hover:text-accent group-hover:shadow-[0_0_30px_-5px_hsl(var(--accent)/0.4)] group-hover:-translate-y-0.5">
          <Icon className="h-5 w-5" strokeWidth={1.5} />
        </div>
        <h3 className="mt-6 font-display text-lg font-semibold transition-colors group-hover:text-accent">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};

export const Features = () => (
  <section id="features" className="py-24 md:py-36 relative">
    <div className="container-light">
      <div className="max-w-2xl">
        <p className="reveal text-xs uppercase tracking-[0.2em] text-accent">Everything in one place</p>
        <h2 className="reveal mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight text-balance">
          One home for everything<br />that <span className="text-gradient-gold">feeds your faith.</span>
        </h2>
        <p className="reveal mt-5 text-muted-foreground text-balance">
          No more jumping between five apps. Bible, sermons, worship, podcasts, AI guide, ebooks and community — beautifully unified.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(var(--hairline))] rounded-2xl overflow-hidden border hairline">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </div>
  </section>
);
