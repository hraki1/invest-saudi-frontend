import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

type WheelItem = {
  key: string;
  label: string;
  color: string; // base segment color
};

// Data for each segment
type SegmentData = {
  overview: string;
  goals: string[];
  pillars: string[];
  progress: { value: string; title: string }[];
};

const ALL_DATA: Record<string, SegmentData> = {
  logistics: {
    overview:
      "To establish Saudi Arabia as a global logistics hub, leveraging its strategic location.",
    goals: [
      "Improve Port Efficiency",
      "Expand Air Cargo Capacity",
      "Modernize Border Crossings",
      "Develop Integrated Logistics Zones",
    ],
    pillars: [
      "Infrastructure Development",
      "Regulatory Reform",
      "Technology Adoption",
      "Private Sector Partnership",
    ],
    progress: [
      {
        value: "Top 20",
        title: "Ranked among the top 20 globally in port efficiency",
      },
      {
        value: "+40%",
        title: "Increased air cargo capacity by over 40% in key airports",
      },
      {
        value: "24h",
        title: "Reduced customs clearance time to under 24 hours on average",
      },
    ],
  },
  nis: {
    overview:
      "The National Industrial Strategy focuses on diversifying the industrial base and promoting advanced manufacturing.",
    goals: [
      "Boost Industrial Exports",
      "Attract Foreign Investment",
      "Promote Local Content",
      "Develop Industrial Cities",
    ],
    pillars: [
      "Incentive Programs",
      "Skilled Workforce Development",
      "R&D and Innovation",
      "Sustainable Practices",
    ],
    progress: [
      {
        value: "300B",
        title: "Industrial exports reached SAR 300 billion, a new record",
      },
      {
        value: "4th Gen",
        title: "Launched 5 new 4th-gen industrial city projects",
      },
      {
        value: "60%",
        title: "Increased local content in government procurements to 60%",
      },
    ],
  },
  fdsp: {
    overview:
      "The Financial Sector Development Program aims to create a diversified and effective financial services sector.",
    goals: [
      "Increase SME Lending",
      "Promote Fintech",
      "Develop Debt Market",
      "Enhance Savings",
    ],
    pillars: [
      "Capital Market Deepening",
      "Digital Transformation",
      "Financial Literacy",
      "Regulatory Excellence",
    ],
    progress: [
      {
        value: "25+",
        title: "Over 25 new Fintech companies licensed and operational",
      },
      {
        value: "8%",
        title: "SME lending as a percentage of total bank loans reached 8%",
      },
      {
        value: "2x",
        title: "Corporate debt market size has doubled since program launch",
      },
    ],
  },
  sports: {
    overview:
      "To increase community participation in sports and achieve global excellence in various athletic fields.",
    goals: [
      "Host Major Events",
      "Develop Youth Talent",
      "Increase Female Participation",
      "Improve Facilities",
    ],
    pillars: [
      "Community Engagement",
      "Elite Performance Pathways",
      "Infrastructure Investment",
      "Global Partnerships",
    ],
    progress: [
      {
        value: "F1",
        title: "Successfully hosted the inaugural Saudi Arabian Grand Prix",
      },
      {
        value: "40%",
        title: "Female participation in sports has increased by 40% nationwide",
      },
      {
        value: "500+",
        title: "Constructed over 500 new community sports facilities",
      },
    ],
  },
  tourism: {
    overview:
      "To position Saudi Arabia as a leading global tourism destination, showcasing its cultural and natural heritage.",
    goals: [
      "Attract 100M Visits",
      "Increase GDP Contribution",
      "Create 1M Jobs",
      "Develop Giga-Projects",
    ],
    pillars: [
      "Destination Development",
      "Visa Facilitation",
      "Marketing & Promotion",
      "Heritage Preservation",
    ],
    progress: [
      {
        value: "60M",
        title:
          "Achieved over 60 million domestic and international visits annually",
      },
      {
        value: "e-Visa",
        title: "Launched e-Visa program for 49 countries, simplifying access",
      },
      {
        value: "5-Star",
        title: "Opened 30+ new 5-star hotels in key tourism areas",
      },
    ],
  },
  ntp: {
    overview:
      "The NTP is one of the main enablers to Vision 2030, via a comprehensive package of reforms to the national investment system.",
    goals: [
      "Enhance Investment Competit.",
      "Economic Dev & Job Creation",
      "Equal Treatment Of Investors",
      "Investor Rights And Protection",
      "Regulatory Transparency",
      "Investment Expansion & Growth",
    ],
    pillars: [
      "Develop Meaningful Investment Cooperation",
      "Develop Investor Centric Services",
      "Creative & Innovative Funding Sources",
      "Focus in Competitive-Ness Drivers & Enablers",
    ],
    progress: [
      {
        value: "119 B",
        title:
          "FDI inflow reached SAR 119 billion surpassing the annual target",
      },
      {
        value: "47%",
        title:
          "Private sector's GDP contribution reached 47%, surpassing target",
      },
      {
        value: "7%",
        title: "Unemployment dropped, achieving target of 7% ahead of schedule",
      },
    ],
  },
  manufacturing: {
    overview:
      "To develop a robust and sustainable manufacturing sector capable of competing globally.",
    goals: [
      "Increase Non-Oil Exports",
      "Localize Key Industries",
      "Adopt Industry 4.0",
      "Create Skilled Jobs",
    ],
    pillars: [
      "Cluster Development",
      "Supply Chain Integration",
      "Access to Finance",
      "Talent Development",
    ],
    progress: [
      {
        value: "+15%",
        title: "Non-oil manufacturing exports grew by 15% year-on-year",
      },
      {
        value: "Pharma",
        title: "Localized production for 10 key pharmaceutical products",
      },
      {
        value: "100+",
        title: "Over 100 factories adopted Industry 4.0 technologies",
      },
    ],
  },
  mining: {
    overview:
      "To unlock the potential of the Kingdom’s vast mineral resources, making mining the third pillar of the economy.",
    goals: [
      "Increase Sector GDP",
      "Attract Foreign Investment",
      "Explore New Commodities",
      "Ensure Sustainability",
    ],
    pillars: [
      "Geological Data Access",
      "Streamlined Licensing",
      "Infrastructure Support",
      "Value Chain Development",
    ],
    progress: [
      {
        value: "$1.3T",
        title:
          "Estimated mineral wealth potential valued at over $1.3 trillion",
      },
      {
        value: "30+",
        title: "Issued over 30 new exploration licenses to international firms",
      },
      {
        value: "Gold",
        title: "Discovered two new major gold and copper ore sites",
      },
    ],
  },
  healthcare: {
    overview:
      "To transform the healthcare sector into a comprehensive, effective, and integrated system.",
    goals: [
      "Privatize Services",
      "Improve Quality of Care",
      "Promote Preventive Health",
      "Boost Local Pharma",
    ],
    pillars: [
      "Public-Private Partnership (PPP)",
      "Digital Health (eHealth)",
      "Insurance Reform",
      "Manpower Training",
    ],
    progress: [
      {
        value: "85%",
        title:
          "Increased life expectancy to 75 years, nearing Vision 2030 target",
      },
      {
        value: "Seha",
        title:
          'Launched the "Seha" app, providing virtual consultations to millions',
      },
      {
        value: "20+",
        title: "Announced over 20 PPP projects for new hospitals and clinics",
      },
    ],
  },
  ict: {
    overview:
      "To develop a cutting-edge information and communication technology sector to fuel the digital economy.",
    goals: [
      "Nationwide 5G",
      "Grow IT Market Size",
      "Foster Startups",
      "Develop Digital Skills",
    ],
    pillars: [
      "Infrastructure Investment",
      "Support for Entrepreneurs",
      "Digital Government",
      "Cybersecurity",
    ],
    progress: [
      {
        value: "90%",
        title: "Achieved 90% population coverage for the 5G network",
      },
      {
        value: "$2B",
        title:
          "Venture capital investment in tech startups surpassed $2 billion",
      },
      {
        value: "Top 10",
        title: "Ranked in the top 10 globally for digital government services",
      },
    ],
  },
  pilgrims1: {
    overview:
      "The Pilgrim Experience Program is dedicated to enhancing the Hajj and Umrah experience for Muslims worldwide.",
    goals: [
      "Increase Capacity",
      "Improve Service Quality",
      "Enrich Religious Journey",
      "Ensure Safety & Security",
    ],
    pillars: [
      "Infrastructure Expansion",
      "Digital Services",
      "Cultural Enrichment",
      "Streamlined Logistics",
    ],
    progress: [
      {
        value: "30M",
        title:
          "Increased capacity to host up to 30 million Umrah pilgrims annually",
      },
      {
        value: "Nusuk",
        title:
          'Launched the "Nusuk" platform for easy visa and travel planning',
      },
      {
        value: "HHR",
        title: "Expanded the Haramain High-Speed Railway connecting key sites",
      },
    ],
  },
  pilgrims2: {
    overview:
      "A secondary initiative focusing on post-pilgrimage tourism and extending the stay of visitors.",
    goals: [
      "Promote Islamic Tourism",
      "Develop Cultural Sites",
      "Offer Diversified Packages",
      "Improve Hospitality",
    ],
    pillars: [
      "Post-Umrah Programs",
      "Museum & Site Development",
      "Private Tour Operators",
      "Visitor Services",
    ],
    progress: [
      {
        value: "+5 Days",
        title: "Increased average length of stay for pilgrims by 2 days",
      },
      {
        value: "10+",
        title: "Developed over 10 new cultural sites near Makkah and Madinah",
      },
      {
        value: "50k",
        title: "Trained 50,000 new hospitality staff to serve pilgrims",
      },
    ],
  },
};

