import { IconProps } from '.'

export default function TermsIcon({
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
      fill="none"
      aria-hidden="true"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.00122 2.99805C4.00122 2.73283 4.10658 2.47848 4.29411 2.29094C4.48165 2.1034 4.736 1.99805 5.00122 1.99805H15.0012L20.0012 6.99805V20.998C20.0012 21.2633 19.8959 21.5176 19.7083 21.7052C19.5208 21.8927 19.2664 21.998 19.0012 21.998H5.00122C4.736 21.998 4.48165 21.8927 4.29411 21.7052C4.10658 21.5176 4.00122 21.2633 4.00122 20.998V2.99805Z"
        stroke={color}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M8.00073 9.99805H16.0007M8.00073 13.998H16.0007"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
