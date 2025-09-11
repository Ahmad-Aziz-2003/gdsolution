"use client";
import React from "react";

const BrandBar: React.FC = () => {
  const brands = [
    { name: "Brand 1", logo: "/brands/brand(1).svg" },
    { name: "IPSUM", logo: "/brands/brand(2).svg" },
    { name: "Brand 3", logo: "/brands/brand(3).svg" },
    { name: "Brand 4", logo: "/brands/brand(4).svg" },
  ];

  // Duplicate brands for smooth infinite scroll
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <div className="max-w-2xl mx-auto overflow-hidden mb-28">
      <div className="flex animate-scroll whitespace-nowrap">
        {duplicatedBrands.map((brand, index) => (
          <div
            key={`${brand.name}-${index}`}
            className="flex-shrink-0 mx-4 sm:mx-8 flex items-center md:justify-center"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-12 sm:h-20 opacity-70 hover:opacity-100 transition-opacity duration-200 filter grayscale hover:grayscale-0"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default BrandBar;
