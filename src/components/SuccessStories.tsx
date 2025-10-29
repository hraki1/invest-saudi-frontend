import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useState } from "react";

interface SuccessStory {
  id: number;
  brand: string;
  brandLogo?: string;
  category: string;
  categoryIcon?: string;
  name: string;
  title: string;
  description: string;
  image?: string;
  hasVideo?: boolean;
  videoThumbnail?: string;
  color: string;
  gradient?: string;
}

const successStories: SuccessStory[] = [
  {
    id: 1,
    brand: "LUCID",
    category: "Advanced Manufacturing",
    name: "Faisal Sultan",
    title: "VP and Manager Director in the Middle East",
    description:
      "The Lucid AMP-2 facility in Saudi Arabia opened its doors in September 2023 at King Abdullah Economic City (KAEC), marking a significant milestone in Saudi Vision 2030. This state-of-the-art manufacturing plant represents a key investment in the electric automotive industry, contributing to the Kingdom's ambitious goals of diversifying its economy and expanding its manufacturing supply chain.",
    image: "/Hero.png",
    hasVideo: true,
    color: "#0F766E",
    gradient: "from-[#0F766E] via-[#14B8A6] to-[#2DD4BF]",
  },
  {
    id: 2,
    brand: "pwc",
    category: "Professional Services",
    name: "John Smith",
    title: "Managing Partner",
    description:
      "We have been here for the kingdom, from Riyadh to Jeddah, helping transform the business landscape. PwC's commitment to Saudi Arabia's Vision 2030 has been demonstrated through our extensive support in strategic planning, digital transformation, and economic diversification initiatives.",
    color: "#7C3AED",
  },
  {
    id: 3,
    brand: "HUAWEI",
    category: "Technology",
    name: "Li Ming",
    title: "Regional Director",
    description:
      "Huawei Cloud Saudi Arabia has been instrumental in uplifting the digital infrastructure by increasing cloud adoption, enhancing connectivity, and supporting the Kingdom's tech transformation goals. Our investment reflects our confidence in Saudi Arabia's digital future.",
    color: "#DB2777",
  },
  // {
  //   id: 4,
  //   brand: "ARAMCO",
  //   category: "Energy",
  //   name: "Ahmad Al-Rashid",
  //   title: "Chief Investment Officer",
  //   description:
  //     "Saudi Aramco continues to be a driving force in the Kingdom's economic development, creating opportunities across multiple sectors and contributing significantly to Vision 2030's objectives through strategic partnerships and innovative energy solutions.",
  //   color: "#0EA5E9",
  // },
  // {
  //   id: 5,
  //   brand: "STC",
  //   category: "Telecommunications",
  //   name: "Sarah Al-Mansouri",
  //   title: "Chief Innovation Officer",
  //   description:
  //     "Saudi Telecom Company (STC) has transformed the telecommunications landscape, introducing cutting-edge 5G infrastructure and digital services that position Saudi Arabia at the forefront of technological advancement in the region.",
  //   color: "#10B981",
  // },
  // {
  //   id: 6,
  //   brand: "NEOM",
  //   category: "Smart Cities",
  //   name: "Michael Green",
  //   title: "Project Director",
  //   description:
  //     "NEOM represents the future of sustainable living, combining innovative technology with environmental consciousness. This mega-project showcases Saudi Arabia's commitment to creating smart, sustainable cities that redefine urban development.",
  //   color: "#F59E0B",
  // },
];

