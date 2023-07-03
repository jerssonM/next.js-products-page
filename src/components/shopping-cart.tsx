import { ShoppingCart as ShoppingCartIcon } from 'iconsax-react'

import { Button, Popover, PopoverContent, PopoverTrigger } from './ui'

type ShoppingCartProps = {
  className?: string
}

export const ShoppingCart = ({ className }: ShoppingCartProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild className={className}>
        <Button variant="outline">
          <ShoppingCartIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis culpa
        possimus delectus suscipit eum ea, excepturi quam deleniti nihil beatae
        voluptates, reprehenderit obcaecati provident quaerat! Explicabo
        deserunt labore nostrum velit.
      </PopoverContent>
    </Popover>
  )
}
