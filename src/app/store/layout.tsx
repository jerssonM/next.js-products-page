import '@smastrom/react-rating/style.css'

import { StoreHeader } from '@/components/store-header'

type StoreLayoutProps = {
  children: React.ReactNode
}

const StoreLayout = ({ children }: StoreLayoutProps) => (
  <>
    <StoreHeader />
    {children}
  </>
)

export default StoreLayout
