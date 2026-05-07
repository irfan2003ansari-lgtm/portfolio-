import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navLinks } from "../data/portfolio";

export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/10 bg-[var(--nav)] shadow-2xl backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#home" className="text-xl font-black tracking-tight text-[var(--text)]">
          Irfan<span className="text-cyan-300">.</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} className="nav-link" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            className="icon-button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle color theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="icon-button md:hidden" onClick={() => setOpen((value) => !value)} aria-label="Open menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[var(--nav)] px-5 py-4 backdrop-blur-xl md:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navLinks.map((link) => (
              <a key={link.href} className="nav-link" href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
