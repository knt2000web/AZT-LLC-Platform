const items = [
  'GLOBAL LOGISTICS',
  'AERO-TECH SYSTEMS',
  'SECURE MARITIME',
  'DEFENSE-LINK',
  'PRECISION ENG',
  'ITAR COMPLIANT',
];

export default function OEMStrip() {
  return (
    <section className="bg-white py-6 border-b border-accent/20 overflow-hidden">
      <div className="flex animate-marquee items-center gap-10 whitespace-nowrap">
        {/* Render the items multiple times to create a seamless loop */}
        {[...items, ...items, ...items].map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10">
            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.28em] text-secondary/60">
              {item}
            </span>
            <span className="text-accent/30 select-none">|</span>
          </span>
        ))}
      </div>
    </section>
  );
}
