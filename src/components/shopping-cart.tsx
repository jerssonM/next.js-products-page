import Image from 'next/image'
import { useMemo, Fragment } from 'react'
import { ShoppingCart as ShoppingCartIcon } from 'iconsax-react'

import { useCartStore } from '@/stores/cart.store'
import { cn, currencyFormatter } from '@/lib/utils'

import {
  Button,
  Popover,
  Tooltip,
  Separator,
  PopoverTrigger,
  PopoverContent,
} from './ui'

type ShoppingCartProps = {
  className?: string
}

export const ShoppingCart = ({ className, ...props }: ShoppingCartProps) => {
  const { products, clearCart } = useCartStore((state) => state)
  const cartIsEmpty = useMemo(() => products.length === 0, [products])

  const renderedItems = useMemo(
    () => (
      <ul style={{ maxHeight: 400 }} className="overflow-auto">
        {products.map((product) => (
          <Fragment key={product.id}>
            <li className="flex items-center p-4">
              <Image
                src={product.image}
                alt={product.title}
                width={40}
                height={40}
                className="mr-4"
              />
              <p>
                <span className="line-clamp-1">{product.title}</span>
                <span className="font-bold">
                  {currencyFormatter(product.price)}
                </span>
              </p>
            </li>
            <Separator className="mb-4" />
          </Fragment>
        ))}
      </ul>
    ),
    [products]
  )

  return (
    <Popover>
      <PopoverTrigger asChild className={className} {...props}>
        <Button variant="outline">
          <Tooltip content={<p>Cart</p>}>
            <ShoppingCartIcon />
          </Tooltip>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={cn('p-0 flex flex-col', {
          'w-80': !cartIsEmpty,
          'w-60': cartIsEmpty,
        })}
      >
        {renderedItems}
        {cartIsEmpty && (
          <p className="self-center my-8 font-semibold">Cart is empty</p>
        )}
        {!cartIsEmpty && (
          <Button variant="link" onClick={clearCart} className="">
            Remove all
          </Button>
        )}
      </PopoverContent>
    </Popover>
  )
}
