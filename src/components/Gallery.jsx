import { useState } from 'react';

const photos = [
  { src: '/fotos/p01.jpg', cat: 'Mining & Energy',     alt: 'Large-scale open-pit mining operation' },
  { src: '/fotos/p02.jpg', cat: 'Operations',           alt: 'Field operational support' },
  { src: '/fotos/p03.jpg', cat: 'Mining & Energy',     alt: 'Underground mine tunnel with drilling equipment' },
  { src: '/fotos/p04.jpg', cat: 'Operations',           alt: 'Field program execution' },
  { src: '/fotos/p05.jpg', cat: 'Operations',           alt: 'Operational deployment' },
  { src: '/fotos/p07.jpg', cat: 'Operations',           alt: 'Field operations support' },
  { src: '/fotos/p08.jpg', cat: 'Maritime',             alt: 'Naval patrol vessel at sea' },
  { src: '/fotos/p09.jpg', cat: 'Field Logistics',      alt: 'Industrial logistics and explosives transport convoy' },
  { src: '/fotos/p10.jpg', cat: 'Supply Chain',         alt: 'Secure warehouse with industrial container storage' },
  { src: '/fotos/p11.jpg', cat: 'Operations',           alt: 'Operational site management' },
  { src: '/fotos/p12.jpg', cat: 'Defense Expo',         alt: 'International defense exhibition attendance' },
  { src: '/fotos/p13.jpg', cat: 'Defense Expo',         alt: 'Defense industry engagement and networking' },
  { src: '/fotos/p14.jpg', cat: 'Operations',           alt: 'Program execution and coordination' },
  { src: '/fotos/p15.jpg', cat: 'Operations',           alt: 'Field support and logistics coordination' },
  { src: '/fotos/p16.jpg', cat: 'Operations',           alt: 'Tactical operations support' },
  { src: '/fotos/p17.jpg', cat: 'Operations',           alt: 'Sovereign capability program deployment' },
  { src: '/fotos/p18.jpg', cat: 'Operations',           alt: 'Integrated program management' },
  { src: '/fotos/p19.jpg', cat: 'Operations',           alt: 'Strategic logistics coordination' },
  { src: '/fotos/p20.jpg', cat: 'Defense Expo',         alt: 'Armored vehicle at international defense exhibition (KNDS)' },
  { src: '/fotos/p21.jpg', cat: 'Operations',           alt: 'Defense systems procurement and evaluation' },
  { src: '/fotos/p22.jpg', cat: 'Operations',           alt: 'Field program coordination' },
  { src: '/fotos/p23.jpg', cat: 'Operations',           alt: 'Operational readiness assessment' },
  { src: '/fotos/p24.jpg', cat: 'Defense Expo',         alt: 'International defense industry exhibition' },
  { src: '/fotos/p25.jpg', cat: 'Operations',           alt: 'AZT LLC operational program' },
  { src: '/fotos/p26.jpg', cat: 'Operations',           alt: 'AZT LLC field engagement' },
  { src: '/fotos/p27.jpg', cat: 'Operations',           alt: 'AZT LLC strategic program execution' },
  { src: '/fotos/p28.jpg', cat: 'Operations',           alt: 'AZT LLC international operations' },
  { src: '/fotos/p29.jpg', cat: 'Operations',           alt: 'AZT LLC capability deployment' },
  { src: '/fotos/p30.jpg', cat: 'Operations',           alt: 'AZT LLC program support' },
];

const CAT_COLORS = {
  'Maritime':        'bg-blue-900/80 text-blue-200',
  'Mining & Energy': 'bg-amber-900/80 text-amber-200',
  'Field Logistics': 'bg-orange-900/80 text-orange-200',
  'Supply Chain':    'bg-slate-800/80 text-slate-200',
  'Defense Expo':    'bg-green-900/80 text-green-200',
  'Operations':      'bg-primary/80 text-accent/90',
};

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null); // index or null

  return (
    <section id="gallery" className="bg-white py-16 md:py-24 border-t border-accent/10">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="mb-12">
          <span className="section-label">Operational Evidence</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary leading-tight mt-3 mb-4">
            Real Programs.<br />
            <span className="text-accent">Real Results.</span>
          </h2>
          <p className="text-secondary text-base max-w-xl leading-relaxed">
            From defense exhibitions and maritime operations to energy logistics
            and mining programs — AZT LLC delivers across sectors and geographies.
          </p>
        </div>

        {/* Masonry grid using CSS columns */}
        <div
          className="columns-2 sm:columns-3 lg:columns-4 gap-3"
          style={{ columnGap: '12px' }}
        >
          {photos.map((photo, i) => (
            <div
              key={i}
              className="break-inside-avoid mb-3 relative group cursor-pointer overflow-hidden"
              onClick={() => setLightbox(i)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/50 transition-all duration-300 flex items-end p-3">
                <span
                  className={`
                    text-[9px] font-black uppercase tracking-widest px-2 py-1
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    ${CAT_COLORS[photo.cat] ?? 'bg-primary/80 text-accent'}
                  `}
                >
                  {photo.cat}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Caption */}
        <p className="text-center text-[11px] text-secondary/40 uppercase tracking-widest mt-8">
          Proprietary operational photography — All rights reserved AZT LLC
        </p>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[999] bg-black/92 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full" onClick={e => e.stopPropagation()}>
            <img
              src={photos[lightbox].src}
              alt={photos[lightbox].alt}
              className="w-full max-h-[85vh] object-contain"
            />
            {/* Category badge */}
            <div className="absolute top-3 left-3">
              <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1.5 ${CAT_COLORS[photos[lightbox].cat]}`}>
                {photos[lightbox].cat}
              </span>
            </div>
            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 text-white/70 hover:text-white text-2xl leading-none font-light"
              aria-label="Close"
            >
              ✕
            </button>
            {/* Prev / Next */}
            <div className="flex justify-between mt-3">
              <button
                onClick={() => setLightbox((lightbox - 1 + photos.length) % photos.length)}
                className="text-white/60 hover:text-white text-xs uppercase tracking-widest font-black px-4 py-2 border border-white/20 hover:border-accent transition-colors"
              >
                ← Prev
              </button>
              <span className="text-white/30 text-xs self-center">
                {lightbox + 1} / {photos.length}
              </span>
              <button
                onClick={() => setLightbox((lightbox + 1) % photos.length)}
                className="text-white/60 hover:text-white text-xs uppercase tracking-widest font-black px-4 py-2 border border-white/20 hover:border-accent transition-colors"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
