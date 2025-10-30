import { useMemo, useState } from "react";

const DATA = [
  { id: 1,  name: "Logistics",       color: "#f9b233" },
  { id: 2,  name: "NIS",             color: "#b2ce45" },
  { id: 3,  name: "FDSP",            color: "#9ad9d4" },
  { id: 4,  name: "Sports",          color: "#6bb9f0" },
  { id: 5,  name: "Tourism",         color: "#9a84d6" },
  { id: 6,  name: "NTP",             color: "#8353a4" },
  { id: 7,  name: "Manufacturing",   color: "#4b9f98" },
  { id: 8,  name: "Mining",          color: "#2c7a7b" },
  { id: 9,  name: "Healthcare",      color: "#48bb78" },
  { id: 10, name: "ICT",             color: "#319795" },
  { id: 11, name: "Pilgrims",        color: "#e53e3e" },
];

export default function NtpWheel({
  sectors = DATA,
  size = 520,
  innerRadius = 150,
  outerRadius = 220,
  centerLabel = ["National", "Transformation", "Program"],
  arrowLength = 34,
  arrowGap = 16,       // space from the outer ring to arrow start
}) {
  const [activeId, setActiveId] = useState(sectors[5]?.id ?? sectors[0]?.id);

  const N  = sectors.length;
  const TAU = Math.PI * 2;
  const anglePer = TAU / N;

  // tiny overlap eliminates anti-alias micro-gaps between slices
  const OVERLAP = 0.004; // radians (~0.23°)

  const segments = useMemo(() => {
    const cx = size / 2;
    const cy = size / 2;
    const polar = (r : number, a : number) => ({ x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) });

    const makeArcPath = (start: number, end: number) => {
      // ensure the last slice closes the circle perfectly
      const largeArcOuter = (end - start) > Math.PI ? 1 : 0;
      const largeArcInner = (end - start) > Math.PI ? 1 : 0;

      const p1 = polar(outerRadius, start);
      const p2 = polar(outerRadius, end);
      const p3 = polar(innerRadius, end);
      const p4 = polar(innerRadius, start);

      return [
        `M ${p1.x} ${p1.y}`,
        `A ${outerRadius} ${outerRadius} 0 ${largeArcOuter} 1 ${p2.x} ${p2.y}`,
        `L ${p3.x} ${p3.y}`,
        `A ${innerRadius} ${innerRadius} 0 ${largeArcInner} 0 ${p4.x} ${p4.y}`,
        `Z`,
      ].join(" ");
    };
    return sectors.map((s, i) => {
      // distribute angles 360°; apply micro-overlap both sides
      const start = i * anglePer - Math.PI / 2 - OVERLAP;
      const end   = (i + 1) * anglePer - Math.PI / 2 + OVERLAP;
      const mid   = (start + end) / 2;

      const d = makeArcPath(start, end);

      // arrow from just outside ring
      const aStartR = outerRadius + arrowGap;
      const aEndR   = outerRadius + arrowGap + arrowLength;
      const a1 = polar(aStartR, mid);
      const a2 = polar(aEndR,   mid);

      // label position (optional)
      const labelR = outerRadius + arrowGap + arrowLength + 14;
      const lp = polar(labelR, mid);

      return {
        ...s,
        d,
        mid,
        arrow: { x1: a1.x, y1: a1.y, x2: a2.x, y2: a2.y },
        label: { x: lp.x, y: lp.y },
      };
    });
  }, [sectors, size, anglePer, innerRadius, outerRadius, arrowGap, arrowLength]);

  const cx = size / 2;
  const cy = size / 2;

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="cursor-pointer">
        {/* Arrow head marker (generic) */}
        <defs>
          <marker
            id="arrowHead"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="8"
            markerHeight="8"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
          </marker>
        </defs>

        {/* donut segments */}
        {segments.map(seg => (
            <path
                key={seg.id}
                d={seg.d}
                fill={activeId === seg.id ? seg.color : "#ffffff"}
                stroke={seg.color}
                strokeWidth={2}
                strokeLinejoin="round"
                onClick={() => setActiveId(seg.id)}
                className={`cursor-pointer transition-all duration-200 hover:opacity-80 ${
                activeId === seg.id ? "opacity-100" : "opacity-90"
                }`}
            />
        ))}

        arrows
        {segments.map(seg => (
          <line
            key={`arrow-${seg.id}`}
            x1={seg.arrow.x1}
            y1={seg.arrow.y1}
            x2={seg.arrow.x2}
            y2={seg.arrow.y2}
            stroke={seg.color}
            strokeWidth={3}
            markerEnd="url(#arrowHead)"
            style={{ color: seg.color }} // feeds currentColor to marker
          />
        ))}

        {/* labels (optional; switch to foreignObject if you want HTML) */}
        {segments.map(seg => (
          <text
            key={`label-${seg.id}`}
            x={seg.label.x}
            y={seg.label.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="12"
            fill="#333"
            className="pointer-events-none select-none"
          >
            {seg.name}
          </text>
        ))}

        {/* center disc */}
        <circle cx={cx} cy={cy} r={innerRadius - 18} fill="#3c2a63" />
        {centerLabel.map((line, i) => (
          <text
            key={i}
            x={cx}
            y={cy - 12 + i * 18}
            textAnchor="middle"
            fill="#fff"
            fontSize="14"
            fontWeight="600"
            className="pointer-events-none select-none"
          >
            {line}
          </text>
        ))}
      </svg>

      <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl">
        {sectors.map(s => (
          <button
            key={s.id}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border-2 transition-all duration-200 text-sm font-medium ${
              activeId === s.id
                ? "bg-white shadow-md scale-105"
                : "bg-gray-50 hover:bg-gray-100 hover:scale-105"
            }`}
            style={{ borderColor: s.color }}
            onClick={() => setActiveId(s.id)}
            title={s.name}
          >
            <span className="w-3 h-3 rounded-full" style={{ background: s.color }} />
            {s.name}
          </button>
        ))}
      </div>
    </div>
  );
}