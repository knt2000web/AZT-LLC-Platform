const domains = [
  {
    title: 'Aviation Solutions',
    desc:  'Fixed and rotary-wing asset management, overhaul, and modernization programs.',
    img:   '/azt_aviation.png',
    alt:   'Military aviation and rotary-wing asset modernization for global defense',
  },
  {
    title: 'Integrated Defense',
    desc:  'Turnkey defense systems and tactical intelligence infrastructure.',
    img:   '/azt_defense.png',
    alt:   'Integrated defense systems and tactical intelligence deployment',
  },
  {
    title: 'Maritime Security',
    desc:  'Coastal surveillance, port security, and specialized marine platforms.',
    img:   '/azt_maritime.png',
    alt:   'Maritime security, coastal surveillance and naval operational platforms',
  },
  {
    title: 'Critical Infrastructure',
    desc:  'Hardening of physical and digital assets against emerging threats.',
    img:   '/azt_infrastructure.png',
    alt:   'Critical infrastructure protection and asset hardening for defense operations',
  },
  {
    title: 'Mining & Energy',
    desc:  'Explosives, energy raw materials, and initiation systems for industrial and sovereign programs.',
    img:   '/azt_mining_energy.png',
    alt:   'Open-pit mining operations, explosives supply chain and energy systems for industrial programs',
  },
];

export default function Domains() {
  return (
    <section id="capabilities" className="bg-surface-container py-12 md:py-16 border-t border-accent/20">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <span className="section-label">Portfolios</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-primary">
              Core Capability Domains
            </h2>
          </div>
          <a href="#capabilities" className="text-[14px] font-black uppercase border-b-2 border-primary pb-1 tracking-widest hover:text-primary/70 transition-colors">
            All Capabilities
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {domains.map(({ title, desc, img, alt }) => (
            <div
              key={title}
              className="group relative overflow-hidden bg-primary cursor-pointer border border-accent/30"
              style={{ aspectRatio: '3/4' }}
            >
              <img
                src={img}
                alt={alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                <h3 className="text-white text-lg font-black uppercase mb-2 tracking-tight">{title}</h3>
                <p className="text-white/95 text-[15px] leading-relaxed transform transition-all duration-300">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
