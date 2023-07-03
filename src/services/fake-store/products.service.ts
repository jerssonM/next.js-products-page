import { axiosFakeStoreInstance } from '../axios'

import { Product, ProductFetchParams } from './types'

export const fetchProducts = async ({
  search,
  category,
}: ProductFetchParams = {}) => {
  const { data } = await axiosFakeStoreInstance.get<Product[]>('products')

  return data.filter((product) => {
    let includeProduct = true
    if (search) {
      includeProduct = product.title
        .toLowerCase()
        .includes(search.toLowerCase())
    }
    if (category && includeProduct) {
      includeProduct = product.category === category
    }
    return includeProduct
  })
}

export const fetchProduct = async (id: number) => {
  const { data } = await axiosFakeStoreInstance.get<Product>(`products/${id}`)

  return data
}

export const fetchRecommendedProducts = async (
  currentProductId: number,
  category: string
) => {
  const { data } = await axiosFakeStoreInstance.get<Product[]>(
    `products/category/${category}`
  )

  return data.filter((product) => product.id !== currentProductId)
}
