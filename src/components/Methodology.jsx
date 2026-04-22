const steps = [
  { n: '01', title: 'Strategy',    desc: 'Defining mission requirements and architectural blueprints.' },
  { n: '02', title: 'Access',      desc: 'Utilizing global supply networks and trade authorizations.' },
  { n: '03', title: 'Integration', desc: 'Complex systems engineering and interoperability checks.' },
  { n: '04', title: 'Delivery',    desc: 'End-to-end tactical logistics and asset handover.' },
  { n: '05', title: 'Readiness',   desc: 'Operator training, simulation, and initial fielding.' },
  { n: '06', title: 'Sustainment', desc: 'Continuous maintenance, repair, and lifecycle support.' },
];

export default function Methodology() {
  return (
    <section id="execution-model" className="bg-white py-16 md:py-24 border-y border-accent/20">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="section-label">Methodology</span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-primary">
            Full-Cycle Execution Model
          </h2>
        </div>

        <div className="relative">
          {/* Timeline rule – desktop only */}
          <div className="absolute top-[24px] left-0 w-full h-px bg-accent/40 hidden lg:block" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-14 gap-x-6 relative z-10">
            {steps.map(({ n, title, desc }) => (
              <div key={n} className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 bg-primary text-white flex items-center justify-center font-black text-sm mb-6 group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                  {n}
                </div>
                <h4 className="font-black uppercase tracking-widest text-[10px] mb-3 text-primary">{title}</h4>
                <p className="text-[11px] text-secondary leading-relaxed px-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
