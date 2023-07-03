import Image from 'next/image'

import { currencyFormatter } from '@/lib/utils'
import { Product } from '@/services/fake-store/types'

type ProductDetailProps = {
  product: Product
}

export const ProductDetail = ({ product }: ProductDetailProps) => {
  return (
    <div className="p-4">
      <h2 className="font-bold text-2xl mb-4">{product.title}</h2>
      <picture className="flex relative flex-col items-center md:flex-row">
        <Image
          width={200}
          height={200}
          src={product.image}
          alt={product.title}
          className="mb-4 md:mb-0 md:mr-8"
        />
        <div className="md:p-4 md:w-1/3">
          <p className="mb-4">{product.description}</p>
          <p className="font-bold text-lg">
            {currencyFormatter(product.price)}
          </p>
          <p>{product.category}</p>
        </div>
      </picture>
    </div>
  )
}
