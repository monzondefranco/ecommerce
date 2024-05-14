import { IconProps } from '.'

export default function FilterIcon({
  className,
  width = 16,
  height = 16,
  color = 'currentcolor',
}: IconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill="none"
      stroke={color}
      aria-hidden="true"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.99917 2.39844L14.3992 2.39844M1.59917 13.5984L3.99917 13.5984M1.59917 2.39844L4.79917 2.39844M7.19917 13.5984L14.3992 13.5984M11.9992 7.99844L14.3992 7.99844M1.59917 7.99844L8.79917 7.99844"
        strokeWidth="0.7"
        strokeLinecap="round"
      />
      <path
        d="M4.79878 2.39883C4.79878 3.28248 5.51512 3.99883 6.39878 3.99883C7.28243 3.99883 7.99878 3.28248 7.99878 2.39883C7.99878 1.51517 7.28243 0.798828 6.39878 0.798828C5.51512 0.798828 4.79878 1.51517 4.79878 2.39883Z"
        strokeWidth="0.7"
        strokeLinecap="round"
      />
      <path
        d="M8.79878 7.99844C8.79878 8.88209 9.51512 9.59844 10.3988 9.59844C11.2824 9.59844 11.9988 8.88209 11.9988 7.99844C11.9988 7.11478 11.2824 6.39844 10.3988 6.39844C9.51512 6.39844 8.79878 7.11478 8.79878 7.99844Z"
        strokeWidth="0.7"
        strokeLinecap="round"
      />
      <path
        d="M3.99897 13.598C3.99897 14.4817 4.71532 15.198 5.59897 15.198C6.48263 15.198 7.19897 14.4817 7.19897 13.598C7.19897 12.7144 6.48263 11.998 5.59897 11.998C4.71532 11.998 3.99897 12.7144 3.99897 13.598Z"
        strokeWidth="0.7"
        strokeLinecap="round"
      />
    </svg>
  )
}
