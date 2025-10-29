import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoDownloadOutline, IoArrowForward } from "react-icons/io5";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaFileAlt, FaUserTie, FaShieldAlt } from "react-icons/fa";
import { BsBriefcase, BsPencilSquare, BsBullseye, BsPlus } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { HiUsers } from "react-icons/hi";

type TopTabType = "e_services" | "process_explorer" | "advocacy_services" | "advisory_services";
type SidebarTabType = "registration_services" | "governmental_services" | "post_registration_services";

export default function EServices() {
  const { t } = useTranslation();
  const [activeTopTab, setActiveTopTab] = useState<TopTabType>("e_services");
  const [activeSidebarTab, setActiveSidebarTab] = useState<SidebarTabType>("registration_services");

  const topTabs: Array<{ id: TopTabType; label: string; icon: React.ReactNode }> = [
    {
      id: "e_services",
      label: t("e_services.top_tabs.e_services"),
      icon: (
        <div className="flex items-center gap-1">
          <HiUsers className="w-4 h-4" />
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="4" width="16" height="12" rx="1" />
            <path d="M7 8h6M7 12h6M7 16h4" />
          </svg>
        </div>
      ),
    },
    {
      id: "process_explorer",
      label: t("e_services.top_tabs.process_explorer"),
      icon: (
        <div className="flex items-center gap-1">
          <FaFileAlt className="w-4 h-4" />
          <HiMagnifyingGlass className="w-4 h-4" />
        </div>
      ),
    },
    {
      id: "advocacy_services",
      label: t("e_services.top_tabs.advocacy_services"),
      icon: (
        <div className="flex items-center gap-1">
          <FaFileAlt className="w-4 h-4" />
          <FaShieldAlt className="w-4 h-4" />
        </div>
      ),
    },
    {
      id: "advisory_services",
      label: t("e_services.top_tabs.advisory_services"),
      icon: (
        <div className="flex items-center gap-1">
          <FaFileAlt className="w-4 h-4" />
          <FaUserTie className="w-4 h-4" />
        </div>
      ),
    },
  ];

  const sidebarTabs = [
    {
      id: "registration_services" as SidebarTabType,
      label: t("e_services.sidebar.registration_services"),
      number: "1",
    },
    {
      id: "governmental_services" as SidebarTabType,
      label: t("e_services.sidebar.governmental_services"),
      number: "2",
    },
    {
      id: "post_registration_services" as SidebarTabType,
      label: t("e_services.sidebar.post_registration_services"),
      number: "3",
    },
  ];

  const services = [
    {
      icon: (
        <div className="relative">
          <FaFileAlt className="w-5 h-5 text-[#814A98]" />
          <BsPlus className="w-3 h-3 text-[#814A98] absolute -top-1 -right-1 bg-white rounded-full" />
        </div>
      ),
      text: t("e_services.overview.services.issuing_registration"),
    },
    {
      icon: <BsBriefcase className="w-5 h-5 text-[#814A98]" />,
      text: t("e_services.overview.services.confirming_registration"),
    },
    {
      icon: <BsPencilSquare className="w-5 h-5 text-[#814A98]" />,
      text: t("e_services.overview.services.modifying_registration"),
    },
    {
      icon: <BsBullseye className="w-5 h-5 text-[#814A98]" />,
      text: t("e_services.overview.services.converting_registration"),
    },
  ];

  // Different content based on active sidebar tab
  const getContentBySidebarTab = () => {
    switch (activeSidebarTab) {
      case "registration_services":
        return {
          title: t("e_services.overview.title"),
          description: t("e_services.overview.description"),
          services: services,
        };
      case "governmental_services":
        return {
          title: t("e_services.governmental.title", { defaultValue: "Governmental Services" }),
          description: t("e_services.governmental.description", { defaultValue: "Access various governmental services related to investment activities and business operations in Saudi Arabia." }),
          services: services,
        };
      case "post_registration_services":
        return {
          title: t("e_services.post_registration.title", { defaultValue: "Post-Registration Services" }),
          description: t("e_services.post_registration.description", { defaultValue: "Manage your investment registration and access services after completing the initial registration process." }),
          services: services,
        };
      default:
        return {
          title: t("e_services.overview.title"),
          description: t("e_services.overview.description"),
          services: services,
        };
    }
  };

  const currentContent = getContentBySidebarTab();

  return (
    <section className="relative w-full bg-white py-12 md:py-20">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 md:mb-12 bukra-bold">
          {t("e_services.title")}
        </h1>

        {/* Top Navigation Tabs */}
        <div className="mb-8 md:mb-12">
          <div className="flex flex-col sm:flex-row gap-0 border-b-2 border-gray-200">
            {topTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTopTab(tab.id)}
                className={`flex items-center justify-center gap-2 px-6 py-4 font-medium transition-all duration-300 bukra-regular relative ${
                  activeTopTab === tab.id
                    ? "bg-[#E0F7FA] text-[#00A7A2] border-b-2 border-[#00A7A2] -mb-[2px]"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {tab.icon}
                <span className="text-sm md:text-base lg:text-lg">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {sidebarTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSidebarTab(tab.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 bukra-regular transform hover:scale-[1.02] ${
                    activeSidebarTab === tab.id
                      ? "bg-[#814A98] text-white shadow-lg"
                      : "bg-transparent text-gray-600 border border-gray-300 hover:bg-gray-50 hover:border-gray-400"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                      activeSidebarTab === tab.id
                        ? "bg-white text-[#814A98] scale-110"
                        : "border-2 border-gray-300 text-gray-600"
                    }`}
                  >
                    {tab.number}
                  </div>
                  <span className={`text-sm md:text-base font-medium text-left transition-colors ${
                    activeSidebarTab === tab.id ? "text-white" : "text-gray-600"
                  }`}>
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-10 relative overflow-hidden transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Text Content */}
                <div className="lg:col-span-2">
                  {/* Overview Title */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <GoLocation className="w-full h-full text-[#814A98]" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#814A98] bukra-bold transition-all duration-300">
                      {currentContent.title}
                    </h2>
                  </div>

                  {/* Introductory Text */}
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 bukra-regular transition-all duration-300">
                    {currentContent.description}
                  </p>

                  {/* Services List */}
                  <div className="space-y-4 mb-8">
                    {currentContent.services.map((service, index) => (
                      <div 
                        key={index} 
                        className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 group"
                      >
                        <div className="flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                        <p className="text-base md:text-lg text-gray-600 bukra-regular flex-1">
                          {service.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex items-center justify-center gap-2 bg-white border-2 border-[#814A98] text-gray-700 px-6 py-3 rounded-xl font-medium transition-all hover:bg-[#814A98] hover:text-white hover:shadow-lg bukra-regular transform hover:scale-105 active:scale-95">
                      <IoDownloadOutline className="w-5 h-5" />
                      <span>{t("e_services.overview.download_guide")}</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-[#814A98] hover:bg-[#6B3D7F] text-white px-6 py-3 rounded-xl font-medium transition-all bukra-regular shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95">
                      <span>{t("e_services.overview.e_services_button")}</span>
                      <IoArrowForward className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Image Section - Right side */}
                <div className="lg:col-span-1 lg:flex lg:items-start lg:justify-center">
                  <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl group hover:shadow-3xl transition-all duration-500">
                    <img
                      src="/Hero.png"
                      alt={t("e_services.overview.image_alt")}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Semi-transparent overlay gradient with curved effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00A7A2]/20 via-transparent to-[#814A98]/15 pointer-events-none">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#00A7A2]/10 rounded-full blur-3xl transform translate-x-8 -translate-y-8"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#814A98]/10 rounded-full blur-2xl transform -translate-x-6 translate-y-6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

