import * as auth from 'next-auth/react'
import { render, screen, fireEvent } from '@testing-library/react'

import { StoreHeader } from '@/components/store-header'

const spyPush = jest.fn()

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockImplementation(() => ({ push: spyPush })),
  useSearchParams: jest
    .fn()
    .mockReturnValue({ set: jest.fn(), get: jest.fn() }),
}))

describe('<StoreHeader />', () => {
  it('should contains title', () => {
    render(<StoreHeader />)

    const title = screen.getByText(/Genius/i)
    expect(title).toBeInTheDocument()
  })
  it('should call logout', () => {
    const spyLogout = jest.spyOn(auth, 'signOut').mockImplementation(jest.fn())
    render(<StoreHeader />)

    const buttonLogout = screen.getByTestId('store-header__button-logout')
    fireEvent.click(buttonLogout)

    expect(spyLogout).toHaveBeenCalled()
  })

  it('should to update search query params', () => {
    render(<StoreHeader />)

    const buttonSearch = screen.getByTestId('store-header__button-search')
    const inputSearch = screen.getByTestId('store-header__input-search')
    fireEvent.change(inputSearch, { target: { value: 'test' } })
    fireEvent.click(buttonSearch)

    expect(spyPush).toHaveBeenCalled()
  })
})
