import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { 
  HiCalendar, 
  HiClock, 
  HiPlayCircle,
  HiMapPin,
  HiArrowRight,
  HiArrowLeft,
  HiChevronRight
} from "react-icons/hi2";
import { MdLocalFireDepartment } from "react-icons/md";

interface Event {
  id: number;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  category: string;
  image: string;
  hasVideo: boolean;
}

const events: Event[] = [
  {
    id: 1,
    title: "Saudi-US Investment Forum",
    description: "Get ready to explore three unique zones that celebrate the cultural heritage of food through a rich, multisensory experience.",
    location: "MISA office, Riyadh, Saudi Arabia",
    date: "25th May 2025",
    time: "9:00 AM",
    category: "Environmental Services",
    image: "/Hero.png",
    hasVideo: true,
  },
  {
    id: 2,
    title: "28th World Investment Conference",
    description: "Join global leaders and investors in this prestigious conference to discuss future investment opportunities and strategies.",
    location: "King Fahd Cultural Center, Riyadh",
    date: "15th June 2025",
    time: "10:00 AM",
    category: "Environmental Services",
    image: "/opportunities-hero.png",
    hasVideo: false,
  },
  {
    id: 3,
    title: "Tech Innovation Summit",
    description: "Discover cutting-edge technologies and innovative solutions shaping the future of business and investment in Saudi Arabia.",
    location: "Riyadh Exhibition Center",
    date: "30th June 2025",
    time: "2:00 PM",
    category: "Technology",
    image: "/Hero.png",
    hasVideo: true,
  },
  {
    id: 4,
    title: "Sustainability & Green Energy Forum",
    description: "Explore sustainable investment opportunities and green energy initiatives aligned with Vision 2030 objectives.",
    location: "NEOM Conference Hall",
    date: "10th July 2025",
    time: "11:00 AM",
    category: "Energy",
    image: "/opportunities-hero.png",
    hasVideo: false,
  },
];

type EventFilter = "all" | "upcoming" | "past" | "webinar";

