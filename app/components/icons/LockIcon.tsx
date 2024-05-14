import { IconProps } from '.'

export default function LockIcon({
  className,
  width = 24,
  height = 26,
  color = 'currentcolor',
}: IconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill="none"
      aria-hidden="true"
      viewBox="0 0 24 26"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.0001 11.8555H4.00007C2.7377 11.8555 1.71436 12.8788 1.71436 14.1412V22.1412C1.71436 23.4035 2.7377 24.4269 4.00007 24.4269H20.0001C21.2624 24.4269 22.2858 23.4035 22.2858 22.1412V14.1412C22.2858 12.8788 21.2624 11.8555 20.0001 11.8555Z"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.28638 11.856V7.2846C6.28638 5.76908 6.88842 4.31562 7.96005 3.24399C9.03169 2.17235 10.4851 1.57031 12.0007 1.57031C13.5162 1.57031 14.9696 2.17235 16.0413 3.24399C17.1129 4.31562 17.7149 5.76908 17.7149 7.2846V11.856"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="11.9999" cy="18.142" r="1.71429" fill={color} />
    </svg>
  )
}
