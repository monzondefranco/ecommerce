import { IconProps } from '.'

export default function XIcon({
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
      fill={color}
      aria-hidden="true"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.186 8.725L18.743 1H15.816L10.811 6.9L6.371 1H0L7.434 10.876L0.448 19.106H3.375L8.809 12.706L13.629 19.106H20L12.186 8.725ZM9.919 11.396L8.544 9.568L3.2 2.473H5.4L9.712 8.192L11.087 10.02L16.818 17.633H14.618L9.919 11.396Z" />
    </svg>
  )
}
