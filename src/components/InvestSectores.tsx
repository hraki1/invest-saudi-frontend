import { useMemo, useState } from 'react';

type Sector = {
  id: number;
  title: string;
  opportunities: number;
};

const SECTORS: Sector[] = [
  { id: 1, title: 'Advanced Manufacturing', opportunities: 28 },
  { id: 2, title: 'Aerospace & Defence', opportunities: 16 },
  { id: 3, title: 'Agriculture & Food', opportunities: 30 },
  { id: 4, title: 'Energy', opportunities: 25 },
  { id: 5, title: 'Environment Services', opportunities: 18 },
  { id: 6, title: 'Financial Services', opportunities: 22 },
  { id: 7, title: 'Human Capital & Innovation', opportunities: 14 },
  { id: 8, title: 'Information & Communication', opportunities: 26 },
  { id: 9, title: 'Mining & Metals', opportunities: 17 },
  { id: 10, title: 'Petrochemicals', opportunities: 21 },
  { id: 11, title: 'Pharma & Biotech', opportunities: 13 },
  { id: 12, title: 'Real Estate & Construction', opportunities: 19 },
  { id: 13, title: 'Tourism & Quality Of Life', opportunities: 24 },
  { id: 14, title: 'Transport & Logistics', opportunities: 20 },
  { id: 15, title: 'Healthcare Services & Devices', opportunities: 12 }
];

export default function InvestSectores() {
  const [activeId, setActiveId] = useState<number>(2);

  const active = useMemo(() => SECTORS.find(s => s.id === activeId) ?? SECTORS[0], [activeId]);

  // Map some thumbnails for preview; fallback to a generic if index is out of range
  const thumbnailFor = (idx: number) => {
    const imgs = ['/opportunities/1.png', '/opportunities/2.png', '/opportunities/3.png'];
    return imgs[idx % imgs.length] || '/opportunities-hero.png';
  };

  const iconFor = (idx: number) => {
    const icons = ['/icons/city-01.png', '/icons/coins-01.png', '/icons/catalogue.png'];
    return icons[idx % icons.length] || '/icons/globe.png';
  };

  const rowHeight = 72; // must match h-[72px]
  const activeIndex = Math.max(0, SECTORS.findIndex(s => s.id === activeId));
  const previewTop = 16 + activeIndex * rowHeight; // container padding + row offset

  return (
    <section id="invest-sectores" className="w-full bg-white py-14 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-[32px] md:text-[42px] leading-[1.15] text-slate-900 bukra-bold">Investment Sectors</h2>
          <p className="mt-3 text-slate-600 text-sm md:text-base leading-6 max-w-2xl">
            Discover the diverse investment landscape of Saudi Arabia across key sectors,
            from technology to energy, driving economic growth and innovation.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="#" className="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-cyan-600 text-white text-sm">View All Opportunities</a>
            <a href="#" className="inline-flex items-center gap-2 h-10 px-4 rounded-full border border-slate-300 text-slate-700 text-sm bg-white">Explore All Sectors</a>
          </div>
        </div>

        {/* List with inline preview image */}
        <div className="relative bg-white rounded-2xl border border-slate-200 overflow-hidden">
          {/* Overlay preview aligned with active row (desktop) */}
          <div className="hidden lg:block absolute right-5" style={{ top: previewTop }}>
            <div className="w-[220px] h-[120px] rounded-xl overflow-hidden border border-slate-200 shadow-sm">
              <img src={thumbnailFor(activeIndex)} alt="sector" className="w-full h-full object-cover" />
            </div>
          </div>

          {SECTORS.map((s, idx) => {
            const isActive = s.id === activeId;
            return (
              <button
                key={s.id}
                onClick={() => setActiveId(s.id)}
                className={[
                  'w-full text-left grid grid-cols-[48px_minmax(0,1fr)_auto] lg:grid-cols-[60px_minmax(0,1fr)_auto] items-center gap-4 px-4 md:px-6 h-[72px] border-b border-slate-100',
                  isActive ? 'bg-cyan-50/60' : 'bg-white hover:bg-slate-50'
                ].join(' ')}
              >
                <div className="flex items-center gap-2 text-slate-500">
                  <span className="w-8 text-center text-xs">{String(idx + 1).padStart(2, '0')}</span>
                  <img src={iconFor(idx)} alt="icon" className="hidden sm:block w-5 h-5" />
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-900 text-sm md:text-base truncate">{s.title}</span>
                    {isActive && <span className="text-cyan-700 text-xs">↗</span>}
                  </div>
                  <span className="block text-[11px] text-slate-500">{s.opportunities} opportunities</span>
                </div>

                <div className="justify-self-end pr-1">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5L16 12L8 19" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
            );
          })}
        </div>

        {/* Mobile preview below list */}
        <div className="lg:hidden mt-4">
          <div className="w-full h-[160px] rounded-xl overflow-hidden border border-slate-200 shadow-sm">
            <img src={thumbnailFor(activeIndex)} alt="sector" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}


