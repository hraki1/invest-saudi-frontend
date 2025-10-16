import { useState } from 'react';

export default function StrategicDirection() {
  const [activeTab, setActiveTab] = useState<'economy' | 'society' | 'nation'>('economy');

  const tabContent = {
    economy: {
      title: 'Saudi as an Investment Destination',
      items: [
        {
          icon: (
            <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"/>
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"/>
            </svg>
          ),
          text: "World's fastest-growing G20 economy, positioned as a global logistics & trade hub"
        },
        {
          icon: (
            <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
          ),
          text: "Unparalleled $2+ Trillion in opportunities driven by Vision 2030 megaprojects"
        },
        {
          icon: (
            <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"/>
            </svg>
          ),
          text: "Global market access as the world's 25th largest exporter/importer, with tariff-free access to 17 Arab countries"
        },
        {
          icon: (
            <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
          ),
          text: "A pro-investor ecosystem with 100% foreign ownership and robust regulatory reforms"
        },
        {
          icon: (
            <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
              <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
            </svg>
          ),
          text: "Unlocks government contracts and significant tax incentives through the RHQ program"
        }
      ]
    },
    society: {
      title: 'Saudi as an Investment Destination',
      items: [
        {
          icon: (
            <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
            </svg>
          ),
          text: "100M annual tourist visits target by 2030, transforming Saudi into a top global destination"
        },
        {
          icon: (
            <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
            </svg>
          ),
          text: "Cultural renaissance with expanded UNESCO World Heritage sites and entertainment initiatives"
        },
        {
          icon: (
            <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
            </svg>
          ),
          text: "Quality of life improvements with modern infrastructure and world-class amenities"
        },
        {
          icon: (
            <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
            </svg>
          ),
          text: "Investment in education, healthcare, and sports creating vibrant communities"
        },
        {
          icon: (
            <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
            </svg>
          ),
          text: "Social development programs enhancing citizen wellbeing and happiness"
        }
      ]
    },
    nation: {
      title: 'Saudi as an Investment Destination',
      items: [
        {
          icon: (
            <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
            </svg>
          ),
          text: "Targeting top 5 global competitiveness ranking through comprehensive reforms"
        },
        {
          icon: (
            <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
            </svg>
          ),
          text: "Ambitious giga-projects like NEOM, The Red Sea, and Qiddiya reshaping the nation"
        },
        {
          icon: (
            <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"/>
            </svg>
          ),
          text: "Digital transformation and innovation driving government efficiency and services"
        },
        {
          icon: (
            <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
            </svg>
          ),
          text: "Supporting SMEs to contribute significantly to GDP and job creation"
        },
        {
          icon: (
            <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
            </svg>
          ),
          text: "Renewable energy leadership with ambitious clean energy and sustainability goals"
        }
      ]
    }
  };

  return (
    <section className="relative pt-16 md:pt-20 bg-gradient-to-br from-green-950 via-teal-950 to-blue-950 overflow-hidden">
      {/* Background Saudi Emblem Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[50rem] leading-none">
          <svg viewBox="0 0 100 100" className="w-full h-full text-white">
            <text x="50" y="50" fontSize="80" textAnchor="middle" dominantBaseline="middle" fill="currentColor">⚔</text>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-white mb-12 md:mb-16">
          KSA's Strategic Direction
        </h2>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          {/* Left Column: Vision Quote & Crown Prince - 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            {/* Vision Quote */}
            <div className="bg-black/40 backdrop-blur-sm p-6 md:p-8 border-l-2 border-cyan-400">
              <p className="text-white/90 text-xs md:text-sm leading-relaxed">
                "Our Vision is a strong, thriving, and stable Saudi Arabia that provides opportunity for all. Our Vision is a{' '}
                <span className="text-cyan-400">tolerant country</span> with Islam as its constitution and moderation as its method. We will welcome{' '}
                <span className="text-cyan-400">qualified individuals</span> from all over the world and will respect those who have come to{' '}
                <span className="text-cyan-400">join our journey and our success</span>."
              </p>
            </div>

            {/* Crown Prince */}
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-full overflow-hidden bg-gray-800 border-2 border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" 
                  alt="Crown Prince"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-white">
                <h3 className="font-medium text-sm md:text-base mb-1">HRH Mohammed bin Salman Crown</h3>
                <p className="text-xs text-white/60 leading-tight">Prince, Prime Minister, and Chairman of the Council of Economic and Development Affairs</p>
              </div>
            </div>
          </div>

          {/* Center: Vision 2030 with Tabs - 4 columns */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            {/* Vision 2030 Logo */}
            <div className="mb-8 lg:mb-12 text-center lg:text-left">
              <div className="inline-block">
                <div className="text-white/70 text-xs tracking-widest mb-3 uppercase">VISION رؤيــة</div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-6xl md:text-7xl font-bold text-white">2</span>
                  <div className="relative w-12 h-12 md:w-14 md:h-14">
                    <div className="absolute inset-0 bg-green-600 rounded-full"></div>
                    <div className="absolute inset-3 bg-white rounded-full"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-7 h-7 md:w-8 md:h-8 border-3 border-green-600 rounded-full bg-white"></div>
                    </div>
                  </div>
                  <span className="text-6xl md:text-7xl font-bold text-white">30</span>
                </div>
                <div className="text-white/50 text-[10px] tracking-wide">المملكة العربية السعودية</div>
                <div className="text-white/50 text-xs tracking-wider">KINGDOM OF SAUDI ARABIA</div>
              </div>
            </div>

            {/* Tabs/Pillars */}
            <div className="space-y-3 md:space-y-4">
              <button 
                onClick={() => setActiveTab('economy')}
                className={`w-full text-left relative pl-6 border-l-4 transition-all duration-300 py-3 md:py-4 ${
                  activeTab === 'economy' 
                    ? 'border-cyan-400 bg-cyan-400/10' 
                    : 'border-cyan-600/30 hover:border-cyan-400/60 hover:bg-cyan-400/5'
                }`}
              >
                <h3 className="text-white font-light text-base md:text-lg lg:text-xl">A Thriving Economy</h3>
              </button>

              <button 
                onClick={() => setActiveTab('society')}
                className={`w-full text-left relative pl-6 border-l-4 transition-all duration-300 py-3 md:py-4 ${
                  activeTab === 'society' 
                    ? 'border-cyan-400 bg-cyan-400/10' 
                    : 'border-cyan-600/30 hover:border-cyan-400/60 hover:bg-cyan-400/5'
                }`}
              >
                <h3 className="text-white font-light text-base md:text-lg lg:text-xl">A Vibrant Society</h3>
              </button>

              <button 
                onClick={() => setActiveTab('nation')}
                className={`w-full text-left relative pl-6 border-l-4 transition-all duration-300 py-3 md:py-4 ${
                  activeTab === 'nation' 
                    ? 'border-cyan-400 bg-cyan-400/10' 
                    : 'border-cyan-600/30 hover:border-cyan-400/60 hover:bg-cyan-400/5'
                }`}
              >
                <h3 className="text-white font-light text-base md:text-lg lg:text-xl">An Ambitious Nation</h3>
              </button>
            </div>
          </div>

          {/* Right: Dynamic Content - 4 columns */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-light text-white mb-8">
              {tabContent[activeTab].title}
            </h3>

            <div className="space-y-6">
              {tabContent[activeTab].items.map((item, idx) => (
                <div key={idx} className="flex gap-4 animate-fade-in">
                  <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30">
                    {item.icon}
                  </div>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar - Scrollable */}
      <div className="bg-black/30 border-t-2 border-dotted border-cyan-400/50">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="container mx-auto px-6 md:px-12 lg:px-20 py-4">
            <div className="flex items-center gap-6 md:gap-8 lg:gap-12 min-w-max lg:min-w-0 justify-start lg:justify-between">
              {/* Stat 1 */}
              <div className="flex items-center gap-3">
                <span className="text-white text-xl">﷼</span>
                <span className="text-cyan-400 text-xl font-semibold whitespace-nowrap">1.8%</span>
                <span className="text-white text-sm whitespace-nowrap">Real GDP Growth In 2024</span>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-3">
                <span className="text-white text-xl">﷼</span>
                <span className="text-cyan-400 text-xl font-semibold whitespace-nowrap">24%</span>
                <span className="text-white text-sm whitespace-nowrap">In YoY FDI Inflows Growth In 2024</span>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-3">
                <span className="text-white text-xl">﷼</span>
                <span className="text-cyan-400 text-xl font-semibold whitespace-nowrap">A+</span>
                <span className="text-white text-sm whitespace-nowrap">Sovereign Credit Rating (S&P)</span>
              </div>

              {/* Stat 4 */}
              <div className="flex items-center gap-3">
                <span className="text-white text-xl">﷼</span>
                <span className="text-cyan-400 text-xl font-semibold whitespace-nowrap">30.4%</span>
                <span className="text-white text-sm whitespace-nowrap">Non-Oil Export Growth</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
