import { useTranslation } from "react-i18next";

export default function Opportunities() {
  const { t } = useTranslation();

  const regionData = {
    riyadh: {
      name: t("opportunities.regions.riyadh"),
      keyFigures: [
        {
          value: "936 B",
          label: t("opportunities.stats.gdp_ranking"),
          change: "100%",
          trend: "up",
        },
        {
          value: "47%",
          label: t("opportunities.stats.private_sector"),
          change: "100%",
          trend: "up",
        },
        {
          value: "38 th",
          label: t("opportunities.stats.logistics"),
          change: "100%",
          trend: "up",
        },
        {
          value: "2.4%",
          label: t("opportunities.stats.fdi"),
          change: "100%",
          trend: "up",
        },
      ],
      gigaProjects: [
        {
          title: t("opportunities.projects.advanced_manufacturing"),
          image:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
        },
        {
          title: t("opportunities.projects.aerospace_defense"),
          image:
            "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop",
        },
        {
          title: t("opportunities.projects.agriculture_food"),
          image:
            "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop",
        },
      ],
      opportunities: [
        {
          title: t("opportunities.projects.advanced_manufacturing"),
          image:
            "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
        },
        {
          title: t("opportunities.projects.aerospace_defense"),
          image:
            "https://images.unsplash.com/photo-1583425423320-2386622cd2e4?w=400&h=300&fit=crop",
        },
        {
          title: t("opportunities.projects.agriculture_food"),
          image:
            "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop",
        },
      ],
    },
    makkah: {
      name: t("opportunities.regions.makkah"),
      keyFigures: [
        {
          value: "850 B",
          label: t("opportunities.stats.gdp_ranking"),
          change: "95%",
          trend: "up",
        },
        {
          value: "42%",
          label: t("opportunities.stats.private_sector"),
          change: "88%",
          trend: "up",
        },
        {
          value: "35 th",
          label: t("opportunities.stats.logistics"),
          change: "92%",
          trend: "up",
        },
        {
          value: "2.1%",
          label: t("opportunities.stats.fdi"),
          change: "85%",
          trend: "up",
        },
      ],
      gigaProjects: [
        {
          title: t("opportunities.projects.tourism_development"),
          image:
            "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop",
        },
        {
          title: t("opportunities.projects.infrastructure"),
          image:
            "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop",
        },
        {
          title: t("opportunities.projects.hospitality"),
          image:
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
        },
      ],
      opportunities: [
        {
          title: t("opportunities.projects.religious_tourism"),
          image:
            "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=400&h=300&fit=crop",
        },
        {
          title: t("opportunities.projects.real_estate"),
          image:
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
        },
        {
          title: t("opportunities.projects.smart_cities"),
          image:
            "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=300&fit=crop",
        },
      ],
    },
    eastern: {
      name: t("opportunities.regions.eastern"),
      keyFigures: [
        {
          value: "920 B",
          label: t("opportunities.stats.gdp_ranking"),
          change: "105%",
          trend: "up",
        },
        {
          value: "52%",
          label: t("opportunities.stats.private_sector"),
          change: "98%",
          trend: "up",
        },
        {
          value: "32 th",
          label: t("opportunities.stats.logistics"),
          change: "102%",
          trend: "up",
        },
        {
          value: "3.1%",
          label: t("opportunities.stats.fdi"),
          change: "110%",
          trend: "up",
        },
      ],
      gigaProjects: [
        {
          title: t("opportunities.projects.energy_oil"),
          image:
            "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&h=300&fit=crop",
        },
        {
          title: t("opportunities.projects.petrochemicals"),
          image:
            "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
        },
        {
          title: t("opportunities.projects.logistics_hub"),
          image:
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
        },
      ],
      opportunities: [
        {
          title: t("opportunities.projects.industrial_parks"),
          image:
            "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400&h=300&fit=crop",
        },
        {
          title: t("opportunities.projects.port_development"),
          image:
            "https://images.unsplash.com/photo-1605282003441-a966bb348137?w=400&h=300&fit=crop",
        },
        {
          title: t("opportunities.projects.technology_sector"),
          image:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
        },
      ],
    },
  };

  const currentData = regionData["riyadh"];

  return (
    <section className="relative py-6 md:py-8  overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/opportunities-hero.png"
          alt="Opportunities Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 "></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Title with dotted border */}
        <div className="pt-8 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white">
            {t("opportunities.title")}
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Map */}
          <div className="relative">
            <div className="relative w-full h-[500px] flex items-center justify-center">
              {/* Saudi Arabia Map SVG */}
              <img src="/saudi-map.png" alt="" />
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-8">
            {/* Key Figures */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <img src="./icons/radio.png" alt="" className="w-7 h-7" />
                <h3 className="text-base md:text-[45px] font-light text-white">
                  {currentData.name} {t("opportunities.key_figures")}
                </h3>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {currentData.keyFigures.map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-black/50 backdrop-blur-xl border border-black/10 rounded-2xl p-4"
                    style={{ boxShadow: "0 0 1px 0 rgba(255, 255, 255,1)" }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="text-2xl md:text-[43px] font-light text-white">
                        {stat.value}
                      </div>
                      <div className="flex flex-col items-center gap-1 text-xs text-[#00A7A2]">
                        <div className="flex items-center gap-1">
                          <img
                            src="./icons/trend-up.png"
                            alt=""
                            className="w-4 h-4"
                          />
                          <span className="text-[14px">{stat.change}</span>
                        </div>
                        <p className="text-[14px] text-gray-400 mt-1">
                          {t("opportunities.vs_last_year")}
                        </p>
                      </div>
                    </div>
                    <p className="text-base text-gray-400 leading-tight">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Giga Projects */}
            <div>
              <h4 className="text-sm font-medium text-slate-400 mb-4">
                {t("opportunities.giga_projects")}
              </h4>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {currentData.gigaProjects.map((project, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
                  >
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
              <h4 className="text-sm font-medium text-slate-400 mb-4">
                {t("opportunities.opportunities_section")}
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {currentData.opportunities.map((opportunity, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
                  >
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
            <div className="relative py-6">
              <div className="flex items-center">
                <div className="flex-1 h-0.5 bg-white/30 backdrop-blur-sm"></div>
                <button className="px-6 text-white text-base font-medium transition-all duration-300">
                  {t("opportunities.view_more")}
                </button>
                <div className="flex-1 h-0.5 bg-white/30 backdrop-blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
