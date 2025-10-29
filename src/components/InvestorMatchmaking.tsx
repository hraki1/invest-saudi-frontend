import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoDownloadOutline, IoArrowForward } from "react-icons/io5";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaHandshake } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi";

type TabType = "partner_access" | "opportunity_listing" | "partnership_matching";

export default function InvestorMatchmaking() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<TabType>("partner_access");

  const tabs: Array<{ id: TabType; label: string; icon: React.ReactNode }> = [
    {
      id: "partner_access",
      label: t("investor_matchmaking.tabs.partner_access"),
      icon: (
        <div className="relative">
          <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45">
            <HiUsers className="w-3 h-3 text-white" />
          </div>
        </div>
      ),
    },
    {
      id: "opportunity_listing",
      label: t("investor_matchmaking.tabs.opportunity_listing"),
      icon: <HiMagnifyingGlass className="w-5 h-5 md:w-6 md:h-6" />,
    },
    {
      id: "partnership_matching",
      label: t("investor_matchmaking.tabs.partnership_matching"),
      icon: (
        <div className="flex items-center gap-1">
          <FaHandshake className="w-4 h-4" />
          <FaHandshake className="w-4 h-4" />
        </div>
      ),
    },
  ];

  const tabContent = {
    partner_access: {
      title: t("investor_matchmaking.partner_access.title"),
      description: t("investor_matchmaking.partner_access.description"),
      image: "/Hero.png", // Placeholder - you can replace with actual image
    },
    opportunity_listing: {
      title: t("investor_matchmaking.opportunity_listing.title"),
      description: t("investor_matchmaking.opportunity_listing.description"),
      image: "/Hero.png",
    },
    partnership_matching: {
      title: t("investor_matchmaking.partnership_matching.title"),
      description: t("investor_matchmaking.partnership_matching.description"),
      image: "/Hero.png",
    },
  };

  return (
    <section className="relative w-full bg-white py-12 md:py-20">
      {/* Background Pattern - Subtle geometric pattern in top-right */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300A7A2' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          {/* Logo - Cityscape with buildings */}
          <div className="mb-6 md:mb-8">
            <div className="w-20 h-20 md:w-28 md:h-28 relative">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background */}
                <rect width="100" height="100" fill="#00A7A2" rx="8" />
                {/* Wave/Landform at bottom */}
                <path
                  d="M0 75 Q25 65 50 75 T100 75 L100 100 L0 100 Z"
                  fill="#0179C2"
                />
                {/* Buildings - Kingdom Centre Tower style */}
                <rect x="30" y="40" width="12" height="35" fill="white" />
                <rect x="58" y="50" width="12" height="25" fill="white" />
                {/* Top tower detail */}
                <rect x="32" y="35" width="8" height="8" fill="white" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 bukra-bold">
            {t("investor_matchmaking.title")}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl leading-relaxed bukra-regular">
            {t("investor_matchmaking.subtitle")}
          </p>
        </div>

        {/* What Is Matchmaking Section */}
        <div className="mb-12 md:mb-16">
          <div className="bg-gradient-to-br from-[#E0F7FA] to-[#B2EBF2] rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Side - Text Content */}
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 bukra-bold">
                  {t("investor_matchmaking.what_is_title")}
                </h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed bukra-regular">
                  {t("investor_matchmaking.what_is_description")}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="flex items-center justify-center gap-2 bg-[#B2EBF2] hover:bg-[#80DEEA] text-[#00695C] px-6 py-3 rounded-xl font-medium transition-colors bukra-regular shadow-sm">
                    <IoDownloadOutline className="w-5 h-5" />
                    <span>{t("investor_matchmaking.download_guide")}</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 bg-[#00A7A2] hover:bg-[#0179C2] text-white px-6 py-3 rounded-xl font-medium transition-colors bukra-regular shadow-sm">
                    <span>{t("investor_matchmaking.apply_for_service")}</span>
                    <IoArrowForward className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Right Side - Video Player */}
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-md aspect-video bg-gray-900 rounded-xl md:rounded-2xl shadow-2xl overflow-hidden group cursor-pointer">
                  {/* Video Thumbnail - Dark futuristic background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center p-4">
                    {/* Globe with glowing effect */}
                    <div className="relative">
                      {/* Glowing blue globe */}
                      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-blue-500/30 backdrop-blur-sm flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.5)]">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-blue-600/40 flex items-center justify-center">
                          <svg
                            className="w-16 h-16 md:w-20 md:h-20 text-blue-400"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            <path d="M2 12h20" />
                          </svg>
                        </div>
                      </div>
                      {/* Text Labels around Globe */}
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-white text-[10px] md:text-xs font-bold uppercase tracking-wider">
                        ANGEL INVESTOR
                      </div>
                      <div className="absolute top-1/2 -left-16 md:-left-20 transform -translate-y-1/2 text-white text-[10px] md:text-xs font-bold uppercase tracking-wider">
                        PARTNER
                      </div>
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-white text-[10px] md:text-xs font-bold uppercase tracking-wider">
                        ENTREPRENEUR
                      </div>
                      <div className="absolute top-1/2 -right-16 md:-right-20 transform -translate-y-1/2 text-white text-[10px] md:text-xs font-bold uppercase tracking-wider">
                        INVESTOR
                      </div>
                    </div>
                  </div>
                  
                  {/* Play Button - Centered on globe */}
                  <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white/95 rounded-full flex items-center justify-center shadow-2xl group-hover:bg-white group-hover:scale-110 transition-all">
                      <svg
                        className="w-8 h-8 md:w-10 md:h-10 text-gray-900 ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8 md:mb-12">
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center gap-3 px-6 py-3.5 md:py-4 rounded-xl font-medium transition-all duration-300 bukra-regular flex-1 ${
                  activeTab === tab.id
                    ? "bg-[#814A98] text-white shadow-lg"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                }`}
              >
                {tab.icon}
                <span className="text-sm md:text-base lg:text-lg">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Section */}
        <div className="space-y-6 md:space-y-8">
          {/* Image */}
          <div className="w-full rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
            <img
              src={tabContent[activeTab].image}
              alt={tabContent[activeTab].title}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 bukra-bold">
            {tabContent[activeTab].title}
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl bukra-regular">
            {tabContent[activeTab].description}
          </p>
        </div>
      </div>
    </section>
  );
}

