import { useState } from 'react';

export default function Destination() {
  const [activeTab, setActiveTab] = useState<'rankings' | 'macroeconomic'>('rankings');

  return (
    <section className="relative py-16 md:py-24 bg-gray-50 overflow-hidden">
      {/* Decorative Map Pattern - Right Side */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-40 pointer-events-none hidden lg:block">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 700 900" preserveAspectRatio="xMaxYMid meet">
          {/* Dotted Map Pattern */}
          <defs>
            <pattern id="dots" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="#0066CC" opacity="0.5"/>
            </pattern>
          </defs>
          
          {/* Main map shape with dots - representing continents */}
          <ellipse cx="450" cy="300" rx="180" ry="250" fill="url(#dots)"/>
          <ellipse cx="350" cy="450" rx="140" ry="180" fill="url(#dots)"/>
          
          {/* Curved connection lines */}
          <path d="M 100,150 Q 300,200 500,120" stroke="#0066CC" strokeWidth="2.5" fill="none" opacity="0.5"/>
          <path d="M 80,250 Q 320,320 520,240" stroke="#0066CC" strokeWidth="2.5" fill="none" opacity="0.5"/>
          <path d="M 120,350 Q 340,430 540,360" stroke="#0066CC" strokeWidth="2.5" fill="none" opacity="0.5"/>
          <path d="M 150,480 Q 360,550 550,490" stroke="#0066CC" strokeWidth="2.5" fill="none" opacity="0.5"/>
          <path d="M 180,600 Q 380,660 560,610" stroke="#0066CC" strokeWidth="2" fill="none" opacity="0.4"/>
          
          {/* Additional decorative curves */}
          <path d="M 200,120 Q 400,80 580,140" stroke="#0066CC" strokeWidth="2" fill="none" opacity="0.4"/>
          <path d="M 220,700 Q 400,740 580,700" stroke="#0066CC" strokeWidth="1.5" fill="none" opacity="0.3"/>
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 max-w-7xl">
        {/* Title with dotted border */}
        <div className="border-t-[3px] border-dotted border-blue-500 pt-10 mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-light text-gray-900 mb-10 leading-tight">
            The 'Ideal Investment Destination'
          </h2>

          {/* Tabs */}
          <div className="flex gap-10 border-b border-gray-300 mb-8">
            <button
              onClick={() => setActiveTab('rankings')}
              className={`pb-3 text-base md:text-lg font-normal transition-colors relative ${
                activeTab === 'rankings' 
                  ? 'text-gray-900' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Global Rankings
              {activeTab === 'rankings' && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('macroeconomic')}
              className={`pb-3 text-base md:text-lg font-normal transition-colors relative ${
                activeTab === 'macroeconomic' 
                  ? 'text-gray-900' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Macroeconomic Overview
              {activeTab === 'macroeconomic' && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600"></div>
              )}
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'rankings' && (
          <div className="bg-white border-[3px] border-dotted border-blue-400 p-8 md:p-12 lg:pr-[45%]">
            {/* Business Environment Section */}
            <div>
              <h3 className="text-2xl md:text-3xl font-normal text-gray-900 mb-2">
                Business Environment
              </h3>
              <p className="text-gray-500 text-sm mb-10">
                Rankings And Performance On Business Environment Rankings
              </p>

              {/* Top 3 Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
                {/* Stat 1 */}
                <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-5xl font-light text-gray-900">1</span>
                    <span className="text-xl text-gray-500">st</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-5 leading-relaxed min-h-[48px]">
                    Out Of 28 Countries With The Highest % Of Trust In Gov. In 2024
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-600 px-3 py-1.5 rounded-sm">
                      <span className="text-white font-bold text-base tracking-wide">Edelman</span>
                    </div>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-5xl font-light text-gray-900">13</span>
                    <span className="text-xl text-gray-500">th</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-5 leading-relaxed min-h-[48px]">
                    Globally In IP Enforcement Competitiveness In 2025
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold text-3xl tracking-tight">IMD</span>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-5xl font-light text-gray-900">~600</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-5 leading-relaxed min-h-[48px]">
                    Multinational Corporations Choose KSA To Establish Their RHQs
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="grid grid-cols-2 gap-0.5 w-7">
                      <div className="w-3 h-3 bg-blue-700"></div>
                      <div className="w-3 h-3 bg-blue-500"></div>
                      <div className="w-3 h-3 bg-blue-400"></div>
                      <div className="w-3 h-3 bg-blue-300"></div>
                    </div>
                    <span className="text-gray-500 font-medium text-xs uppercase tracking-wider ml-1">MISA</span>
                  </div>
                </div>
              </div>

              {/* World Competitiveness Ranking */}
              <div className="mb-8">
                <div className="flex items-baseline gap-3 mb-8">
                  <span className="text-5xl font-light text-gray-900">17th</span>
                  <p className="text-gray-600 text-base">
                    In World Competitiveness Ranking In 2025
                  </p>
                </div>

                {/* 4 Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {/* Pillar 1 */}
                  <div>
                    <div className="text-xs text-gray-400 mb-3 font-normal">Pillar 1</div>
                    <div className="space-y-3">
                      <div className="bg-cyan-50 border border-cyan-100 p-4 rounded-sm">
                        <div className="flex items-baseline gap-1 mb-2">
                          <span className="text-4xl font-light text-gray-900">12</span>
                          <span className="text-lg text-gray-500">th</span>
                        </div>
                        <p className="text-gray-600 text-xs leading-relaxed">
                          In Business Efficiency In 2025
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 p-4 rounded-sm">
                        <div className="flex items-baseline gap-1 mb-2">
                          <span className="text-4xl font-light text-gray-900">26</span>
                          <span className="text-lg text-gray-500">th</span>
                        </div>
                        <p className="text-gray-600 text-xs leading-relaxed">
                          In Business Efficiency In 2021
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Pillar 2 */}
                  <div>
                    <div className="text-xs text-gray-400 mb-3 font-normal">Pillar 2</div>
                    <div className="space-y-3">
                      <div className="bg-purple-50 border border-purple-100 p-4 rounded-sm">
                        <div className="flex items-baseline gap-1 mb-2">
                          <span className="text-4xl font-light text-gray-900">17</span>
                          <span className="text-lg text-gray-500">th</span>
                        </div>
                        <p className="text-gray-600 text-xs leading-relaxed">
                          In Gov. Efficiency In 2025
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 p-4 rounded-sm">
                        <div className="flex items-baseline gap-1 mb-2">
                          <span className="text-4xl font-light text-gray-900">24</span>
                          <span className="text-lg text-gray-500">th</span>
                        </div>
                        <p className="text-gray-600 text-xs leading-relaxed">
                          In Economic Performance In 2025
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Pillar 3 */}
                  <div>
                    <div className="text-xs text-gray-400 mb-3 font-normal">Pillar 3</div>
                    <div className="space-y-3">
                      <div className="bg-blue-50 border border-blue-100 p-4 rounded-sm">
                        <div className="flex items-baseline gap-1 mb-2">
                          <span className="text-4xl font-light text-gray-900">17</span>
                          <span className="text-lg text-gray-500">th</span>
                        </div>
                        <p className="text-gray-600 text-xs leading-relaxed">
                          In Economic Performance In 2025
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 p-4 rounded-sm">
                        <div className="flex items-baseline gap-1 mb-2">
                          <span className="text-4xl font-light text-gray-900">48</span>
                          <span className="text-lg text-gray-500">th</span>
                        </div>
                        <p className="text-gray-600 text-xs leading-relaxed">
                          In Economic Performance In 2025
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Pillar 4 */}
                  <div>
                    <div className="text-xs text-gray-400 mb-3 font-normal">Pillar 4</div>
                    <div className="space-y-3">
                      <div className="bg-teal-50 border border-teal-100 p-4 rounded-sm">
                        <div className="flex items-baseline gap-1 mb-2">
                          <span className="text-4xl font-light text-gray-900">31</span>
                          <span className="text-lg text-gray-500">th</span>
                        </div>
                        <p className="text-gray-600 text-xs leading-relaxed">
                          In Infra. Performance In 2025
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 p-4 rounded-sm">
                        <div className="flex items-baseline gap-1 mb-2">
                          <span className="text-4xl font-light text-gray-900">36</span>
                          <span className="text-lg text-gray-500">th</span>
                        </div>
                        <p className="text-gray-600 text-xs leading-relaxed">
                          In Economic Performance In 2025
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'macroeconomic' && (
          <div className="bg-white border-[3px] border-dotted border-blue-400 p-8 md:p-12 lg:pr-[45%]">
            <div className="text-center py-20">
              <h3 className="text-2xl font-light text-gray-500 mb-4">
                Macroeconomic Overview
              </h3>
              <p className="text-gray-400">Content coming soon...</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

