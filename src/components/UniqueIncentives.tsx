export default function UniqueIncentives() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#1a1a1a] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-12 md:mb-16 tracking-tight">
          Unique Incentives
        </h2>

        {/* Hero Section with Cityscape and Data Cards */}
        <div className="relative rounded-3xl overflow-hidden mb-16 md:mb-20 shadow-2xl" style={{ minHeight: '500px' }}>
          {/* City Skyline Background with Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(90deg, rgba(91, 71, 121, 0.75) 0%, rgba(72, 108, 137, 0.65) 50%, rgba(55, 138, 145, 0.75) 100%),
                url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1400 500'%3E%3Cdefs%3E%3ClinearGradient id='skyGrad' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' style='stop-color:%234a3a6a'/%3E%3Cstop offset='50%25' style='stop-color:%23486c89'/%3E%3Cstop offset='100%25' style='stop-color:%23378a91'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23skyGrad)' width='1400' height='500'/%3E%3Crect fill='%235b4779' opacity='0.6' x='60' y='140' width='55' height='360' rx='2'/%3E%3Crect fill='%235d4a7d' opacity='0.7' x='125' y='100' width='45' height='400' rx='2'/%3E%3Crect fill='%23604e82' opacity='0.65' x='180' y='125' width='50' height='375' rx='2'/%3E%3Crect fill='%23635287' opacity='0.8' x='240' y='75' width='60' height='425' rx='2'/%3E%3Crect fill='%2366568c' opacity='0.7' x='310' y='150' width='48' height='350' rx='2'/%3E%3Crect fill='%23695a91' opacity='0.75' x='368' y='110' width='55' height='390' rx='2'/%3E%3Crect fill='%236b5e96' opacity='0.7' x='433' y='135' width='52' height='365' rx='2'/%3E%3Crect fill='%236e629b' opacity='0.8' x='495' y='90' width='58' height='410' rx='2'/%3E%3Crect fill='%237166a0' opacity='0.65' x='563' y='155' width='50' height='345' rx='2'/%3E%3Crect fill='%23746aa5' opacity='0.75' x='623' y='120' width='54' height='380' rx='2'/%3E%3Crect fill='%23776eaa' opacity='0.7' x='687' y='105' width='56' height='395' rx='2'/%3E%3Crect fill='%237a72af' opacity='0.8' x='753' y='80' width='62' height='420' rx='2'/%3E%3Crect fill='%237d76b4' opacity='0.7' x='825' y='145' width='50' height='355' rx='2'/%3E%3Crect fill='%23807ab9' opacity='0.75' x='885' y='115' width='55' height='385' rx='2'/%3E%3Crect fill='%23837ebe' opacity='0.65' x='950' y='130' width='52' height='370' rx='2'/%3E%3Crect fill='%238682c3' opacity='0.8' x='1012' y='95' width='58' height='405' rx='2'/%3E%3Crect fill='%238986c8' opacity='0.7' x='1080' y='140' width='50' height='360' rx='2'/%3E%3Crect fill='%238c8acd' opacity='0.75' x='1140' y='110' width='54' height='390' rx='2'/%3E%3Crect fill='%238f8ed2' opacity='0.7' x='1204' y='125' width='52' height='375' rx='2'/%3E%3Crect fill='%239292d7' opacity='0.8' x='1266' y='85' width='60' height='415' rx='2'/%3E%3Crect fill='%239596dc' opacity='0.65' x='1336' y='135' width='50' height='365' rx='2'/%3E%3C/svg%3E")
              `,
              backgroundSize: 'cover',
              backgroundPosition: 'center bottom'
            }}
          />

          {/* Stats Cards Overlay - Bottom */}
          <div className="absolute bottom-6 md:bottom-8 lg:bottom-12 left-4 right-4 md:left-8 md:right-8 lg:left-12 lg:right-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-6">
              {/* 9% IRR - Purple */}
              <div className="backdrop-blur-lg bg-black/40 rounded-2xl px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-4 border-2 border-purple-400/60 shadow-xl hover:bg-black/50 transition-all hover:border-purple-400/80">
                <div className="text-white text-[28px] md:text-[32px] lg:text-[36px] font-bold leading-none mb-1">
                  9<span className="text-[18px] md:text-[20px] align-top">%</span>
                </div>
                <div className="text-white/90 text-[10px] md:text-[11px] font-medium uppercase tracking-wider mb-1">IRR</div>
                <div className="text-white/70 text-[9px] md:text-[10px] leading-tight">
                  Attractive Internal Rate Of Return Across Strategic Sectors
                </div>
              </div>

              {/* 6.2% EBITDA - Teal */}
              <div className="backdrop-blur-lg bg-black/40 rounded-2xl px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-4 border-2 border-teal-400/60 shadow-xl hover:bg-black/50 transition-all hover:border-teal-400/80">
                <div className="text-white text-[28px] md:text-[32px] lg:text-[36px] font-bold leading-none mb-1">
                  6.2<span className="text-[18px] md:text-[20px] align-top">%</span>
                </div>
                <div className="text-white/90 text-[10px] md:text-[11px] font-medium uppercase tracking-wider mb-1">EBITDA</div>
                <div className="text-white/70 text-[9px] md:text-[10px] leading-tight">
                  Sustainable Profitability Outlook
                </div>
              </div>

              {/* 900 mn USD - Green */}
              <div className="backdrop-blur-lg bg-black/40 rounded-2xl px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-4 border-2 border-green-400/60 shadow-xl hover:bg-black/50 transition-all hover:border-green-400/80">
                <div className="text-white text-[28px] md:text-[32px] lg:text-[36px] font-bold leading-none mb-1">
                  900<span className="text-[14px] md:text-[16px] align-top"> mn</span>
                </div>
                <div className="text-white/90 text-[10px] md:text-[11px] font-medium uppercase tracking-wider mb-1">USD</div>
                <div className="text-white/70 text-[9px] md:text-[10px] leading-tight">
                  Estimated CapEx For Flagship Industrial Investments
                </div>
              </div>

              {/* 5k-10k USD - Light Blue */}
              <div className="backdrop-blur-lg bg-black/40 rounded-2xl px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-4 border-2 border-blue-400/60 shadow-xl hover:bg-black/50 transition-all hover:border-blue-400/80">
                <div className="text-white text-[28px] md:text-[32px] lg:text-[36px] font-bold leading-none mb-1">5k-10k</div>
                <div className="text-white/90 text-[10px] md:text-[11px] font-medium uppercase tracking-wider mb-1">USD</div>
                <div className="text-white/70 text-[9px] md:text-[10px] leading-tight">
                  Potential Product Price Range
                </div>
              </div>

              {/* 200k-250k Units - Pink */}
              <div className="backdrop-blur-lg bg-black/40 rounded-2xl px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-4 border-2 border-pink-400/60 shadow-xl hover:bg-black/50 transition-all hover:border-pink-400/80">
                <div className="text-white text-[28px] md:text-[32px] lg:text-[36px] font-bold leading-none mb-1">200k-250k</div>
                <div className="text-white/90 text-[10px] md:text-[11px] font-medium uppercase tracking-wider mb-1">Units</div>
                <div className="text-white/70 text-[9px] md:text-[10px] leading-tight">
                  Estimated Annual Output For Scalable Operations
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Base Economy Incentive Section */}
        <div className="relative mb-12 md:mb-16">
          {/* Left Indicator Icon with Dashed Line */}
          <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-cyan-400/30 to-cyan-600/30 border-2 border-cyan-300/70 flex items-center justify-center flex-shrink-0 backdrop-blur-sm shadow-lg z-10">
              <svg className="w-7 h-7 md:w-8 md:h-8 text-cyan-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div className="absolute top-[56px] md:top-[64px] bottom-0 w-0.5 border-l-2 border-dashed border-white/30"></div>
          </div>

          <div className="ml-20 md:ml-24 lg:ml-28">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Base Economy Incentive
            </h3>
            <p className="text-white/70 text-sm md:text-base lg:text-lg mb-8 max-w-4xl leading-relaxed">
              Foundational incentives designed to enhance competitiveness through cost-effective infrastructure, financing, and operational support.
            </p>

            {/* Logo Section - Right */}
            <div className="flex justify-end mb-8">
              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="text-right text-white">
                  <div className="text-xs md:text-sm font-light opacity-80">استثمر في السعودية</div>
                  <div className="text-lg md:text-xl lg:text-2xl font-bold tracking-wider">INVEST SAUDI</div>
                </div>
                <div className="relative">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md rounded-xl border border-white/30 flex items-center justify-center shadow-lg group-hover:bg-white/20 transition-all">
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l8 3.64v9.18c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V7.82l7-3.64z"/>
                    </svg>
                  </div>
                  <svg className="absolute -top-1 -right-1 w-4 h-4 text-white/60 group-hover:text-white transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {/* Land Lease Rate */}
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-white/10 hover:border-white/20 hover:shadow-2xl transition-all group relative">
                <div className="absolute top-4 left-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-500/80 flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg md:text-xl font-bold">@</span>
                </div>
                <div className="mt-12 md:mt-14">
                  <h4 className="text-white text-base md:text-lg font-bold mb-2">Land Lease Rate</h4>
                  <p className="text-white/90 text-sm md:text-base font-medium mb-2">
                    Starting from 0.27 USD / m² per month in MODON cities
                  </p>
                  <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                    Access affordable industrial land in prime locations with full utility readiness.
                  </p>
                </div>
              </div>

              {/* Ready-Built Factories */}
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-white/10 hover:border-white/20 hover:shadow-2xl transition-all group relative">
                <div className="absolute top-4 left-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-teal-500/80 flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="mt-12 md:mt-14">
                  <h4 className="text-white text-base md:text-lg font-bold mb-2">Ready-Built Factories</h4>
                  <p className="text-white/90 text-sm md:text-base font-medium mb-2">
                    From 19 200 USD per year
                  </p>
                  <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                    Plug-and-play manufacturing units developed by MODON for rapid project launch.
                  </p>
                </div>
              </div>

              {/* Factory, Land & Industrial Loans */}
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-white/10 hover:border-white/20 hover:shadow-2xl transition-all group relative">
                <div className="absolute top-4 left-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-500/80 flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="mt-12 md:mt-14">
                  <h4 className="text-white text-base md:text-lg font-bold mb-2">Factory, Land & Industrial Loans</h4>
                  <p className="text-white/90 text-sm md:text-base font-medium mb-2">
                    Provided by SIDF and MODON
                  </p>
                  <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                    Long-term financing covering construction, equipment, and expansion needs.
                  </p>
                </div>
              </div>

              {/* Competitive Electricity */}
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-white/10 hover:border-white/20 hover:shadow-2xl transition-all group relative">
                <div className="absolute top-4 left-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-orange-500/80 flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="mt-12 md:mt-14">
                  <h4 className="text-white text-base md:text-lg font-bold mb-2">Competitive Electricity</h4>
                  <p className="text-white/90 text-sm md:text-base font-medium mb-2">
                    Industrial consumption price SAR 0.18 / kWh
                  </p>
                  <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                    One of the region's most competitive power tariffs supporting high-load industries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Special Incentive Program Section */}
        <div className="relative mb-12 md:mb-16">
          {/* Left Indicator Icon with Dashed Line */}
          <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-cyan-400/30 to-cyan-600/30 border-2 border-cyan-300/70 flex items-center justify-center flex-shrink-0 backdrop-blur-sm shadow-lg z-10">
              <svg className="w-7 h-7 md:w-8 md:h-8 text-cyan-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div className="absolute top-[56px] md:top-[64px] bottom-0 w-0.5 border-l-2 border-dashed border-white/30"></div>
          </div>

          <div className="ml-20 md:ml-24 lg:ml-28">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Special Incentive Program
            </h3>
            <p className="text-white/70 text-sm md:text-base lg:text-lg mb-8 max-w-4xl leading-relaxed">
              We offer specially designed incentives such as human capital incentives, tax incentives, and special handholding support services.
            </p>

            {/* Logo Section - Right */}
            <div className="flex justify-end">
              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="bg-white rounded-xl px-6 md:px-8 py-3 md:py-4 shadow-lg">
                  <div className="text-[#2a8a6f] text-xl md:text-2xl lg:text-3xl font-bold tracking-wide">SILZ</div>
                  <div className="text-[#2a8a6f] text-xs md:text-sm opacity-70 mt-1">Special Investment Initiative</div>
                </div>
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Special Economic Zone Section */}
        <div className="relative">
          {/* Left Indicator Icon */}
          <div className="absolute left-0 top-0 flex items-center">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-cyan-400/30 to-cyan-600/30 border-2 border-cyan-300/70 flex items-center justify-center flex-shrink-0 backdrop-blur-sm shadow-lg z-10">
              <svg className="w-7 h-7 md:w-8 md:h-8 text-cyan-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
          </div>

          <div className="ml-20 md:ml-24 lg:ml-28">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Special Economic Zone
            </h3>
            <p className="text-white/70 text-sm md:text-base lg:text-lg mb-8 max-w-4xl leading-relaxed">
              We offer specially designed incentives such as human capital incentives, tax incentives, and special handholding support services.
            </p>

            {/* Logo Section - Right */}
            <div className="flex justify-end">
              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="bg-white rounded-xl px-4 md:px-6 py-3 md:py-4 shadow-lg">
                  <div className="text-[#1a3d5c] text-xs md:text-sm font-bold uppercase tracking-wide leading-tight">
                    SPECIAL ECONOMIC ZONES
                  </div>
                  <div className="text-[#1a3d5c] text-xs md:text-sm font-bold uppercase tracking-wide leading-tight">
                    LAUNCH BY ECZA
                  </div>
                </div>
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
