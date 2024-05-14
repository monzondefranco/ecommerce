import { IconProps } from '.'

export type Props = {
  strokeWidth?: number | string
} & IconProps

export default function ArrowDownIcon({
  className,
  width = 14,
  height = 14,
  color = 'currentcolor',
  strokeWidth = '1.25641',
}: Props) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill="none"
      aria-hidden="true"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.7441 4.60645L6.88089 10.4697L1.01764 4.60644"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  )
}
