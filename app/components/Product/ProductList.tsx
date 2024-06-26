import React from 'react'
import Image from 'next/image'
import { formatCurrency } from '@/helpers/number'

interface Props {
    title?: string
    description?: string
    pricing?: number
    banner?: string
}

export default async function ProductList({title, description, pricing, banner} : Props) {
  return (
    <div className="border">
        {banner &&
            <Image src={banner} alt="" width="400" height="400" />
        }
        <div>{title}</div>
        <div>{description}</div>
        {pricing && <div>{formatCurrency(pricing)}</div>}
    </div>
  )
}