import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Execution Model', href: '#execution-model' },
  { label: 'Global Reach', href: '#reach' },
  { label: 'About Us', href: '#about' }
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_4px_24px_rgba(0,0,0,0.35)]' : ''
      } bg-primary`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex items-center justify-between h-[68px]">
        {/* Logo */}
        <a href="#">
          <img
            src="/AZT_LLC_LOGO.png"
            alt="AZT LLC"
            className="h-[38px] md:h-[46px] object-contain"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="nav-link">{l.label}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex">
          <a
            href="#inquiry"
            className="bg-white text-primary px-6 py-2.5 font-black tracking-widest uppercase text-[10px] hover:bg-accent transition-colors duration-200 active:scale-95"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Separator */}
      <div className="h-px w-full bg-accent opacity-20" />

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-primary px-6 pb-6 pt-2 flex flex-col gap-4 border-t border-accent/20">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="nav-link text-sm" onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="#inquiry"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-white text-primary px-6 py-3 font-black tracking-widest uppercase text-[10px] text-center hover:bg-accent transition-colors"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
