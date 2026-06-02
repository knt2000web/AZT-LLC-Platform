const certs = [
  'Export Control Managed',
  'ISO 9001 Standards',
  'Global Trade Compliance',
];

const resources = [
  { label: 'Careers',        href: '#about' },
  { label: 'NewsRoom',       href: '#about' },
  { label: 'Privacy Policy', href: '#about', note: 'Available upon request' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-accent pt-14 pb-8 border-t border-accent/20">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 mb-12">

          {/* Identity */}
          <div className="space-y-4">
            <div className="bg-white inline-block px-4 py-2.5 rounded-sm shadow-sm">
              <img
                src="/AZT_LLC_LOGO.png"
                alt="AZT LLC"
                className="h-auto max-w-[130px] object-contain"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
              />
            </div>
            <p className="text-[15px] leading-relaxed uppercase tracking-widest font-black text-white">
              AZT LLC
            </p>
            <p className="text-[15px] leading-relaxed font-medium text-white/75">
              Strategic Solutions,<br />Powered by Global Expertise.
            </p>
          </div>

          {/* HQ */}
          <div className="space-y-4">
            <h4 className="text-white text-[15px] font-black uppercase tracking-widest">U.S. Headquarters</h4>
            <div className="space-y-2 leading-relaxed">
              <p className="text-white/85 text-[15px] font-medium">2380 Diana Dr,<br />Hallandale Beach, FL 33009, USA</p>
              <p className="font-bold text-[16px] text-white">+1 (954) 683-9458</p>

              {/* Primary emails — white, fully readable */}
              <div className="space-y-1 pt-1">
                <a
                  href="mailto:fabiangiraldo@azt-llc.com"
                  className="block text-[15px] text-white font-medium hover:text-accent transition-colors"
                >
                  fabiangiraldo@azt-llc.com
                </a>
                <a
                  href="mailto:nsvedarsky@azt-llc.com"
                  className="block text-[15px] text-white font-medium hover:text-accent transition-colors"
                >
                  nsvedarsky@azt-llc.com
                </a>
                {/* Legacy / backup email — softer tone as requested */}
                <a
                  href="mailto:aztradingpower@outlook.com"
                  className="block text-[14px] text-accent/70 hover:text-white transition-colors mt-1"
                >
                  aztradingpower@outlook.com
                </a>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <h4 className="text-white text-[15px] font-black uppercase tracking-widest">Certifications</h4>
            <ul className="text-[15px] space-y-2 font-medium">
              {certs.map((c) => (
                <li key={c} className="flex items-center gap-2 text-white/85">
                  <span
                    className="material-symbols-outlined text-accent flex-shrink-0"
                    translate="no"
                    style={{ fontSize: '16px' }}
                  >
                    check_circle
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-white text-[15px] font-black uppercase tracking-widest">Resources</h4>
            <ul className="text-[15px] space-y-2.5 font-medium">
              {resources.map(({ label, href, note }) => (
                <li key={label}>
                  <a href={href} className="text-white/85 hover:text-white transition-colors block">
                    {label}
                    {note && (
                      <span className="block text-[14px] text-white/55 font-medium mt-0.5">{note}</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Legal bar */}
        <div className="border-t border-accent/20 pt-6 text-center space-y-1.5">
          <p className="text-[14px] font-medium text-white/70">
            &copy; {new Date().getFullYear()} AZT LLC. All Rights Reserved.
          </p>
          <p className="text-[14px] font-medium text-white/55 max-w-2xl mx-auto leading-relaxed">
            All international programs are conducted in compliance with applicable U.S. and international trade regulations through licensed partners.
          </p>
        </div>
      </div>
    </footer>
  );
}
