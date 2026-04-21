import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it works" },
  { href: "#preview", label: "Preview" },
  { href: "#faq", label: "FAQ" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b hairline" : "bg-transparent"
      }`}
    >
      <div className="container-light flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex">
          <a
            href="#download"
            className="group relative inline-flex items-center text-sm font-medium px-4 py-2 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity overflow-hidden"
          >
            <span className="relative z-10">Get the app</span>
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-accent/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t hairline bg-background/95 backdrop-blur-xl">
          <div className="container-light flex flex-col py-4 gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#download"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center text-sm font-medium px-4 py-3 rounded-full bg-foreground text-background"
            >
              Get the app
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
