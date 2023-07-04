'use client'

import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { ChangeEvent, useState } from 'react'
import { Logout, SearchNormal } from 'iconsax-react'

import { CONSTANTS } from '@/constants'
import { useQueryParams } from '@/hooks/useQueryParams'

import { ShoppingCart } from './shopping-cart'
import { CategoriesSelect } from './categories-select'
import { Logo, Input, Button, Separator, Tooltip } from './ui'

export const StoreHeader = () => {
  const [searchText, setSearchText] = useState('')
  const { updateQueryParams } = useQueryParams()

  const handleSearchInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearchText(target.value)
  }

  const handleClickSearch = () => {
    updateQueryParams(CONSTANTS.ROUTES.STORE, { search: searchText })
  }

  const handleChangeCategory = (category: string) => {
    updateQueryParams(CONSTANTS.ROUTES.STORE, { category })
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
          data-testid="store-header__input-search"
        />
        <Tooltip content={<p>Search</p>}>
          <Button
            onClick={handleClickSearch}
            data-testid="store-header__button-search"
          >
            <SearchNormal />
          </Button>
        </Tooltip>
      </nav>
      <div className="flex mb-4 px-4 justify-between">
        <div className="w-full md:w-1/3 mr-4">
          <CategoriesSelect onChange={handleChangeCategory} />
        </div>
        <div className="flex">
          <ShoppingCart className="mr-4" />
          <Tooltip content={<p>Logout</p>}>
            <Button
              onClick={handleLogout}
              variant="destructive"
              data-testid="store-header__button-logout"
            >
              <Logout />
            </Button>
          </Tooltip>
        </div>
      </div>
      <Separator />
    </>
  )
}
