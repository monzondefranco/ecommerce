import { IconProps } from '.'

export default function BuildingIcon({
  className,
  width = 20,
  height = 20,
  color = 'currentcolor',
}: IconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill="none"
      aria-hidden="true"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.12467 0.833008H16.8747M3.12467 0.833008V19.1663M3.12467 0.833008H1.97884M16.8747 0.833008V19.1663M16.8747 0.833008H18.0205M16.8747 19.1663H3.12467M16.8747 19.1663H19.1663M3.12467 19.1663H0.833008M6.56217 4.27051H7.70801V5.41634H6.56217V4.27051ZM12.2913 4.27051H13.4372V5.41634H12.2913V4.27051ZM6.56217 8.85384H7.70801V9.99967H6.56217V8.85384ZM12.2913 8.85384H13.4372V9.99967H12.2913V8.85384ZM8.85384 13.4372H11.1455C11.4494 13.4372 11.7408 13.5579 11.9557 13.7728C12.1706 13.9877 12.2913 14.2791 12.2913 14.583V19.1663H7.70801V14.583C7.70801 14.2791 7.82873 13.9877 8.04362 13.7728C8.2585 13.5579 8.54995 13.4372 8.85384 13.4372Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
