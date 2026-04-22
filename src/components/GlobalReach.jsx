const locations = [
  { title: 'North American HQ',   desc: 'Strategic procurement and executive leadership.' },
  { title: 'European Hub',        desc: 'Aviation engineering and NATO standard integration.' },
  { title: 'M.E. / Africa Ops',  desc: 'Field support and infrastructure development.' },
  { title: 'Asia-Pacific Hub',   desc: 'Maritime systems and regional defense partnerships.' },
  { title: 'Latin America Ops',  desc: 'Humanitarian logistics and sovereign capability programs.' },
  { title: 'Central Asia Ops',   desc: 'Border security, surveillance, and infrastructure projects.' },
];

export default function GlobalReach() {
  return (
    <section id="reach" className="bg-surface-container py-16 md:py-24 border-t border-accent/20">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-28 items-center">

          {/* Map visual */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative w-full aspect-square md:aspect-auto md:h-[500px] overflow-hidden rounded-sm shadow-sm border border-accent/20">
              <img
                src="/azt_world_map.png"
                alt="Global Intelligence Map"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-6 -right-2 md:-bottom-8 md:-right-6 bg-white p-6 md:p-8 shadow-2xl border-l-4 border-l-accent max-w-[220px]">
              <p className="font-black text-4xl text-primary mb-1">45+</p>
              <p className="text-[10px] md:text-xs uppercase tracking-widest text-accent font-black">Operational Theaters</p>
              <div className="w-full h-px bg-accent/20 my-4" />
              <p className="text-[10px] md:text-xs leading-relaxed text-secondary font-medium">
                Strategic presence in key sovereign territories with secure supply lines.
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 lg:pl-10">
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
                <li key={title} className="flex items-start gap-5">
                  <span
                    className="material-symbols-outlined text-accent flex-shrink-0 mt-0.5"
                    translate="no"
                    style={{ fontSize: '20px' }}
                  >
                    location_on
                  </span>
                  <div>
                    <h6 className="text-[10px] font-black uppercase tracking-widest text-primary">{title}</h6>
                    <p className="text-xs text-secondary leading-relaxed mt-0.5">{desc}</p>
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
