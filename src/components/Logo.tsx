export const Logo = ({ className = "" }: { className?: string }) => (
  <a href="#top" className={`flex items-center gap-2 ${className}`} aria-label="The Light App home">
    <img src="/logo.png" alt="The Light App" className="h-7 w-7" />
    <span className="font-display text-lg font-semibold tracking-tight">The Light App</span>
  </a>
);
