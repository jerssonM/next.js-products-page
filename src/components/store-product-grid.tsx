'use client'

import { useCartStore } from '@/stores/cart.store'
import { Product } from '@/services/fake-store/types'

import { ProductCard } from './product-card'
import { useStore } from '@/hooks/useStore'

type StoreProductGridProps = {
  products: Product[]
}

export const StoreProductGrid = ({ products }: StoreProductGridProps) => {
  const {
    addProduct,
    removeProduct,
    products: addedProducts,
  } = useStore(useCartStore, (state) => state, { products: [] })!

  const handleClickProduct = (product: Product) => {
    if (addedProducts.some((p) => p.id === product.id)) {
      removeProduct(product.id)
      return
    }
    addProduct(product)
  }

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-3 p-4">
      {products.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
          onAddProduct={handleClickProduct}
          isAdded={addedProducts.some((p) => p.id === product.id)}
        />
      ))}
    </div>
  )
}
