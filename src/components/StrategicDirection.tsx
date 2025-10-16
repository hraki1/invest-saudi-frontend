import { useState } from "react";

export default function StrategicDirection() {
  const [activeTab, setActiveTab] = useState<"economy" | "society" | "nation">(
    "economy"
  );

  const tabContent = {
    economy: {
      title: "Saudi as an Investment Destination",
      items: [
        {
          icon: (
            <img src="/icons/globe.png" alt="Economy" className="w-6 h-6" />
          ),
          text: "World's fastest-growing G20 economy, positioned as a global logistics",
        },
        {
          icon: (
            <img
              src="/icons/cash-02.png"
              alt="Investment"
              className="w-6 h-6"
            />
          ),
          text: "Over $2+ Trillion in opportunities driven by Vision 2030 megaprojects",
        },
        {
          icon: (
            <img
              src="/icons/globe.png"
              alt="Market Access"
              className="w-6 h-6"
            />
          ),
          text: "Global market access with tariff-free trade to 17 Arab countries",
        },
        {
          icon: (
            <img
              src="/icons/catalogue.png"
              alt="Ecosystem"
              className="w-6 h-6"
            />
          ),
          text: "Pro-investor ecosystem with 100% foreign ownership and regulatory",
        },
        {
          icon: (
            <img
              src="/icons/coins-01.png"
              alt="Incentives"
              className="w-6 h-6"
            />
          ),
          text: "Government contracts and tax incentives through the RHQ program",
        },
      ],
    },
    society: {
      title: "Saudi as an Investment Destination",
      items: [
        {
          icon: (
            <img src="/icons/city-01.png" alt="Tourism" className="w-6 h-6" />
          ),
          text: "Targeting 100M annual tourist visits by 2030 as a top global ",
        },
        {
          icon: (
            <img src="/icons/catalogue.png" alt="Culture" className="w-6 h-6" />
          ),
          text: "Cultural renaissance with UNESCO sites and entertainment initiatives",
        },
        {
          icon: (
            <img
              src="/icons/city-01.png"
              alt="Quality of Life"
              className="w-6 h-6"
            />
          ),
          text: "Modern infrastructure and world-class amenities improving quality of",
        },
        {
          icon: (
            <img
              src="/icons/catalogue.png"
              alt="Education"
              className="w-6 h-6"
            />
          ),
          text: "Investment in education, healthcare, and sports creating vibrant ",
        },
        {
          icon: (
            <img src="/icons/city-01.png" alt="Social" className="w-6 h-6" />
          ),
          text: "Social development programs enhancing citizen wellbeing and happiness",
        },
      ],
    },
    nation: {
      title: "Saudi as an Investment Destination",
      items: [
        {
          icon: (
            <img
              src="/icons/globe.png"
              alt="Competitiveness"
              className="w-6 h-6"
            />
          ),
          text: "Targeting top 5 global competitiveness through comprehensive",
        },
        {
          icon: (
            <img
              src="/icons/city-01.png"
              alt="Giga Projects"
              className="w-6 h-6"
            />
          ),
          text: "Ambitious giga-projects like NEOM and Qiddiya reshaping the ",
        },
        {
          icon: (
            <img src="/icons/catalogue.png" alt="Digital" className="w-6 h-6" />
          ),
          text: "Digital transformation driving government efficiency and services",
        },
        {
          icon: (
            <img src="/icons/coins-01.png" alt="SMEs" className="w-6 h-6" />
          ),
          text: "Supporting SMEs to contribute significantly to GDP growth and",
        },
        {
          icon: <img src="/icons/globe.png" alt="Energy" className="w-6 h-6" />,
          text: "Renewable energy leadership with ambitious clean energy",
        },
      ],
    },
  };

  return (
    <section className="relative pt-12 md:pt-20 bg-gradient-to-br from-green-950 via-teal-950 to-blue-950">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/saudiFlag.png"
          alt="Saudi Arabia landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Background Saudi Emblem Pattern */}
      <div className="container mx-auto px-3 md:px-3 lg:px-5 relative z-10">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extralight text-white mb-12 md:mb-16">
          KSA's Strategic Direction
        </h2>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          {/* Left Column: Vision Quote & Crown Prince - 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            {/* Vision Quote */}
            <div className=" bg-gradient-to-br from-black/40 via-black/30 to-black/0.5  backdrop-blur-sm p-6 md:p-8 rounded-2xl">
              <p className="text-white/90 text-xs md:text-2xl leading-relaxed">
                "Our Vision is a strong, thriving, and stable Saudi Arabia that
                provides opportunity for all. Our Vision is a{" "}
                <span className="text-cyan-400">tolerant country</span> with
                Islam as its constitution and moderation as its method. We will
                welcome{" "}
                <span className="text-cyan-400">qualified individuals</span>{" "}
                from all over the world and will respect those who have come to{" "}
                <span className="text-cyan-400">
                  join our journey and our success
                </span>
                ."
              </p>
              {/* Crown Prince */}
              <div className="flex items-start mt-12 gap-4">
                <img
                  src="/mbs.png"
                  alt="Crown Prince"
                  className="w-full h-full object-cover"
                />
                <div className="text-white">
                  <h3 className="font-medium text-base md:text-2xl mb-1">
                    HRH Mohammed bin Salman Crown
                  </h3>
                  <p className="text-base text-white/60 leading-tight">
                    Prince, Prime Minister, and Chairman of the Council of
                    Economic and Development Affairs
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Center: Vision 2030 with Tabs - 4 columns */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            {/* Vision 2030 Logo */}
            <div className="mb-8 lg:mb-12 text-center ">
              <div className="inline-block">
              
                <div className="relative inline-block">
                  <img
                    src="/vision.png"
                    alt="Vision 2030"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute top-14 left-[68px] transform -translate-x-1/2 -translate-y-1/2">
                    <img
                      src="/Group.png"
                      alt="Vision Icon"
                      className="w-12 h-12 md:w-14 md:h-14 object-contain"
                    />
                  </div>
                </div>
                <div style={{fontFamily:'system-ui'}} className="text-white text-[20px] tracking-wide font-medium">
                  المملكة العربية السعودية
                </div>
                <div className="text-white text-[14px] tracking-wider font-medium">
                  KINGDOM OF SAUDI ARABIA
                </div>
              </div>
            </div>

            {/* Tabs/Pillars */}
            <div className="space-y-3 md:space-y-4">
              <button
                onClick={() => setActiveTab("economy")}
                className={`w-full text-left relative pl-6 border-l-4 transition-all duration-300 py-3 md:py-4 ${
                  activeTab === "economy"
                    ? "border-cyan-400 bg-cyan-400/10"
                    : "border-cyan-600/30 hover:border-cyan-400/60 hover:bg-cyan-400/5"
                }`}
              >
                <h3 className="text-white font-light text-base md:text-lg lg:text-xl">
                  A Thriving Economy
                </h3>
              </button>

              <button
                onClick={() => setActiveTab("society")}
                className={`w-full text-left relative pl-6 border-l-4 transition-all duration-300 py-3 md:py-4 ${
                  activeTab === "society"
                    ? "border-cyan-400 bg-cyan-400/10"
                    : "border-cyan-600/30 hover:border-cyan-400/60 hover:bg-cyan-400/5"
                }`}
              >
                <h3 className="text-white font-light text-base md:text-lg lg:text-xl">
                  A Vibrant Society
                </h3>
              </button>

              <button
                onClick={() => setActiveTab("nation")}
                className={`w-full text-left relative pl-6 border-l-4 transition-all duration-300 py-3 md:py-4 ${
                  activeTab === "nation"
                    ? "border-cyan-400 bg-cyan-400/10"
                    : "border-cyan-600/30 hover:border-cyan-400/60 hover:bg-cyan-400/5"
                }`}
              >
                <h3 className="text-white font-light text-base md:text-lg lg:text-xl">
                  An Ambitious Nation
                </h3>
              </button>
            </div>
          </div>

          {/* Right: Dynamic Content - 4 columns */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="bg-black/40 backdrop-blur-sm p-6 md:p-8 rounded-2xl">
              <h3 className="text-2xl md:text-4xl font-light text-white mb-8">
                {tabContent[activeTab].title}
              </h3>

              <div className="space-y-6">
                {tabContent[activeTab].items.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex gap-4 animate-fade-in">
                      <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30">
                        {item.icon}
                      </div>
                      <p className="text-white/80 text-base md:text-xl leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                    {idx < tabContent[activeTab].items.length - 1 && (
                      <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar - Scrollable */}
      <div className="border-t-2 border-dotted border-cyan-400/50 relative z-10">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="container mx-auto px-6 md:px-12 lg:px-20 py-4">
            <div className="flex items-center gap-6 md:gap-8 lg:gap-12 min-w-max lg:min-w-0 justify-start lg:justify-between">
              {/* Stat 1 */}
              <div className="flex items-center gap-3">
                <span className="text-white text-xl">﷼</span>
                <span className="text-cyan-400 text-xl font-semibold whitespace-nowrap">
                  1.8%
                </span>
                <span className="text-white text-sm whitespace-nowrap">
                  Real GDP Growth In 2024
                </span>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-3">
                <span className="text-white text-xl">﷼</span>
                <span className="text-cyan-400 text-xl font-semibold whitespace-nowrap">
                  24%
                </span>
                <span className="text-white text-sm whitespace-nowrap">
                  In YoY FDI Inflows Growth In 2024
                </span>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-3">
                <span className="text-white text-xl">﷼</span>
                <span className="text-cyan-400 text-xl font-semibold whitespace-nowrap">
                  A+
                </span>
                <span className="text-white text-sm whitespace-nowrap">
                  Sovereign Credit Rating (S&P)
                </span>
              </div>

              {/* Stat 4 */}
              <div className="flex items-center gap-3">
                <span className="text-white text-xl">﷼</span>
                <span className="text-cyan-400 text-xl font-semibold whitespace-nowrap">
                  30.4%
                </span>
                <span className="text-white text-sm whitespace-nowrap">
                  Non-Oil Export Growth
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
