export default function StrategicInvestorProgram() {
  const keyMetrics = [
    {
      title: "Dedicated Relationship Manager",
      description:
        "A single, direct point of contact for all queries, services and support.",
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
      iconBg: "bg-teal-500",
    },
    {
      title: "Business Days",
      description:
        "Estimated time for processing TPN for new companies and projects.",
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
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      iconBg: "bg-purple-500",
    },
    {
      title: "Foreign Ownership",
      description:
        "100% foreign ownership for companies operating in most sectors.",
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
      iconBg: "bg-pink-500",
    },
  ];

  const pillars = [
    {
      number: "01",
      title: "Priority Services",
      description:
        "A single, direct point of contact for all queries, services and support.",
    },
    {
      number: "02",
      title: "Incentives & Funding",
      description:
        "Estimated time for processing TPN for new companies and projects.",
    },
    {
      number: "03",
      title: "Exclusive Access",
      description:
        "Estimated time for processing TPN for new companies and projects.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#003A5D] to-[#006461]">
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Subtle geometric patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
        </div>
        {/* Dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24">
        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-start gap-6 md:gap-9 mb-6">
            {/* KSA Logo/Icon */}
            <div className="flex-shrink-0 mt-2">
              <div className=" flex items-center justify-center backdrop-blur-sm relative">
                <img
                  src="SIP/saudi-logo.png"
                  alt=""
                  className="w-20 md:w-32  h-full object-cover"
                />
              </div>
            </div>

            {/* Title and Subtitle */}
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl lg:text-[48px] font-bold text-white mb-4 tracking-tight">
                Strategic Investor Program (SIP)
              </h2>
              <p className="text-base md:text-lg lg:text-2xl text-white/90 max-w-3xl leading-relaxed">
                Accelerate your impact. Access Saudi Arabia's premium investor
                support system designed for global leaders and strategic
                projects.
              </p>
            </div>
          </div>
        </div>

        {/* Key Data & Metrics Section */}
        <div className="mb-16 md:mb-20">
          <div className="relative pb-4 mb-4">
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              Key Data & Metrics
            </h3>
            {/* Gradient border */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-white/20 via-transparent to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyMetrics.map((metric, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-black/50 via-black/30 to-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start gap-4">
                  {/* Icon Circle */}
                  <div
                    className={`w-12 h-12 rounded-full ${metric.iconBg} flex items-center justify-center flex-shrink-0 text-white`}
                  >
                    {metric.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-lg mb-2">
                      {metric.title}
                    </h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {metric.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Program Pillars Section */}
        <div className="mb-12">
          <div className="relative pb-4 mb-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              Program Pillars
            </h3>
            {/* Gradient border */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side - Image */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden">
              <img
                src="/giga-projects/gigaProjects-hero.jpg"
                alt="Strategic Investor Program"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Right Side - Pillars */}
            <div className="space-y-4">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start gap-6">
                    {/* Number */}
                    <span className="text-6xl md:text-7xl font-light text-white/20 group-hover:text-white/30 transition-colors">
                      {pillar.number}
                    </span>

                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <h4 className="text-white font-semibold text-xl md:text-2xl mb-2">
                        {pillar.title}
                      </h4>
                      <p className="text-white/70 text-sm md:text-base leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Arrow Icon */}
                    <div className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center border border-white/20 group-hover:bg-white/10 group-hover:border-white/30 transition-all flex-shrink-0 mt-2">
                      <svg
                        className="w-4 h-4 text-white"
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-black/40 hover:bg-black/60 text-white text-sm font-semibold rounded-lg transition-all duration-200 border border-white/20 hover:border-white/30 flex items-center justify-center gap-2 backdrop-blur-sm">
            <span>Learn More About Program Criteria</span>
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
          <button className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
            <span>Review Eligibility & Apply Now</span>
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

      {/* Bottom decorative image */}
      <div className="absolute bottom-0 left-0 right-0 w-screen h-[50vh] overflow-hidden">
        <div
          className="inset-0 opacity-80 w-full h-full object-cover"
          style={{
            backgroundImage: 'url("SIP/bg-down.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto 100%",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      <div className="absolute top-0 right-0 w-[300px] h-[400px] md:w-[400px] md:h-[550px] lg:w-[362px] lg:h-[535px] overflow-hidden">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage: 'url("SIP/bg-up-right.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "top right",
          }}
        ></div>
      </div>
    </section>
  );
}
