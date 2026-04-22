const certs = ['ITAR Compliant', 'Export Control Managed', 'ISO 9001 Standards', 'Mission Readiness Certified'];
const resources = ['Careers', 'NewsRoom', 'Privacy Policy'];

export default function Footer() {
  return (
    <footer className="bg-primary text-accent pt-20 pb-10 border-t border-accent/20">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">

          {/* Identity */}
          <div className="space-y-5">
            <img
              src="/AZT_LLC_LOGO.png"
              alt="AZT LLC"
              className="h-auto max-w-[180px] object-contain"
              style={{ imageRendering: '-webkit-optimize-contrast', filter: 'brightness(0) invert(1)' }}
            />
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
                <li key={c} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-accent flex-shrink-0" />
                  <a href="#about" className="hover:text-white transition-colors">{c}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-5">
            <h4 className="text-white text-[10px] font-black uppercase tracking-widest">Resources</h4>
            <ul className="text-xs space-y-2 font-medium">
              {resources.map((r) => (
                <li key={r}>
                  <a href="#about" className="hover:text-white transition-colors">{r}</a>
                </li>
              ))}
            </ul>
            {/* LinkedIn */}
            <a href="https://linkedin.com/company/azt-llc" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-accent hover:text-white transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Legal bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col items-center gap-3">
          <p className="text-[9px] uppercase tracking-widest opacity-40 text-center">
            © {new Date().getFullYear()} AZT LLC. All Rights Reserved. ITAR Compliant.
          </p>
          <p className="text-[9px] uppercase tracking-wider opacity-30 text-center max-w-2xl leading-loose">
            AZT LLC operates in strict accordance with ITAR and EAR regulations. All strategic programs
            are subject to U.S. and International export control laws.
          </p>
        </div>
      </div>
    </footer>
  );
}
