import { twMerge } from 'tailwind-merge'

import ArrowDownIcon, { Props } from './ArrowDownIcon'

export default function ArrowLeftIcon({ className, ...props }: Props) {
  return (
    <ArrowDownIcon {...props} className={twMerge(className, 'rotate-90')} />
  )
}
