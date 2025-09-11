import AboutUs from "@/components/AboutUs";
import FeatureSection from "@/components/feature/FeatureSection";
import HeroSection from "@/components/HeroSection";
import TestimonialSection from "@/components/ourclients/TestimonialSection";
import ProcessSection from "@/components/process/ProcessSection";
import ReadyToSave from "@/components/ReadyToSave";
import ServiceSection from "@/components/service/ServiceSection";
import Image from "next/image";

export default function Home() {
  return (
   <div className="bg-black">
   <HeroSection/>
   <AboutUs/>
   <ServiceSection/>
   <FeatureSection/>
   <ProcessSection/>
   <TestimonialSection/>
   <ReadyToSave/>
   </div>
  );
}
