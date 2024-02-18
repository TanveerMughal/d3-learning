function LearningViewBox() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-300">
      <svg
        width="100%"
        height="100vh"
        viewBox="-100 -100 200 200"
        className="bg-red-900"
      >
        <Star className="translate-y-2 animate-ping" />
        <Star className="translate-y-2" />
      </svg>
    </div>
  );
}

export default LearningViewBox;

function Star({ className = "" }: { className?: string }) {
  return (
    <g className={`${className}`}>
      {/* a polygon */}
      <g>
        <polygon points="0,0 36.35,-50 0,-100" fill="#EDD8B7" />
        <polygon points="0,0 -36.35,-50 0,-100" fill="#E5C39C" />
      </g>
      <g className="transform rotate-[72deg]">
        <polygon points="0,0 36.35,-50 0,-100" fill="#EDD8B7" />
        <polygon points="0,0 -36.35,-50 0,-100" fill="#E5C39C" />
      </g>
      <g className="transform rotate-[144deg]">
        <polygon points="0,0 36.35,-50 0,-100" fill="#EDD8B7" />
        <polygon points="0,0 -36.35,-50 0,-100" fill="#E5C39C" />
      </g>
      <g className="transform rotate-[216deg]">
        <polygon points="0,0 36.35,-50 0,-100" fill="#EDD8B7" />
        <polygon points="0,0 -36.35,-50 0,-100" fill="#E5C39C" />
      </g>
      <g className="transform rotate-[288deg]">
        <polygon points="0,0 36.35,-50 0,-100" fill="#EDD8B7" />
        <polygon points="0,0 -36.35,-50 0,-100" fill="#E5C39C" />
      </g>
    </g>
  );
}
