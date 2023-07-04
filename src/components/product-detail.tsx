'use client'

import Image from 'next/image'
import { Rating, Star } from '@smastrom/react-rating'
import { AddSquare, TickSquare } from 'iconsax-react'

import { cn, currencyFormatter } from '@/lib/utils'
import { useCartStore } from '@/stores/cart.store'
import { Product } from '@/services/fake-store/types'

import { Button } from './ui'

type ProductDetailProps = {
  product: Product
}

const RATING_STYLE = {
  itemShapes: Star,
  activeFillColor: '#f97316',
  inactiveFillColor: '#fdba74',
}

export const ProductDetail = ({ product }: ProductDetailProps) => {
  const { addProduct, removeProduct, products: addedProducts } = useCartStore()
  const isAdded = addedProducts.some((p) => p.id === product.id)

  const handleClickProduct = (product: Product) => {
    if (addedProducts.some((p) => p.id === product.id)) {
      removeProduct(product.id)
      return
    }
    addProduct(product)
  }

  return (
    <div className="p-4">
      <h2 className="font-bold text-2xl mb-4">{product.title}</h2>
      <picture className="flex relative flex-col md:flex-row">
        <Image
          width={200}
          height={200}
          src={product.image}
          alt={product.title}
          className="mb-4 md:mb-0 md:mr-8 self-center"
        />
        <div className="mr-4 mb-4 md:mb-0 md:p-4 md:w-1/3">
          <p className="mb-4">{product.description}</p>
          <p className="font-bold text-lg">
            {currencyFormatter(product.price)}
          </p>
          <p className="mb-4">{product.category}</p>
          <Button
            variant="outline"
            className={cn(isAdded && 'text-green-500', 'w-full')}
            onClick={() => handleClickProduct(product)}
          >
            <span className="mr-2">{isAdded ? 'Added' : 'Add to cart'}</span>
            {isAdded ? (
              <TickSquare variant="Bold" />
            ) : (
              <AddSquare variant="Bold" />
            )}
          </Button>
        </div>
        <div>
          <Rating
            style={{ maxWidth: 250 }}
            value={product.rating.rate}
            readOnly
            halfFillMode="svg"
            itemStyles={RATING_STYLE}
            className="mb-4"
          />
          <p>
            <span className="font-semibold">Votes:</span> {product.rating.count}
          </p>
        </div>
      </picture>
    </div>
  )
}
