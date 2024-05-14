import React from 'react'
import { getProducts } from '@/dataLayer/getProducts'
import ProductList from './ProductList'
import Link from 'next/link'

export default async function ProductSection() {
    const data = await getProducts()

  return (
    <div className="flex justify-center space-x-10">
        {data?.map((product) => (
            <Link href={`/product-detail/${product.id}`} key={product.id} >
                <ProductList 
                    banner={product.attributes.banner?.data?.attributes.url}
                    title={product.attributes.title}  
                    description={product.attributes.description} 
                    pricing={product.attributes.pricing}
                />
                </Link>
            ))}
    </div>
  )
}

