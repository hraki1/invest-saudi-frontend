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
  const [activeId, setActiveId] = useState<number>(2);

  return (
    <section
      id="invest-sectores"
      className="w-full bg-white py-14 md:py-20 relative"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-slate-50 to-transparent rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-slate-50 to-transparent rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className=" mx-auto px-6 md:px-26 relative z-10">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 flex items-center justify-center text-white bg-[#814A98] rounded-lg">
              <svg
                width="24"
                height="24"
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
            <div className="w-px h-6 bg-slate-300"></div>
          </div>

          <h2 className="text-[32px] md:text-[42px] leading-[1.15] text-slate-900 bukra-bold mb-3">
            Investment Sectors
          </h2>
          <p className="mb-5 text-slate-600 text-sm md:text-base leading-6 max-w-2xl">
            Discover the diverse investment landscape of Saudi Arabia across key
            sectors, from technology to energy, driving economic growth and
            innovation.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 h-10 px-5 rounded-full text-white bg-[#814A98] hover:bg-[#814A98]/80 transition-colors"
            >
              View All Opportunities
              <svg
                width="16"
                height="16"
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
              className="inline-flex items-center gap-2 h-10 px-5 rounded-full border border-[#814A98] text-[#814A98] text-sm hover:bg-[#814A98]/10 transition-colors"
            >
              Explore All Sectors
              <svg
                width="16"
                height="16"
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
        <ul className="my-16">
          {SECTORS.map((sector) => (
            <li
              key={sector.id}
              onClick={() => setActiveId(sector.id)}
              className={`relative flex gap-5 justify-between items-center py-2 px-5 border-b border-slate-200 pb-5 cursor-pointer transition-all duration-300 ${
                activeId === sector.id
                  ? "bg-gradient-to-r from-[#D9F2F1] to-[#FFFFFF ]"
                  : "hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center gap-5">
                <div>
                  <p className="text-14px">{sector.number}</p>
                </div>
                {activeId === sector.id && (
                  <div>
                    <img
                      src={sector.icon}
                      alt="sector"
                      className="w-10 h-10 rounded-full"
                    />
                  </div>
                )}
                <div className="flex flex-col gap-0">
                  <p className="text-14px[]">
                    {sector.opportunities} opportunities
                  </p>
                  <h3
                    className={`text-[40px] font-extrabold transition-colors duration-300 ${
                      activeId === sector.id
                        ? "text-[#00A7A2]"
                        : "hover:text-[#00A7A2]/80"
                    }`}
                  >
                    {sector.title}
                  </h3>
                </div>
              </div>
              {activeId === sector.id && (
                <div className="absolute -top-5 right-22 animate-fade-in">
                  <img
                    src={sector.image}
                    className="w-[283px] h-[230px] object-cover rounded-xl"
                    alt="preview"
                  ></img>
                </div>
              )}

              <div className="ml-auto">
                <RxArrowTopRight
                  className={`text-3xl font-extrabold mt-14 transition-colors duration-300 ${
                    activeId === sector.id
                      ? "text-[#00A7A2]"
                      : "text-slate-500 hover:text-[#00A7A2]"
                  }`}
                />
              </div>
            </li>
          ))}
        </ul>

        {/* Mobile preview below list */}
        <div className="lg:hidden mt-4">
          <div className="w-full h-[160px] rounded-xl overflow-hidden border border-slate-200 shadow-sm">
            <img
              src={
                SECTORS.find((s) => s.id === activeId)?.image ||
                "/opportunities/1.png"
              }
              alt="sector"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
