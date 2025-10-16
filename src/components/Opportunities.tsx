import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Opportunities() {
  const { t } = useTranslation();
  const [selectedRegion, setSelectedRegion] = useState('riyadh');

  const regionData = {
    riyadh: {
      name: t('opportunities.regions.riyadh'),
      keyFigures: [
        { value: '936 B', label: t('opportunities.stats.gdp_ranking'), change: '100%', trend: 'up' },
        { value: '47%', label: t('opportunities.stats.private_sector'), change: '100%', trend: 'up' },
        { value: '38 th', label: t('opportunities.stats.logistics'), change: '100%', trend: 'up' },
        { value: '2.4%', label: t('opportunities.stats.fdi'), change: '100%', trend: 'up' }
      ],
      gigaProjects: [
        {
          title: t('opportunities.projects.advanced_manufacturing'),
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop'
        },
        {
          title: t('opportunities.projects.aerospace_defense'),
          image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop'
        },
        {
          title: t('opportunities.projects.agriculture_food'),
          image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop'
        }
      ],
      opportunities: [
        {
          title: t('opportunities.projects.advanced_manufacturing'),
          image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop'
        },
        {
          title: t('opportunities.projects.aerospace_defense'),
          image: 'https://images.unsplash.com/photo-1583425423320-2386622cd2e4?w=400&h=300&fit=crop'
        },
        {
          title: t('opportunities.projects.agriculture_food'),
          image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop'
        }
      ]
    },
    makkah: {
      name: t('opportunities.regions.makkah'),
      keyFigures: [
        { value: '850 B', label: t('opportunities.stats.gdp_ranking'), change: '95%', trend: 'up' },
        { value: '42%', label: t('opportunities.stats.private_sector'), change: '88%', trend: 'up' },
        { value: '35 th', label: t('opportunities.stats.logistics'), change: '92%', trend: 'up' },
        { value: '2.1%', label: t('opportunities.stats.fdi'), change: '85%', trend: 'up' }
      ],
      gigaProjects: [
        {
          title: t('opportunities.projects.tourism_development'),
          image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop'
        },
        {
          title: t('opportunities.projects.infrastructure'),
          image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop'
        },
        {
          title: t('opportunities.projects.hospitality'),
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop'
        }
      ],
      opportunities: [
        {
          title: t('opportunities.projects.religious_tourism'),
          image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=400&h=300&fit=crop'
        },
        {
          title: t('opportunities.projects.real_estate'),
          image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop'
        },
        {
          title: t('opportunities.projects.smart_cities'),
          image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=300&fit=crop'
        }
      ]
    },
    eastern: {
      name: t('opportunities.regions.eastern'),
      keyFigures: [
        { value: '920 B', label: t('opportunities.stats.gdp_ranking'), change: '105%', trend: 'up' },
        { value: '52%', label: t('opportunities.stats.private_sector'), change: '98%', trend: 'up' },
        { value: '32 th', label: t('opportunities.stats.logistics'), change: '102%', trend: 'up' },
        { value: '3.1%', label: t('opportunities.stats.fdi'), change: '110%', trend: 'up' }
      ],
      gigaProjects: [
        {
          title: t('opportunities.projects.energy_oil'),
          image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&h=300&fit=crop'
        },
        {
          title: t('opportunities.projects.petrochemicals'),
          image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop'
        },
        {
          title: t('opportunities.projects.logistics_hub'),
          image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop'
        }
      ],
      opportunities: [
        {
          title: t('opportunities.projects.industrial_parks'),
          image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400&h=300&fit=crop'
        },
        {
          title: t('opportunities.projects.port_development'),
          image: 'https://images.unsplash.com/photo-1605282003441-a966bb348137?w=400&h=300&fit=crop'
        },
        {
          title: t('opportunities.projects.technology_sector'),
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop'
        }
      ]
    }
  };

  const currentData = regionData[selectedRegion as keyof typeof regionData];

  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Title with dotted border */}
        <div className="border-t-4 border-dotted border-cyan-400 pt-8 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white">
            {t('opportunities.title')}
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Map */}
          <div className="relative">
            <div className="relative w-full h-[500px] flex items-center justify-center">
              {/* Saudi Arabia Map SVG */}
              <svg viewBox="0 0 800 600" className="w-full h-full">
                {/* Main country border */}
                <path
                  d="M 150,150 L 200,120 L 280,110 L 350,115 L 420,125 L 490,145 L 560,180 L 620,230 L 660,280 L 680,330 L 685,380 L 670,430 L 640,460 L 590,480 L 520,490 L 450,485 L 380,470 L 310,450 L 250,420 L 200,380 L 160,330 L 140,270 L 135,210 Z"
                  fill="#0f172a"
                  stroke="#1e293b"
                  strokeWidth="3"
                  opacity="0.8"
                />

                {/* Makkah Region (West) */}
                <g 
                  className="cursor-pointer transition-all duration-300 hover:opacity-90" 
                  onClick={() => setSelectedRegion('makkah')}
                >
                  <path
                    d="M 150,150 L 200,180 L 230,240 L 240,300 L 230,350 L 200,380 L 160,330 L 140,270 L 135,210 Z"
                    fill={selectedRegion === 'makkah' ? '#14b8a6' : '#1e293b'}
                    stroke={selectedRegion === 'makkah' ? '#0d9488' : '#334155'}
                    strokeWidth="2"
                    opacity={selectedRegion === 'makkah' ? '0.95' : '0.6'}
                  />
                  {selectedRegion === 'makkah' && (
                    <g opacity="0.25">
                      {[...Array(10)].map((_, row) => (
                        [...Array(6)].map((_, col) => (
                          <circle
                            key={`makkah-${row}-${col}`}
                            cx={160 + col * 15}
                            cy={170 + row * 20}
                            r="1.5"
                            fill="white"
                          />
                        ))
                      ))}
                    </g>
                  )}
                  {selectedRegion === 'makkah' && (
                    <g>
                      <rect x="160" y="250" width="75" height="28" rx="14" fill="white" />
                      <text x="197" y="269" textAnchor="middle" fontSize="13" fontWeight="600" fill="#0d9488">
                        {t('opportunities.regions.makkah')}
                      </text>
                    </g>
                  )}
                </g>

                {/* Riyadh Region (Center) */}
                <g 
                  className="cursor-pointer transition-all duration-300 hover:opacity-90" 
                  onClick={() => setSelectedRegion('riyadh')}
                >
                  <path
                    d="M 280,200 L 360,190 L 420,200 L 460,240 L 480,300 L 475,360 L 450,410 L 400,440 L 340,450 L 280,440 L 240,400 L 230,350 L 240,300 L 250,250 Z"
                    fill={selectedRegion === 'riyadh' ? '#14b8a6' : '#1e293b'}
                    stroke={selectedRegion === 'riyadh' ? '#0d9488' : '#334155'}
                    strokeWidth="2"
                    opacity={selectedRegion === 'riyadh' ? '0.95' : '0.6'}
                  />
                  {selectedRegion === 'riyadh' && (
                    <g opacity="0.25">
                      {[...Array(12)].map((_, row) => (
                        [...Array(10)].map((_, col) => (
                          <circle
                            key={`riyadh-${row}-${col}`}
                            cx={260 + col * 20}
                            cy={220 + row * 20}
                            r="1.5"
                            fill="white"
                          />
                        ))
                      ))}
                    </g>
                  )}
                  {selectedRegion === 'riyadh' && (
                    <g>
                      <rect x="320" y="315" width="70" height="28" rx="14" fill="white" />
                      <text x="355" y="334" textAnchor="middle" fontSize="13" fontWeight="600" fill="#0d9488">
                        {t('opportunities.regions.riyadh')}
                      </text>
                    </g>
                  )}
                </g>

                {/* Eastern Province */}
                <g 
                  className="cursor-pointer transition-all duration-300 hover:opacity-90" 
                  onClick={() => setSelectedRegion('eastern')}
                >
                  <path
                    d="M 480,200 L 560,180 L 620,230 L 660,280 L 680,330 L 685,380 L 665,420 L 640,460 L 590,480 L 520,490 L 475,470 L 450,410 L 460,340 L 470,280 L 475,240 Z"
                    fill={selectedRegion === 'eastern' ? '#14b8a6' : '#1e293b'}
                    stroke={selectedRegion === 'eastern' ? '#0d9488' : '#334155'}
                    strokeWidth="2"
                    opacity={selectedRegion === 'eastern' ? '0.95' : '0.6'}
                  />
                  {selectedRegion === 'eastern' && (
                    <g opacity="0.25">
                      {[...Array(12)].map((_, row) => (
                        [...Array(10)].map((_, col) => (
                          <circle
                            key={`eastern-${row}-${col}`}
                            cx={510 + col * 18}
                            cy={230 + row * 22}
                            r="1.5"
                            fill="white"
                          />
                        ))
                      ))}
                    </g>
                  )}
                  {selectedRegion === 'eastern' && (
                    <g>
                      <rect x="540" y="330" width="105" height="28" rx="14" fill="white" />
                      <text x="592" y="349" textAnchor="middle" fontSize="12" fontWeight="600" fill="#0d9488">
                        {t('opportunities.regions.eastern')}
                      </text>
                    </g>
                  )}
                </g>

                {/* Northern regions (decorative) */}
                <path
                  d="M 200,120 L 280,110 L 350,115 L 380,135 L 360,170 L 320,180 L 270,175 L 220,160 Z"
                  fill="#0f172a"
                  stroke="#1e5062"
                  strokeWidth="1"
                  opacity="0.4"
                  className="cursor-pointer hover:opacity-60 transition-opacity"
                />

                {/* Southern regions (decorative) */}
                <path
                  d="M 250,420 L 310,450 L 380,470 L 450,485 L 480,475 L 475,470 L 400,440 L 340,450 L 280,440 Z"
                  fill="#0f172a"
                  stroke="#1e5062"
                  strokeWidth="1"
                  opacity="0.4"
                  className="cursor-pointer hover:opacity-60 transition-opacity"
                />
              </svg>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-8">
            {/* Key Figures */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                <h3 className="text-xl md:text-2xl font-light text-white">
                  {currentData.name} {t('opportunities.key_figures')}
                </h3>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {currentData.keyFigures.map((stat, idx) => (
                  <div key={idx} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="text-2xl md:text-3xl font-light text-white">
                        {stat.value}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-emerald-400">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                        </svg>
                        <span>{stat.change}</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-300 leading-tight">{stat.label}</p>
                    <p className="text-[10px] text-slate-500 mt-1">{t('opportunities.vs_last_year')}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Giga Projects */}
            <div>
              <h4 className="text-sm font-medium text-slate-400 mb-4">{t('opportunities.giga_projects')}</h4>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {currentData.gigaProjects.map((project, idx) => (
                  <div key={idx} className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                      <p className="text-white text-xs font-medium p-3 leading-tight">
                        {project.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Opportunities */}
            <div>
              <h4 className="text-sm font-medium text-slate-400 mb-4">{t('opportunities.opportunities_section')}</h4>
              <div className="grid grid-cols-3 gap-3">
                {currentData.opportunities.map((opportunity, idx) => (
                  <div key={idx} className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer">
                    <img 
                      src={opportunity.image} 
                      alt={opportunity.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                      <p className="text-white text-xs font-medium p-3 leading-tight">
                        {opportunity.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* View More Link */}
            <div className="border-t-2 border-dotted border-cyan-400/30 pt-4">
              <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors flex items-center gap-2 group">
                <span>{t('opportunities.view_more')}</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

