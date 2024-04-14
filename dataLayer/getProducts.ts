import api, { MediaEntry } from "./api"

export async function getProducts() {
    const { data: products } = await api.products.get(
        {
          query: {
            populate: {
                banner: 'banner'
            },
            fields: [
              'title',
              'description',
              'pricing',
            ],
          },
        },
      )

    return products || {}
  }

export type Product = {
    title?: string
    description?: string
    banner?: MediaEntry
    pricing?: number
}

type GetProductResponse = {
    id: number
    attributes: Product
  }[]

export interface GetProductTypes {
  GetRealtorResponse: GetProductResponse
  Product: Product
}