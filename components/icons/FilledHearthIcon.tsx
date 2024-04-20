import { IconProps } from '.'

export default function FilledHearthIcon({
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
        d="M19.8059 5.17542C19.2781 3.17105 17.7249 1.59138 15.7551 1.05463C13.8254 0.531134 11.7754 1.06278 10.0099 2.5182C8.72208 1.44777 7.29504 0.868252 5.83796 0.833623C4.2547 0.811217 2.7776 1.40092 1.66401 2.53246C-0.429979 4.66211 -0.88663 8.5079 2.2899 11.7385L9.2999 18.8679C9.49518 19.0665 9.75154 19.1663 10.0079 19.1663C10.2643 19.1663 10.5206 19.0665 10.7159 18.8679L17.7259 11.7385C19.6346 9.7973 20.3927 7.40488 19.8059 5.17542Z"
        fill={color}
      />
    </svg>
  )
}
