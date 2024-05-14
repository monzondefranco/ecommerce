import { IconProps } from '.'

export default function IncorrectIcon({
  className,
  width = 24,
  height = 24,
  color = 'currentcolor',
}: IconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill={color}
      aria-hidden="true"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0.625C5.6625 0.625 0.625 5.6625 0.625 12C0.625 18.3375 5.6625 23.375 12 23.375C18.3375 23.375 23.375 18.3375 23.375 12C23.375 5.6625 18.3375 0.625 12 0.625ZM16.3875 17.6875L12 13.3L7.6125 17.6875L6.3125 16.3875L10.7 12L6.3125 7.6125L7.6125 6.3125L12 10.7L16.3875 6.3125L17.6875 7.6125L13.3 12L17.6875 16.3875L16.3875 17.6875Z"
        fill={color}
      />
    </svg>
  )
}
