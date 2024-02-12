import React from "react";

function GingerBreadFigure() {
  return (
    <div className="w-full h-[100vh] overflow-hidden">
      <svg
        className="bg-[#000]"
        width="100%"
        height="100vh"
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="20" r="5" fill="#92400e" />
        <circle cx="48" cy="18" r="0.5" fill="#fff" />
        <circle cx="52" cy="18" r="0.5" fill="#fff" />
        <circle cx="50" cy="20" r="1" fill="#fff" />
        <rect
          x="48"
          y="22.5"
          width="4"
          height="1"
          fill="none"
          stroke="#fff"
          strokeWidth="0.5"
          strokeLinecap="round"
          rx={0.5}
        />
        <line
          x1="42"
          y1="27"
          x2="58"
          y2="27"
          stroke="#92400e"
          strokeWidth="4"
          strokeLinecap="round"
          rx={1}
        />
        <line
          x1="50"
          y1="28"
          x2="45"
          y2="40"
          stroke="#92400e"
          strokeWidth="4"
          strokeLinecap="round"
          rx={1}
        />
        <line
          x1="50"
          y1="28"
          x2="55"
          y2="40"
          stroke="#92400e"
          strokeWidth="4"
          strokeLinecap="round"
          rx={1}
        />
        <circle cx="50" cy="28" r="1" fill="#000" />
        <circle cx="50" cy="31" r="1" fill="#000" />
      </svg>
    </div>
  );
}

export default GingerBreadFigure;
