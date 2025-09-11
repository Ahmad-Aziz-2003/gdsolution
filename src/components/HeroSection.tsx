"use client";
import React, { useState } from "react";
import IconButton from "./IconButton";
import Image from "next/image";

const HeroSection: React.FC = () => {
  const [isAgents, setIsAgents] = useState<boolean>(true);

  const brands = [
    { name: "Brand 1", logo: "/brands/brand(1).svg" },
    { name: "IPSUM", logo: "/brands/brand(2).svg" },
    { name: "Brand 3", logo: "/brands/brand(3).svg" },
    { name: "Brand 4", logo: "/brands/brand(4).svg" },
  ];

  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white mt-14">
      {/* ---------- Top Section ---------- */}
      <div className="flex flex-col items-center md:justify-center md:flex-1 px-4 sm:px-6">
        {/* Toggle */}
        <div className="mt-12 sm:mt-24 mb-8 sm:mb-12">
          <div className="relative inline-flex items-center bg-[#141810] rounded-full p-1 backdrop-blur-0">
            <button
              onClick={() => setIsAgents(true)}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                isAgents
                  ? "bg-gradient-to-b from-[#5C5FFE] to-[#A3A5FF] text-white shadow-md"
                  : "bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-white to-transparent"
              }`}
            >
              AI Agents
            </button>
            <button
              onClick={() => setIsAgents(false)}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                !isAgents
                  ? "bg-gradient-to-b from-[#5C5FFE] to-[#A3A5FF] text-white shadow-md"
                  : "bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-white to-transparent"
              }`}
            >
              Real Productivity
            </button>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center max-w-4xl sm:max-w-6xl px-2 sm:px-0">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl leading-tight">
            <span className="block bg-gradient-to-r from-white to-white/30 bg-clip-text text-transparent tracking-[-2px] sm:tracking-[-3.8px]">
              AI Automation,
            </span>
            <span className="block bg-transparent -mt-2 sm:-mt-4 bg-gradient-to-r from-white to-white/30 bg-clip-text text-transparent tracking-[-2px] sm:tracking-[-3.8px]">
              Redefining the Future
            </span>
          </h1>
        </div>
      </div>

      {/* ---------- Bottom Section ---------- */}
      <div className="relative flex -mt-4 flex-col items-center p-12 sm:p-24 w-full h-[50vh] sm:h-[65vh] md:h-[70vh] overflow-hidden">
        {/* Background image */}
        <Image
          src="/bghero.svg"
          alt="Background Hero"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Content */}
        <div className="relative z-10 text-center max-w-xl mx-auto px-2 sm:px-0">
          <h2 className="text-[#FFFFFF99] text-sm sm:text-base lg:text-lg font-light leading-relaxed mb-4 sm:mb-6">
            We build custom AI agents to automate repetitive business tasks — saving you time, reducing costs, and improving efficiency.
          </h2>
          <button className="cursor-pointer backdrop-blur-md bg-white/20 text-white font-medium rounded-md px-6 sm:px-10 py-2 sm:py-3 text-sm sm:text-base transition duration-200 hover:bg-white/30">
            Contact us
          </button>
        </div>

        {/* Infinite Scrolling Brands */}
        <div className="max-w-2xl mx-auto absolute bottom-4 sm:bottom-6 left-0 right-0 overflow-hidden">
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
        </div>
      </div>



      {/* ---------- Styles ---------- */}
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
        .bg-gradient-radial {
          background: radial-gradient(
            ellipse at center,
            rgba(59, 130, 246, 0.25) 0%,
            rgba(37, 99, 235, 0.1) 40%,
            transparent 70%
          );
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
