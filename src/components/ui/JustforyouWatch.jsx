import React, { useMemo, memo } from "react";
import WathcOne from "../../assets/Watche/pixelcut-export-2-1.png";
import Image from "next/image";

// Memoized product data to prevent unnecessary re-renders
const productsGrid1Data = [
  { id: 1, name: "Seiko Yatch Timer", image: WathcOne, price: "100.0 AED" },
  { id: 2, name: "Seiko Regatta Yatch Timer", image: WathcOne, price: "100.0 AED" },
  { id: 3, name: "Seiko Men's Presage", image: WathcOne, price: "100.0 AED" },
];

const productsGrid2Data = [
  { id: 4, name: "Seiko Yatch Timer", image: WathcOne, price: "100.0 AED" },
  { id: 5, name: "Seiko Regatta Yatch Timer", image: WathcOne, price: "100.0 AED" },
  { id: 6, name: "Seiko Men's Presage", image: WathcOne, price: "100.0 AED" },
];

// Single product component to prevent re-renders
const ProductItem = memo(({ product }) => (
  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="p-3 xs:p-4 flex flex-col items-center text-center">
      <Image
        src={product.image}
        alt={product.name}
        className="rounded-lg mb-2 xs:mb-3 w-[120px] h-[120px] xs:w-[140px] xs:h-[140px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] object-contain"
        loading="lazy"
      />
      <h3 className="text-xs xs:text-sm font-medium text-gray-800 line-clamp-2" style={{ minHeight: '2.5rem' }}>
        {product.name}
      </h3>
      <p className="text-xs xs:text-sm font-semibold text-[#1e518e] mt-1">
        {product.price}
      </p>
    </div>
  </div>
));

ProductItem.displayName = 'ProductItem';

const JustforyouWatch = () => {
  // Memoize the products data
  const productsGrid1 = useMemo(() => productsGrid1Data, []);
  const productsGrid2 = useMemo(() => productsGrid2Data, []);

  return (
    <section className="bg-gray-100 py-6 xs:py-8 sm:py-10 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-[1536px] mx-auto flex flex-col lg:flex-row gap-5 xs:gap-6 sm:gap-8">
        
        {/* First Section */}
        <div className="bg-white rounded-xl p-4 xs:p-5 sm:p-6 shadow-md w-full lg:w-1/2">
          <h2 className="text-base xs:text-lg sm:text-xl font-semibold mb-4 xs:mb-5 border-b pb-2">
            New Arrivals
          </h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 xs:gap-5 sm:gap-6">
            {productsGrid1.map(product => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Second Section */}
        <div className="bg-white rounded-xl p-4 xs:p-5 sm:p-6 shadow-md w-full lg:w-1/2">
          <h2 className="text-base xs:text-lg sm:text-xl font-semibold mb-4 xs:mb-5 border-b pb-2">
            Montres Trusted
          </h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 xs:gap-5 sm:gap-6">
            {productsGrid2.map(product => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(JustforyouWatch);