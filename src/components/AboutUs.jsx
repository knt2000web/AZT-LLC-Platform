const pillars = [
  {
    icon: 'verified',
    title: 'Compliance First',
    desc: 'All operations are conducted in strict accordance with ITAR, EAR, and applicable U.S. export control laws. AZT LLC maintains continuous compliance monitoring across all engagements.',
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
  { label: 'ITAR Compliant',            detail: 'Registered under the International Traffic in Arms Regulations' },
  { label: 'EAR Managed',               detail: 'Export Administration Regulations compliance across all programs' },
  { label: 'ISO 9001 Standards',         detail: 'Quality management aligned with international ISO frameworks' },
  { label: 'Mission Readiness Certified',detail: 'Platforms delivered to operational readiness specifications' },
  { label: 'SAM.gov / CAGE Ready',       detail: 'CAGE Code processing available upon authorized request' },
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
              <p className="text-[10px] font-black uppercase tracking-widest text-accent mb-2">U.S. Government Procurement</p>
              <p className="text-accent/60 text-xs leading-relaxed">
                AZT LLC is prepared for registration in SAM.gov and CAGE Code issuance for federal
                contracting purposes. For authorized procurement inquiries, contact us via the
                Secure Inquiry Portal.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom stat bar */}
        <div className="border-t border-accent/20 pt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '45+', label: 'Operational Theaters' },
            { value: '20+', label: 'Years Combined Experience' },
            { value: '6',   label: 'Continents Active' },
            { value: '100%', label: 'ITAR Compliant' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-white text-4xl md:text-5xl font-black tracking-tighter">{value}</p>
              <p className="text-accent/50 text-[10px] uppercase tracking-widest font-semibold mt-2">{label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
