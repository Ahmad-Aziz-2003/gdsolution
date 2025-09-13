'use client';
import React, { useEffect } from "react";
import Button from "./Button";
import IconButton from "./IconButton";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: true,    // animate only once
    });
  }, []);

  return (
    <section className="bg-black flex items-center h-full md:min-h-[80vh] justify-center px-4 relative overflow-hidden">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center gap-16">
        {/* About Us Badge */}
        <div data-aos="fade-up">
          <IconButton icon="/fingerprint.svg" text="About Us" className="w-40" />
        </div>

        {/* Main Heading */}
        <h1
          data-aos="fade-up"
          className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-tight"
        >
          GDSolutions was founded with one mission — to
          make AI accessible, understandable, and impactful
          for every size business.
        </h1>

        {/* Contact Button */}
        <div data-aos="fade-up">
          <Button px="px-6 sm:px-10">Contact us</Button>
        </div>
      </div>

      {/* Subtle gradient orbs for visual interest */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-[#5C5FFE]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-[#A3A5FF]/5 to-transparent rounded-full blur-3xl" />
    </section>
  );
};

export default AboutUs;
