import { IconProps } from '.'

export default function HearthIcon({
  className,
  width = 24,
  height = 24,
  color = 'currentColor',
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
      <path
        d="M19.8058 5.17542C19.2778 3.17105 17.7248 1.59138 15.7549 1.05463C13.8249 0.531134 11.7749 1.06278 10.01 2.5182C8.72199 1.44777 7.29501 0.868252 5.83803 0.833623C4.25506 0.811217 2.77809 1.40092 1.66411 2.53246C-0.429859 4.66211 -0.886851 8.5079 2.2901 11.7385L9.29998 18.8679C9.49597 19.0665 9.75197 19.1663 10.008 19.1663C10.264 19.1663 10.52 19.0665 10.716 18.8679L17.7258 11.7385C19.6348 9.7973 20.3928 7.40488 19.8058 5.17542ZM16.3099 10.2984L10.008 16.7077L3.70607 10.2984C1.35511 7.90598 1.7331 5.34347 3.08008 3.97259C3.73107 3.31058 4.65506 2.87874 5.70304 2.87874C6.82302 2.87874 8.084 3.3727 9.29898 4.60914C9.68997 5.00737 10.324 5.00737 10.715 4.60914C13.0469 2.23811 15.5579 2.63532 16.9028 4.00417C17.6268 4.74155 18.0138 5.71929 17.9948 6.75713C17.9728 7.97625 17.3898 9.20047 16.3099 10.2984Z"
        fill={color}
      />
    </svg>
  )
}