export default function Events() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<EventFilter>("all");
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);


  const filteredEvents = events.filter((event) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "webinar") return event.hasVideo;
    // For "upcoming" and "past", we'd check dates in a real implementation
    return true;
  });

  // Reset active index when filter changes
  useEffect(() => {
    setActiveIndex(0);
    swiperRef.current?.slideTo(0);
  }, [activeFilter]);

  return (
    <section className="relative py-16 md:py-12   overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[#221E4F]"></div>
      
      {/* Geometric Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-95"
        style={{
          backgroundImage: `url(/event/bg.png)`,
        }}
      ></div>

      <div className="relative z-10 mx-auto px-6 md:px-12 lg:px-0">


{/* title and filters */}
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 md:mb-12">
          {t("events.title")}
        </h2>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-3 mb-10 md:mb-12">
          <button
            onClick={() => setActiveFilter("all")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeFilter === "all"
                ? "bg-white text-gray-900"
                : "bg-transparent text-white border border-white/30 hover:border-white/50"
            }`}
          >
            <HiCalendar className="w-5 h-5" />
            <span>{t("events.filters.all")}</span>
          </button>
          
          <button
            onClick={() => setActiveFilter("upcoming")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeFilter === "upcoming"
                ? "bg-white text-gray-900"
                : "bg-transparent text-white border border-white/30 hover:border-white/50"
            }`}
          >
            <MdLocalFireDepartment className="w-5 h-5" />
            <span>{t("events.filters.upcoming")}</span>
          </button>
          
          <button
            onClick={() => setActiveFilter("past")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeFilter === "past"
                ? "bg-white text-gray-900"
                : "bg-transparent text-white border border-white/30 hover:border-white/50"
            }`}
          >
            <HiClock className="w-5 h-5" />
            <span>{t("events.filters.past")}</span>
          </button>
          
          <button
            onClick={() => setActiveFilter("webinar")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeFilter === "webinar"
                ? "bg-white text-gray-900"
                : "bg-transparent text-white border border-white/30 hover:border-white/50"
            }`}
          >
            <HiPlayCircle className="w-5 h-5" />
            <span>{t("events.filters.webinar")}</span>
          </button>
        </div>

        </div>

        {/* Swiper Carousel */}
        <div className="mb-10 md:mb-12">
          <Swiper
            key={filteredEvents.length}
            modules={[Navigation]}
            slidesPerView={1.2}
            spaceBetween={-90}
            centeredSlides={true}
            loop={false}
            breakpoints={{
              768: {
                slidesPerView: 1.5,
                spaceBetween: -80,
              },
              1024: {
                slidesPerView: 1.8,
                spaceBetween: -90,
              },
            }}
            navigation={{
              nextEl: ".events-next",
              prevEl: ".events-prev",
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.activeIndex);
            }}
            className="events-swiper"
          >
            {filteredEvents.map((event) => (
              <SwiperSlide key={event.id} className="!h-auto">
                <div className="h-full rounded-2xl overflow-hidden bg-gradient-to-br from-purple-800/90 to-blue-900/90 backdrop-blur-sm border border-white/10">
                  <div className="flex flex-col lg:flex-row h-full">
                    {/* Image/Video Section - Left Half */}
                    <div className="relative w-full lg:w-1/2 h-64 lg:h-auto min-h-[300px] overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      {event.hasVideo && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center cursor-pointer hover:bg-white transition-all">
                            <HiPlayCircle className="w-10 h-10 text-purple-900" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content Section - Right Half */}
                    <div className="w-full lg:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                      {/* Category Tag */}
                      <div className="mb-4">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-white bg-teal-500">
                          {event.category}
                        </span>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-2 text-white/90 mb-3">
                        <HiMapPin className="w-5 h-5" />
                        <span className="text-sm md:text-base">{event.location}</span>
                      </div>

                      {/* Date & Time */}
                      <div className="flex items-center gap-2 text-white/90 mb-4">
                        <HiCalendar className="w-5 h-5" />
                        <span className="text-sm md:text-base">
                          {event.date}, {event.time}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">
                        {event.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/80 text-sm md:text-base mb-6 leading-relaxed flex-grow">
                        {event.description}
                      </p>

                      {/* CTA Button */}
                      <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-all w-fit">
                        <span>{t("events.cta_button")}</span>
                        <HiArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation Controls and Pagination */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <button className="events-prev flex items-center gap-3 text-white hover:text-white/80 transition-all group">
            <div className="w-10 h-10 rounded-full bg-purple-800/80 flex items-center justify-center group-hover:bg-purple-700/80 transition-all">
              <HiArrowLeft className="w-5 h-5" />
            </div>
            <span className="font-medium">{t("events.previous")}</span>
          </button>
          
          {/* Custom Pagination Dots */}
          {filteredEvents.length > 1 && (
            <div className="flex items-center justify-center gap-2">
              {filteredEvents.map((_, index: number) => (
                <button
                  key={index}
                  onClick={() => swiperRef.current?.slideTo(index)}
                  className={`transition-all duration-300 cursor-pointer rounded-[3px] ${
                    activeIndex === index
                      ? "bg-white w-12 h-1.5"
                      : "bg-purple-300/50 hover:bg-purple-300/70 w-12 h-1.5"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
          
          <button className="events-next flex items-center gap-3 text-white hover:text-white/80 transition-all group">
            <span className="font-medium">{t("events.next")}</span>
            <div className="w-10 h-10 rounded-full bg-purple-800/80 flex items-center justify-center group-hover:bg-purple-700/80 transition-all">
              <HiArrowRight className="w-5 h-5" />
            </div>
          </button>
        </div>

        {/* See More Button */}
        <div className="flex justify-center">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-purple-700/80 hover:bg-purple-700 text-white rounded-full font-medium transition-all backdrop-blur-sm">
            <span>{t("events.see_more")}</span>
            <HiChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <style>{`
        .events-swiper .swiper-slide {
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        
        .events-swiper .swiper-slide:not(.swiper-slide-active) {
          opacity: 0.5;
        }
        
        .events-swiper .swiper-slide-active {
          opacity: 1;
        }
        
        .events-swiper .events-prev,
        .events-swiper .events-next {
          position: static !important;
        }
        
        .events-swiper .swiper-button-disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  );
}

