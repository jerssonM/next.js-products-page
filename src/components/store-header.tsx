'use client'

import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Logout, Send } from 'iconsax-react'
import { ChangeEvent, useState } from 'react'

import { CONSTANTS } from '@/constants'

import { ShoppingCart } from './shopping-cart'
import { CategoriesSelect } from './categories-select'
import { Logo, Input, Button, Separator } from './ui'

export const StoreHeader = () => {
  const router = useRouter()
  const [searchText, setSearchText] = useState('')

  const handleSearchInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearchText(target.value)
  }

  const handleClickSearch = () => {
    router.push(`${CONSTANTS.ROUTES.STORE}?search=${searchText}`)
  }

  const handleChangeCategory = (category: string) => {
    router.push(`${CONSTANTS.ROUTES.STORE}?category=${category}`)
  }

  const handleLogout = () => {
    signOut()
  }

  return (
    <>
      <nav className="bg-white p-4 flex items-center">
        <Link href={CONSTANTS.ROUTES.STORE}>
          <Logo className="text-lg flex-2 mr-4" />
        </Link>
        <Input
          className="flex-1 mr-4"
          placeholder="Search something..."
          onChange={handleSearchInput}
        />
        <Button onClick={handleClickSearch}>
          <Send />
        </Button>
      </nav>
      <div className="flex mb-4 px-4 justify-between">
        <div className="w-full md:w-1/3 mr-4">
          <CategoriesSelect onChange={handleChangeCategory} />
        </div>
        <div className="flex">
          <ShoppingCart className="mr-4" />
          <Button onClick={handleLogout} variant="destructive">
            <Logout />
          </Button>
        </div>
      </div>
      <Separator />
    </>
  )
}
