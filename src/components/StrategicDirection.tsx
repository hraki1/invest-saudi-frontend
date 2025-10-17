import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Swiper styles will be added to CSS file

export default function StrategicDirection() {
  const [activeTab, setActiveTab] = useState<"economy" | "society" | "nation">(
    "economy"
  );

  const statsData = [
    {
      id: 1,
      icon: "📈",
      value: "1.8%",
      description: "Real GDP Growth in 2024",
    },
    {
      id: 2,
      icon: "💰",
      value: "24%",
      description: "in YoY FDI inflows growth in 2024",
    },
    {
      id: 3,
      icon: "⭐",
      value: "A+",
      description: "Sovereign credit rating (S&P)",
    },
    {
      id: 4,
      icon: "🚀",
      value: "30.4%",
      description: "Non-oil export growth YoY Jul 2025",
    },
    {
      id: 1,
      title: "Pro-investor ecosystem",
      value: "24%",

      description: "Comprehensive support system for international investors"
    },
    {
      id: 2,
      title: "Significant tax incentives",
      value: "24%",

      description: "Attractive tax benefits and exemptions for investors"
    },
    {
      id: 3,
      title: "Tax Laws & Regulations",
      value: "24%",

      description: "Clear and transparent tax framework"
    },
    {
      id: 4,
      title: "Investment Law",
      value: "24%",
      description: "Robust legal framework protecting investor rights"
    }
  ];


  const tabContent = {
    economy: {
      title: "Saudi as an Investment Destination",
      items: [
        {
          icon: (
            <img src="/icons/globe.png" alt="Economy" className="w-full h-full" />
          ),
          text: "World's fastest-growing G20 economy, positioned as a global logistics",
        },
        {
          icon: (
            <img
              src="/icons/cash-02.png"
              alt="Investment"
              className="w-full h-full"
            />
          ),
          text: "Over $2+ Trillion in opportunities driven by Vision 2030 megaprojects",
        },
        {
          icon: (
            <img
              src="/icons/globe.png"
              alt="Market Access"
              className="w-full h-full"
            />
          ),
          text: "Global market access with tariff-free trade to 17 Arab countries",
        },
        {
          icon: (
            <img
              src="/icons/catalogue.png"
              alt="Ecosystem"
              className="w-full h-full"
            />
          ),
          text: "Pro-investor ecosystem with 100% foreign ownership and regulatory",
        },
        {
          icon: (
            <img
              src="/icons/coins-01.png"
              alt="Incentives"
              className="w-full h-full"
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
            <img src="/icons/city-01.png" alt="Tourism" className="w-full h-full" />
          ),
          text: "Targeting 100M annual tourist visits by 2030 as a top global ",
        },
        {
          icon: (
            <img src="/icons/catalogue.png" alt="Culture" className="w-full h-full" />
          ),
          text: "Cultural renaissance with UNESCO sites and entertainment initiatives",
        },
        {
          icon: (
            <img
              src="/icons/city-01.png"
              alt="Quality of Life"
              className="w-full h-full"
            />
          ),
          text: "Modern infrastructure and world-class amenities improving quality of",
        },
        {
          icon: (
            <img
              src="/icons/catalogue.png"
              alt="Education"
              className="w-full h-full"
            />
          ),
          text: "Investment in education, healthcare, and sports creating vibrant ",
        },
        {
          icon: (
            <img src="/icons/city-01.png" alt="Social" className="w-full h-full" />
          ),
          text: "Social development programs enhancing citizen wellbeing ",
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
              className="w-full h-full"
            />
          ),
          text: "Targeting top 5 global competitiveness through comprehensive",
        },
        {
          icon: (
            <img
              src="/icons/city-01.png"
              alt="Giga Projects"
              className="w-full h-full"
            />
          ),
          text: "Ambitious giga-projects like NEOM and Qiddiya reshaping the ",
        },
        {
          icon: (
            <img src="/icons/catalogue.png" alt="Digital" className="w-full h-full" />
          ),
          text: "Digital transformation driving government efficiency and services",
        },
        {
          icon: (
            <img src="/icons/coins-01.png" alt="SMEs" className="w-full h-full" />
          ),
          text: "Supporting SMEs to contribute significantly to GDP growth and",
        },
        {
          icon: <img src="/icons/globe.png" alt="Energy" className="w-full h-full" />,
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
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-10 mb-16">
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
                <div
                  style={{ fontFamily: "system-ui" }}
                  className="text-white text-[20px] tracking-wide font-medium"
                >
                  المملكة العربية السعودية
                </div>
                <div className="text-white text-[14px] tracking-wider font-medium">
                  KINGDOM OF SAUDI ARABIA
                </div>
              </div>
            </div>

            {/* Tabs/Pillars */}
            <div className="space-y-3 md:space-y-4 -mr-10">
              {[
                { id: "economy", title: "A Thriving Economy" },
                { id: "society", title: "A Vibrant Society" },
                { id: "nation", title: "An Ambitious Nation" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as "economy" | "society" | "nation")}
                  className={`w-full text-left relative pl-6 border-l-4 transition-all duration-300 py-3 md:py-5 ${
                    activeTab === tab.id
                      ? "border-[#00A7A2] bg-black/20 backdrop-blur-xl"
                      : "border-none hover:border-cyan-400/60 hover:bg-cyan-400/5"
                  }`}
                >
                  <h3 className="text-white font-light text-base md:text-lg lg:text-2xl">
                    {tab.title}
                  </h3>
                </button>
              ))}
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
                      <div className="w-10 h-10 flex-shrink-0 rounded-lg flex items-center justify-center ">
                        {item.icon}
                      </div>
                      <p className="text-white/80 text-base md:text-lg leading-relaxed">
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

      {/* Bottom Stats Bar - Swiper */}
      <div className="bg-black/30 backdrop-blur-sm px-4 md:px-6 lg:px-8 relative z-10">
        <div className="py-4">
          <Swiper
            modules={[Navigation, Autoplay, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView="auto"
            speed={900}

            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            className="stats-swiper cursor-grab select-none"
          >
            {statsData.map((stat) => (
              <SwiperSlide key={stat.id} className="!w-auto">
                <div className="flex items-center gap-5">
                  <img src="/icons/saudi-tree.png" alt="" className="w-6 h-6" />
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400 text-xl font-semibold whitespace-nowrap">
                      {stat.value}
                    </span>
                    <span className="text-white text-sm whitespace-nowrap">
                      {stat.description}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
