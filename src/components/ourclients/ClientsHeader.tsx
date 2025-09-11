import React from "react";
import Image from "next/image";
import IconButton from "../IconButton";

const ClientsHeader = () => {
  return (
    <section className="bg-black flex items-center justify-center px-4 relative rounded-2xl overflow-hidden">
      {/* Background Image (main) */}
      <Image
        src="/service/servicebg.svg"
        alt="Service Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Gradient Overlay Image (imagbg.svg) */}
      <Image
        src="/clients/gradient.png"
        alt="Gradient Overlay"
        fill
        priority
        className="object-cover object-center z-0"
      />

      {/* Content */}
      <div className="max-w-4xl mx-auto mt-24 mb-16 text-center relative z-10 flex flex-col items-center justify-center gap-6">
        {/* About Us Badge */}
        <IconButton
          icon="/clients/testimonial.svg"
          text="Testimonial"
          className="w-44"
        />

        {/* Main Heading */}
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl font-light leading-tight">
          What Our Clients Say
        </h1>

        <h3 className="text-offwhite max-w-lg">
          Hear from our happy clients! See how we’ve helped them achieve their
          goals and create lasting impact.
        </h3>
      </div>
    </section>
  );
};

export default ClientsHeader;