export default function SuccessStories() {
  const [, setSwiper] = useState<SwiperType | null>(null);

  return (
    <section className="relative w-full py-16 md:py-24 bg-[#08141f] overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 md:mb-16 tracking-tight">
          Success Stories
        </h2>

        {/* Swiper Carousel */}
        <div className="mb-8 md:mb-12 overflow-visible">
          <Swiper
            modules={[Navigation, Pagination]}
            // slidesPerView={1.3}
            spaceBetween={-900}
            // breakpoints={{
            //   768: {
            //     slidesPerView: 1.5,
            //     spaceBetween: -100,
            //   },
            //   1024: {
            //     slidesPerView: 1.8,
            //     spaceBetween: -100,
            //   },
            //   1280: {
            //     slidesPerView: 2,
            //     spaceBetween: -2000,
            //   },
            // }}
            navigation={{
              nextEl: ".success-stories-next",
              prevEl: ".success-stories-prev",
            }}
            pagination={{
              el: ".success-stories-pagination",
              clickable: true,
              renderBullet: (_index, className) => {
                return `<span class="${className} success-pagination-bullet" style="width: 24px; height: 2px; border-radius: 0; background: rgba(255, 255, 255, 0.4); margin: 0 4px; transition: all 0.3s;"></span>`;
              },
            }}
            onSwiper={setSwiper}
            className="success-stories-swiper stacked-cards"
          >
            {successStories.map((story) => (
              <SwiperSlide key={story.id} className="!h-auto stacked-slide">
                <div
                  className={`h-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
                    story.gradient
                      ? `bg-gradient-to-r ${story.gradient}`
                      : `bg-[${story.color}]`
                  }`}
                  style={
                    !story.gradient
                      ? { backgroundColor: story.color }
                      : undefined
                  }
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-[500px]">
                    {/* Left Panel - Image/Video */}
                    <div className="relative">
                      {story.hasVideo && story.image ? (
                        <div className="relative h-full">
                          <img
                            src={story.image}
                            alt={story.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                            <button className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-black/50 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center hover:bg-black/70 transition-all group">
                              <svg
                                className="w-8 h-8 md:w-10 md:h-10 text-white ml-1 group-hover:scale-110 transition-transform"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </button>
                          </div>
                          {/* Brand Label on Image */}
                          <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                            <span className="text-white text-sm font-semibold uppercase tracking-wide">
                              {story.brand}
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div
                          className="h-full flex items-center justify-center p-8"
                          style={{ backgroundColor: story.color }}
                        >
                          <div className="text-center">
                            <h3 className="text-white text-3xl md:text-4xl font-bold mb-2">
                              {story.brand}
                            </h3>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Right Panel - Content */}
                    <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-between">
                      {/* Logo */}
                      <div className="mb-6">
                        <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">
                          {story.brand}
                        </h3>

                        {/* Category Tag */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-black rounded-lg border border-teal-400/60 mb-6">
                          <svg
                            className="w-4 h-4 text-teal-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            {/* Three horizontal lines */}
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 8h12M4 12h12M4 16h8"
                            />
                            {/* Upward arrow */}
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M18 9l-3-3m0 0l-3 3m3-3v12"
                            />
                          </svg>
                          <span className="text-white text-sm font-medium">
                            {story.category}
                          </span>
                        </div>

                        {/* Name and Title */}
                        <h4 className="text-white text-2xl md:text-3xl font-bold mb-2">
                          {story.name}
                        </h4>
                        <p className="text-white/90 text-base md:text-lg mb-6">
                          {story.title}
                        </p>

                        {/* Description */}
                        <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8">
                          {story.description}
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button className="px-6 py-3 bg-white text-teal-600 rounded-lg font-bold text-sm hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
                          <span>Read more</span>
                        </button>
                        {story.hasVideo && (
                          <button className="px-6 py-3 bg-teal-500 text-white rounded-lg font-bold text-sm hover:bg-teal-600 transition-all flex items-center justify-center gap-2">
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                            <span>Play Video</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation and Pagination */}
        <div className="flex items-center justify-center gap-6 mb-8 md:mb-12">
          <button className="success-stories-prev text-white hover:text-teal-400 transition-colors flex items-center gap-2 cursor-pointer">
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="text-sm md:text-base font-medium">Previous</span>
          </button>

          <div className="success-stories-pagination flex items-center gap-2"></div>

          <button className="success-stories-next text-white hover:text-teal-400 transition-colors flex items-center gap-2 cursor-pointer">
            <span className="text-sm md:text-base font-medium">Next</span>
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

        {/* Bottom CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-lg font-semibold hover:border-white/50 hover:bg-white/5 transition-all flex items-center justify-center gap-2">
            <span>View All Stories</span>
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
          <button className="w-full sm:w-auto px-8 py-4 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-all flex items-center justify-center gap-2">
            <span>Join Us For Testimonials</span>
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

      <style>{`
        .success-stories-swiper.stacked-cards {
          padding: 40px 0 80px 0 !important;
          overflow: visible !important;
          margin: 0 !important;
        }
        
        .success-stories-swiper.stacked-cards .swiper-container {
          overflow: visible !important;
        }
        
        .success-stories-swiper.stacked-cards .swiper-wrapper {
          align-items: center;
        }
        
        .success-stories-swiper.stacked-cards .stacked-slide {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: left center;
        }
        
        .success-stories-swiper.stacked-cards .stacked-slide:not(.swiper-slide-active) {
          transform: scale(0.95) !important;
          opacity: 0.95;
          filter: brightness(0.95);
          z-index: 1;
          pointer-events: none;
        }
        
        .success-stories-swiper.stacked-cards .stacked-slide.swiper-slide-active {
          transform: scale(1) !important;
          opacity: 1;
          z-index: 10;
          filter: brightness(1);
        }
        
        .success-stories-swiper.stacked-cards .stacked-slide.swiper-slide-next {
          transform: scale(0.97) !important;
          opacity: 0.97;
          z-index: 5;
        }
        
        .success-stories-swiper.stacked-cards .stacked-slide.swiper-slide-prev {
          transform: scale(0.97) !important;
          opacity: 0.97;
          z-index: 5;
        }
        
        .success-stories-swiper .success-pagination-bullet {
          width: 24px !important;
          height: 2px !important;
          border-radius: 0 !important;
          background: rgba(255, 255, 255, 0.4) !important;
          margin: 0 4px !important;
          transition: all 0.3s !important;
        }
        
        .success-stories-swiper .success-pagination-bullet-active {
          width: 32px !important;
          background: rgba(255, 255, 255, 1) !important;
        }
        
        .success-stories-swiper .swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  );
}

