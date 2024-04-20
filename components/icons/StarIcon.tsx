import { IconProps } from '.'

export default function StarIcon({
  className,
  width = 15,
  height = 15,
  color = 'currentcolor',
}: IconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill="none"
      aria-hidden="true"
      viewBox="0 0 15 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 0.809018L6.05391 5.25963L5.99778 5.43237H5.81614H1.1365L4.92241 8.183L5.06936 8.28976L5.01323 8.46251L3.56714 12.9131L7.35305 10.1625L7.5 10.0557L7.64695 10.1625L11.4329 12.9131L9.98677 8.46251L9.93064 8.28976L10.0776 8.183L13.8635 5.43237H9.18386H9.00222L8.94609 5.25963L7.5 0.809018Z"
        stroke={color}
        strokeWidth="0.5"
      />
    </svg>
  )
}
