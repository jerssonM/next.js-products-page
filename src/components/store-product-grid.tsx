import Link from 'next/link'
import Image from 'next/image'

import { CONSTANTS } from '@/constants'
import { currencyFormatter } from '@/lib/utils'
import { Product } from '@/services/fake-store/types'

import {
  Card,
  CardTitle,
  CardFooter,
  CardHeader,
  CardContent,
  CardDescription,
} from './ui'

type StoreProductGridProps = {
  products: Product[]
}

export const StoreProductGrid = ({ products }: StoreProductGridProps) => {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-3 p-4">
      {products.map((product) => (
        <Card
          key={product.id}
          style={{ height: 500 }}
          className="flex flex-col h-full justify-between"
        >
          <CardHeader>
            <CardTitle className="mb-4 truncate ..." title={product.title}>
              {product.title}
            </CardTitle>
            <CardDescription
              className="h-20 text-ellipsis overflow-hidden ..."
              title={product.description}
            >
              {product.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="mb-4">
            <Image
              width={100}
              height={100}
              src={product.image}
              alt={product.title}
              className="mx-auto hover:scale-110"
            />
          </CardContent>
          <CardFooter className="justify-between items-end">
            <div>
              <p className="font-bold text-xl">
                {currencyFormatter(product.price)}
              </p>
              <p>{product.category}</p>
            </div>
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
  )
}
