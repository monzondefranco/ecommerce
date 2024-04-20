import { IconProps } from '.'

export default function DotIcon({
  className,
  width = 12,
  height = 12,
  color = 'currentcolor',
}: IconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill="none"
      aria-hidden="true"
      viewBox="0 0 15 15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="7" cy="7" r="7" fill={color} />
    </svg>
  )
}
