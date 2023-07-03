import { render, screen } from '@testing-library/react'

import { StoreHeader } from '@/components/store-header'

describe('<StoreHeader />', () => {
  it('should contains title', () => {
    render(<StoreHeader />)

    const title = screen.getByText(/Genius/i)
    expect(title).toBeInTheDocument()
  })
})
