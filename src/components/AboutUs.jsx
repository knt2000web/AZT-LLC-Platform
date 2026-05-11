const pillars = [
  {
    icon: 'verified',
    title: 'Compliance First',
    desc: 'All programs are structured in alignment with U.S. export control frameworks, including ITAR and EAR. AZT LLC partners with licensed export control specialists to ensure every engagement meets applicable regulatory requirements.',
  },
  {
    icon: 'handshake',
    title: 'Single Point of Accountability',
    desc: 'We eliminate the risk of fragmented supply chains by serving as the sole accountable prime integrator — from initial sourcing through final asset handover and sustainment.',
  },
  {
    icon: 'public',
    title: 'Global Network, Local Execution',
    desc: 'With established partnerships across six continents, AZT LLC delivers in-country support while maintaining the rigorous oversight of a U.S.-headquartered organization.',
  },
  {
    icon: 'military_tech',
    title: 'Mission-Grade Standards',
    desc: 'Every program is executed to military and government procurement standards, ensuring platforms are delivered mission-ready, on-schedule, and within specification.',
  },
];

const certs = [
  { label: 'Export Control Managed',    detail: 'Programs structured in alignment with ITAR/EAR through licensed export control partners' },
  { label: 'EAR Managed',               detail: 'Export Administration Regulations compliance coordinated across all programs' },
  { label: 'ISO 9001 Standards',        detail: 'Quality management processes aligned with international ISO 9001 frameworks' },
  { label: 'Mission-Ready Standards',   detail: 'Platforms and programs delivered to government and military operational specifications' },
];

export default function AboutUs() {
  return (
    <section id="about" className="bg-primary py-16 md:py-24">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">

        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <span className="section-label text-accent/70">Corporate Profile</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-tight mt-4 mb-6">
            Built for the World's<br />
            <span className="text-accent">Most Demanding Clients.</span>
          </h2>
          <p className="text-accent/70 text-base md:text-lg leading-relaxed max-w-2xl">
            AZT LLC is a U.S.-headquartered defense logistics and strategic solutions integrator.
            Incorporated in Florida and operating globally, we specialize in the design, procurement,
            and deployment of turnkey capability programs for government, military, and commercial clients
            across six continents.
          </p>
        </div>

        {/* Two-column: pillars + certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">

          {/* Leadership pillars */}
          <div className="space-y-8">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-accent/60 mb-6">Our Operating Principles</h3>
            {pillars.map(({ icon, title, desc }) => (
              <div key={title} className="flex items-start gap-5">
                <span
                  className="material-symbols-outlined text-accent flex-shrink-0 mt-0.5"
                  translate="no"
                  style={{ fontSize: '24px' }}
                >
                  {icon}
                </span>
                <div>
                  <h4 className="text-white font-black text-sm uppercase tracking-widest mb-1">{title}</h4>
                  <p className="text-accent/60 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications + Compliance */}
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-widest text-accent/60 mb-6">Certifications &amp; Regulatory Standing</h3>
            <div className="space-y-4">
              {certs.map(({ label, detail }) => (
                <div key={label} className="border border-accent/20 p-5 flex items-start gap-4 hover:border-accent/50 transition-colors">
                  <span
                    className="material-symbols-outlined text-accent flex-shrink-0"
                    translate="no"
                    style={{ fontSize: '18px' }}
                  >
                    check_circle
                  </span>
                  <div>
                    <p className="text-white font-black text-xs uppercase tracking-widest">{label}</p>
                    <p className="text-accent/50 text-[11px] mt-0.5 leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Government procurement note */}
            <div className="mt-8 bg-accent/10 border border-accent/30 p-6">
              <p className="text-[10px] font-black uppercase tracking-widest text-accent mb-2">U.S. Federal Market Access</p>
              <p className="text-accent/60 text-xs leading-relaxed">
                AZT LLC is structured to support U.S. federal contracting requirements.
                For government procurement inquiries, contact us directly via the Secure Inquiry Portal.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom stat bar */}
        <div className="border-t border-accent/20 pt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '20+', label: 'Operational Theaters' },
            { value: '20+', label: 'Years Combined Experience' },
            { value: '6',   label: 'Continents Active' },
            { value: '100%', label: 'Export Compliant' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-white text-4xl md:text-5xl font-black tracking-tighter">{value}</p>
              <p className="text-accent/50 text-[10px] uppercase tracking-widest font-semibold mt-2">{label}</p>
            </div>
          ))}
        </div>

        {/* Leadership */}
        <div className="border-t border-accent/20 pt-12 mt-12">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-accent/60 mb-10">Executive Leadership</h3>
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 max-w-2xl">
            {/* Photo */}
            <div className="relative flex-shrink-0 w-44 md:w-52">
              <img
                src="/fabian_ceo.jpg"
                alt="Fabián Ricardo Giraldo Chaparro — CEO, AZT LLC"
                className="w-full object-cover transition-all duration-500"
                style={{ aspectRatio: '3/4' }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-primary/80 px-3 py-2">
                <span className="text-[9px] font-black uppercase tracking-widest text-accent">Chief Executive Officer</span>
              </div>
            </div>
            {/* Bio */}
            <div className="flex-1 space-y-4 pt-1">
              <div>
                <h4 className="text-white font-black text-lg md:text-xl tracking-tight leading-tight">
                  Fabián Ricardo Giraldo Chaparro
                </h4>
                <p className="text-accent/60 text-xs uppercase tracking-widest font-semibold mt-1">CEO &amp; Founder — AZT LLC</p>
              </div>
              <div className="w-8 h-px bg-accent/40" />
              <p className="text-accent/70 text-xs leading-relaxed max-w-md">
                International Business Development &amp; Strategy specialist with deep expertise in
                Defense &amp; Aerospace, Foreign Military Sales (FMS), Direct Commercial Sales (DCS),
                and strategic partnerships. Former Military Attaché with operational reach across
                LATAM, the United States, Europe, and the MENA region.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {['FMS / DCS', 'Defense & Aerospace', 'Former Military Attaché', 'LATAM · US · EU · MENA', 'Capture & Partnerships'].map(tag => (
                  <span key={tag} className="text-[9px] uppercase tracking-widest font-black border border-accent/30 text-accent/60 px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="https://www.linkedin.com/in/fabian-giraldo-7971b415/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-black text-accent hover:text-white transition-colors border border-accent/30 hover:border-accent px-4 py-2 mt-2"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                View LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
