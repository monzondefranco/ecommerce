import { IconProps } from '.'

export default function ExternalLinkIcon({
  className,
  width = 16,
  height = 16,
  color = 'currentColor',
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.3 0H2.8C1.2537 0 0 1.2537 0 2.8V11.2C0 12.7463 1.2537 14 2.8 14H11.2C12.7463 14 14 12.7463 14 11.2C14 9.6103 14 7.7 14 7.7C14 7.7 12.5 7.7 12.6 7.7V11.2C12.6 11.9728 11.9728 12.6 11.2 12.6C8.869 12.6 5.1303 12.6 2.8 12.6C2.0265 12.6 1.4 11.9728 1.4 11.2C1.4 8.869 1.4 5.1303 1.4 2.8C1.4 2.0265 2.0265 1.4 2.8 1.4H6.3V0ZM11.6102 1.4H9.1V0H13.3C13.6864 0 14 0.3136 14 0.7V4.9H12.6V2.3898L7.4949 7.4949C7.5 7.4949 6.5 6.5051 6.5051 6.5051C6.5102 6.5051 11.6102 1.4 11.6102 1.4Z"
      />
    </svg>
  )
}
