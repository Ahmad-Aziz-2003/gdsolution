import React from "react";
import Image from "next/image";
import IconButton from "../IconButton";

const FeatureHeader = () => {
  return (
    <section className=" bg-black flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Image */}
      <Image
        src="/feature/bg.png"
        alt="Service Background"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="max-w-4xl mx-auto mt-24 mb-16 text-center relative z-10 flex flex-col items-center justify-center gap-6">
        {/* About Us Badge */}
        <IconButton icon="/feature/feature.svg" text="Features" className="w-40" />

        {/* Main Heading */}
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl font-light leading-tight">
   Smarter Automation, Made Simple
        </h1>

        <h3 className="text-offwhite max-w-lg">
       From strategy to automation, our AI capabilities are designed to help you work smarter, faster, and better.
        </h3>
      </div>
    </section>
  );
};

export default FeatureHeader;
