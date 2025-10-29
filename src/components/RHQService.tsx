import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";
import type { Swiper as SwiperType } from "swiper";
import { useState } from "react";

interface Program {
  id: number;
  title: string;
  subtitle?: string;
  isHighlighted?: boolean;
  logo?: "palm" | "flower" | "airplane" | "gear" | "split" | "partners";
}

interface RHQSection {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export default function RHQService() {
  const { t } = useTranslation();
  const [, setSwiper] = useState<SwiperType | null>(null);

  const programs: Program[] = [
    {
      id: 1,
      title: t("rhq_service.programs.quality_of_life"),
      logo: "flower",
    },
    {
      id: 2,
      title: t("rhq_service.programs.saudi_arabia_startup"),
      subtitle: "SAUDI ARABIA",
      logo: "palm",
    },
    {
      id: 3,
      title: t("rhq_service.programs.national_investment_strategy"),
      subtitle: t("rhq_service.programs.global_supply_chain"),
      logo: "split",
    },
    {
      id: 4,
      title: t("rhq_service.programs.invest_saudi"),
      subtitle: t("rhq_service.programs.invest_saudi_sub"),
      isHighlighted: true,
      logo: "palm",
    },
    {
      id: 5,
      title: t("rhq_service.programs.ignite"),
    },
    {
      id: 6,
      title: t("rhq_service.programs.partners"),
      logo: "partners",
    },
    {
      id: 7,
      title: t("rhq_service.programs.ntdp"),
    },
    {
      id: 8,
      title: t("rhq_service.programs.financial_sector"),
      logo: "gear",
    },
    {
      id: 9,
      title: t("rhq_service.programs.air_connectivity"),
      logo: "airplane",
    },
  ];

