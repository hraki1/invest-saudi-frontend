import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { TbArrowCurveRight } from "react-icons/tb";
import { CgArrowTopRight } from "react-icons/cg";

// Swiper styles will be added to CSS file

interface DashboardMetric {
  label: string;
  baseline: string;
  current: string;
  target: string;
  suffix?: string; // Optional suffix like "B", "%", "th", etc.
}

export default function StrategicDirection() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"economy" | "society" | "nation">(
    "economy"
  );

  // Dashboard metrics grouped by columns (array of arrays)
  const dashboardColumns: DashboardMetric[][] = [
    [
      {
        label: t("strategic_direction.vision_dashboard.metrics.gdp_ranking"),
        baseline: "812.73",
        current: "936",
        target: "1,732.9",
        suffix: "B",
      },
      {
        label: t(
          "strategic_direction.vision_dashboard.metrics.non_oil_exports"
        ),
        baseline: "534",
        current: "681",
        target: "1,325",
        suffix: "B",
      },
      {
        label: t("strategic_direction.vision_dashboard.metrics.hdi"),
        baseline: "0.846",
        current: ".875",
        target: ".94",
      },
    ],
    [
      {
        label: t(
          "strategic_direction.vision_dashboard.metrics.private_sector_gdp"
        ),
        baseline: "40",
        current: "47",
        target: "65",
        suffix: "%",
      },
      {
        label: t("strategic_direction.vision_dashboard.metrics.fdi_gdp"),
        baseline: "1.1",
        current: "2.4",
        target: "5.7",
        suffix: "%",
      },
      {
        label: t(
          "strategic_direction.vision_dashboard.metrics.talent_competitiveness"
        ),
        baseline: "29",
        current: "32",
        target: "20",
        suffix: "th",
      },
    ],
    [
      {
        label: t(
          "strategic_direction.vision_dashboard.metrics.logistics_performance"
        ),
        baseline: "49",
        current: "38",
        target: "25",
        suffix: "th",
      },
      {
        label: t("strategic_direction.vision_dashboard.metrics.womens_labor"),
        baseline: "22.8",
        current: "33.5",
        target: "40",
        suffix: "%",
      },
    ],
  ];

  const statsData = [
    {
      id: 1,
      icon: "📈",
      value: "1.8%",
      description: t("strategic_direction.stats.gdp_growth"),
    },
    {
      id: 2,
      icon: "💰",
      value: "24%",
      description: t("strategic_direction.stats.fdi_growth"),
    },
    {
      id: 3,
      icon: "⭐",
      value: "A+",
      description: t("strategic_direction.stats.credit_rating"),
    },
    {
      id: 4,
      icon: "🚀",
      value: "30.4%",
      description: t("strategic_direction.stats.export_growth"),
    },
    {
      id: 1,
      title: t("strategic_direction.stats.pro_investor"),
      value: "24%",
      description: t("strategic_direction.stats.pro_investor_desc"),
    },
    {
      id: 2,
      title: t("strategic_direction.stats.tax_incentives"),
      value: "24%",
      description: t("strategic_direction.stats.tax_incentives_desc"),
    },
    {
      id: 3,
      title: t("strategic_direction.stats.tax_laws"),
      value: "24%",
      description: t("strategic_direction.stats.tax_laws_desc"),
    },
    {
      id: 4,
      title: t("strategic_direction.stats.investment_law"),
      value: "24%",
      description: t("strategic_direction.stats.investment_law_desc"),
    },
  ];

  const tabs: Array<{ id: "economy" | "society" | "nation"; title: string }> = [
    { id: "economy", title: t("strategic_direction.thriving_economy") },
    { id: "society", title: t("strategic_direction.vibrant_society") },
    { id: "nation", title: t("strategic_direction.ambitious_nation") },
  ];

  // UI style constants
  const activeButtonBgClass =
    "bg-gradient-to-r from-black/40 via-black/30 to-black/0 backdrop-blur-xl";
  const inactiveButtonHoverClass =
    "hover:border-cyan-400/60 hover:bg-cyan-400/5";
  const activeTabLeftBarClass =
    "bg-[linear-gradient(181.86deg,_#00A7A2_5.72%,_#0179C2_49.63%,_#814A98_93.54%)]";

  const tabContent = {
    economy: {
      title: t("strategic_direction.investment_destination"),
      items: [
        {
          icon: (
            <img
              src="/icons/globe.png"
              alt="Economy"
              className="w-full h-full"
            />
          ),
          text: t("strategic_direction.economy_items.item1"),
        },
        {
          icon: (
            <img
              src="/icons/cash-02.png"
              alt="Investment"
              className="w-full h-full"
            />
          ),
          text: t("strategic_direction.economy_items.item2"),
        },
        {
          icon: (
            <img
              src="/icons/globe.png"
              alt="Market Access"
              className="w-full h-full"
            />
          ),
          text: t("strategic_direction.economy_items.item3"),
        },
        {
          icon: (
            <img
              src="/icons/catalogue.png"
              alt="Ecosystem"
              className="w-full h-full"
            />
          ),
          text: t("strategic_direction.economy_items.item4"),
        },
        {
          icon: (
            <img
              src="/icons/coins-01.png"
              alt="Incentives"
              className="w-full h-full"
            />
          ),
          text: t("strategic_direction.economy_items.item5"),
        },
      ],
    },
    society: {
      title: t("strategic_direction.investment_destination"),
      items: [
        {
          icon: (
            <img
              src="/icons/city-01.png"
              alt="Tourism"
              className="w-full h-full"
            />
          ),
          text: t("strategic_direction.society_items.item1"),
        },
        {
          icon: (
            <img
              src="/icons/catalogue.png"
              alt="Culture"
              className="w-full h-full"
            />
          ),
          text: t("strategic_direction.society_items.item2"),
        },
        {
          icon: (
            <img
              src="/icons/city-01.png"
              alt="Quality of Life"
              className="w-full h-full"
            />
          ),
          text: t("strategic_direction.society_items.item3"),
        },
        {
          icon: (
            <img
              src="/icons/catalogue.png"
              alt="Education"
              className="w-full h-full"
            />
          ),
          text: t("strategic_direction.society_items.item4"),
        },
        {
          icon: (
            <img
              src="/icons/city-01.png"
              alt="Social"
              className="w-full h-full"
            />
          ),
          text: t("strategic_direction.society_items.item5"),
        },
      ],
    },
    nation: {
      title: t("strategic_direction.investment_destination"),
      items: [
        {
          icon: (
            <img
              src="/icons/globe.png"
              alt="Competitiveness"
              className="w-full h-full"
            />
          ),
          text: t("strategic_direction.nation_items.item1"),
        },
        {
          icon: (
            <img
              src="/icons/city-01.png"
              alt="Giga Projects"
              className="w-full h-full"
            />
          ),
          text: t("strategic_direction.nation_items.item2"),
        },
        {
          icon: (
            <img
              src="/icons/catalogue.png"
              alt="Digital"
              className="w-full h-full"
            />
          ),
          text: t("strategic_direction.nation_items.item3"),
        },
        {
          icon: (
            <img
              src="/icons/coins-01.png"
              alt="SMEs"
              className="w-full h-full"
            />
          ),
          text: t("strategic_direction.nation_items.item4"),
        },
        {
          icon: (
            <img
              src="/icons/globe.png"
              alt="Energy"
              className="w-full h-full"
            />
          ),
          text: t("strategic_direction.nation_items.item5"),
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
      <div className="container mx-auto px-3 relative z-10">
        {/* Title */}
        <div className="flex items-center justify-between mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl bukra-bold md:text-5xl lg:text-6xl font-extralight text-white">
            {t("strategic_direction.title")}
          </h2>

          {/* Vision 2030 Logo */}
          <div className=" md:block">
            <div className="text-center ">
              <div className="inline-block">
                <div className="relative inline-block">
                  <img
                    src="/vision.png"
                    alt="Vision 2030"
                    className="w-16 md:w-25.5 h-auto object-cover"
                  />
                  <div className="absolute md:top-8.5 top-5 left-[21px] md:left-[38px] transform -translate-x-1/2 -translate-y-1/2">
                    <img
                      src="/Group.png"
                      alt="Vision Icon"
                      className="w-5 h-5 md:w-8 md:h-8 object-contain"
                    />
                  </div>
                </div>
                <div
                  style={{ fontFamily: "system-ui" }}
                  className="text-white text-[5px] md:text-[10px] tracking-wide font-medium"
                >
                  {t("strategic_direction.saudi_arabia_ar")}
                </div>
                <div className="text-white text-[3.5px] md:text-[7px] tracking-wider font-medium">
                  {t("strategic_direction.kingdom_eng")}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-14 mb-16">
          {/* Left Column: Vision Quote & Crown Prince - 4 columns */}
          <div className="lg:col-span-5 space-y-6 mb-10 lg:mb-0">
            {/* Vision Quote */}
            <div className=" bg-gradient-to-br from-black/40 via-black/30 to-black/0.5  backdrop-blur-sm p-6 md:p-8 rounded-2xl">
              <p className="text-white/90 text-xs md:text-2xl leading-relaxed">
                "{t("strategic_direction.vision_quote")}"
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
                    {t("strategic_direction.crown_prince")}
                  </h3>
                  <p className="text-base text-white/60 leading-tight">
                    {t("strategic_direction.crown_prince_title")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* right: Vision 2030 with Tabs - 4 columns */}
          <div className="lg:col-span-7 flex flex-col md:flex-row items-start justify-center">
            {/* Tabs/Pillars */}
            <div className="space-y-3 md:space-y-4 mb-5 mt-7 lg:mb-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() =>
                    setActiveTab(tab.id as "economy" | "society" | "nation")
                  }
                  className={`w-full text-left relative pl-6 rounded-l-xl transition-all duration-300 py-3 md:py-6 ${
                    activeTab === tab.id
                      ? activeButtonBgClass
                      : inactiveButtonHoverClass
                  }`}
                >
                  <span
                    className={`absolute top-0 left-0 w-2 rounded-l-3xl h-full ${
                      activeTab === tab.id
                        ? activeTabLeftBarClass
                        : "bg-transparent"
                    }`}
                  ></span>
                  <h3 className="text-white font-light text-base md:text-lg lg:text-2xl">
                    {tab.title}
                  </h3>
                </button>
              ))}
            </div>
            <div className="bg-black/40 backdrop-blur-sm p-6 md:p-8 rounded-2xl">
              <div className="space-y-6">
                {tabContent[activeTab].items.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex gap-4 animate-fade-in">
                      <div className="w-10 h-10 flex-shrink-0 rounded-lg flex items-center justify-center ">
                        {item.icon}
                      </div>
                      <p className="md:min-w-[418px] text-white/80 text-base md:text-lg leading-relaxed">
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

        {/* Dashboard */}
        <div className="mt-12 mb-12">
          <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-8 md:p-5 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-orange-400/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-400/5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              {/* Dashboard Grid - 3 equal columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {dashboardColumns.map((column, colIdx) => (
                  <div
                    key={colIdx}
                    className="space-y-7 flex flex-col items-center mb-5 md:mb-0"
                  >
                    {column.map((metric, idx) => (
                      <div
                        key={idx}
                        className={`space-y-2.5 px-4 xl:px-9 ${
                          colIdx > 0 ? "gradient-border-left" : ""
                        }`}
                      >
                        <p className="text-white text-xs md:text-sm leading-relaxed">
                          {metric.label}
                        </p>
                        <div className="flex gap-2.5 items-center flex-nowrap text-[28px] text-center">
                          <div className="flex justify-center gap-1 items-start backdrop-blur-sm w-[100px] md:w-[120px] xl:w-[137px] rounded-lg text-white text-base md:text-lg 2xl:text-[28px] font-semibold whitespace-nowrap flex-shrink-0 relative">
                            {metric.baseline}
                            {metric.suffix && (
                              <div className="text-xs">{metric.suffix}</div>
                            )}
                          </div>
                          <div className="flex justify-center gap-1 items-center bg-[#006461] w-[100px] md:w-[120px] xl:w-[137px] rounded-lg text-white text-base md:text-lg 2xl:text-[28px]  font-semibold whitespace-nowrap flex-shrink-0 relative">
                            <div className="flex justify-center gap-1 items-start">
                              {metric.current}
                              {metric.suffix && (
                                <div className="text-xs">{metric.suffix}</div>
                              )}
                            </div>
                            <TbArrowCurveRight className="rotate-45" />
                          </div>
                          <div className="flex justify-center gap-1 items-start bg-[#4D2C5B] w-[100px] md:w-[120px] xl:w-[137px]  rounded-lg text-white text-base md:text-lg 2xl:text-[28px]  font-semibold whitespace-nowrap flex-shrink-0">
                            {metric.target}
                            {metric.suffix && (
                              <div className="text-xs">{metric.suffix}</div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Footer with source and legend */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-4 border-t border-white/10">
            <p className="text-white/50 text-xs md:text-sm">
              {t("strategic_direction.vision_dashboard.source")}
            </p>
            <div className="flex gap-6 text-white text-xs md:text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                <span>
                  {t("strategic_direction.vision_dashboard.baseline")}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#00A7A2]"></div>
                <span>{t("strategic_direction.vision_dashboard.current")}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#814A98]"></div>
                <span>{t("strategic_direction.vision_dashboard.target")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Review link */}
        <div className="mt-12 mb-12 flex items-center justify-center text-center">
          <div className="flex items-center gap-2 justify-center bg-[#00A7A2] text-white md:px-6 px-5 py-2 rounded-3xl text-sm md:text-xl bukra-regular">
            <p>
              Review the Economy Report{" "}
              <span className="text-sm md:text-base">2025</span>
            </p>
            <CgArrowTopRight />
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar - Swiper */}
      <div className="bg-black/30 backdrop-blur-sm px-4 md:px-6 lg:px-[30px] relative z-10">
        <div className="py-4">
          <Swiper
            modules={[Navigation, Autoplay, Pagination, Autoplay]}
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
              <SwiperSlide
                key={stat.id}
                className="!w-auto px-2 md:px-6 lg:px-4"
              >
                <div className="flex items-center gap-4 md:gap-8">
                  <img
                    src="/icons/saudi-tree.png"
                    alt=""
                    className="h-[16px] md:h-[18px] lg:h-[22px]"
                  />
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400 text-sm md:text-base lg:text-[22px] font-bold whitespace-nowrap">
                      {stat.value}
                    </span>
                    <span className="text-white text-sm md:text-base lg:text-[22px] whitespace-nowrap">
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
