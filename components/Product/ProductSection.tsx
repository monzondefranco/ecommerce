import React from 'react'
import { getProducts } from '@/dataLayer/getProducts'
import ProductList from './ProductList'

export default async function ProductSection() {
    const data = await getProducts()

  return (
    <div className="flex justify-center space-x-10">
        {data?.map((product) => (
                <ProductList 
                    key={product.id} 
                    banner={product.attributes.banner?.data?.attributes.url}
                    title={product.attributes.title}  
                    description={product.attributes.description} 
                    pricing={product.attributes.pricing}
                />
            ))}
    </div>
  )
}

