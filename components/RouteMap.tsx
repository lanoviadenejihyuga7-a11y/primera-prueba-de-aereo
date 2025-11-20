import React from 'react';

interface Coords {
  lat: number;
  lon: number;
}

interface RouteMapProps {
  from: Coords;
  to: Coords;
}

const RouteMap: React.FC<RouteMapProps> = ({ from, to }) => {
  // Simple Mercator projection
  const project = (lat: number, lon: number) => {
    const x = (lon + 180) * (512 / 360);
    const y = 256 - (256 / Math.PI) * Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360));
    return { x, y };
  };

  const p1 = project(from.lat, from.lon);
  const p2 = project(to.lat, to.lon);

  // Calculate control point for the curve
  const cx = (p1.x + p2.x) / 2 - (p1.y - p2.y) / 4;
  const cy = (p1.y + p2.y) / 2 - (p2.x - p1.x) / 4;

  const pathData = `M${p1.x},${p1.y} Q${cx},${cy} ${p2.x},${p2.y}`;

  return (
    <svg viewBox="0 0 512 256" className="w-full h-full">
      {/* Very simplified world map path */}
      <path d="M495,150 L495,120 L512,120 L512,150 Z M465,90 L465,60 L480,60 L480,90 Z M450,150 L450,120 L465,120 L465,150 Z M435,120 L435,90 L450,90 L450,120 Z M420,180 L420,150 L435,150 L435,180 Z M405,210 L405,180 L420,180 L420,210 Z M390,180 L390,150 L405,150 L405,180 Z M375,180 L375,150 L390,150 L390,180 Z M360,210 L360,180 L375,180 L375,210 Z M345,210 L345,180 L360,180 L360,210 Z M330,180 L330,150 L345,150 L345,180 Z M315,180 L315,150 L330,150 L330,180 Z M300,180 L300,150 L315,150 L315,180 Z M285,150 L285,120 L300,120 L300,150 Z M270,150 L270,120 L285,120 L285,150 Z M255,150 L255,120 L270,120 L270,150 Z M240,150 L240,120 L255,120 L255,150 Z M225,120 L225,90 L240,90 L240,120 Z M210,120 L210,90 L225,90 L225,120 Z M195,120 L195,90 L210,90 L210,120 Z M180,90 L180,60 L195,60 L195,90 Z M165,90 L165,60 L180,60 L180,90 Z M150,90 L150,60 L165,60 L165,90 Z M135,120 L135,90 L150,90 L150,120 Z M120,120 L120,90 L135,90 L135,120 Z M105,120 L105,90 L120,90 L120,120 Z M90,150 L90,120 L105,120 L105,150 Z M75,150 L75,120 L90,120 L90,150 Z M60,150 L60,120 L75,120 L75,150 Z M45,150 L45,120 L60,120 L60,150 Z M30,180 L30,150 L45,150 L45,180 Z M15,180 L15,150 L30,150 L30,180 Z M0,150 L0,120 L15,120 L15,150 Z" 
      fill="#315381" />

      {/* Route Line */}
      <path
        d={pathData}
        stroke="#CEE0F4"
        strokeWidth="2"
        fill="none"
        strokeDasharray="4"
      >
         <animate attributeName="stroke-dashoffset" from="8" to="0" dur="0.5s" repeatCount="indefinite" />
      </path>

      {/* Start and End Points */}
      <circle cx={p1.x} cy={p1.y} r="4" fill="#859FC0" stroke="#050B1E" strokeWidth="1">
        <animate attributeName="r" from="4" to="6" dur="1s" repeatCount="indefinite" />
      </circle>
       <circle cx={p2.x} cy={p2.y} r="4" fill="#859FC0" stroke="#050B1E" strokeWidth="1" />
       
        <text x={p1.x + 5} y={p1.y - 5} fontSize="8" fill="#CEE0F4" className="font-sans">LIMA</text>
    </svg>
  );
};

export default RouteMap;