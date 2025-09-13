'use client';

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import AboutUs from "@/components/AboutUs";
import FeatureSection from "@/components/feature/FeatureSection";
import HeroSection from "@/components/HeroSection";
import TestimonialSection from "@/components/ourclients/TestimonialSection";
import ProcessSection from "@/components/process/ProcessSection";
import ReadyToSave from "@/components/ReadyToSave";
import ServiceSection from "@/components/service/ServiceSection";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: false,   
      offset: 100,   
    });
  }, []);

  return (
    <div className="bg-black">
      <div data-aos="fade-up" data-aos-delay="0">
        <HeroSection />
      </div>

      <div data-aos="fade-up" data-aos-delay="300">
        <AboutUs />
      </div>

      <div data-aos="fade-up" data-aos-delay="600">
        <ServiceSection />
      </div>

      <div data-aos="fade-up" data-aos-delay="900">
        <FeatureSection />
      </div>

      <div data-aos="fade-up" data-aos-delay="1200">
        <ProcessSection />
      </div>

  
        <TestimonialSection />
     

   
        <ReadyToSave />
  
    </div>
  );
}
