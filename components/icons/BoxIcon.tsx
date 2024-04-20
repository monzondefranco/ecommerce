import { IconProps } from '.'

export default function BoxIcon({
  className,
  width = 19,
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
      viewBox="0 0 19 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.5359 13.0179V4.98214C17.5359 4.81641 17.4505 4.65067 17.3149 4.55525H17.2798L9.77644 0.803571C9.62577 0.728237 9.44497 0.728237 9.2943 0.803571C9.2943 0.803571 3.57387 3.60603 1.75579 4.50502C1.6453 4.59542 1.47454 4.78627 1.45948 4.98214V13.0179C1.4193 13.2238 1.54988 13.3895 1.71561 13.495L9.21394 17.2467C9.35457 17.317 9.5203 17.317 9.66595 17.2467L17.1643 13.495C17.33 13.3945 17.5409 13.2388 17.5359 13.0179ZM2.53425 5.851L8.96282 9.06529V15.9007L2.53425 12.6864V5.851ZM13.2519 7.45815V9.80357C13.2519 10.0999 13.493 10.341 13.7893 10.341C14.0856 10.341 14.3216 10.0999 14.3216 9.80357V7.12667C14.3216 7.06641 14.3116 7.00112 14.2865 6.94587L16.4662 5.87612V12.6914L10.0376 15.9057V9.06529L13.2519 7.45815ZM9.50021 1.83315L15.8032 4.98214L13.277 6.24777L7.17488 2.99833L9.50021 1.83315ZM5.99965 3.58092L12.0968 6.86049L9.50021 8.13114L3.1972 4.98214L5.99965 3.58092Z" />
    </svg>
  )
}
