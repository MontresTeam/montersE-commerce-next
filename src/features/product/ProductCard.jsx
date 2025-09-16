"use client";
import React, { memo, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Lazy load icons for better performance
const FiShoppingCart = lazy(() =>
  import("react-icons/fi").then((module) => ({
    default: module.FiShoppingCart,
  }))
);
const FiStar = lazy(() =>
  import("react-icons/fi").then((module) => ({ default: module.FiStar }))
);

// Star rating component to prevent re-renders
const StarRating = memo(({ rating, reviews }) => {
  return (
    <div className="flex items-center mb-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <FiStar
            key={star}
            className={`h-2 xs:h-3 w-2 xs:w-3 ${
              star <= Math.round(rating)
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
            aria-hidden="true"
          />
        ))}
      </div>
      <span className="text-[10px] xs:text-xs text-gray-500 ml-1">
        ({reviews})
      </span>
    </div>
  );
});

StarRating.displayName = "StarRating";

// Badge component to prevent re-renders
const ProductBadge = memo(({ badge }) => {
  return (
    <div className="absolute top-1 xs:top-2 sm:top-3 right-1 xs:right-2 sm:right-3 bg-gradient-to-r from-[#b58e5f] to-[#8b6b4a] text-white text-[8px] xs:text-[10px] tracking-wide font-semibold px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-0.5 sm:py-1 rounded-full shadow-sm sm:shadow-md">
      {badge}
    </div>
  );
});

ProductBadge.displayName = "ProductBadge";

// Price display component to prevent re-renders
const PriceDisplay = memo(({ price, mrp }) => {
  return (
    <div className="mt-1 xs:mt-1.5 sm:mt-2 flex justify-between items-center">
      <span className="text-xs xs:text-sm md:text-base font-bold text-[#1a1a1a]">
        {price} AED
      </span>
      {mrp && (
        <span className="text-[10px] xs:text-xs text-gray-500 line-through">
          {mrp} AED
        </span>
      )}
    </div>
  );
});

PriceDisplay.displayName = "PriceDisplay";

const ProductCard = ({ product }) => {
  const imageUrl = product?.images?.[0]?.url;
  // const navigate = useNavigate();
  const router = useRouter();

  const handleViewDetails = () => {
    console.log("Navigating to product:", product);
    router.push(`/ProductDetailPage/${product._id}`);
  };
  return (
    <div className="group bg-white rounded-md sm:rounded-lg overflow-hidden shadow-sm sm:shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-0.5 xs:hover:-translate-y-1">
      <div className="relative w-full pb-[100%] sm:pb-[90%] md:pb-[85%] lg:pb-[80%] xl:pb-[76%] overflow-hidden">
        {/* {console.log(product.images[0]?.url,"product.image")} */}
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={product?.name || "Product image"}
            fill
            className="absolute top-0 left-0 w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
          />
        ) : (
          // fallback image if missing
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s" // 👉 add a placeholder file in /public
            alt="No image available"
            fill
            className="absolute top-0 left-0 w-full h-full object-cover object-center"
          />
        )}
        {product.badge && (
          <div className="absolute top-1 xs:top-2 sm:top-3 right-1 xs:right-2 sm:right-3 bg-gradient-to-r from-[#b58e5f] to-[#8b6b4a] text-white text-[8px] xs:text-[10px] tracking-wide font-semibold px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-0.5 sm:py-1 rounded-full shadow-sm sm:shadow-md">
            {product.badge}
          </div>
        )}
      </div>

      <div className="p-2 xs:p-3 sm:p-3 md:p-4">
        <div className="flex items-center mb-1">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <FiStar
                key={star}
                className={`h-2 xs:h-3 w-2 xs:w-3 ${
                  star <= Math.round(product.rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
                aria-hidden="true"
              />
            ))}
          </div>
          <span className="text-[10px] xs:text-xs text-gray-500 ml-1">
            ({product.reviews})
          </span>
        </div>

        <h3 className="text-xs xs:text-sm md:text-base font-semibold text-[#1a1a1a] mt-0.5 xs:mt-1 line-clamp-2 min-h-[2.5rem] xs:min-h-[3rem]">
          {product.name}
        </h3>

        <div className="mt-1 xs:mt-1.5 sm:mt-2 flex justify-between items-center">
          <span className="text-xs xs:text-sm md:text-base font-bold text-[#1a1a1a]">
            {product.salePrice} AED
          </span>
          {product.mrp && product.mrp > product.price && (
            <span className="text-[10px] xs:text-xs text-gray-500 line-through">
              {product.regularPrice} AED
            </span>
          )}
        </div>

        <button
          onClick={handleViewDetails}
          className="mt-2 xs:mt-3 w-full text-white bg-gradient-to-r from-[#1e518e] to-[#0061b0ee] py-1.5 xs:py-2 rounded text-xs xs:text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#8b6b4a] focus:ring-opacity-50"
          aria-label={`View details for ${product.name}`}
        >
          View Details
        </button>
      </div>
    </div>
  );
};
export default memo(ProductCard);
