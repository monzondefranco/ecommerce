import { IconProps } from '.'

export default function BarsIcon({
  className,
  width = 14,
  height = 14,
  color = 'currentcolor',
}: IconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill={color}
      aria-hidden="true"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="2" width="14" height="1" rx="0.1" />
      <rect y="6.5" width="14" height="1" rx="0.1" />
      <rect y="11" width="14" height="1" rx="0.1" />
    </svg>
  )
}
