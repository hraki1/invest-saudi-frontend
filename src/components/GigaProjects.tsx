import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

interface Project {
  id: number;
  name: string;
  budget: string;
  image: {url :string, alt :string}[];
  logo?: string;
  description: string;
  fullDescription: string;
  visionAlignment: string;
  stats: {
    icon: React.ReactNode;
    value: string;
    label: string;
  }[];
  website: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "NEOM",
    budget: "$500 Billion",
    image: [{url :"giga-projects/neom.jpg", alt :"NEOM" },{url :"giga-projects/neom.jpg", alt :"NEOM" },{url :"giga-projects/neom.jpg", alt :"NEOM" },{url :"giga-projects/neom.jpg", alt :"NEOM" },{url :"giga-projects/neom.jpg", alt :"NEOM" },{url :"giga-projects/neom.jpg", alt :"NEOM" }],
    description:
      "NEOM is one of the most prominent Public Investment Fund projects in Saudi Arabia.",
    fullDescription:
      "Qiddiya will be a world-class entertainment destination featuring theme parks, sports facilities, cultural attractions, and natural experiences. Located just outside Riyadh, it will offer over 300 recreational facilities and entertainment options, making Saudi Arabia a global entertainment hub.",
    visionAlignment:
      "As a flagship Vision 2030 project, Qiddiya will diversify the Kingdom's entertainment sector, create thousands of jobs, and position Saudi Arabia as a leading destination for leisure, sports, and cultural activities.",
    stats: [
      {
        icon: (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
        value: "$500 Billion",
        label: "Estimated Project Budget",
      },
      {
        icon: (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        ),
        value: "100,000 Jobs",
        label: "New Opportunities Across 16 Diverse Sectors",
      },
      {
        icon: (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        ),
        value: "4 Hours Away",
        label: "Located Within A Short Flight Of 40% ",
      },
      {
        icon: (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        ),
        value: "The Line",
        label: "A Groundbreaking 170 Km City",
      },
    ],
    website: "https://www.neom.com",
  },
  {
    id: 2,
    name: "The Red Sea",
    budget: "$296 Billion",
    image: [
      {url: "giga-projects/neom.jpg", alt: "The Red Sea"},
      {url: "giga-projects/neom.jpg", alt: "The Red Sea"},
      {url: "giga-projects/neom.jpg", alt: "The Red Sea"},
      {url: "giga-projects/neom.jpg", alt: "The Red Sea"},
      {url: "giga-projects/neom.jpg", alt: "The Red Sea"},
      {url: "giga-projects/neom.jpg", alt: "The Red Sea"}
    ],
    description:
      "The Red Sea Project is one of the world's most ambitious luxury tourism developments.",
    fullDescription:
      "The Red Sea Project is transforming a pristine region into a luxury tourism destination featuring world-class resorts, sustainable living, and breathtaking natural beauty. This ambitious project will create 50+ luxury resorts, 8,000 hotel rooms, and 1,000 residential properties across 22 islands.",
    visionAlignment:
      "As a flagship Vision 2030 project, The Red Sea Project will position Saudi Arabia as a leading luxury tourism destination while maintaining 100% renewable energy and zero waste to landfill, setting new standards for sustainable development.",
    stats: [
      {
        icon: (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
        value: "$296 Billion",
        label: "Total Investment Value",
      },
      {
        icon: (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        ),
        value: "70,000 Jobs",
        label: "Direct and Indirect Employment Opportunities",
      },
      {
        icon: (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
        value: "50+ Islands",
        label: "Pristine Natural Beauty & Landscapes",
      },
      {
        icon: (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        ),
        value: "100% Renewable",
        label: "Powered Entirely by Renewable Energy",
      },
    ],
    website: "https://www.theredsea.sa",
  },
  {
    id: 3,
    name: "Diriyah",
    budget: "$64 Billion",
    image: [
      {url: "giga-projects/neom.jpg", alt: "Diriyah"},
      {url: "giga-projects/neom.jpg", alt: "Diriyah"},
      {url: "giga-projects/neom.jpg", alt: "Diriyah"},
      {url: "giga-projects/neom.jpg", alt: "Diriyah"},
      {url: "giga-projects/neom.jpg", alt: "Diriyah"},
      {url: "giga-projects/neom.jpg", alt: "Diriyah"}
    ],
    description:
      "Diriyah Gate is one of the world's most ambitious cultural heritage preservation projects.",
    fullDescription:
      "Diriyah Gate is transforming the historic birthplace of the Saudi state into a world-class cultural and heritage destination. The project will feature museums, luxury hotels, fine dining, entertainment venues, and residential communities while preserving the rich history of At-Turaif District.",
    visionAlignment:
      "As a flagship Vision 2030 project, Diriyah will celebrate Saudi Arabia's cultural heritage, attract millions of visitors, and create thousands of jobs while preserving the Kingdom's most important historical sites.",
    stats: [
      {
        icon: (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
        value: "$64 Billion",
        label: "Total Development Investment",
      },
      {
        icon: (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        ),
        value: "55,000 Jobs",
        label: "New Employment Opportunities Created",
      },
      {
        icon: (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        ),
        value: "300 Years",
        label: "Of Rich Saudi Heritage and History",
      },
      {
        icon: (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            />
          </svg>
        ),
        value: "Cultural Hub",
        label: "Museums, Hotels, Dining & Entertainment",
      },
    ],
    website: "https://www.diriyah.sa",
  },
  {
    id: 4,
    name: "Qiddiya",
    budget: "$36 Billion",
    image: [
      {url: "giga-projects/neom.jpg", alt: "Qiddiya"},
      {url: "giga-projects/neom.jpg", alt: "Qiddiya"},
      {url: "giga-projects/neom.jpg", alt: "Qiddiya"},
      {url: "giga-projects/neom.jpg", alt: "Qiddiya"},
      {url: "giga-projects/neom.jpg", alt: "Qiddiya"},
      {url: "giga-projects/neom.jpg", alt: "Qiddiya"}
    ],
    description:
      "Qiddiya is Saudi Arabia's capital of entertainment, sports, and arts.",
    fullDescription:
      "Qiddiya will be a world-class entertainment destination featuring theme parks, sports facilities, cultural attractions, and natural experiences. Located just outside Riyadh, it will offer over 300 recreational facilities and entertainment options, making Saudi Arabia a global entertainment hub.",
    visionAlignment:
      "As a flagship Vision 2030 project, Qiddiya will diversify the Kingdom's entertainment sector, create thousands of jobs, and position Saudi Arabia as a leading destination for leisure, sports, and cultural activities.",
    stats: [
      {
        icon: (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
        value: "$36 Billion",
        label: "Total Investment Package",
      },
      {
        icon: (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
        value: "300+ Facilities",
        label: "Entertainment, Sports & Cultural Venues",
      },
      {
        icon: (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        ),
        value: "57,000 Jobs",
        label: "New Career Opportunities Created",
      },
      {
        icon: (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        ),
        value: "17M Visitors",
        label: "Expected Annual Visitors by 2030",
      },
    ],
    website: "https://www.qiddiya.sa",
  },
  {
    id: 5,
    name: "King Salman International Airport",
    budget: "$50 Billion",
    image: [
      {url: "giga-projects/neom.jpg", alt: "King Salman International Airport"},
      {url: "giga-projects/neom.jpg", alt: "King Salman International Airport"},
      {url: "giga-projects/neom.jpg", alt: "King Salman International Airport"},
      {url: "giga-projects/neom.jpg", alt: "King Salman International Airport"},
      {url: "giga-projects/neom.jpg", alt: "King Salman International Airport"},
      {url: "giga-projects/neom.jpg", alt: "King Salman International Airport"}
    ],
    description:
      "King Salman International Airport will be one of the world's largest and most advanced airports.",
    fullDescription:
      "King Salman International Airport will transform Riyadh into a global aviation hub. The massive expansion will increase capacity to 120 million passengers annually, feature six parallel runways, and include a new terminal complex covering 57 square kilometers.",
    visionAlignment:
      "As a flagship Vision 2030 project, King Salman International Airport will position Riyadh as a global logistics hub, support economic diversification, and create over 100,000 direct and indirect jobs.",
    stats: [
      {
        icon: (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
        value: "$50 Billion",
        label: "Total Project Investment Value",
      },
      {
        icon: (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        ),
        value: "120M Passengers",
        label: "Annual Capacity Target by 2030",
      },
      {
        icon: (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        ),
        value: "103,000 Jobs",
        label: "Direct Employment Opportunities",
      },
      {
        icon: (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
        value: "250+ Destinations",
        label: "Global Connectivity Network",
      },
    ],
    website: "https://www.ksaairport.sa",
  },

];

export default function GigaProjects() {
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);


  // Reset active index when project changes
  useEffect(() => {
    setActiveIndex(0);
  }, [selectedProject.id]);

  const handleNext = () => {
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex]);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/giga-projects/gigaProjects-hero.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Side - Project List */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-8 my-10 mx-10">
              {/* Title */}
              <div>
                <h1 className="text-6xl lg:text-7xl font-bold text-white mb-2 tracking-tight leading-tight">
                  Giga Projects
                </h1>
              </div>

              {/* Project List */}
              <div className="space-y-3">
                {projects.map((project, index) => (
                  <button
                    key={project.id}
                    onClick={() => {
                      setSelectedProject(project);
                    }}
                    className={`w-full group border-b border-white/10 flex items-center justify-between px-7 py-5 transition-all duration-300 ${
                      selectedProject.id === project.id
                        ? "bg-gradient-to-r from-black/40 to-black/25 "
                        : ""
                    }`}
                  >
                    <div className="flex items-center space-x-5 flex-1 min-w-0">
                      {/* Number */}
                      <span
                        className={`text-2xl font-light transition-colors ${
                          selectedProject.id === project.id
                            ? "text-white/70"
                            : "text-white/40 group-hover:text-white/60"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Project Name */}
                      <h3 className="text-xl lg:text-2xl font-semibold text-white text-left truncate">
                        {project.name}
                      </h3>
                    </div>

                    <div className="flex items-center space-x-4 flex-shrink-0">
                      {/* Budget */}
                      <span
                        className={`text-sm font-medium transition-colors ${
                          selectedProject.id === project.id
                            ? "text-white/90"
                            : "text-white/60 group-hover:text-white/80"
                        }`}
                      >
                        {project.budget}
                      </span>

                      {/* Arrow Icon */}
                      <svg
                        className={`w-5 h-5 transition-all ${
                          selectedProject.id === project.id
                            ? "text-white translate-x-1"
                            : "text-white/40 group-hover:text-white/70 group-hover:translate-x-1"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side - Project Details Panel */}
            <div className="lg:col-span-6 xl:col-span-6">
              <div
                key={selectedProject.id}
                className="bg-black/70 backdrop-blur-[20px] shadow-2xl overflow-hidden relative animate-fade-in"
              >
                {/* Header with Project Name and Close Button */}
                <div className="flex items-center justify-between px-8 pt-6 pb-4">
                  {/* Project Name - Left */}
                  <h2 className="text-3xl lg:text-4xl font-bold text-white">
                    {selectedProject.name}
                  </h2>

                  {/* Close Button - Right */}
                  <button
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white transition-all duration-200 hover:scale-110 backdrop-blur-sm"
                    onClick={() => {
                      // Reset to first project or handle close action
                      setSelectedProject(projects[0]);
                    }}
                    aria-label="Close project details"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Hero Image Section with Swiper */}
                <div className="relative h-[350px] overflow-hidden">
                  <Swiper
                    onSwiper={(swiper) => {
                      swiperRef.current = swiper;
                    }}
                    onSlideChange={(swiper) => {
                      setActiveIndex(swiper.activeIndex);
                    }}
                    modules={[Navigation]}
                    spaceBetween={0}
                    
                    slidesPerView={1}
                    className="h-full w-full giga-projects-swiper"
                    key={selectedProject.id}
                  >
                    {selectedProject.image.map((image: {url: string, alt: string}, index: number) => (
                      <SwiperSlide key={index}>
                        <div className="relative h-full w-full">
                          {/* Project Image */}
                          <img
                            src={image.url}
                            alt={`${selectedProject.name} - Image ${index + 1}`}
                            className="w-full h-full object-cover"
                          />

                          {/* Dark Gradient Overlay */}
                          <div className="absolute inset-0" />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Project Name Centered Overlay */}
                 

                  {/* Navigation Arrows */}
                  <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 hover:bg-black/80 border border-white/30 hover:border-white/50 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                    aria-label="Previous image"
                  >
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 hover:bg-black/80 border border-white/30 hover:border-white/50 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                    aria-label="Next image"
                  >
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>

                  {/* Custom Pagination Dots */}
                  {selectedProject.image.length > 1 && (
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-black/60 backdrop-blur-sm rounded-full px-3 py-2.5 flex items-center justify-center gap-2">
                      {selectedProject.image.map((_: {url: string, alt: string}, index: number) => (
                        <button
                          key={index}
                          onClick={() => swiperRef.current?.slideTo(index)}
                          className={`transition-all duration-300 cursor-pointer w-2 h-2 rounded-full ${
                            activeIndex === index
                              ? "bg-white"
                              : "bg-white/40 hover:bg-white/60"
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-10">
                  {/* Main Description */}
                  <div className="mb-6">
                    <p className="text-gray-300 text-base leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  {/* Vision 2030 Alignment */}
                  <div className="mb-8">
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {selectedProject.visionAlignment}
                    </p>
                  </div>

                  {/* Statistics Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-24">
                    {selectedProject.stats.map((stat, index) => (
                      <div
                        key={index}
                        className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-sm rounded-xl p-6 border border-white/[0.12] hover:border-white/25 hover:from-white/[0.12] hover:to-white/[0.05] transition-all duration-300"
                      >
                        <div className="flex items-start space-x-4">
                          {/* Icon Circle */}
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/[0.15] to-white/[0.08] flex items-center justify-center flex-shrink-0 text-white/80 group-hover:from-white/[0.2] group-hover:to-white/[0.12] transition-all">
                            {stat.icon}
                          </div>

                          {/* Text Content */}
                          <div className="flex-1 min-w-0">
                            <p className="text-white text-xl font-bold mb-1.5 leading-tight">
                              {stat.value}
                            </p>
                            <p className="text-gray-400 text-xs leading-snug">
                              {stat.label}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Footer Actions */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
                    {/* Navigation Arrows */}
                    <div className="flex space-x-3">
                      <button
                        onClick={handlePrev}
                        className="w-11 h-11 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 hover:border-white/30 flex items-center justify-center text-white transition-all duration-200 hover:scale-105"
                        aria-label="Previous project"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={handleNext}
                        className="w-11 h-11 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 hover:border-white/30 flex items-center justify-center text-white transition-all duration-200 hover:scale-105"
                        aria-label="Next project"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Call-to-Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button className="px-7 py-3.5 bg-white/[0.08] hover:bg-white/[0.15] text-white text-xs font-bold rounded-lg transition-all duration-200 border border-white/20 hover:border-white/30 tracking-wider hover:scale-[1.02]">
                        EXPLORE OPPORTUNITIES
                      </button>
                      <button
                        onClick={() =>
                          window.open(selectedProject.website, "_blank")
                        }
                        className="px-7 py-3.5 bg-white hover:bg-gray-100 text-gray-900 text-xs font-bold rounded-lg transition-all duration-200 flex items-center justify-center space-x-2.5 tracking-wider hover:scale-[1.02] shadow-lg hover:shadow-xl"
                      >
                        <span>VISIT WEBSITE</span>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* down shape */}
      <div className="relative w-full h-10 md:h-14 overflow-hidden">
        <div className="absolute inset-0"></div>
        <div 
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage: 'url("giga-projects/down.png")',
            backgroundRepeat: 'repeat-x',
            backgroundSize: 'auto 100%',
            backgroundPosition: 'center'
          }}
        ></div>
      </div>
    </div>
  );
}
