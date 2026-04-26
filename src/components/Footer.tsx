import { Logo } from "./Logo";

const nav = [
  { title: "Product", links: [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how" },
    { label: "Preview", href: "#preview" },
    { label: "FAQ", href: "#faq" },
  ]},
  { title: "Company", links: [
    { label: "About", href: "#" },
    { label: "Press", href: "#" },
    { label: "Contact", href: "support@mylightapp.com" },
  ]},
  { title: "Legal", links: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms", href: "#" },
    { label: "Cookies", href: "#" },
  ]},
];

const SocialIcon = ({ src, label }: { src: string; label: string }) => (
  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted-foreground">
    <img src={src} alt={label} className="h-5 w-5 object-contain" />
  </span>
);

export const Footer = () => (
  <footer className="border-t hairline bg-background">
    <div className="container-light py-16">
      <div className="grid grid-cols-2 md:grid-cols-12 gap-10">
        <div className="col-span-2 md:col-span-5">
          <Logo />
          <p className="mt-5 text-sm text-muted-foreground max-w-xs">
            A Christian media platform unifying Bible, sermons, worship, podcasts, AI guide and community — in one beautifully crafted home.
          </p>
          <a
            href="mailto:support@mylightapp.com"
            className="mt-4 inline-block text-sm text-foreground hover:text-accent transition-colors"
          >
            support@mylightapp.com
          </a>
        </div>

        {nav.map((col) => (
          <div key={col.title} className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{col.title}</h4>
            <ul className="mt-5 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-foreground/80 hover:text-foreground transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 md:col-span-1 flex md:justify-end gap-4">
          <a
            href="https://x.com/The_LightApp"
            target="_blank"
            rel="noreferrer"
            aria-label="X"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <SocialIcon src="/social-icons/x.png" label="X" />
          </a>
          <a
            href="https://whatsapp.com/channel/0029VbCyNA03mFY9hnmH5G46"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <SocialIcon src="/social-icons/whatsapp.png" label="WhatsApp" />
          </a>
          <a
            href="https://www.facebook.com/share/1F8Xt6TtVw/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <SocialIcon src="/social-icons/facebook.png" label="Facebook" />
          </a>
        </div>
      </div>

      <div className="mt-14 pt-8 border-t hairline flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} The Lightapp. All rights reserved.</p>
        <p className="text-xs text-muted-foreground">Built for believers. Built for this generation.</p>
      </div>
    </div>
  </footer>
);
