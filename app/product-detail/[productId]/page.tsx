import api from '@/dataLayer/api'
import { getProductById } from '@/dataLayer/getProductById'
import React from 'react'
import Image from 'next/image'
import { formatCurrency } from '@/helpers/number'

type Props = {
    params: { productId: string }
}

async function getData(productId: string) {
    const numberValue = parseInt(productId, 10)
    const product = await getProductById(numberValue)
  
    return {
        product
    }
  }

export default async function ProductDetail({params}: Props) {
  const product = await getData(params.productId)
  const banner = product?.product?.banner?.data?.attributes.url
  const price = product?.product?.pricing
  return (
    <div className="flex flex-col justify-center items-center">
        {banner &&
            <Image src={banner} alt="" width="600" height="600" />
        }
        <div>{product.product?.title}</div>
        <div>{product.product?.description}</div>
        {price && <div>{formatCurrency(price)}</div>}
        {product.product?.instantDelivery && <div>En stock</div>}
        <button>Add to cart</button>
    </div>
  )
}