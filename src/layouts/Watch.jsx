import React, { useMemo, memo, lazy, Suspense } from "react";
import Watch1 from '../assets/Watche/stylish-golden-watch-white-surface.jpg'
import Image from "next/image";

// ✅ Font Awesome imports - lazy loaded
const FontAwesomeIcon = lazy(() => import("@fortawesome/react-fontawesome").then(module => ({ default: module.FontAwesomeIcon })));
const faCartShopping = lazy(() => import("@fortawesome/free-solid-svg-icons").then(module => ({ default: module.faCartShopping })));

// Memoized product data to prevent unnecessary re-renders
const productsData = [
  { id: 1, name: "Hermès Kelly Red Watch 20mm", price: "4000.0 AED", info: "MOQ: 100 Pieces", image: Watch1 },
  { id: 2, name: "Hermès Kelly Red Watch 20mm", price: "4000.0 AED", info: "MOQ: 35 Pieces", image: Watch1 },
  { id: 3, name: "Hermès Kelly Red Watch 20mm", price: "4000.0 AED", info: "MOQ: 80 Pieces", image: Watch1 },
  { id: 4, name: "Hermès Kelly Red Watch 20mm", price: "4000.0 AED", info: "MOQ: 50 Pieces", image: Watch1 },
  { id: 5, name: "Hermès Kelly Red Watch 20mm", price: "4000.0 AED", info: "Sell: 120 Pieces", image: Watch1 },
  { id: 6, name: "Hermès Kelly Red Watch 20mm", price: "4000.0 AED", info: "Sell: 120 Pieces", image: Watch1 },
  { id: 7, name: "Hermès Kelly Red Watch 20mm", price: "4000.0 AED", info: "Sell: 120 Pieces", image: Watch1 },
  { id: 8, name: "Hermès Kelly Red Watch 20mm", price: "4000.0 AED", info: "Sell: 120 Pieces", image: Watch1 },
  { id: 9, name: "Hermès Kelly Red Watch 20mm", price: "4000.0 AED", info: "Sell: 120 Pieces", image: Watch1 },
  { id: 10, name: "Hermès Kelly Red Watch 20mm", price: "4000.0 AED", info: "Sell: 120 Pieces", image: Watch1 },
  { id: 11, name: "Hermès Kelly Red Watch 20mm", price: "4000.0 AED", info: "Sell: 120 Pieces", image: Watch1 },
  { id: 12, name: "Hermès Kelly Red Watch 20mm", price: "4000.0 AED", info: "Sell: 120 Pieces", image: Watch1 },
];

// Single product card component to prevent re-renders
const ProductCard = memo(({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg p-3 xs:p-4 flex flex-col relative transition-transform transform hover:-translate-y-1">
      {/* Product Image */}
      <Image
        src={product.image}
        alt={product.name}
        className="w-full h-40 xs:h-44 sm:h-48 md:h-52 object-contain mb-3 xs:mb-4 rounded-lg"
        loading="lazy"
      />

      {/* Product Name */}
      <h3 className="text-xs xs:text-sm md:text-base text-gray-700 mb-1 font-medium line-clamp-2" style={{ minHeight: '2.5rem' }}>
        {product.name}
      </h3>

      {/* Product Price */}
      <p className="text-base xs:text-lg md:text-xl font-bold text-gray-900 mb-1">
        {product.price}
      </p>

      {/* Product Info */}
      <p className="text-xs xs:text-sm text-gray-500 mb-3">{product.info}</p>

      {/* Cart Button (Bottom-right corner) */}
      <Suspense fallback={
        <div className="absolute bottom-3 xs:bottom-4 right-3 xs:right-4 w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
      }>
        <button
          className="absolute bottom-3 xs:bottom-4 right-3 xs:right-4 bg-amber-500 hover:bg-amber-600 text-white p-1.5 xs:p-2 rounded-full shadow-md transition-colors"
          aria-label={`Add ${product.name} to cart`}
        >
          <FontAwesomeIcon icon={faCartShopping} className="text-sm xs:text-base" />
        </button>
      </Suspense>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';

const Watch = () => {
  // Memoize the products data
  const products = useMemo(() => productsData, []);

  return (
    <div className="bg-gray-100 py-6 xs:py-8 sm:py-10">
      {/* Section Title */}
      <h2 className="text-center text-xl xs:text-2xl sm:text-3xl font-semibold mb-6 xs:mb-8 sm:mb-10">
        Just For You
      </h2>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 grid gap-4 xs:gap-5 sm:gap-6 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default memo(Watch);