export default function MeterFifty() {
  return (
    <svg viewBox="0 0 50 50" className="circular-chart color">
      <path
        className="circle-bg"
        d="M18 4.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path
        className="circle"
        strokeDasharray="90, 100"
        d="M18 5.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />

      <text x="18" y="23.35" className="percentage">
        95%
      </text>
    </svg>
  );
}
