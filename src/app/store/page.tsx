import { PageProps, PageStoreSearchParams } from '@/types'
import { StoreProductGrid } from '@/components/store-product-grid'
import { fetchProducts } from '@/services/fake-store/products.service'

const StorePage = async ({
  searchParams,
}: PageProps<object, PageStoreSearchParams>) => {
  const { search, category } = searchParams
  const products = await fetchProducts({ search, category })

  return (
    <section>
      <StoreProductGrid products={products} />
    </section>
  )
}

export default StorePage