  const rhqSections: RHQSection[] = [
    {
      id: "pre_location",
      title: t("rhq_service.sections.pre_location.title"),
      description: t("rhq_service.sections.pre_location.description"),
      icon: "location",
    },
    {
      id: "preparation",
      title: t("rhq_service.sections.preparation.title"),
      description: t("rhq_service.sections.preparation.description"),
      icon: "briefcase",
    },
    {
      id: "arrival",
      title: t("rhq_service.sections.arrival.title"),
      description: t("rhq_service.sections.arrival.description"),
      icon: "airplane",
    },
    {
      id: "living",
      title: t("rhq_service.sections.living.title"),
      description: t("rhq_service.sections.living.description"),
      icon: "house",
    },
  ];

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case "location":
        return (
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        );
      case "briefcase":
        return (
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        );
      case "airplane":
        return (
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        );
      case "house":
        return (
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative w-full min-h-screen py-12 md:py-16 bg-gradient-to-br from-[#2d1f47] via-[#1f3550] to-[#1a4d52] overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 lg:gap-12">
          {/* Left Side - National Programs List */}
          <div className="lg:sticky lg:top-8 h-fit">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t("rhq_service.national_programs_title")}
            </h3>

            {/* Scroll Indicators */}
            <div className="flex justify-center mb-4 lg:hidden">
              <svg
                className="w-6 h-6 text-white/60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </div>

            {/* Swiper Container for Programs */}
            <div className="relative">
              <Swiper
                modules={[Navigation]}
                direction="vertical"
                slidesPerView="auto"
                spaceBetween={12}
                navigation={{
                  nextEl: ".rhq-programs-next",
                  prevEl: ".rhq-programs-prev",
                }}
                onSwiper={setSwiper}
                className="rhq-programs-swiper"
                style={{ height: "calc(100vh - 200px)", maxHeight: "800px", minHeight: "500px" }}
              >
                {programs.map((program) => (
                  <SwiperSlide
                    key={program.id}
                    className="!h-auto"
                    style={{ height: "auto" }}
                  >
                    <div
                      className={`p-4 rounded-lg backdrop-blur-sm border transition-all cursor-pointer ${
                        program.isHighlighted
                          ? "border-teal-400 border-2 bg-green-900/30"
                          : "border-white/10 bg-[#1a2332]/80 hover:bg-[#1a2332]"
                      }`}
                    >
                      {program.logo === "split" ? (
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center text-white font-bold text-sm">
                              8
                            </div>
                            <p className="text-white text-xs font-medium">
                              {program.title}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 border-l border-white/10 pl-2">
                            <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                              <svg
                                className="w-5 h-5 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                />
                              </svg>
                            </div>
                            <p className="text-white text-xs font-medium">
                              {program.subtitle}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3">
                          {/* Logo Placeholder */}
                          <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                            {program.logo === "palm" ? (
                              <svg
                                className="w-8 h-8 text-white"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                              </svg>
                            ) : program.logo === "flower" ? (
                              <svg
                                className="w-8 h-8 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                />
                              </svg>
                            ) : program.logo === "airplane" ? (
                              <svg
                                className="w-8 h-8 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                />
                              </svg>
                            ) : program.logo === "gear" ? (
                              <svg
                                className="w-8 h-8 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                            ) : (
                              <div className="w-8 h-8 bg-white/10 rounded"></div>
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            {program.subtitle && (
                              <p className="text-white/70 text-xs mb-1 uppercase">
                                {program.subtitle}
                              </p>
                            )}
                            <p
                              className={`text-white font-medium ${
                                program.isHighlighted ? "text-base" : ""
                              } ${
                                program.subtitle
                                  ? "text-sm"
                                  : "text-base md:text-lg"
                              }`}
                            >
                              {program.title}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Arrows */}
              <button className="rhq-programs-prev absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-10 z-10 w-8 h-8 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </button>
              <button className="rhq-programs-next absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-10 z-10 w-8 h-8 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side - RHQ Details */}
          <div className="flex flex-col relative">
            {/* Background Pattern for Right Side */}
            <div
              className="absolute inset-0 opacity-[0.02] pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1400 800'%3E%3Cdefs%3E%3ClinearGradient id='cityGrad' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' style='stop-color:%232d1f47'/%3E%3Cstop offset='100%25' style='stop-color:%231f3550'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23cityGrad)' width='1400' height='800'/%3E%3Crect fill='%23ffffff' opacity='0.05' x='60' y='600' width='55' height='200' rx='2'/%3E%3Crect fill='%23ffffff' opacity='0.04' x='125' y='550' width='45' height='250' rx='2'/%3E%3Crect fill='%23ffffff' opacity='0.03' x='180' y='580' width='50' height='220' rx='2'/%3E%3Crect fill='%23ffffff' opacity='0.05' x='240' y='520' width='60' height='280' rx='2'/%3E%3C/svg%3E")`,
                backgroundSize: "cover",
                backgroundPosition: "center bottom",
              }}
            />

            <div className="relative z-10">
              {/* Title and Subtitle */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                  {t("rhq_service.title")}
                </h2>
                <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-4xl">
                  {t("rhq_service.subtitle")}
                </p>
              </div>

            {/* RHQ Sections Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 md:mb-12">
              {rhqSections.map((section) => (
                <div
                  key={section.id}
                  className="p-6 rounded-xl bg-[#1a2332]/60 backdrop-blur-sm border border-white/10 hover:bg-[#1a2332]/80 transition-all"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-white/10 rounded-lg">
                      {renderIcon(section.icon)}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-white text-xl font-bold mb-3">
                        {section.title}
                      </h3>
                      <p className="text-white/70 text-sm md:text-base leading-relaxed">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <button className="px-6 py-3 bg-transparent border-2 border-white/30 text-white rounded-lg font-semibold hover:border-white/50 hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                  <span>{t("rhq_service.cta.talk_to_advisor")}</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                <button className="px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-all flex items-center justify-center gap-2">
                  <span>{t("rhq_service.cta.visit_rhq")}</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .rhq-programs-swiper {
          padding: 40px 0 !important;
        }
        
        .rhq-programs-swiper .swiper-wrapper {
          display: flex;
          flex-direction: column;
        }
        
        .rhq-programs-swiper .swiper-slide {
          height: auto !important;
        }
        
        .rhq-programs-swiper .swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  );
}

