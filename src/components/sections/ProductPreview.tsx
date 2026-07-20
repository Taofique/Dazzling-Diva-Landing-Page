import ProductCard from "../ui/ProductCard";
import { products } from "../../data/productPreviewData";
import type { Product } from "../../data/productPreviewData";

const ProductPreview = () => {
  const handleAddToCart = (product: Product) => {
    // Wire up to your cart context / API call here
    console.log("Add to cart:", product.id);
  };

  const handleSelectOptions = (product: Product) => {
    // Wire up to your product options modal / navigation here
    console.log("Select options:", product.id);
  };

  return (
    <section className="flex flex-col items-center px-4 py-8 sm:px-8 sm:py-12 lg:px-16 lg:py-12">
      <div className="grid w-full max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((product) => (
          <div key={product.id} className="w-full">
            <ProductCard
              product={product}
              onAddToCart={handleAddToCart}
              onSelectOptions={handleSelectOptions}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductPreview;
