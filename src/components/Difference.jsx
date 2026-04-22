const pillars = [
  {
    icon: 'device_hub',
    title: 'Unified Coordination',
    desc: 'Centralizing complex procurement and logistics under a single executive oversight framework.',
  },
  {
    icon: 'translate',
    title: 'Operational Translation',
    desc: 'Translating strategic intent into tactical deployment through engineering excellence.',
  },
  {
    icon: 'public',
    title: 'Global Access / Local Impact',
    desc: 'Leveraging international networks to deliver localized, high-impact sovereign capabilities.',
  },
  {
    icon: 'verified_user',
    title: 'Strategic Readiness',
    desc: 'Ensuring long-term sustainability and fleet readiness through specialized support structures.',
  },
];

export default function Difference() {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-28 items-start">

          {/* Left */}
          <div>
            <span className="section-label">Our Mandate</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary leading-tight mb-8">
              Bridging the Gap Between&nbsp;Concept and Capability.
            </h2>
            <p className="text-secondary text-base md:text-lg leading-relaxed max-w-xl">
              In complex, regulated, and mission-critical environments, fragmented supply chains
              lead to operational failure. AZT LLC acts as a single point of accountability,
              coordinating global suppliers to deliver mission-ready platforms.
            </p>
          </div>

          {/* Right: 2×2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12">
            {pillars.map(({ icon, title, desc }) => (
              <div key={title} className="space-y-3">
                <span className="material-icons text-4xl text-primary border border-accent p-2 inline-block">
                  {icon}
                </span>
                <h3 className="text-sm font-black uppercase tracking-tight text-primary">{title}</h3>
                <p className="text-xs text-secondary leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
