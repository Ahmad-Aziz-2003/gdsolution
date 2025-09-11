import React from "react";
import Image from "next/image";
import IconButton from "../IconButton";

const ProcessHeader = () => {
  return (
    <section className=" flex items-center justify-center px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto mt-24 mb-16 text-center relative z-10 flex flex-col items-center justify-center gap-6">
        {/* About Us Badge */}
        <IconButton
          icon="/process/process.svg"
          text="Our Process"
          className="w-44"
        />

        {/* Main Heading */}
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl font-light leading-tight">
          Our Proven AI-Driven Process
        </h1>

        <h3 className="text-offwhite max-w-lg">
          With a focus on innovation and efficiency, we help you stay ahead in
          an With a focus on innovation and efficiency, we help you stay ahead
          in an ever-evolving digital landscape.
        </h3>
      </div>
    </section>
  );
};

export default ProcessHeader;
