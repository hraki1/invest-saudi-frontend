import React from "react";

interface SaudiMapProps {
  onSelectRegion?: (region: string) => void;
}

const SaudiMap: React.FC<SaudiMapProps> = ({ onSelectRegion }) => {
  const handleClick = (region: string) => {
    if (onSelectRegion) onSelectRegion(region);
  };

  return (
    <svg
      viewBox="0 0 744 613"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Background */}
      <image
        href="/saudi-map.png" // make sure this image is in your /public folder
        x="0"
        y="0"
        width="744"
        height="613"
        preserveAspectRatio="xMidYMid meet"
      />

      <style>
        {`
          .sector {
            fill: rgba(32, 185, 174, 0.5);
            stroke: white;
            stroke-width: 1.5;
            cursor: pointer;
            transition: fill 0.2s ease, transform 0.15s ease;
          }
          .sector:hover {
            fill: rgba(32, 185, 174, 0.8);
            transform: scale(1.02);
          }
          .label {
            fill: white;
            font-size: 14px;
            font-family: sans-serif;
            pointer-events: none;
          }
        `}
      </style>

      {/* Riyadh */}
      <g onClick={() => handleClick("Riyadh")}>
        <polygon
          className="sector"
          points="340,180 430,200 470,270 420,370 320,350 290,270"
        />
        <text x="380" y="280" className="label" textAnchor="middle">
          Riyadh
        </text>
      </g>

      {/* Makkah */}
      <g onClick={() => handleClick("Makkah")}>
        <polygon
          className="sector"
          points="180,350 240,330 300,420 250,500 170,470 150,400"
        />
        <text x="230" y="420" className="label" textAnchor="middle">
          Makkah
        </text>
      </g>

      {/* Madinah */}
      <g onClick={() => handleClick("Madinah")}>
        <polygon
          className="sector"
          points="130,180 220,160 270,240 190,290 120,260"
        />
        <text x="190" y="240" className="label" textAnchor="middle">
          Madinah
        </text>
      </g>

      {/* Eastern Province */}
      <g onClick={() => handleClick("Eastern")}>
        <polygon
          className="sector"
          points="460,190 600,200 700,260 670,400 520,380 460,280"
        />
        <text x="580" y="300" className="label" textAnchor="middle">
          Eastern
        </text>
      </g>

      {/* Asir */}
      <g onClick={() => handleClick("Asir")}>
        <polygon
          className="sector"
          points="230,470 280,470 310,530 250,590 180,550"
        />
        <text x="250" y="540" className="label" textAnchor="middle">
          Asir
        </text>
      </g>

      {/* Jizan */}
      <g onClick={() => handleClick("Jizan")}>
        <polygon className="sector" points="150,540 180,550 230,610 150,610" />
        <text x="190" y="590" className="label" textAnchor="middle">
          Jizan
        </text>
      </g>
    </svg>
  );
};

export default SaudiMap;
