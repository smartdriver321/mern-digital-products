import ProductSingleCard from './ProductSingleCard'

export default function ProductCard({ product }) {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 max-w-[1200px] gap-6 mx-auto place-items-center'>
      {Array.isArray(product) &&
        product.map((item) => (
          <ProductSingleCard key={item._id} product={item} />
        ))}
    </div>
  )
}
