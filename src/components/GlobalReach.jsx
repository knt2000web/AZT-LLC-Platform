const locations = [
  {
    title: 'North America',
    desc: 'United States · Canada · Mexico',
  },
  {
    title: 'Latin America',
    desc: 'Colombia · Ecuador · Chile · Argentina · El Salvador',
  },
  {
    title: 'Europe',
    desc: 'United Kingdom · Poland · Belgium · North Macedonia',
  },
  {
    title: 'Middle East',
    desc: 'Qatar · UAE · Oman · Saudi Arabia · Israel',
  },
  {
    title: 'Africa',
    desc: 'Egypt',
  },
  {
    title: 'Asia-Pacific',
    desc: 'Vietnam · Indonesia',
  },
];

export default function GlobalReach() {
  return (
    <section id="reach" className="bg-surface-container py-12 md:py-16 border-t border-accent/20">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Map visual */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative w-full aspect-square md:aspect-auto md:h-[500px] overflow-hidden rounded-sm shadow-sm border border-accent/20">
              <img
                src="/azt_world_map_v2.png"
                alt="AZT LLC Global Network — 21 Countries across Americas, Europe, Middle East, Africa and Asia-Pacific"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-6 -right-2 md:-bottom-8 md:-right-6 bg-white p-6 md:p-8 shadow-2xl border-l-4 border-l-accent max-w-[220px]">
              <p className="font-black text-4xl text-primary mb-1">21</p>
              <p className="text-[13px] uppercase tracking-widest text-accent font-black">Countries · 6 Regions</p>
              <div className="w-full h-px bg-accent/20 my-4" />
              <p className="text-[14px] leading-relaxed text-secondary font-medium">
                Verified commercial access across the Americas, Europe, Middle East, Africa, and Asia-Pacific.
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
            <ul className="space-y-4">
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
                    <h6 className="text-[15px] font-black uppercase tracking-widest text-primary">{title}</h6>
                    <p className="text-[15px] text-secondary leading-relaxed mt-0.5">{desc}</p>
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
