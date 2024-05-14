import { IconProps } from '.'

export default function CloseIcon({
  className,
  width = 16,
  height = 16,
  color = 'currentcolor',
}: IconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill={color}
      aria-hidden="true"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="20.9544"
        height="1.49674"
        rx="0.1"
        transform="matrix(0.701555 -0.712616 0.701555 0.712616 0 14.9336)"
      />
      <rect
        width="20.9544"
        height="1.49674"
        rx="0.1"
        transform="matrix(0.701555 0.712616 -0.701555 0.712616 1.2998 0)"
      />
    </svg>
  )
}
