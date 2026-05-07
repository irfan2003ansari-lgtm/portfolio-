import { AtSign, GitBranch, Mail } from "lucide-react";
import { navLinks, profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
        <p>Copyright 2026 {profile.shortName}. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          {navLinks.map((link) => (
            <a key={link.href} className="transition hover:text-cyan-200" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex gap-3">
          {[
            { icon: GitBranch, href: profile.github, label: "GitHub" },
            { icon: AtSign, href: profile.instagram, label: "Instagram" },
            { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
          ].map((link) => (
            <a key={link.label} className="icon-button" href={link.href} aria-label={link.label}>
              <link.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
