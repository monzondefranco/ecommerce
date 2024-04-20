import { IconProps } from '.'

export default function FilledStarIcon({
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
        d="M7.5 1.61803L6.29167 5.33688L6.17942 5.68237H5.81614H1.90592L5.06936 7.98075L5.36325 8.19427L5.25099 8.53976L4.04267 12.2586L7.20611 9.96024L7.5 9.74671L7.79389 9.96024L10.9573 12.2586L9.74901 8.53976L9.63675 8.19427L9.93064 7.98075L13.0941 5.68237H9.18386H8.82058L8.70833 5.33688L7.5 1.61803Z"
        fill={color}
        stroke={color}
      />
    </svg>
  )
}
