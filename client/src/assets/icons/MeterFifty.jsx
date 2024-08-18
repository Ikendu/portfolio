export default function MeterFifty() {
  return (
    <svg viewBox="0 0 36 36" className="circular-chart color">
      <path
        className="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path
        className="circle"
        strokeDasharray="50, 100"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <defs>
        <linearGradient
          id="paint0_linear_16_344"
          x1="-12.4348"
          y1="91.2145"
          x2="228.124"
          y2="92.098"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AA367C" />
          <stop offset="1" stopColor="#4A2FBD" />
        </linearGradient>
      </defs>
      <text x="18" y="20.35" className="percentage">
        50%
      </text>
    </svg>
  );
}
