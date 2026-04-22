const locations = [
  { title: 'North American HQ',     desc: 'Strategic procurement and executive leadership.' },
  { title: 'European Hub',          desc: 'Aviation engineering and NATO standard integration.' },
  { title: 'M.E. / Africa Ops',     desc: 'Field support and infrastructure development.' },
];

export default function GlobalReach() {
  return (
    <section id="reach" className="bg-surface-container py-24 md:py-36 border-t border-accent/20">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-28 items-center">

          {/* Map visual */}
          <div className="order-2 lg:order-1">
            <div className="aspect-square bg-primary/5 relative p-4 md:p-10 border border-accent/40">
              <img
                src="/azt_world_map.png"
                alt="Global Intelligence Map"
                className="w-full h-full object-contain opacity-60"
                loading="lazy"
              />
              {/* Badge */}
              <div className="absolute -bottom-5 -right-5 md:-bottom-8 md:-right-8 bg-white p-6 shadow-2xl border border-accent/30 max-w-[200px]">
                <p className="font-black text-3xl text-primary mb-0.5">45+</p>
                <p className="text-[10px] uppercase tracking-widest text-accent font-semibold">Operational Theaters</p>
                <div className="w-full h-px bg-accent/30 my-3" />
                <p className="text-[10px] leading-relaxed text-secondary">
                  Strategic presence in key sovereign territories with secure supply lines.
                </p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <span className="section-label">Intelligence Network</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary leading-tight mb-8">
              Global Command.<br />Local Execution.
            </h2>
            <p className="text-base md:text-lg text-secondary mb-12 max-w-lg leading-relaxed">
              Our partner network spans six continents, allowing us to navigate complex regulatory
              landscapes and provide on-the-ground support in the world's most demanding environments.
            </p>
            <ul className="space-y-6">
              {locations.map(({ title, desc }) => (
                <li key={title} className="flex items-start gap-4">
                  <span
                    className="material-symbols-outlined text-primary border border-accent p-1 flex-shrink-0"
                    style={{ fontVariationSettings: "'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24", fontSize: '22px' }}
                  >
                    location_on
                  </span>
                  <div>
                    <h6 className="font-black text-sm uppercase text-primary mb-0.5">{title}</h6>
                    <p className="text-xs text-secondary">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
