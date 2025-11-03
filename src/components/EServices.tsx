import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoDownloadOutline, IoArrowForward } from "react-icons/io5";
import { FaFileAlt } from "react-icons/fa";
import { BsBriefcase, BsPencilSquare, BsBullseye } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { HiUsers } from "react-icons/hi";

type TopTabType =
  | "e_services"
  | "process_explorer"
  | "advocacy_services"
  | "advisory_services";
type SidebarTabType =
  | "registration_services"
  | "governmental_services"
  | "post_registration_services";

export default function EServices() {
  const { t } = useTranslation();
  const [activeTopTab, setActiveTopTab] = useState<TopTabType>("e_services");
  const [activeSidebarTab, setActiveSidebarTab] = useState<SidebarTabType>(
    "registration_services"
  );

  type ApiIconKey =
    | "users"
    | "file"
    | "briefcase"
    | "pencil"
    | "bullseye";

  type ApiService = { icon: ApiIconKey; text: string };
  type ApiTopTab = { id: TopTabType; label: string; icon: ApiIconKey };
  type ApiSidebarTab = { id: SidebarTabType; label: string; number: string };
  type ApiContent = Record<
    SidebarTabType,
    { title: string; description: string; services: ApiService[] }
  >;
  type ApiData = {
    pageTitle: string;
    topTabs: ApiTopTab[];
    sidebarTabs: ApiSidebarTab[];
    content: ApiContent;
    cta: { downloadLabel: string; actionLabel: string };
    imageAlt: string;
  };

  const [data, setData] = useState<ApiData | null>(null);

  const getIconNode = (key: ApiIconKey) => {
    switch (key) {
      case "users":
        return <HiUsers className="w-4 h-4" />;
      case "file":
        return <FaFileAlt className="w-4 h-4" />;
      case "briefcase":
        return <BsBriefcase className="w-5 h-5 text-[#814A98]" />;
      case "pencil":
        return <BsPencilSquare className="w-5 h-5 text-[#814A98]" />;
      case "bullseye":
        return <BsBullseye className="w-5 h-5 text-[#814A98]" />;
      default:
        return null;
    }
  };

  useEffect(() => {
    let mounted = true;
    const timer = setTimeout(() => {
      if (!mounted) return;
      setData({
        pageTitle: "e-Services",
        topTabs: [
          { id: "e_services", label: "e-Services", icon: "users" },
          { id: "process_explorer", label: "Process Explorer", icon: "file" },
          { id: "advocacy_services", label: "Advocacy Services", icon: "file" },
          { id: "advisory_services", label: "Advisory Services", icon: "file" },
        ],
        sidebarTabs: [
          { id: "registration_services", label: "Registration Services", number: "1" },
          { id: "governmental_services", label: "Governmental Services", number: "2" },
          { id: "post_registration_services", label: "Post-Registration Services", number: "3" },
        ],
        content: {
          registration_services: {
            title: "Overview",
            description:
              "Start, manage, and modify your investment registration with streamlined digital services.",
            services: [
              { icon: "file", text: "Issuing investment registration" },
              { icon: "briefcase", text: "Confirming investment registration" },
              { icon: "pencil", text: "Modifying investment registration" },
              { icon: "bullseye", text: "Converting investment registration" },
            ],
          },
          governmental_services: {
            title: "Governmental Services",
            description:
              "Access various governmental services related to investment activities and business operations.",
            services: [
              { icon: "file", text: "License issuance support" },
              { icon: "briefcase", text: "Government approvals guidance" },
              { icon: "pencil", text: "Establishment amendments" },
              { icon: "bullseye", text: "Sector-specific facilitation" },
            ],
          },
          post_registration_services: {
            title: "Post-Registration Services",
            description:
              "Manage your registration and access services after completing the initial registration process.",
            services: [
              { icon: "file", text: "Certificate re-issuance" },
              { icon: "briefcase", text: "Activity additions" },
              { icon: "pencil", text: "Amend entity information" },
              { icon: "bullseye", text: "Cancel or convert registration" },
            ],
          },
        },
        cta: { downloadLabel: "Download Guide", actionLabel: "Go to e-Services" },
        imageAlt: "e-Services preview card",
      });
    }, 400);
    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, []);

  const topTabs = data?.topTabs ?? [];

  const sidebarTabs = data?.sidebarTabs ?? [];

  const currentContent = data?.content?.[activeSidebarTab];

  return (
    <section className="relative w-full bg-white py-12 md:py-20">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-12 bukra-bold">
          {data?.pageTitle ?? t("e_services.title")}
        </h1>

        {/* Top Navigation Tabs */}
        <div className="mb-8 md:mb-12">
          <div className="relative border-b-2 border-gray-200">
            <div className="flex flex-row sm:flex-wrap gap-0 overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
              {topTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTopTab(tab.id)}
                  className={`flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 md:px-6 py-3.5 sm:py-4 min-h-[48px] font-medium bukra-regular relative flex-shrink-0 whitespace-nowrap transition-colors duration-200 ${
                    activeTopTab === tab.id
                      ? "bg-[#E0F7FA] text-[#00A7A2]"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 active:bg-gray-100"
                  }`}
                >
                  <span className="flex-shrink-0">
                    <div className="flex items-center gap-1">{getIconNode(tab.icon)}</div>
                  </span>
                  <span className="text-xs sm:text-sm md:text-base lg:text-lg">
                    {tab.label}
                  </span>
                  {activeTopTab === tab.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-[#00A7A2]"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 lg:sticky lg:top-24 lg:self-start">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 sm:gap-4">
              {sidebarTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSidebarTab(tab.id)}
                  className={`w-full flex items-center gap-3 sm:gap-4 text-black p-3 sm:p-4 rounded transition-all duration-300 bukra-regular transform ${
                    activeSidebarTab === tab.id
                      ? "bg-gradient-to-r from-[#D8C7DF] to-[#D8C7DF]/0 shadow-lg"
                      : "bg-transparent text-gray-600"
                  }`}
                >
                  <div
                    className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                      activeSidebarTab === tab.id
                        ? "bg-[#814A98] text-white"
                        : "border border-[#814A98] text-gray-600"
                    }`}
                  >
                    <span className="text-sm sm:text-base">{tab.number}</span>
                  </div>
                  <span
                    className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-[20px] font-medium text-left transition-colors ${
                      activeSidebarTab === tab.id
                        ? "text-[#814A98]"
                        : "text-gray-600"
                    }`}
                  >
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-[#E5E5E5] p-4 sm:p-6 md:p-8 lg:p-10 relative overflow-hidden transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                {/* Text Content */}
                <div className="lg:col-span-2">
                  {/* Overview Title */}
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center flex-shrink-0">
                      <GoLocation className="w-full h-full text-[#814A98]" />
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[27px] text-black bukra-bold transition-all duration-300">
                      {currentContent?.title}
                    </h2>
                  </div>

                  {/* Introductory Text */}
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-5 bukra-regular transition-all duration-300">
                    {currentContent?.description}
                  </p>

                  {/* Services List */}
                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {currentContent?.services?.map((service, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 sm:gap-4 rounded-lg transition-all duration-300 group"
                      >
                        <div className="flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                          {getIconNode(service.icon)}
                        </div>
                        <p className="text-sm sm:text-base md:text-lg text-gray-600 bukra-regular flex-1">
                          {service.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button className="flex items-center justify-center gap-2 bg-white border-2 border-[#814A98] text-gray-700 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium transition-all hover:bg-[#814A98] hover:text-white hover:shadow-lg bukra-regular transform hover:scale-105 active:scale-95 text-sm sm:text-base">
                      <IoDownloadOutline className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>{data?.cta?.downloadLabel ?? t("e_services.overview.download_guide")}</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-[#814A98] hover:bg-[#6B3D7F] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium transition-all bukra-regular shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 text-sm sm:text-base">
                      <span>{data?.cta?.actionLabel ?? t("e_services.overview.e_services_button")}</span>
                      <IoArrowForward className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>

                {/* Image Section - Right side */}
                <div className="lg:col-span-1 lg:flex lg:items-start lg:justify-center">
                  <div className="relative w-full max-w-sm sm:max-w-md md:w-[380px] lg:w-full lg:max-w-[437px] aspect-[3/2.9] rounded-xl overflow-hidden shadow-2xl group hover:shadow-xl transition-all duration-500 mx-auto lg:mx-0">
                    <img
                      src="/e-services/card.png"
                      alt={data?.imageAlt ?? t("e_services.overview.image_alt")}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Semi-transparent overlay gradient with curved effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00A7A2]/20 via-transparent to-[#814A98]/15 pointer-events-none">
                      <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-[#00A7A2]/10 rounded-full blur-3xl transform translate-x-4 sm:translate-x-8 -translate-y-4 sm:-translate-y-8"></div>
                      <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-[#814A98]/10 rounded-full blur-2xl transform -translate-x-3 sm:-translate-x-6 translate-y-3 sm:translate-y-6"></div>
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
