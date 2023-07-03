import { Separator } from '@/components/ui'
import {
  fetchProduct,
  fetchRecommendedProducts,
} from '@/services/fake-store/products.service'
import { PageProductParams, PageProps } from '@/types'
import { ProductDetail } from '@/components/product-detail'
import { RecommendedProductsList } from '@/components/recommended-products-list'

const ProductPage = async ({ params }: PageProps<PageProductParams>) => {
  const product = await fetchProduct(params.id)
  const recommendedProducts = await fetchRecommendedProducts(
    Number(params.id),
    product.category
  )

  return (
    <section>
      <ProductDetail product={product} />
      <Separator className="mb-4" />
      <RecommendedProductsList
        products={recommendedProducts}
        category={product.category}
      />
    </section>
  )
}

export default ProductPage
