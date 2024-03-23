import GridFor100UnitViewBox from "./GridFor100UnitViewBox";

function SvgArcs() {
  return (
    <div
      style={{
        width: "600px",
        height: "600px",
        margin: "100px auto",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        style={{
          border: "green solid 1px",
        }}
      >
        <GridFor100UnitViewBox />

        {/* small circle in center */}
        <circle cx="50" cy="50" r="1" fill="red" />
        <circle cx="30" cy="50" r="1" fill="red" />
        <circle cx="70" cy="50" r="1" fill="red" />
        {/* arc */}
        <path
          d="M 30 50, A 1 2, 0, 0 0, 70 50"
          fill="royalblue"
          stroke="blue"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

export default SvgArcs;
