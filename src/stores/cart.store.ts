import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import { Product } from '@/services/fake-store/types'

interface CartState {
  products: Product[]
  clearCart: () => void
  removeProduct: (id: number) => void
  addProduct: (product: Product) => void
}

export const useCartStore = create(
  persist<CartState>(
    (set) => ({
      products: [],
      clearCart: () => set({ products: [] }),
      addProduct: (product) =>
        set((state) => ({ products: [...state.products, product] })),
      removeProduct: (id) =>
        set((state) => ({
          products: state.products.filter((product) => product.id !== id),
        })),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)
