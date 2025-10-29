import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/config";
import CounterNumber from "./CounterNumber";

export default function Destination() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"rankings" | "macroeconomic">(
    "rankings"
  );

  const isRTL = i18n.language === "ar";

  const topStats = [
    {
      id: 1,
      number: "1",
      suffix: "st",
      description: t("destination.top_stats.trust_ranking"),
      icon: "/icons/edelman.png",
      organization: "Edelman",
    },
    {
      id: 2,
      number: "13",
      suffix: "th",
      description: t("destination.top_stats.ip_enforcement"),
      icon: "/icons/imd.png",
      organization: "IMD",
    },
    {
      id: 3,
      number: "~600",
      suffix: "",
      description: t("destination.top_stats.multinational_corps"),
      icon: "/icons/spa.png",
      organization: "MISA",
    },
  ];

  const pillars = [
    {
      id: 1,
      title: t("destination.pillar1"),
      stats: [
        {
          number: "12",
          suffix: "th",
          description: t("destination.business_efficiency_2025"),
          bgColor: "bg-cyan-50",
          borderColor: "border-cyan-100",
        },
        {
          number: "26",
          suffix: "th",
          description: t("destination.business_efficiency_2021"),
          bgColor: "bg-white",
          borderColor: "border-gray-200",
        },
      ],
    },
    {
      id: 2,
      title: t("destination.pillar2"),
      stats: [
        {
          number: "17",
          suffix: "th",
          description: t("destination.gov_efficiency"),
          bgColor: "bg-purple-50",
          borderColor: "border-purple-100",
        },
        {
          number: "24",
          suffix: "th",
          description: t("destination.economic_performance"),
          bgColor: " bg-[#ECE4F0]",
          borderColor: "border-gray-200",
        },
      ],
    },
    {
      id: 3,
      title: t("destination.pillar3"),
      stats: [
        {
          number: "17",
          suffix: "th",
          description: t("destination.economic_performance"),
          bgColor: "bg-blue-50",
          borderColor: "border-blue-100",
        },
        {
          number: "48",
          suffix: "th",
          description: t("destination.economic_performance"),
          bgColor: "bg-white",
          borderColor: "border-gray-200",
        },
      ],
    },
    {
      id: 4,
      title: t("destination.pillar4"),
      stats: [
        {
          number: "31",
          suffix: "th",
          description: t("destination.infra_performance"),
          bgColor: "bg-teal-50",
          borderColor: "border-teal-100",
        },
        {
          number: "36",
          suffix: "th",
          description: t("destination.economic_performance"),
          bgColor: "bg-white",
          borderColor: "border-gray-200",
        },
      ],
    },
  ];

  return (
    <section className="relative py-12 md:py-10 overflow-hidden">
      {/* Decorative Map Pattern - Right Side */}
      <div
        className={`absolute ${
          isRTL ? "left-0" : "right-0"
        } top-0 bottom-0 w-[35%] opacity-90 pointer-events-none hidden lg:block`}
      >
        <img
          src="/destination-hero.png"
          alt="Destination Map"
          className="w-full h-full object-cover"
        />
      </div>

      <div className={`container mx-auto px-3 md:px-4 relative z-10`}>
        {/* Title with dotted border */}
        <div className="pt-3 md:pt-5 mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-[62px] font-light text-gray-900 mb-10 leading-tight">
            {t("destination.title")}
          </h2>

          {/* Tabs */}
          <div className="flex gap-10 border-b border-gray-300 mb-8">
            <button
              onClick={() => setActiveTab("rankings")}
              className={`pb-3 text-base md:text-lg font-normal transition-colors relative ${
                activeTab === "rankings"
                  ? "text-gray-900"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {t("destination.global_rankings")}
              {activeTab === "rankings" && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00A7A2]"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab("macroeconomic")}
              className={`pb-3 text-base md:text-lg font-normal transition-colors relative ${
                activeTab === "macroeconomic"
                  ? "text-gray-900"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {t("destination.macroeconomic_overview")}
              {activeTab === "macroeconomic" && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00A7A2]"></div>
              )}
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === "rankings" && (
          <div
            className={` p-3 md:p-5 ${isRTL ? "lg:pl-[35%]" : "lg:pr-[35%]"}`}
          >
            {/* Business Environment Section */}
            <div>
              <div className="bg-gradient-to-r from-[#00A7A2] to-[#814a98]  p-1 pt-2  rounded-2xl mb-5">
                <div className="px-3">
                  <h3 className="text-2xl md:text-[43px] font-semibold text-white mb-2">
                    {t("destination.business_environment")}
                  </h3>
                  <p className="text-white text-lg mb-3">
                    {t("destination.business_environment_desc")}
                  </p>
                </div>

                {/* Top 3 Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3">
                  {topStats.map((stat, index) => (
                    <div
                      key={stat.id}
                      className={` bg-white border border-gray-200 p-3 ${
                        index === 0
                          ? "rounded-l-xl"
                          : index === 2
                          ? "rounded-r-xl"
                          : ""
                      }`}
                    >
                      <div className="flex items-baseline gap-1 mb-3">
                        <CounterNumber
                          value={stat.number}
                          suffix={stat.suffix}
                          className="text-5xl font-light text-gray-900"
                          suffixClassName="text-xl text-gray-500"
                          animationDuration={0.8}
                          enableScaleAnimation={false}
                        />
                      </div>
                      <p className="text-gray-600 text-sm mb-5 leading-relaxed min-h-[50px]">
                        {stat.description}
                      </p>
                      <div className="flex items-end gap-2">
                        <img
                          src={stat.icon}
                          alt={stat.organization}
                          className="h-10 w-auto"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* World Competitiveness Ranking */}
              <div className="bg-gradient-to-r from-[#00A7A2] to-[#814a98]  p-1 pt-2  rounded-2xl mb-5">
                <div className={`flex flex-col items-start gap-2 mb-3 px-3`}>
                  <p className=" text-[43px] font-semibold text-white">
                    17th
                  </p>
                  <p className="text-white text-lg">
                    {t("destination.world_competitiveness")}
                  </p>
                </div>

                {/* 4 Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                  {pillars.map((pillar) => (
                    <div
                      className={` bg-white p-3 border border-gray-200 rounded-xl ${pillar.id === 1 ? "rounded-l-xl" : pillar.id === 4 ? "rounded-r-xl" : ""}`}
                      key={pillar.id}
                    >
                      <div className="text-base text-gray-400 mb-3 font-normal">
                        {pillar.title}
                      </div>
                      <div className="space-y-3">
                        {pillar.stats.map((stat, index) => (
                          <div
                            key={index}
                            className={`${stat.bgColor} border ${stat.borderColor} p-4 rounded-xl`}
                          >
                            <div className="flex items-baseline gap-1 mb-2">
                              <CounterNumber
                                value={stat.number}
                                suffix={stat.suffix}
                                className="text-4xl font-light text-gray-900"
                                suffixClassName="text-lg text-gray-500"
                                enableScaleAnimation={false}
                              />
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed">
                              {stat.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "macroeconomic" && (
          <div
            className={` p-3 md:p-5 ${isRTL ? "lg:pl-[35%]" : "lg:pr-[35%]"}`}
          >
            {/* Business Environment Section */}
            <div>
              <h3 className="text-2xl md:text-[43px] font-semibold text-gray-900 mb-2">
                {t("destination.business_environment")}
              </h3>
              <p className="text-gray-500 text-lg mb-3">
                {t("destination.business_environment_desc")}
              </p>

              {/* Top 3 Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                {topStats.map((stat) => (
                  <div
                    key={stat.id}
                    className=" bg-white border border-gray-200 p-3 rounded-xl shadow-sm"
                  >
                    <div className="flex items-baseline gap-1 mb-3">
                      <CounterNumber
                        value={stat.number}
                        suffix={stat.suffix}
                        className="text-5xl font-light text-gray-900"
                        suffixClassName="text-xl text-gray-500"
                      />
                    </div>
                    <p className="text-gray-600 text-sm mb-5 leading-relaxed min-h-[50px]">
                      {stat.description}
                    </p>
                    <div className="flex items-end gap-2">
                      <img
                        src={stat.icon}
                        alt={stat.organization}
                        className="h-10 w-auto"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* World Competitiveness Ranking */}
              <div>
                <div className="flex flex-col items-baseline gap-2 mb-3">
                  <CounterNumber
                    value="17"
                    suffix="th"
                    className="text-[43px] font-semibold text-gray-900"
                    suffixClassName="text-[43px] font-semibold text-gray-900"
                  />
                  <p className="text-gray-600 text-lg">
                    {t("destination.world_competitiveness")}
                  </p>
                </div>

                {/* 4 Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {pillars.map((pillar) => (
                    <div
                      className=" bg-white p-3 border border-gray-200 rounded-xl"
                      key={pillar.id}
                    >
                      <div className="text-base text-gray-400 mb-3 font-normal">
                        {pillar.title}
                      </div>
                      <div className="space-y-3">
                        {pillar.stats.map((stat, index) => (
                          <div
                            key={index}
                            className={`${stat.bgColor} border ${stat.borderColor} p-4 rounded-xl`}
                          >
                            <div className="flex items-baseline gap-1 mb-2">
                              <CounterNumber
                                value={stat.number}
                                suffix={stat.suffix}
                                className="text-4xl font-light text-gray-900"
                                suffixClassName="text-lg text-gray-500"
                              />
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed">
                              {stat.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
