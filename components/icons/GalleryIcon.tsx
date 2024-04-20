import { IconProps } from '.'

export default function GalleryIcon({
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
      <path d="M0 6.125V0H6.125V6.125H0ZM0 14V7.875H6.125V14H0ZM7.875 6.125V0H14V6.125H7.875ZM7.875 14V7.875H14V14H7.875ZM0.875 5.25H5.25V0.875H0.875V5.25ZM8.75 5.25H13.125V0.875H8.75V5.25ZM8.75 13.125H13.125V8.75H8.75V13.125ZM0.875 13.125H5.25V8.75H0.875V13.125Z" />
    </svg>
  )
}
