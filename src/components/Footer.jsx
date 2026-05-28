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
    <footer className="bg-primary text-accent pt-20 pb-10 border-t border-accent/20">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">

          {/* Identity */}
          <div className="space-y-5">
            <div className="bg-white inline-block px-4 py-2.5 rounded-sm shadow-sm">
              <img
                src="/AZT_LLC_LOGO.png"
                alt="AZT LLC"
                className="h-auto max-w-[130px] object-contain"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
              />
            </div>
            <p className="text-[14px] leading-relaxed uppercase tracking-widest font-black text-white">
              AZT LLC
            </p>
            <p className="text-[14px] leading-relaxed font-medium opacity-65">
              Strategic Solutions,<br />Powered by Global Expertise.
            </p>
          </div>

          {/* HQ */}
          <div className="space-y-5">
            <h4 className="text-white text-[14px] font-black uppercase tracking-widest">U.S. Headquarters</h4>
            <div className="text-[15px] space-y-2 font-medium leading-relaxed">
              <p>2380 Diana Dr,<br />Hallandale Beach, FL 33009, USA</p>
              <p className="font-bold text-[16px] text-white">+1 (954) 683-9458</p>
              <a
                href="mailto:aztradingpower@outlook.com"
                className="text-[15px] text-secondary hover:text-white transition-colors"
              >
                aztradingpower@outlook.com
              </a>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-5">
            <h4 className="text-white text-[14px] font-black uppercase tracking-widest">Certifications</h4>
            <ul className="text-[15px] space-y-2 font-medium">
              {certs.map((c) => (
                <li key={c} className="flex items-center gap-2">
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
          <div className="space-y-5">
            <h4 className="text-white text-[14px] font-black uppercase tracking-widest">Resources</h4>
            <ul className="text-[15px] space-y-3 font-medium">
              {resources.map(({ label, href, note }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="hover:text-white transition-colors block"
                  >
                    {label}
                    {note && (
                      <span className="block text-[13px] opacity-70 font-medium mt-0.5">{note}</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Legal bar */}
        <div className="border-t border-accent/20 pt-8 text-center space-y-2">
          <p className="text-[14px] font-medium opacity-70">
            &copy; {new Date().getFullYear()} AZT LLC. All Rights Reserved.
          </p>
          <p className="text-[13px] font-medium opacity-60 max-w-2xl mx-auto leading-relaxed">
            All international programs are conducted in compliance with applicable U.S. and international trade regulations through licensed partners.
          </p>
        </div>
      </div>
    </footer>
  );
}