const ITEMS: WheelItem[] = [
  { key: "logistics", label: "Logistics", color: "#F6C445" },
  { key: "nis", label: "NIS", color: "#5AC05A" },
  { key: "fdsp", label: "FDSP", color: "#9BA6FF" },
  { key: "sports", label: "Sports", color: "#7EA6F7" },
  { key: "tourism", label: "Tourism", color: "#27C5C6" },
  { key: "ntp", label: "NTP", color: "#7B2CBF" },
  { key: "manufacturing", label: "Manufacturing", color: "#3CC8D1" },
  { key: "mining", label: "Mining", color: "#8B8B8B" },
  { key: "healthcare", label: "Healthcare", color: "#D1D5DB" },
  { key: "ict", label: "ICT", color: "#4ADE80" },
  { key: "pilgrims1", label: "Pilgrims", color: "#F87171" },
  { key: "pilgrims2", label: "Pilgrims", color: "#60A5FA" },
];

function polarToCartesian(
  cx: number,
  cy: number,
  r: number,
  angleInDeg: number
) {
  const angleInRad = ((angleInDeg - 90) * Math.PI) / 180.0;
  return {
    x: cx + r * Math.cos(angleInRad),
    y: cy + r * Math.sin(angleInRad),
  };
}

function arcPath(
  cx: number,
  cy: number,
  innerR: number,
  outerR: number,
  startAngle: number,
  endAngle: number
) {
  const startOuter = polarToCartesian(cx, cy, outerR, endAngle);
  const endOuter = polarToCartesian(cx, cy, outerR, startAngle);
  const startInner = polarToCartesian(cx, cy, innerR, startAngle);
  const endInner = polarToCartesian(cx, cy, innerR, endAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    `M ${startOuter.x} ${startOuter.y}`,
    `A ${outerR} ${outerR} 0 ${largeArcFlag} 0 ${endOuter.x} ${endOuter.y}`,
    `L ${startInner.x} ${startInner.y}`,
    `A ${innerR} ${innerR} 0 ${largeArcFlag} 1 ${endInner.x} ${endInner.y}`,
    "Z",
  ].join(" ");
}

