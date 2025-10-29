export default function Miza() {
  // Service cards data
  const services = [
    {
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          {/* Office building with windows */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 21h14M5 21V9l7-4 7 4v12M5 21H3V9l9-5 9 5v12h-2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 13h2v2H8zM12 13h2v2h-2zM8 17h2v2H8zM12 17h2v2h-2z" />
        </svg>
      ),
      iconBg: "bg-[#5BD5E8]",
      title: "Accounting & Bookkeeping Consultancy Services",
      description: "Provide full support to investors at the stage of business establishment and the highest level of financial consultancy services and business insights"
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          {/* Person head */}
          <circle cx="12" cy="8" r="3.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Person shoulders */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          {/* Star badge on chest */}
          <circle cx="12" cy="11" r="2.5" fill="currentColor" />
          <path d="M12 9.5l0.6 1.2 1.35 0.2-0.98 0.95 0.23 1.35L12 13.1l-1.2 0.63 0.23-1.35-0.98-0.95 1.35-0.2L12 9.5z" fill="white" stroke="white" strokeWidth={0.5} />
        </svg>
      ),
      iconBg: "bg-[#5BD5E8]",
      title: "Talent Acquisition Services",
      description: "Assist investors by providing essential support with company incorporation allied services and efficiently building organizational development needs."
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          {/* Phone receiver */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          {/* Circle badge with 24 */}
          <circle cx="17" cy="6" r="4.5" fill="currentColor" strokeWidth={0.5} />
          <text x="17" y="9" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="Arial, sans-serif">24</text>
        </svg>
      ),
      iconBg: "bg-[#A975DB]",
      title: "Logistics Services",
      description: "An exceptional range of services to support logistical needs & public relations; To facilitate the movement of investors & qualify the place of residence at the same time."
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          {/* House */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          {/* Key - positioned next to house */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8a2 2 0 012 2m2 0a4 4 0 01-4 4l-3 3H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A4 4 0 0119 8z" />
          <circle cx="19" cy="10" r="1.5" fill="currentColor" />
        </svg>
      ),
      iconBg: "bg-[#5BD5E8]",
      title: "Real Estate Rental Services",
      description: "A group of real estate services that support investors needs for an exceptional business experience."
    }
  ];

  // Hexagon pattern SVG - interconnected hexagons
  const hexagonPattern = (
    <svg className="absolute inset-0 w-full h-full opacity-[0.12]" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="hexagons" width="90" height="77.94" patternUnits="userSpaceOnUse">
          {/* Hexagon shapes interconnected */}
          <path 
            d="M45 0L75 25.98L75 51.96L45 77.94L15 51.96L15 25.98Z" 
            fill="none" 
            stroke="#5BD5E8" 
            strokeWidth="1.2"
            opacity="0.5"
          />
          {/* Additional hexagon connections */}
          <circle cx="45" cy="25.98" r="1.5" fill="#5BD5E8" opacity="0.4"/>
          <circle cx="45" cy="51.96" r="1.5" fill="#5BD5E8" opacity="0.4"/>
          {/* Connection lines between hexagons */}
          <line x1="30" y1="38.97" x2="15" y2="51.96" stroke="#5BD5E8" strokeWidth="0.8" opacity="0.3"/>
          <line x1="60" y1="38.97" x2="75" y2="51.96" stroke="#5BD5E8" strokeWidth="0.8" opacity="0.3"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hexagons)" />
    </svg>
  );

  return (
    <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-[#F0E5F5] via-[#E8EFF5] to-[#E0E8F0] overflow-hidden">
      {/* Hexagon Pattern Background */}
      <div className="absolute inset-0">
        {hexagonPattern}
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Logo Section */}
        <div className="flex items-start gap-4 mb-8 md:mb-10">
          {/* M Logo Icon - Open Book Style (stylized M) */}
          <div className="relative flex-shrink-0">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Left page - stylized as M shape */}
              <path d="M12 10C12 8.89543 12.8954 8 14 8H24V48H14C12.8954 48 12 47.1046 12 46V10Z" fill="#5BD5E8"/>
              {/* Right page - stylized as M shape */}
              <path d="M44 10C44 8.89543 43.1046 8 42 8H32V48H42C43.1046 48 44 47.1046 44 46V10Z" fill="#5BD5E8"/>
              {/* Center binding/connection */}
              <path d="M28 8L28 22L20 28L28 34L28 48" stroke="#5BD5E8" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
          
          {/* Text Logo */}
          <div className="flex flex-col justify-start pt-1">
            <span className="text-2xl md:text-3xl font-bold text-black mb-0.5">ميزا</span>
            <span className="text-lg md:text-xl font-semibold text-black mb-0.5">MIZA</span>
            <span className="text-xs md:text-sm text-black opacity-75">نسخة تجريبية</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 md:mb-6 leading-tight">
          MIZA - Value added services support
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-800 mb-14 md:mb-16 max-w-4xl leading-relaxed">
          We offer exceptional value-added services that fosters your company's growth and expansion. Through our regulated electronic platform, we facilitate the ease of access to qualified Third-Party Service Providers, and some of these services are:
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-[2.5px]"
              style={{
                background: 'linear-gradient(135deg, rgba(91, 213, 232, 0.4), rgba(169, 117, 219, 0.4))',
              }}
            >
              <div 
                className="rounded-2xl p-6 md:p-8 h-full bg-white"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='52' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='hex${index}' width='60' height='52' patternUnits='userSpaceOnUse'%3E%3Cpath d='M30 0L50 26L30 52L10 26Z' fill='none' stroke='%235BD5E8' stroke-width='0.6' opacity='0.12'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23hex${index})'/%3E%3C/svg%3E")`,
                }}
              >
              {/* Icon */}
              <div className={`${service.iconBg} w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center text-white mb-5 md:mb-6 shadow-md p-3`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {service.description}
              </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mt-8">
          {/* Download Guide Button */}
          <button className="flex items-center gap-2.5 px-7 md:px-9 py-3.5 md:py-4 bg-white border-2 border-[#A975DB] rounded-xl text-[#8B5A9F] font-semibold text-base md:text-lg hover:bg-[#F8F4FA] transition-all duration-300 shadow-sm hover:shadow-md">
            <span>Download Guide</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>

          {/* E-Services Button */}
          <button className="flex items-center gap-2.5 px-7 md:px-9 py-3.5 md:py-4 bg-[#8B5A9F] rounded-xl text-white font-semibold text-base md:text-lg hover:bg-[#7A4A8A] transition-all duration-300 shadow-md hover:shadow-lg">
            <span>E-Services</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

