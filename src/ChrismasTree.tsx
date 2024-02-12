function ChrismasTree() {
  return (
    <div className="bg-green-100 w-full h-[100vh] overflow-hidden">
      <svg
        className="bg-[#000] border"
        width="100%"
        height="100vh"
        viewBox="0 0 100 100"
        // preserveAspectRatio="none"
      >
        <polygon values="" points="50 8, 60 20, 40 20 " fill="#a3e635" />
        <polygon
          values=""
          points="45 20, 55 20, 65 30 , 35 30 "
          fill="#65a30d"
        />
        <polygon
          values=""
          points="40 30, 60 30, 70 40 , 30 40 "
          fill="#3f6212"
        />
        {/* rect at center and below previous polygon */}
        <rect x="45" y="40" width="10" height="10" fill="#7f1d1d" />
      </svg>
    </div>
  );
}

export default ChrismasTree;

// hex for shades of green
