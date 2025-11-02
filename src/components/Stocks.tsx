import { useTranslation } from "react-i18next";
import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import i18n from "../i18n/config";

const stocksData = [
  { country: "USA", value: "202.3", flagCode: "us" },
  { country: "Germany", value: "10.4", flagCode: "de" },
  { country: "Bahrain", value: "19.5", flagCode: "bh" },
  { country: "UAE", value: "18.5", flagCode: "ae" },
  { country: "UK", value: "69.6", flagCode: "gb" },
  { country: "China", value: "18.8", flagCode: "cn" },
  { country: "France", value: "62", flagCode: "fr" },
  { country: "India", value: "9.7", flagCode: "in" },
  { country: "Jordan", value: "342", flagCode: "jo" },
  { country: "Netherlands", value: "29.9", flagCode: "nl" },
  { country: "Saudi", value: "18.5", flagCode: "sa" },
];

const stockTypes = [
  "FDI Stock (UCP)",
  "GDP Growth",
  "Investment Inflows",
  "Export Volume",
];

export default function Stocks() {
  const { t } = useTranslation();
  const [selectedStockType, setSelectedStockType] = useState("FDI Stock (UCP)");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    left: 0,
    right: 0,
  });

  const stocksSwiperRef = useRef<SwiperType | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const isRTL = i18n.language === "ar";

  const updatePosition = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 8,
        left: rect.left,
        right: window.innerWidth - rect.right,
      });
    }
  };

  useEffect(() => {
    if (!isDropdownOpen) return;
    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [isDropdownOpen]);

  useEffect(() => {
    if (stocksSwiperRef.current) {
      stocksSwiperRef.current.slideTo(0, 900);
    }
  }, [selectedStockType]);

  return (
    <section className="relative py-1.5 bg-white overflow-x-hidden">
      <div className="px-1 sm:px-6 md:px-12 lg:px-5 relative z-10">
        <div className="flex sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
          <div className="relative flex-shrink-0 w-auto">
            <button
              ref={buttonRef}
              onClick={() => {
                setIsDropdownOpen(!isDropdownOpen);
                if (!isDropdownOpen) requestAnimationFrame(updatePosition);
              }}
              className="bg-[#D4F4DD] rounded-full px-2 sm:px-4 md:px-5 py-1.5 sm:py-2.5 md:py-3 flex items-center gap-1 sm:gap-2 md:gap-3 cursor-pointer hover:bg-[#C0E8CB] transition-colors w-auto justify-start"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                className="text-[#00A7A2] sm:w-5 sm:h-5"
              >
                <rect
                  x="3"
                  y="13"
                  width="4"
                  height="6"
                  fill="currentColor"
                  rx="1"
                />
                <rect
                  x="9"
                  y="9"
                  width="4"
                  height="10"
                  fill="currentColor"
                  rx="1"
                />
                <rect
                  x="15"
                  y="5"
                  width="4"
                  height="14"
                  fill="currentColor"
                  rx="1"
                />
                <path
                  d="M3 21H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span className=" hidden sm:block text-[#00A7A2] font-medium text-[12px] sm:text-sm md:text-base">
                BN
              </span>
              <span className="text-gray-700 font-medium text-[12px] sm:text-sm md:text-base truncate max-w-[100px] sm:max-w-none">
                {selectedStockType}
              </span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                className={`text-gray-700 transition-transform sm:w-4 sm:h-4 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 w-full relative cursor-pointer select-none overflow-hidden">
            <Swiper
              onSwiper={(swiper) => {
                stocksSwiperRef.current = swiper;
              }}
              modules={[Navigation, Autoplay, Pagination, Autoplay]}
              slidesPerView="auto"
              speed={900}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                480: { slidesPerView: 2, spaceBetween: 12 },
                640: { slidesPerView: 3, spaceBetween: 14 },
                768: { slidesPerView: 4, spaceBetween: 16 },
                1024: { slidesPerView: 5, spaceBetween: 16 },
                1280: { slidesPerView: 6, spaceBetween: 16 },
                1536: { slidesPerView: 8, spaceBetween: 16 },
              }}
            >
              {stocksData.map((stock, idx) => (
                <SwiperSlide key={idx} className="!w-auto">
                  <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 cursor-pointer whitespace-nowrap px-1 md:px-2">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <img
                        src={`https://flagcdn.com/w40/${stock.flagCode}.png`}
                        alt={stock.country}
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                        }}
                      />
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                      <span className="text-black text-xs sm:text-sm md:text-base truncate max-w-[60px] sm:max-w-[80px] md:max-w-[120px]">
                        {stock.country}
                      </span>
                      <span className="text-gray-400 text-xs sm:text-sm md:text-base flex-shrink-0">
                        {stock.value}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {isDropdownOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <>
            <div
              className="fixed inset-0 z-[9998]"
              onClick={() => setIsDropdownOpen(false)}
            />
            <div
              className="fixed bg-white rounded-lg shadow-xl z-[9999] min-w-[180px] max-w-[calc(100vw-2rem)] sm:min-w-[200px] border border-gray-200 overflow-hidden"
              style={{
                top: `${dropdownPosition.top}px`,
                ...(isRTL
                  ? {
                      right: window.innerWidth < 640
                        ? "1rem"
                        : `${Math.min(dropdownPosition.right, window.innerWidth - 220)}px`,
                    }
                  : {
                      left: window.innerWidth < 640
                        ? "1rem"
                        : `${Math.min(dropdownPosition.left, window.innerWidth - 220)}px`,
                    }),
                transition: "none",
              } as React.CSSProperties}
              onClick={(e) => e.stopPropagation()}
              dir={isRTL ? "rtl" : "ltr"}
            >
              <div className="py-2">
                {stockTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => {
                      setSelectedStockType(type);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-start px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                      selectedStockType === type
                        ? "bg-gray-100 font-medium"
                        : ""
                    }`}
                  >
                    {type}
                  </button>
                ))}
                <div className="border-t border-gray-200 mt-2 pt-2">
                  <button
                    onClick={() => setIsDropdownOpen(false)}
                    className="w-full text-start px-4 py-2 text-sm text-[#00A7A2] hover:bg-gray-100 font-medium"
                  >
                    {t("stocks.choose_another")}
                  </button>
                </div>
              </div>
            </div>
          </>,
          document.getElementById("model") || document.body
        )}
    </section>
  );
}
