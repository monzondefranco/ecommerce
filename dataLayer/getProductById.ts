import { Product, getProducts } from "./getProducts";

export async function getProductById(id: number): Promise<Product | null> {
    try {
      const products = await getProducts()

      const productItem = products.find((p) => p.id === id)
  
      if (productItem) {
        const { attributes } = productItem
        return attributes
      } else {
        return null
      }
    } catch (error) {
      console.error('Error fetching product by ID:', error)
      throw new Error('Failed to fetch product by ID')
    }
  }