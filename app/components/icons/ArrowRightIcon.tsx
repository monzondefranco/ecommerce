import { twMerge } from 'tailwind-merge'

import ArrowDownIcon, { Props } from './ArrowDownIcon'

export default function ArrowRightIcon({ className, ...props }: Props) {
  return (
    <ArrowDownIcon {...props} className={twMerge('-rotate-90', className)} />
  )
}
