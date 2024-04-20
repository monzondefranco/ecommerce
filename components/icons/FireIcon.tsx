import { IconProps } from '.'

export default function FireIcon({
  className,
  width = 14,
  height = 18,
  color = 'currentcolor',
}: IconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill={color}
      aria-hidden="true"
      viewBox="0 0 14 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.69875 1.22029C8.69875 3.87904 10.1005 5.21554 11.308 6.48604C12.463 7.70104 13.5625 8.85829 13.5625 11.0625C13.5625 14.6715 10.7478 17.25 7.13875 17.25C3.529 17.25 0.4375 14.6843 0.4375 11.0625C0.4375 9.53329 1.159 8.05429 2.31925 7.38829C2.548 7.25704 2.82325 7.39354 2.9215 7.63879C3.67225 9.51304 4.59775 9.48004 5.07775 9.00004C5.36875 8.70979 5.43025 8.16304 5.07475 7.45354C3.271 3.84454 6.472 1.24429 8.22475 0.813043C8.47675 0.751543 8.686 0.961543 8.69875 1.22029ZM7.13875 16.125C10.183 16.125 12.4375 13.995 12.4375 11.0625C12.4375 9.30979 11.6178 8.44579 10.429 7.19404L10.4132 7.17679C9.33325 6.03904 8.059 4.66354 7.6765 2.25904C7.11018 2.59192 6.62152 3.04197 6.24325 3.57904C5.653 4.43704 5.383 5.55379 6.08125 6.95029C6.5335 7.85404 6.664 9.00529 5.8735 9.79579C5.38075 10.2885 4.552 10.6208 3.6565 10.2353C3.0925 9.99229 2.64175 9.51904 2.278 8.89279C1.85275 9.42229 1.5625 10.1978 1.5625 11.0625C1.5625 13.9478 4.0285 16.125 7.13875 16.125Z" />
    </svg>
  )
}