import { IconProps } from '.'

export default function PrinterIcon({
  className,
  width = 18,
  height = 17,
  color = 'currentcolor',
}: IconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill="none"
      aria-hidden="true"
      viewBox="0 0 18 17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.6471 10.2898H15.1176C16.0052 10.2898 16.4485 10.2898 16.7242 10.0291C17 9.76835 17 9.34921 17 8.51003V7.62014C17 5.94179 17 5.10351 16.4485 4.58203C15.8969 4.06055 15.0104 4.06055 13.2353 4.06055H4.76471C2.98965 4.06055 2.10306 4.06055 1.55153 4.58203C1 5.10351 1 5.94179 1 7.62014V9.39993C1 9.81907 1 10.0291 1.13741 10.1599C1.27576 10.2898 1.49788 10.2898 1.94118 10.2898H3.35294"
        stroke={color}
        strokeWidth="0.8"
      />
      <path
        d="M3.82422 15.8998V8.50831C3.82422 7.66914 3.82422 7.25 4.09998 6.98926C4.37575 6.72852 4.81904 6.72852 5.70657 6.72852H12.2948C13.1823 6.72852 13.6256 6.72852 13.9014 6.98926C14.1772 7.25 14.1772 7.66914 14.1772 8.50831V15.8998C14.1772 16.1819 14.1772 16.3225 14.0793 16.3892C13.9814 16.456 13.8402 16.4115 13.5579 16.3225L11.5174 15.6791C11.4657 15.6581 11.4107 15.6455 11.3546 15.6417C11.2986 15.6485 11.2442 15.6642 11.1936 15.688L9.17575 16.4515C9.12108 16.4779 9.06173 16.4945 9.00069 16.5005C8.93965 16.4945 8.8803 16.4779 8.82563 16.4515L6.80775 15.688C6.75749 15.6643 6.70342 15.6487 6.64775 15.6417C6.59131 15.6453 6.53594 15.658 6.48398 15.6791L4.44351 16.3225C4.16116 16.4115 4.01998 16.456 3.9221 16.3892C3.82422 16.3225 3.82422 16.1819 3.82422 15.8998Z"
        stroke={color}
        strokeWidth="0.8"
      />
      <path
        d="M6.64844 10.2891H10.4131M6.64844 12.9588H11.3543"
        stroke={color}
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M14.1752 4.05959V3.70363C14.1752 2.19347 14.1752 1.43795 13.6792 0.968976C13.1832 0.5 12.3841 0.5 10.787 0.5H7.2105C5.61332 0.5 4.81427 0.5 4.31827 0.968976C3.82227 1.43795 3.82227 2.19347 3.82227 3.70363V4.05959"
        stroke={color}
        strokeWidth="0.8"
      />
    </svg>
  )
}
