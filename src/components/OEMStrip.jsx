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
    <section className="bg-white py-6 border-b border-accent/20">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-10">
          {items.map((item, i) => (
            <span key={item} className="flex items-center gap-4 md:gap-10">
              <span className="text-[9px] font-black uppercase tracking-[0.28em] text-secondary/60">
                {item}
              </span>
              {i < items.length - 1 && (
                <span className="text-accent/30 hidden sm:block select-none">|</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
