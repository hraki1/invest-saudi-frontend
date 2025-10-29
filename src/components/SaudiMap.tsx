import { useState } from 'react';
import './SaudiMap.css';

interface RegionData {
  gdp: string;
  privateSector: string;
  fdi: string;
  rank: string;
  giga: string[];
}

const SaudiMap = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>("riyadh");

  const regionKeys = [
    "tabuk", "northern", "jouf", "hail", "eastern", "qassim", "riyadh",
    "madinah", "makkah", "bahah", "asir", "jazan", "najran"
  ];

  // Region data mapping for all 13 regions
  const regionsData: Record<string, RegionData> = {
    riyadh: {
      gdp: "936B",
      privateSector: "47%",
      fdi: "2.4%",
      rank: "38th",
      giga: ["Advanced Manufacturing", "Aerospace & Defense", "Agriculture & Food"],
    },
    makkah: {
      gdp: "850B",
      privateSector: "45%",
      fdi: "2.1%",
      rank: "42nd",
      giga: ["Tourism", "Logistics", "Hospitality"],
    },
    eastern: {
      gdp: "920B",
      privateSector: "52%",
      fdi: "3.1%",
      rank: "32nd",
      giga: ["Energy & Oil", "Petrochemicals", "Logistics Hub"],
    },
    madinah: {
      gdp: "700B",
      privateSector: "44%",
      fdi: "2.0%",
      rank: "43rd",
      giga: ["Religious Tourism", "Agriculture", "Renewable Energy"],
    },
    asir: {
      gdp: "550B",
      privateSector: "40%",
      fdi: "1.8%",
      rank: "45th",
      giga: ["Tourism", "Agriculture", "Healthcare"],
    },
    tabuk: {
      gdp: "420B",
      privateSector: "38%",
      fdi: "1.5%",
      rank: "48th",
      giga: ["NEOM", "Red Sea Project", "Renewable Energy"],
    },
    northern: {
      gdp: "380B",
      privateSector: "35%",
      fdi: "1.3%",
      rank: "50th",
      giga: ["Agriculture", "Mining", "Border Trade"],
    },
    jouf: {
      gdp: "320B",
      privateSector: "33%",
      fdi: "1.2%",
      rank: "52nd",
      giga: ["Agriculture", "Olive Production", "Solar Energy"],
    },
    hail: {
      gdp: "400B",
      privateSector: "36%",
      fdi: "1.4%",
      rank: "49th",
      giga: ["Agriculture", "Tourism", "Mining"],
    },
    qassim: {
      gdp: "580B",
      privateSector: "42%",
      fdi: "1.9%",
      rank: "44th",
      giga: ["Agriculture", "Food Processing", "Education"],
    },
    bahah: {
      gdp: "280B",
      privateSector: "32%",
      fdi: "1.1%",
      rank: "53rd",
      giga: ["Tourism", "Agriculture", "Handicrafts"],
    },
    jazan: {
      gdp: "460B",
      privateSector: "39%",
      fdi: "1.6%",
      rank: "47th",
      giga: ["Port Development", "Agriculture", "Fishing"],
    },
    najran: {
      gdp: "340B",
      privateSector: "34%",
      fdi: "1.25%",
      rank: "51st",
      giga: ["Agriculture", "Mining", "Border Trade"],
    },
  };

  const handleRegionClick = (regionKey: string) => {
    setSelectedRegion(regionKey);
  };

  const getRegionFill = (regionKey: string) => {
    if (selectedRegion === regionKey) return "#14B8A6";
    return "black";
  };

  const getRegionPath = (regionKey: string) => {
    // Generated paths for bubble-like shapes to mimic the new design
    const paths: Record<string, string> = {
      northern: "M 250,50 a 150,30 0 1,0 300,0 a 150,30 0 1,0 -300,0",
      jouf:     "M 220,120 a 50,25 0 1,0 100,0 a 50,25 0 1,0 -100,0",
      tabuk:    "M 120,80 a 40,20 0 1,0 80,0 a 40,20 0 1,0 -80,0",
      hail:     "M 300,200 a 60,30 0 1,0 120,0 a 60,30 0 1,0 -120,0",
      qassim:   "M 250,280 a 70,35 0 1,0 140,0 a 70,35 0 1,0 -140,0",
      madinah:  "M 150,180 a 55,28 0 1,0 110,0 a 55,28 0 1,0 -110,0",
      riyadh:   "M 300,400 a 100,50 0 1,0 200,0 a 100,50 0 1,0 -200,0",
      makkah:   "M 150,350 a 80,40 0 1,0 160,0 a 80,40 0 1,0 -160,0",
      eastern:  "M 550,250 a 120,60 0 1,0 240,0 a 120,60 0 1,0 -240,0",
      asir:     "M 180,500 a 50,25 0 1,0 100,0 a 50,25 0 1,0 -100,0",
      bahah:    "M 120,450 a 35,18 0 1,0 70,0 a 35,18 0 1,0 -70,0",
      jazan:    "M 100,550 a 30,15 0 1,0 60,0 a 30,15 0 1,0 -60,0",
      najran:   "M 350,520 a 60,30 0 1,0 120,0 a 60,30 0 1,0 -120,0"
    };
    return paths[regionKey] || "";
  };

  const getBubblePosition = (regionKey: string) => {
    // Adjusted positions for the labels to center them on the new bubble shapes
    const positions: Record<string, {x: number, y: number}> = {
      northern: { x: 400, y: 50 },
      jouf:     { x: 270, y: 120 },
      tabuk:    { x: 160, y: 80 },
      hail:     { x: 360, y: 200 },
      qassim:   { x: 320, y: 280 },
      madinah:  { x: 205, y: 180 },
      riyadh:   { x: 400, y: 400 },
      makkah:   { x: 230, y: 350 },
      eastern:  { x: 670, y: 250 },
      asir:     { x: 230, y: 500 },
      bahah:    { x: 155, y: 450 },
      jazan:    { x: 130, y: 550 },
      najran:   { x: 410, y: 520 }
    };
    return positions[regionKey] || { x: 370, y: 300 };
  };

  return (
    <section className="relative py-12 bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-light text-white mb-12 text-center">
          Explore Saudi Arabia Regions
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* SVG Map - Black background with teal highlight */}
          <div className="relative">
            <svg
              viewBox="0 0 740 600"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
              style={{ backgroundColor: '#000000' }}
            >
              {/* Define pattern for dots */}
              <defs>
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1.5" fill="rgba(255,255,255,0.5)" />
                </pattern>
              </defs>

              {regionKeys.map(key => (
                <path
                  key={key}
                  d={getRegionPath(key)}
                  fill={getRegionFill(key)}
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  className="cursor-pointer transition-all duration-300"
                  onClick={() => handleRegionClick(key)}
                />
              ))}

              {/* Add dots pattern overlay to selected region */}
              {selectedRegion && (
                <>
                  <path
                    d={getRegionPath(selectedRegion)}
                    fill="url(#dots)"
                    pointerEvents="none"
                  />
                  {/* Speech bubble with region name */}
                  <g transform={`translate(${getBubblePosition(selectedRegion).x}, ${getBubblePosition(selectedRegion).y})`}>
                    <path
                      d="M-45,-20 Q-50,-20 -50,-15 L-50,15 Q-50,20 -45,20 L45,20 Q50,20 50,15 L50,-15 Q50,-20 45,-20 Z M-5,20 L0,28 L5,20 Z"
                      fill="white"
                    />
                    <text
                      x="0"
                      y="1"
                      textAnchor="middle"
                      alignmentBaseline="middle"
                      className="region-name-text"
                    >
                      {selectedRegion.charAt(0).toUpperCase() + selectedRegion.slice(1)}
                    </text>
                  </g>
                </>
              )}
            </svg>
          </div>

          {/* Region Details Panel */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-8">
        {selectedRegion ? (
          <>
                <h3 className="text-2xl md:text-3xl font-light text-white mb-6 capitalize">
                  {selectedRegion} Region
                </h3>

                {regionsData[selectedRegion] && (
                  <>
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-slate-900/50 rounded-xl p-4">
                        <p className="text-3xl font-bold text-[#00A7A2]">
                          {regionsData[selectedRegion].gdp}
                        </p>
                        <p className="text-sm text-slate-400 mt-2">Global GDP Ranking</p>
              </div>
                      <div className="bg-slate-900/50 rounded-xl p-4">
                        <p className="text-3xl font-bold text-[#00A7A2]">
                          {regionsData[selectedRegion].privateSector}
                        </p>
                        <p className="text-sm text-slate-400 mt-2">Private Sector</p>
              </div>
                      <div className="bg-slate-900/50 rounded-xl p-4">
                        <p className="text-3xl font-bold text-[#00A7A2]">
                          {regionsData[selectedRegion].rank}
                        </p>
                        <p className="text-sm text-slate-400 mt-2">Logistics Index</p>
              </div>
                      <div className="bg-slate-900/50 rounded-xl p-4">
                        <p className="text-3xl font-bold text-[#00A7A2]">
                          {regionsData[selectedRegion].fdi}
                        </p>
                        <p className="text-sm text-slate-400 mt-2">FDI Share of GDP</p>
              </div>
            </div>

                    {/* Giga Projects */}
                    <div>
                      <h4 className="text-lg font-medium text-white mb-4">Key Projects</h4>
                      <div className="flex flex-wrap gap-2">
                        {regionsData[selectedRegion].giga.map((project, idx) => (
                          <span
                            key={idx}
                            className="bg-slate-900/50 text-slate-300 px-4 py-2 rounded-lg text-sm"
                          >
                            {project}
                          </span>
              ))}
            </div>
                    </div>
                  </>
                )}
          </>
        ) : (
              <div className="text-center py-12">
                <p className="text-slate-400 text-lg">
                  Click on a region to view investment opportunities
          </p>
              </div>
        )}
      </div>
    </div>
      </div>
    </section>
  );
};

export default SaudiMap;
