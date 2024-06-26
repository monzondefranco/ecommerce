import { IconProps } from '.'

export type Props = {
  strokeWidth?: number | string
} & IconProps

export default function ShoppingCartIcon({
  className,
  width = 24,
  height = 24,
  color = 'currentcolor',
}: Props) {
  return (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={width}
        height={height}
        viewBox="0 0 24 24" 
        fill="none" 
        stroke={color}
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        className={className}
    >
        <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
  )
}