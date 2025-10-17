import { useState } from "react";

export default function Destination() {
  const [activeTab, setActiveTab] = useState<"rankings" | "macroeconomic">(
    "rankings"
  );

  const topStats = [
    {
      id: 1,
      number: "1",
      suffix: "st",
      description:
        "Out Of 28 Countries With The Highest % Of Trust In Gov. In 2024",
      icon: "/icons/edelman.png",
      organization: "Edelman",
    },
    {
      id: 2,
      number: "13",
      suffix: "th",
      description: "Globally In IP Enforcement Competitiveness In 2025",
      icon: "/icons/imd.png",
      organization: "IMD",
    },
    {
      id: 3,
      number: "~600",
      suffix: "",
      description:
        "Multinational Corporations Choose KSA To Establish Their RHQs",
      icon: "/icons/spa.png",
      organization: "MISA",
    },
  ];

  const pillars = [
    {
      id: 1,
      title: "Pillar 1",
      stats: [
        {
          number: "12",
          suffix: "th",
          description: "In Business Efficiency In 2025",
          bgColor: "bg-cyan-50",
          borderColor: "border-cyan-100"
        },
        {
          number: "26",
          suffix: "th",
          description: "In Business Efficiency In 2021",
          bgColor: "bg-white",
          borderColor: "border-gray-200"
        }
      ]
    },
    {
      id: 2,
      title: "Pillar 2",
      stats: [
        {
          number: "17",
          suffix: "th",
          description: "In Gov. Efficiency In 2025",
          bgColor: "bg-purple-50",
          borderColor: "border-purple-100"
        },
        {
          number: "24",
          suffix: "th",
          description: "In Economic Performance In 2025",
          bgColor: " bg-[#ECE4F0]",
          borderColor: "border-gray-200"
        }
      ]
    },
    {
      id: 3,
      title: "Pillar 3",
      stats: [
        {
          number: "17",
          suffix: "th",
          description: "In Economic Performance In 2025",
          bgColor: "bg-blue-50",
          borderColor: "border-blue-100"
        },
        {
          number: "48",
          suffix: "th",
          description: "In Economic Performance In 2025",
          bgColor: "bg-white",
          borderColor: "border-gray-200"
        }
      ]
    },
    {
      id: 4,
      title: "Pillar 4",
      stats: [
        {
          number: "31",
          suffix: "th",
          description: "In Infra. Performance In 2025",
          bgColor: "bg-teal-50",
          borderColor: "border-teal-100"
        },
        {
          number: "36",
          suffix: "th",
          description: "In Economic Performance In 2025",
          bgColor: "bg-white",
          borderColor: "border-gray-200"
        }
      ]
    }
  ];

  return (
    <section className="relative py-12 md:py-10 overflow-hidden">
      {/* Decorative Map Pattern - Right Side */}
      <div className="absolute right-0 top-0 bottom-0 w-[45%] opacity-90 pointer-events-none hidden lg:block">
        <img
          src="/destination-hero.png"
          alt="Destination Map"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-3 md:px-4 relative z-10">
        {/* Title with dotted border */}
        <div className="pt-3 md:pt-5 mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-[62px] font-light text-gray-900 mb-10 leading-tight">
            The 'Ideal Investment Destination'
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
              Global Rankings
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
              Macroeconomic Overview
              {activeTab === "macroeconomic" && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00A7A2]"></div>
              )}
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === "rankings" && (
          <div className=" p-3 md:p-5 lg:pr-[35%]">
            {/* Business Environment Section */}
            <div>
              <h3 className="text-2xl md:text-[43px] font-semibold text-gray-900 mb-2">
                Business Environment
              </h3>
              <p className="text-gray-500 text-lg mb-3">
                Rankings And Performance On Business Environment Rankings
              </p>

              {/* Top 3 Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                {topStats.map((stat) => (
                  <div
                    key={stat.id}
                    className=" bg-white border border-gray-200 p-3 rounded-xl shadow-sm"
                  >
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="text-5xl font-light text-gray-900">
                        {stat.number}
                      </span>
                      {stat.suffix && (
                        <span className="text-xl text-gray-500">
                          {stat.suffix}
                        </span>
                      )}
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
                  <span className="text-[43px] font-semibold text-gray-900">
                    17th
                  </span>
                  <p className="text-gray-600 text-lg">
                    In World Competitiveness Ranking In 2025
                  </p>
                </div>

                {/* 4 Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {pillars.map((pillar) => (
                    <div className=" bg-white p-3 border border-gray-200 rounded-xl" key={pillar.id}>
                      <div className="text-base text-gray-400 mb-3 font-normal">
                        {pillar.title}
                      </div>
                      <div className="space-y-3">
                        {pillar.stats.map((stat, index) => (
                          <div key={index} className={`${stat.bgColor} border ${stat.borderColor} p-4 rounded-xl`}>
                            <div className="flex items-baseline gap-1 mb-2">
                              <span className="text-4xl font-light text-gray-900">
                                {stat.number}
                              </span>
                              <span className="text-lg text-gray-500">{stat.suffix}</span>
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
