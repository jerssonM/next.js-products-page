import Link from 'next/link'
import Image from 'next/image'

import { CONSTANTS } from '@/constants'
import { Product } from '@/services/fake-store/types'

import { Card, CardContent, CardFooter, CardTitle } from './ui'

type RecommendedProductsListProps = {
  products: Product[]
  category: string
}

export const RecommendedProductsList = ({
  products,
  category,
}: RecommendedProductsListProps) => {
  return (
    <div className="p-4">
      <h4 className="font-bold text-xl mb-4">More {category} products</h4>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <Card key={product.id} className="border border-stone-200 rounded-md">
            <CardTitle
              className="p-4 text-lg mb-4 truncate ..."
              title={product.title}
            >
              {product.title}
            </CardTitle>
            <CardContent className="mb-4 p-4">
              <div
                style={{ width: 150, height: 150 }}
                className="relative mx-auto"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="100%"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Link
                href={`${CONSTANTS.ROUTES.STORE}/${product.id}`}
                className="text-sky-500 underline"
              >
                View more
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
