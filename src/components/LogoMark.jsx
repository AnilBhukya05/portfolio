export default function LogoMark({ size = 36, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="200" cy="200" r="190" fill="currentColor" />
      <text
        x="200"
        y="250"
        fontFamily="Poppins, Arial, sans-serif"
        fontWeight="700"
        fontSize="150"
        fill="#FAF6EF"
        textAnchor="middle"
      >
        AB
      </text>
      <circle cx="318" cy="90" r="15" fill="#C1502E" />
    </svg>
  );
}