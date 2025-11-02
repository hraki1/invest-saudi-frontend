import { useState } from "react";
import { RxArrowTopRight } from "react-icons/rx";

type Sector = {
  id: number;
  number: string;
  title: string;
  opportunities: number;
  icon: string;
  image: string;
};

const SECTORS: Sector[] = [
  {
    id: 1,
    number: "01",
    title: "Advanced Manufacturing",
    opportunities: 255,
    icon: "/opportunities/1.png",
    image: "/opportunities/1.png",
  },
  {
    id: 2,
    number: "02",
    title: "Aerospace & Defence",
    opportunities: 255,
    icon: "/opportunities/2.png",
    image: "/opportunities/2.png",
  },
  {
    id: 3,
    number: "03",
    title: "Agriculture & Food",
    opportunities: 255,
    icon: "/opportunities/3.png",
    image: "/opportunities/3.png",
  },
  {
    id: 4,
    number: "04",
    title: "Energy",
    opportunities: 255,
    icon: "/opportunities/1.png",
    image: "/opportunities/1.png",
  },
  {
    id: 5,
    number: "05",
    title: "Environment Services",
    opportunities: 255,
    icon: "/opportunities/2.png",
    image: "/opportunities/2.png",
  },
  {
    id: 6,
    number: "06",
    title: "Financial Services",
    opportunities: 255,
    icon: "/opportunities/3.png",
    image: "/opportunities/3.png",
  },
  {
    id: 7,
    number: "07",
    title: "Human Capital & Innovation",
    opportunities: 255,
    icon: "/opportunities/1.png",
    image: "/opportunities/1.png",
  },
  {
    id: 8,
    number: "08",
    title: "Information & Communication",
    opportunities: 255,
    icon: "/opportunities/2.png",
    image: "/opportunities/2.png",
  },
  {
    id: 9,
    number: "09",
    title: "Mining & Metals",
    opportunities: 255,
    icon: "/opportunities/3.png",
    image: "/opportunities/3.png",
  },
  {
    id: 10,
    number: "10",
    title: "Petrochemicals",
    opportunities: 255,
    icon: "/opportunities/1.png",
    image: "/opportunities/1.png",
  },
  {
    id: 11,
    number: "11",
    title: "Pharma & Biotech",
    opportunities: 255,
    icon: "/opportunities/2.png",
    image: "/opportunities/2.png",
  },
  {
    id: 12,
    number: "12",
    title: "Real Estate & Construction",
    opportunities: 255,
    icon: "/opportunities/3.png",
    image: "/opportunities/3.png",
  },
  {
    id: 13,
    number: "13",
    title: "Tourism & Quality Of Life",
    opportunities: 255,
    icon: "/opportunities/1.png",
    image: "/opportunities/1.png",
  },
  {
    id: 14,
    number: "14",
    title: "Transport & Logistics",
    opportunities: 255,
    icon: "/opportunities/2.png",
    image: "/opportunities/2.png",
  },
  {
    id: 15,
    number: "15",
    title: "Healthcare Services & Devices",
    opportunities: 255,
    icon: "/opportunities/3.png",
    image: "/opportunities/3.png",
  },
];

export default function InvestSectores() {
  const [activeId, setActiveId] = useState<number>(3);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const isActive = (id: number) => activeId === id || hoveredId === id;

  return (
    <section
      id="invest-sectores"
      className="w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20 relative"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-br from-slate-50 to-transparent rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-tl from-slate-50 to-transparent rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-14 xl:px-26 relative z-10">
        {/* Header */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white bg-[#814A98] rounded-lg flex-shrink-0">
              <svg
                width="20"
                height="20"
                className="sm:w-6 sm:h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="w-px h-5 sm:h-6 bg-slate-300"></div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight sm:leading-[1.15] text-slate-900 bukra-bold mb-2 sm:mb-3">
            Investment Sectors
          </h2>
          <p className="mb-4 sm:mb-5 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            Discover the diverse investment landscape of Saudi Arabia across key
            sectors, from technology to energy, driving economic growth and
            innovation.
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-1.5 sm:gap-2 h-9 sm:h-10 px-4 sm:px-5 rounded-full text-xs sm:text-sm text-white bg-[#814A98] hover:bg-[#814A98]/80 transition-colors"
            >
              View All Opportunities
              <svg
                width="14"
                height="14"
                className="sm:w-4 sm:h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 sm:gap-2 h-9 sm:h-10 px-4 sm:px-5 rounded-full border border-[#814A98] text-[#814A98] text-xs sm:text-sm hover:bg-[#814A98]/10 transition-colors"
            >
              Explore All Sectors
              <svg
                width="14"
                height="14"
                className="sm:w-4 sm:h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* List with inline preview image */}
        <ul className="my-8 sm:my-12 md:my-16">
          {SECTORS.map((sector) => (
            <li
              key={sector.id}
              onClick={() => setActiveId(sector.id)}
              onMouseEnter={() => setHoveredId(sector.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`relative flex gap-3 sm:gap-4 md:gap-5 justify-between items-center py-3 sm:py-4 md:py-5 px-3 sm:px-4 md:px-5 border-b border-slate-200 cursor-pointer transition-all duration-300 group ${
                isActive(sector.id)
                  ? "bg-gradient-to-r from-[#D9F2F1] to-[#FFFFFF]"
                  : "hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center gap-3 sm:gap-4 md:gap-5 flex-1 min-w-0">
                <div className="flex-shrink-0">
                  <p className="text-xs sm:text-sm md:text-base font-medium text-slate-600">
                    {sector.number}
                  </p>
                </div>
                {isActive(sector.id) && (
                  <div className="flex-shrink-0 hidden sm:block">
                    <img
                      src={sector.icon}
                      alt={sector.title}
                      className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full object-cover"
                    />
                  </div>
                )}
                <div className="flex flex-col gap-0.5 sm:gap-1 flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-slate-500">
                    {sector.opportunities} opportunities
                  </p>
                  <h3
                    className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold transition-colors duration-300 leading-tight break-words ${
                      isActive(sector.id)
                        ? "text-[#00A7A2]"
                        : "text-slate-900 group-hover:text-[#00A7A2]/80"
                    }`}
                  >
                    {sector.title}
                  </h3>
                </div>
              </div>

              {/* Desktop preview image - only shows on large screens */}
              {isActive(sector.id) && (
                <div className="hidden xl:block absolute -top-5 right-16 2xl:right-24 animate-fade-in z-10 pointer-events-none">
                  <img
                    src={sector.image}
                    className="w-56 h-48 2xl:w-[283px] 2xl:h-[230px] object-cover rounded-xl shadow-lg"
                    alt={`${sector.title} preview`}
                  />
                </div>
              )}

              {/* Arrow icon */}
              <div className="ml-2 sm:ml-4 flex-shrink-0">
                <RxArrowTopRight
                  className={`text-2xl sm:text-3xl font-extrabold transition-colors duration-300 ${
                    isActive(sector.id)
                      ? "text-[#00A7A2]"
                      : "text-slate-400 group-hover:text-[#00A7A2]"
                  }`}
                />
              </div>
            </li>
          ))}
        </ul>

        {/* Mobile/Tablet preview below list */}
        <div className="xl:hidden mt-6 sm:mt-8">
          <div className="w-full h-48 sm:h-56 md:h-64 rounded-xl overflow-hidden border border-slate-200 shadow-md">
            <img
              src={
                SECTORS.find((s) => s.id === activeId)?.image ||
                "/opportunities/1.png"
              }
              alt={
                SECTORS.find((s) => s.id === activeId)?.title || "Sector preview"
              }
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