function lighten(hex: string, amount = 0.12) {
  const n = hex.replace("#", "");
  const num = parseInt(
    n.length === 3
      ? n
          .split("")
          .map((c) => c + c)
          .join("")
      : n,
    16
  );
  const r = Math.min(
    255,
    Math.max(0, ((num >> 16) & 0xff) + Math.round(255 * amount))
  );
  const g = Math.min(
    255,
    Math.max(0, ((num >> 8) & 0xff) + Math.round(255 * amount))
  );
  const b = Math.min(255, Math.max(0, (num & 0xff) + Math.round(255 * amount)));
  return `#${[r, g, b]
    .map((v) => v.toString(16).padStart(2, "0"))
    .join("")}`.toUpperCase();
}

export default function Test() {
  const [activeKey, setActiveKey] = useState<string>("ntp");
  const { t } = useTranslation();

  const activeData = useMemo(
    () => ALL_DATA[activeKey] || ALL_DATA.ntp,
    [activeKey]
  );

  const spec = useMemo(() => {
    const count = ITEMS.length;
    const startAngle = -110; // rotate so highlight sits on right side roughly like image
    const anglePer = 360 / count;
    
    // Calculate dynamic spacing based on number of items
    // More items = smaller font, tighter spacing
    const fontSize = count <= 8 ? 14 : count <= 12 ? 13 : 12;
    const triangleSize = count <= 8 ? 8 : count <= 12 ? 7 : 6;
    const labelOffset = count <= 8 ? 0 : count <= 12 ? -5 : -10;
    
    return { count, startAngle, anglePer, fontSize, triangleSize, labelOffset };
  }, []);

  const size = 720;
  const cx = size / 2;
  const cy = size / 2;
  const outerR = 320;
  const innerR = 200;
  const dividerColor = "rgba(0,0,0,0.15)";

  const pillars = [
    {
      title: t("key_strategies.vibrant_society"),
      color: "#0DACA7",
      image: "/icons/tree/green.png",
    },
    {
      title: t("key_strategies.thriving_economy"),
      color: "#814A98",
      image: "/icons/tree/pink.png",
    },
    {
      title: t("key_strategies.ambitious_nation"),
      color: "#013B5E",
      image: "/icons/tree/blue.png",
    },
  ];

  return (
    <section className="w-full py-12 bg-gradient-to-l from-[#E6F6F6] to-[#ECE4F0]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Title + Pills */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8">
            {t("key_strategies.title")}
          </h2>

          {/* Three Pillars */}
          <div className="flex flex-wrap justify-center items-center gap-5 md:gap-12">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 md:gap-3 bg-white rounded-full px-4 py-2"
              >
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-4 h-5"
                />
                <span
                  className="text-lg md:text-2xl"
                  style={{ color: pillar.color }}
                >
                  {pillar.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Main two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 xl:gap-24 items-center">
          {/* Left: Radial Wheel */}
          <div
            className="relative mx-auto w-full max-w-[600px]"
            style={{ aspectRatio: "1/1" }}
          >
            <svg
              viewBox={`0 0 ${size} ${size}`}
              width={size}
              height={size}
              className="w-full h-auto"
            >
              {/* Outer subtle ring */}
              <circle cx={cx} cy={cy} r={outerR + 8} fill="#EEF2F7" />

              {/* Segments */}
              {ITEMS.map((item, idx) => {
                const a0 = spec.startAngle + idx * spec.anglePer;
                const a1 = a0 + spec.anglePer;
                const isActive = activeKey === item.key;
                const fill = isActive ? item.color : lighten(item.color, 0.55);
                const grow = isActive ? 10 : 0;
                const path = arcPath(cx, cy, innerR, outerR + grow, a0, a1);

                // separator line on right edge of each slice
                const sepStart = polarToCartesian(cx, cy, innerR, a1);
                const sepEnd = polarToCartesian(cx, cy, outerR, a1);

                // label anchor at mid-angle
                const mid = (a0 + a1) / 2;
                const labelPos = polarToCartesian(
                  cx,
                  cy,
                  (innerR + outerR) / 2 + spec.labelOffset + (isActive ? 8 : 0),
                  mid
                );

                return (
                  <g
                    key={item.key}
                    onClick={() => setActiveKey(item.key)}
                    style={{ cursor: "pointer", transition: "all 0.3s ease" }}
                  >
                    <path
                      d={path}
                      fill={fill}
                      stroke="#ffffff"
                      strokeWidth={2}
                      style={{ transition: "all 0.3s ease" }}
                    />
                    <line
                      x1={sepStart.x}
                      y1={sepStart.y}
                      x2={sepEnd.x}
                      y2={sepEnd.y}
                      stroke={dividerColor}
                      strokeWidth={2}
                    />
                    <text
                      x={labelPos.x}
                      y={labelPos.y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize={spec.fontSize}
                      fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto"
                      fill="#2b2b2b"
                    >
                      {item.label}
                    </text>

                    {/* Triangle at outer edge */}
                    {(() => {
                      const triSize = spec.triangleSize;
                      const t1 = polarToCartesian(cx, cy, outerR - triSize, mid - triSize);
                      const t2 = polarToCartesian(cx, cy, outerR + triSize, mid);
                      const t3 = polarToCartesian(cx, cy, outerR - triSize, mid + triSize);
                      return (
                        <path
                          d={`M ${t1.x} ${t1.y} L ${t2.x} ${t2.y} L ${t3.x} ${t3.y} Z`}
                          fill={item.color}
                          opacity={isActive ? 1 : 0.7}
                        />
                      );
                    })()}
                  </g>
                );
              })}

              {/* Center circle */}
              <defs>
                <radialGradient id="centerGrad" cx="50%" cy="50%" r="60%">
                  <stop offset="0%" stopColor="#6D28D9" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#4C1D95" stopOpacity="0.95" />
                </radialGradient>
              </defs>
              <circle cx={cx} cy={cy} r={innerR - 20} fill="url(#centerGrad)" />
              <text
                x={cx}
                y={cy - 20}
                textAnchor="middle"
                fill="#ffffff"
                fontSize={28}
                fontWeight={400}
                fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto"
              >
                National
              </text>
              <text
                x={cx}
                y={cy + 8}
                textAnchor="middle"
                fill="#ffffff"
                fontSize={28}
                fontWeight={400}
                fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto"
              >
                Transformation
              </text>
              <text
                x={cx}
                y={cy + 36}
                textAnchor="middle"
                fill="#ffffff"
                fontSize={28}
                fontWeight={400}
                fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto"
              >
                Program
              </text>

              {/* CTA */}
              <g
                onClick={() =>
                  window.alert(
                    `Selected: ${ITEMS.find((i) => i.key === activeKey)?.label}`
                  )
                }
                style={{ cursor: "pointer" }}
              >
                <rect
                  x={cx - 92}
                  y={cy + 70}
                  width={184}
                  height={40}
                  rx={20}
                  fill="#1F2937"
                />
                <text
                  x={cx}
                  y={cy + 96}
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize={14}
                  fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto"
                >
                  VIEW STRATEGY
                </text>
              </g>
            </svg>

            {/* Connector to card (decorative) */}
            <svg
              className="hidden lg:block absolute"
              style={{ left: "95%", top: "52%", transform: "translateY(-50%)" }}
              width="120"
              height="280"
              viewBox="0 0 120 280"
              fill="none"
            >
              <path
                d="M5 140 C 60 140, 60 30, 115 30"
                stroke="#7B2CBF"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M5 140 C 60 140, 60 250, 115 250"
                stroke="#7B2CBF"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>

          {/* Right: Info card */}
          <div className="bg-white/90 rounded-2xl shadow-lg border border-slate-200 overflow-hidden transition-all duration-500">
            {/* Overview */}
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center gap-2 text-slate-800 font-semibold mb-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="10"
                    cy="10"
                    r="8"
                    stroke="#7B2CBF"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle cx="10" cy="10" r="3" fill="#7B2CBF" />
                </svg>
                Overview
              </div>
              <p className="text-slate-600 text-sm leading-6">
                {activeData.overview}
              </p>
            </div>

            {/* Goals */}
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center gap-2 text-slate-800 font-semibold mb-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="10"
                    cy="10"
                    r="9"
                    stroke="#7B2CBF"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
                Goals
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {activeData.goals.map((t) => (
                  <div
                    key={t}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <svg
                      className="mt-0.5 flex-shrink-0"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="16"
                        height="16"
                        rx="3"
                        stroke="#666"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <path
                        d="M6 10 L9 13 L14 7"
                        stroke="#666"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm leading-5">{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Pillars */}
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center gap-2 text-slate-800 font-semibold mb-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 17L10 3L17 17H3Z"
                    stroke="#7B2CBF"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
                Core Pillars
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {activeData.pillars.map((t) => (
                  <div
                    key={t}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <svg
                      className="mt-0.5 flex-shrink-0"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="14"
                        height="14"
                        rx="2"
                        stroke="#666"
                        strokeWidth="1.5"
                        fill="none"
                      />
                    </svg>
                    <span className="text-sm leading-5">{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Latest Strategic Progress */}
            <div className="p-6">
              <div className="flex items-center gap-2 text-slate-800 font-semibold mb-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 15L8 10L12 13L16 6"
                    stroke="#7B2CBF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13 6H16V9"
                    stroke="#7B2CBF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Latest Strategic Progress
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {activeData.progress.map(({ value, title }) => (
                  <div key={value} className="text-center">
                    <div className="relative w-20 h-20 mx-auto mb-3">
                      <svg
                        className="w-20 h-20 transform -rotate-90"
                        viewBox="0 0 80 80"
                      >
                        <circle
                          cx="40"
                          cy="40"
                          r="32"
                          stroke="#E5E7EB"
                          strokeWidth="6"
                          fill="none"
                        />
                        <circle
                          cx="40"
                          cy="40"
                          r="32"
                          stroke="#7B2CBF"
                          strokeWidth="6"
                          fill="none"
                          strokeDasharray="201"
                          strokeDashoffset="50"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold text-slate-800">
                          {value}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 leading-5 px-2">
                      {title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom actions */}
        <div className="mt-8 flex flex-wrap gap-4 items-center">
          <button className="px-6 h-12 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 border-2 border-purple-500 shadow-lg text-white text-sm font-semibold hover:from-purple-700 hover:to-purple-800 hover:shadow-xl hover:scale-105 transition-all duration-300">
            → EXPLORE SECTORS
          </button>
          <button className="px-6 h-12 rounded-full bg-white border-2 border-slate-300 shadow-md text-slate-700 text-sm font-semibold hover:bg-slate-50 hover:shadow-lg hover:scale-105 transition-all duration-300">
            ↓ DOWNLOAD STRATEGY
          </button>
        </div>
      </div>
    </section>
  );
}
