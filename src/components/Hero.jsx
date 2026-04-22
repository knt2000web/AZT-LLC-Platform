export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center pt-[68px] overflow-hidden bg-primary">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hangar_y_avion.jpg"
          alt="Military aviation hangar and aircraft representing global defense logistics and operational readiness"
          className="w-full h-full object-cover opacity-35 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-12 py-24 md:py-36 grid grid-cols-1 md:grid-cols-2 gap-16 w-full items-center">
        <div className="space-y-8">
          {/* Kicker */}
          <p className="section-label">
            AZ Trading LLC — Integrated Defense Solutions
          </p>

          {/* Headline */}
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tighter uppercase text-shadow-sm">
            Strategic Solutions,{' '}
            <br />
            <span className="text-accent">Powered by Global Expertise.</span>
          </h1>

          {/* Tagline */}
          <p className="text-accent/80 text-sm sm:text-base md:text-xl font-light leading-relaxed max-w-lg">
            Delivering integrated capability programs for government, commercial,
            and humanitarian sectors worldwide.
          </p>

          {/* Quote rule */}
          <div className="border-l-4 border-accent pl-6 py-2">
            <p className="text-white text-sm md:text-base font-medium italic opacity-85 leading-relaxed">
              &ldquo;We don&apos;t just supply equipment; we assemble entire
              operational ecosystems into turnkey working solutions.&rdquo;
            </p>
          </div>

          {/* CTA */}
          <div className="flex gap-4 pt-4">
            <a
              href="#domains"
              className="border border-accent text-white hover:bg-white hover:text-primary px-8 py-4 font-black tracking-widest uppercase text-xs transition-all duration-300"
            >
              View Capabilities
            </a>
            <a
              href="#inquiry"
              className="bg-accent text-primary hover:bg-white px-8 py-4 font-black tracking-widest uppercase text-xs transition-all duration-300"
            >
              Secure Inquiry
            </a>
          </div>
        </div>

        {/* Stats column */}
        <div className="hidden md:flex flex-col gap-6 items-end">
          {[
            { value: '45+', label: 'Operational Theaters' },
            { value: '20+', label: 'Years Combined Experience' },
            { value: '100%', label: 'ITAR Compliant Operations' },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="border border-accent/30 bg-primary/40 backdrop-blur-sm px-10 py-6 text-right w-64"
            >
              <p className="text-white text-4xl font-black mb-1">{value}</p>
              <p className="text-accent text-[10px] uppercase tracking-widest font-semibold">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-surface to-transparent z-10" />
    </header>
  );
}
