const certs = [
  'ITAR Compliant',
  'Export Control Managed',
  'ISO 9001 Standards',
  'Mission Readiness Certified',
  'SAM.gov / CAGE Ready',
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
            <p className="text-[10px] leading-relaxed uppercase tracking-widest font-black text-white">
              AZT LLC
            </p>
            <p className="text-[10px] leading-relaxed uppercase tracking-widest font-medium opacity-50">
              Strategic Solutions,<br />Powered by Global Expertise.
            </p>
          </div>

          {/* HQ */}
          <div className="space-y-5">
            <h4 className="text-white text-[10px] font-black uppercase tracking-widest">U.S. Headquarters</h4>
            <div className="text-xs space-y-2 font-medium leading-relaxed">
              <p>2380 Diana Dr,<br />Hallandale Beach, FL 33009, USA</p>
              <p className="font-black text-white">+1 (954) 683-9458</p>
              <a
                href="mailto:info@aztllc.com"
                className="text-accent hover:text-white transition-colors underline decoration-accent/30 block"
              >
                info@aztllc.com
              </a>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-5">
            <h4 className="text-white text-[10px] font-black uppercase tracking-widest">Certifications</h4>
            <ul className="text-xs space-y-2 font-medium">
              {certs.map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-accent flex-shrink-0"
                    translate="no"
                    style={{ fontSize: '14px' }}
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
            <h4 className="text-white text-[10px] font-black uppercase tracking-widest">Resources</h4>
            <ul className="text-xs space-y-3 font-medium">
              {resources.map(({ label, href, note }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="hover:text-white transition-colors block"
                  >
                    {label}
                    {note && (
                      <span className="block text-[10px] opacity-40 font-normal mt-0.5">{note}</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/azt-llc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AZT LLC on LinkedIn"
              className="inline-flex items-center justify-center w-9 h-9 border border-accent/30 hover:border-accent hover:text-white transition-colors mt-2"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Legal bar */}
        <div className="border-t border-accent/20 pt-8 text-center space-y-2">
          <p className="text-[10px] uppercase tracking-widest font-medium opacity-50">
            &copy; {new Date().getFullYear()} AZT LLC. All Rights Reserved. ITAR Compliant.
          </p>
          <p className="text-[10px] uppercase tracking-widest font-medium opacity-30 max-w-2xl mx-auto leading-relaxed">
            AZT LLC operates in strict accordance with ITAR and EAR regulations. All strategic programs are subject to U.S. and International export control laws.
          </p>
        </div>
      </div>
    </footer>
  );
}
