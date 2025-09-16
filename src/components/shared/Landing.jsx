"use client"
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import BigSales from "../../assets/8005340.jpg";
import BigShpping from "../../assets/5544257.jpg";
import shoppingStore from "../../assets/cyber-monday-shopping-sales.jpg";
import EcommsersePocket from "../../assets/E-Commerce Facebook Ad.png";

const EcommerceBannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef(null);
  const videoRef = useRef(null);

  const slides = [
    {
      type: "image",
      content: BigSales,
      alt: "Luxury watches collection with discount offer",
      title: "Summer Sale 2023",
      subtitle: "Up to 40% Off Premium Watches",
      description:
        "Limited time offer on selected luxury timepieces. Free shipping and 2-year warranty included.",
      cta: "Shop Now",
      buttonVariant: "primary",
      textPosition: "left",
      textColor: "text-white",
      overlay: "bg-black/40",
    },
    {
      type: "image",
      content: EcommsersePocket,
      alt: "Exclusive chronograph watch design",
      subtitle: "Exclusive Timepieces",
      description:
        "Discover our latest designs with cutting-edge technology and craftsmanship.",
      cta: "View Collection",
      buttonVariant: "secondary",
      textPosition: "center",
      textColor: "text-white",
      overlay: "bg-black/40",
    },
    {
      type: "image",
      content: BigShpping,
      alt: "Close-up of leather strap wristwatch",
      title: "Free Shipping",
      subtitle: "On All Orders Over AED500",
      description:
        "Enjoy complimentary worldwide shipping and easy returns on premium purchases.",
      buttonVariant: "outline",
      textPosition: "left",
      textColor: "text-white",
      overlay: "bg-black/30",
    },
    {
      type: "image",
      content: shoppingStore,
      alt: "Store showcasing premium watches",
      title: "New Arrivals",
      subtitle: "Discover Our Latest Collection",
      description: "Fresh designs now available with exclusive launch offers.",
      buttonVariant: "primary",
      textPosition: "right",
      textColor: "text-white",
      overlay: "bg-black/30",
    },
  ];

  // Slide controls
  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  // Auto-play
  useEffect(() => {
    if (!isHovering) {
      intervalRef.current = setInterval(nextSlide, 6000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isHovering]);

  // Restart video on slide change
  useEffect(() => {
    if (slides[currentSlide].type === "video" && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [currentSlide]);

  // Reusable text content block
  const renderTextBlock = (slide) => (
    <div
      className={`max-w-xl sm:max-w-2xl px-3 sm:px-6 md:px-8 lg:px-10 ${slide.textColor} animate-fadeInUp
        ${
          slide.textPosition === "left"
            ? "text-left mr-auto"
            : slide.textPosition === "right"
            ? "text-right ml-auto"
            : "text-center mx-auto"
        }`}
    >
      {slide.subtitle && (
        <p className="text-xs sm:text-sm md:text-base text-amber-400 mb-2 tracking-wide uppercase">
          {slide.subtitle}
        </p>
      )}
      {slide.title && (
        <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-3 leading-snug">
          {slide.title}
        </h2>
      )}
      {slide.description && (
        <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4 line-clamp-2">
          {slide.description}
        </p>
      )}
      {slide.cta && (
        <button
          className={`px-4 sm:px-5 py-2 sm:py-3 rounded-md font-medium transition-colors duration-300 text-sm sm:text-base
            ${
              slide.buttonVariant === "primary"
                ? "bg-amber-500 hover:bg-amber-600 text-white shadow"
                : slide.buttonVariant === "secondary"
                ? "border-2 border-white text-white hover:bg-white/20"
                : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100"
            }`}
        >
          {slide.cta}
        </button>
      )}
    </div>
  );

  return (
    <>
      <section
        className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[65vh] xl:h-[75vh] overflow-hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
          >
            {slide.type === "image" ? (
              <Image
                src={slide.content}
                alt={slide.alt}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
            ) : (
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={slide.content} type="video/mp4" />
              </video>
            )}

            {/* Overlay + Text */}
            <div
              className={`absolute inset-0 ${slide.overlay} flex items-center 
                ${
                  slide.textPosition === "left"
                    ? "justify-start pl-4 sm:pl-10 md:pl-16"
                    : slide.textPosition === "right"
                    ? "justify-end pr-4 sm:pr-10 md:pr-16"
                    : "justify-center"
                }`}
            >
              {renderTextBlock(slide)}
            </div>
          </div>
        ))}

        {/* Arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-3 sm:px-6 z-30">
          <button
            onClick={prevSlide}
            className="bg-black/30 hover:bg-black/50 p-2 sm:p-3 rounded-full"
            aria-label="Previous"
          >
            <FaChevronLeft className="text-white text-lg sm:text-xl" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-black/30 hover:bg-black/50 p-2 sm:p-3 rounded-full"
            aria-label="Next"
          >
            <FaChevronRight className="text-white text-lg sm:text-xl" />
          </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full transition-all
                ${
                  currentSlide === idx
                    ? "bg-amber-500 w-5 sm:w-6"
                    : "bg-white/50 hover:bg-white/75"
                }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Animation */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </>
  );
};

export default EcommerceBannerSlider;
