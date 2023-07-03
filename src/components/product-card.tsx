import Link from 'next/link'
import Image from 'next/image'
import { AddSquare, TickSquare } from 'iconsax-react'

import { CONSTANTS } from '@/constants'
import { cn, currencyFormatter } from '@/lib/utils'
import { Product } from '@/services/fake-store/types'

import {
  Card,
  Button,
  CardTitle,
  CardFooter,
  CardHeader,
  CardContent,
  CardDescription,
} from './ui'

type ProductCardProps = {
  product: Product
  isAdded?: boolean
  onAddProduct?: (product: Product) => void
}

export const ProductCard = ({
  product,
  isAdded = false,
  onAddProduct = () => null,
}: ProductCardProps) => (
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
        className="h-20 line-clamp-4"
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
        <p className="font-bold text-xl">{currencyFormatter(product.price)}</p>
        <p>{product.category}</p>
      </div>
      <div className="flex flex-col items-end">
        <Button
          variant="ghost"
          className={cn('p-1', isAdded && 'text-green-500')}
          onClick={() => onAddProduct(product)}
        >
          <span className="mr-2">{isAdded ? 'Added' : 'Add to cart'}</span>{' '}
          {isAdded ? (
            <TickSquare variant="Bold" />
          ) : (
            <AddSquare variant="Bold" />
          )}
        </Button>
        <Link
          href={`${CONSTANTS.ROUTES.STORE}/${product.id}`}
          className="text-sky-500 underline px-1"
        >
          View more
        </Link>
      </div>
    </CardFooter>
  </Card>
)
