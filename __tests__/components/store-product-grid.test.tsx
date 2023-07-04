/* eslint-disable jest/no-mocks-import */
import { render, screen, fireEvent } from '@testing-library/react'

import { StoreProductGrid } from '@/components/store-product-grid'

import products from '../../__mocks__/products.mock'

describe('<StoreProductGrid />', () => {
  it('should render products correctly', () => {
    render(<StoreProductGrid products={products} />)

    products.forEach((product) => {
      expect(screen.getByText(product.title)).toBeInTheDocument()
    })
  })

  it('should add product to cart', () => {
    render(<StoreProductGrid products={products} />)

    const buttonAddToCart = screen.getByTestId('product-card__button-add-1')
    fireEvent.click(buttonAddToCart)

    expect(screen.getByText('Added')).toBeInTheDocument()
  })
})
