export default function UniqueIncentives() {
  return (
    <section className="w-full py-16 md:py-20 bg-gradient-to-br from-[#2d1f47] via-[#1f3550] to-[#1a4d52] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-bold text-white text-center mb-10 md:mb-14 tracking-tight">
          Unique Incentives
        </h2>

        {/* Main Hero Card - Base Economy Incentive */}
        <div className="relative rounded-3xl overflow-hidden mb-6 md:mb-8 shadow-2xl" style={{ minHeight: '400px' }}>
          {/* City Skyline Background with Gradient Overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(90deg, rgba(91, 71, 121, 0.85) 0%, rgba(72, 108, 137, 0.75) 50%, rgba(55, 138, 145, 0.85) 100%),
                url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1400 420'%3E%3Cdefs%3E%3ClinearGradient id='skyGrad' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' style='stop-color:%234a3a6a'/%3E%3Cstop offset='50%25' style='stop-color:%23486c89'/%3E%3Cstop offset='100%25' style='stop-color:%23378a91'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23skyGrad)' width='1400' height='420'/%3E%3Crect fill='%235b4779' opacity='0.6' x='60' y='160' width='55' height='260' rx='2'/%3E%3Crect fill='%235d4a7d' opacity='0.7' x='125' y='120' width='45' height='300' rx='2'/%3E%3Crect fill='%23604e82' opacity='0.65' x='180' y='145' width='50' height='275' rx='2'/%3E%3Crect fill='%23635287' opacity='0.8' x='240' y='95' width='60' height='325' rx='2'/%3E%3Crect fill='%2366568c' opacity='0.7' x='310' y='170' width='48' height='250' rx='2'/%3E%3Crect fill='%23695a91' opacity='0.75' x='368' y='130' width='55' height='290' rx='2'/%3E%3Crect fill='%236b5e96' opacity='0.7' x='433' y='155' width='52' height='265' rx='2'/%3E%3Crect fill='%236e629b' opacity='0.8' x='495' y='110' width='58' height='310' rx='2'/%3E%3Crect fill='%237166a0' opacity='0.65' x='563' y='175' width='50' height='245' rx='2'/%3E%3Crect fill='%23746aa5' opacity='0.75' x='623' y='140' width='54' height='280' rx='2'/%3E%3Crect fill='%23776eaa' opacity='0.7' x='687' y='125' width='56' height='295' rx='2'/%3E%3Crect fill='%237a72af' opacity='0.8' x='753' y='100' width='62' height='320' rx='2'/%3E%3Crect fill='%237d76b4' opacity='0.7' x='825' y='165' width='50' height='255' rx='2'/%3E%3Crect fill='%23807ab9' opacity='0.75' x='885' y='135' width='55' height='285' rx='2'/%3E%3Crect fill='%23837ebe' opacity='0.65' x='950' y='150' width='52' height='270' rx='2'/%3E%3Crect fill='%238682c3' opacity='0.8' x='1012' y='115' width='58' height='305' rx='2'/%3E%3Crect fill='%238986c8' opacity='0.7' x='1080' y='160' width='50' height='260' rx='2'/%3E%3Crect fill='%238c8acd' opacity='0.75' x='1140' y='130' width='54' height='290' rx='2'/%3E%3Crect fill='%238f8ed2' opacity='0.7' x='1204' y='145' width='52' height='275' rx='2'/%3E%3Crect fill='%239292d7' opacity='0.8' x='1266' y='105' width='60' height='315' rx='2'/%3E%3Crect fill='%239596dc' opacity='0.65' x='1336' y='155' width='50' height='265' rx='2'/%3E%3C/svg%3E")
              `,
              backgroundSize: 'cover',
              backgroundPosition: 'center bottom'
            }}
          />

          {/* Stats Cards Overlay - Top Row */}
          <div className="absolute top-8 md:top-12 left-4 right-4 md:left-8 md:right-8 lg:left-12 lg:right-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-6">
              {/* 9% VAT */}
              <div className="backdrop-blur-lg bg-white/10 rounded-2xl px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-4 border border-white/20 shadow-xl hover:bg-white/15 transition-all">
                <div className="text-white text-[28px] md:text-[32px] lg:text-[36px] font-bold leading-none mb-1">
                  9<span className="text-[18px] md:text-[20px] align-top">%</span>
                </div>
                <div className="text-white/90 text-[10px] md:text-[11px] font-medium uppercase tracking-wider mb-1">VAT</div>
                <div className="text-white/70 text-[9px] md:text-[10px] leading-tight">
                  Attractive indirect taxes fixed for 10 years
                </div>
              </div>

              {/* 6.2% Tax */}
              <div className="backdrop-blur-lg bg-white/10 rounded-2xl px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-4 border border-white/20 shadow-xl hover:bg-white/15 transition-all">
                <div className="text-white text-[28px] md:text-[32px] lg:text-[36px] font-bold leading-none mb-1">
                  6.2<span className="text-[18px] md:text-[20px] align-top">%</span>
                </div>
                <div className="text-white/90 text-[10px] md:text-[11px] font-medium uppercase tracking-wider mb-1">Tax</div>
                <div className="text-white/70 text-[9px] md:text-[10px] leading-tight">
                  Significantly Profitable corporate income tax
                </div>
              </div>

              {/* 900m SAR */}
              <div className="backdrop-blur-lg bg-white/10 rounded-2xl px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-4 border border-white/20 shadow-xl hover:bg-white/15 transition-all">
                <div className="text-white text-[28px] md:text-[32px] lg:text-[36px] font-bold leading-none mb-1">
                  900<span className="text-[14px] md:text-[16px] align-top">m</span>
                </div>
                <div className="text-white/90 text-[10px] md:text-[11px] font-medium uppercase tracking-wider mb-1">SAR</div>
                <div className="text-white/70 text-[9px] md:text-[10px] leading-tight">
                  Estimated Capital Cost Incentive to eligible operations
                </div>
              </div>

              {/* 5k-10k Jobs */}
              <div className="backdrop-blur-lg bg-white/10 rounded-2xl px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-4 border border-white/20 shadow-xl hover:bg-white/15 transition-all">
                <div className="text-white text-[28px] md:text-[32px] lg:text-[36px] font-bold leading-none mb-1">5k-10k</div>
                <div className="text-white/90 text-[10px] md:text-[11px] font-medium uppercase tracking-wider mb-1">Jobs</div>
                <div className="text-white/70 text-[9px] md:text-[10px] leading-tight">
                  National/Product-Level sector targets for eligible operations
                </div>
              </div>

              {/* 200k-250k */}
              <div className="backdrop-blur-lg bg-white/10 rounded-2xl px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-4 border border-white/20 shadow-xl hover:bg-white/15 transition-all">
                <div className="text-white text-[28px] md:text-[32px] lg:text-[36px] font-bold leading-none mb-1">200k-250k</div>
                <div className="text-white/90 text-[10px] md:text-[11px] font-medium uppercase tracking-wider mb-1">SAR</div>
                <div className="text-white/70 text-[9px] md:text-[10px] leading-tight">
                  Estimated Annual Subsidy for Saudi operations
                </div>
              </div>
            </div>
          </div>

          {/* Base Economy Incentive - Bottom Section */}
          <div className="absolute bottom-0 left-0 right-0 px-4 md:px-8 lg:px-12 py-6 md:py-8 bg-gradient-to-t from-black/50 via-black/30 to-transparent backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start md:items-center gap-3 md:gap-4 flex-1">
                {/* Icon */}
                <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-teal-400/30 to-teal-600/30 border-2 border-teal-300/70 flex items-center justify-center flex-shrink-0 backdrop-blur-sm shadow-lg">
                  <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-teal-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-white text-lg md:text-xl lg:text-[26px] font-bold mb-1 md:mb-2 tracking-tight">
                    Base Economy Incentive
                  </h3>
                  <p className="text-white/80 text-xs md:text-[13px] lg:text-[14px] leading-relaxed max-w-[90%] md:max-w-[600px]">
                    Foundational incentives designed to enhance competitiveness through cost-effective infrastructure,
                    financing, and regulatory support.
                  </p>
                </div>
              </div>

              {/* Logo */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="text-white text-right">
                  <div className="text-[9px] md:text-[10px] font-light opacity-80 uppercase tracking-wide">Supported by</div>
                  <div className="text-xs md:text-sm lg:text-[15px] font-bold tracking-wider">INVEST SAUDI</div>
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/15 backdrop-blur-md rounded-xl border border-white/30 flex items-center justify-center shadow-lg hover:bg-white/20 transition-all">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l8 3.64v9.18c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V7.82l7-3.64z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Four Icon Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 mb-6 md:mb-8">
          {/* Land Lease Rate */}
          <div className="bg-gradient-to-br from-[#2d3f5f] to-[#1f2d44] rounded-2xl p-5 md:p-6 text-center border border-white/10 hover:border-white/20 hover:shadow-2xl transition-all group">
            <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h4 className="text-white text-[15px] md:text-[17px] font-bold mb-2">Land Lease Rate</h4>
            <p className="text-white/70 text-[11px] md:text-[12px] leading-relaxed mb-3">
              Starting from <span className="text-white font-semibold">10 SAR/m²</span> per annum for industrial classes
            </p>
            <p className="text-white/50 text-[10px] md:text-[11px] leading-relaxed">
              Includes 24hr industrial use of license in MODON Cities
            </p>
          </div>

          {/* Ready-Built Factories */}
          <div className="bg-gradient-to-br from-[#2d3f5f] to-[#1f2d44] rounded-2xl p-5 md:p-6 text-center border border-white/10 hover:border-white/20 hover:shadow-2xl transition-all group">
            <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h4 className="text-white text-[15px] md:text-[17px] font-bold mb-2">Ready-Built Factories</h4>
            <p className="text-white/70 text-[11px] md:text-[12px] leading-relaxed mb-3">
              Plug-and-play <span className="text-white font-semibold">200-500 sqm</span> manufacturing units
            </p>
            <p className="text-white/50 text-[10px] md:text-[11px] leading-relaxed">
              With fast setup ready for immediate operations
            </p>
          </div>

          {/* Factory, Land & Industrial Loans */}
          <div className="bg-gradient-to-br from-[#2d3f5f] to-[#1f2d44] rounded-2xl p-5 md:p-6 text-center border border-white/10 hover:border-white/20 hover:shadow-2xl transition-all group">
            <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-white text-[15px] md:text-[17px] font-bold mb-2">Factory, Land & Industrial Loans</h4>
            <p className="text-white/70 text-[11px] md:text-[12px] leading-relaxed mb-3">
              Financing for <span className="text-white font-semibold">75% up to 300SR</span>
            </p>
            <p className="text-white/50 text-[10px] md:text-[11px] leading-relaxed">
              Long-term financing covering construction, equipment, and working capital needs
            </p>
          </div>

          {/* Competitive Electricity */}
          <div className="bg-gradient-to-br from-[#2d3f5f] to-[#1f2d44] rounded-2xl p-5 md:p-6 text-center border border-white/10 hover:border-white/20 hover:shadow-2xl transition-all group">
            <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-white text-[15px] md:text-[17px] font-bold mb-2">Competitive Electricity</h4>
            <p className="text-white/70 text-[11px] md:text-[12px] leading-relaxed mb-3">
              Industrial energy pricing at <span className="text-white font-semibold">0.20 SAR/kWh</span>
            </p>
            <p className="text-white/50 text-[10px] md:text-[11px] leading-relaxed">
              One of the region's most competitive rates with 99.9% grid uptime
            </p>
          </div>
        </div>

        {/* Bottom Two Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
          {/* Special Incentive Program */}
          <div className="bg-gradient-to-br from-[#2d3f5f] to-[#1f2d44] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border border-white/10 hover:border-white/30 hover:shadow-2xl transition-all group cursor-pointer">
            <div className="flex items-start md:items-center gap-3 md:gap-4 flex-1">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 border-2 border-emerald-400/70 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-white text-[17px] md:text-[20px] lg:text-[22px] font-bold mb-1 md:mb-2">Special Incentive Program</h4>
                <p className="text-white/70 text-[11px] md:text-[12px] lg:text-[13px] leading-relaxed">
                  We offer deeper, customized incentives for select investment opportunities, tax incentives, and special
                  transitioning support services.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
              <div className="bg-white rounded-xl px-5 md:px-6 py-2 md:py-3 shadow-lg">
                <span className="text-[#2a5d52] text-[18px] md:text-[22px] font-bold tracking-wide">SILZ</span>
              </div>
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Special Economic Zone */}
          <div className="bg-gradient-to-br from-[#2d3f5f] to-[#1f2d44] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border border-white/10 hover:border-white/30 hover:shadow-2xl transition-all group cursor-pointer">
            <div className="flex items-start md:items-center gap-3 md:gap-4 flex-1">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-blue-400/20 to-blue-600/20 border-2 border-blue-400/70 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-white text-[17px] md:text-[20px] lg:text-[22px] font-bold mb-1 md:mb-2">Special Economic Zone</h4>
                <p className="text-white/70 text-[11px] md:text-[12px] lg:text-[13px] leading-relaxed">
                  We offer specially designated incentives that deliver enhanced capital outlay, tax incentives, and special
                  transitioning support services.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
              <div className="bg-white rounded-xl px-3 md:px-4 py-2 md:py-3 shadow-lg text-center">
                <div className="text-[#1a3d5c] text-[9px] md:text-[10px] font-bold uppercase tracking-wide leading-tight">Special Economic</div>
                <div className="text-[#1a3d5c] text-[9px] md:text-[10px] font-bold uppercase tracking-wide leading-tight">Zones Authority</div>
                <div className="text-[#1a3d5c] text-[8px] md:text-[9px] opacity-70 mt-0.5 leading-tight">King Abdullah Port</div>
              </div>
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

