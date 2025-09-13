'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Content Component
const ContentDiv: React.FC<{ icon: string; title: string; description: string; delay?: number; animation?: string }> = ({
  icon,
  title,
  description,
  delay = 0,
  animation = "fade-up",
}) => {
  return (
    <div
      data-aos={animation}
      data-aos-delay={delay}
      className="flex flex-col items-start lg:items-start text-white text-center lg:text-left"
    >
      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded flex items-center justify-center mb-4 mx-auto lg:mx-0">
        <Image
          src={icon}
          alt={`${title} icon`}
          width={26}
          height={26}
          className="filter-none"
        />
      </div>
      <h3 className="text-2xl sm:text-3xl lg:text-5xl font-semibold mb-4 mx-auto lg:mx-0">
        {title}
      </h3>
      <p className="text-offwhite text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
        {description}
      </p>
    </div>
  );
};

// Image Component
const ImageDiv: React.FC<{ imageSrc: string; imageAlt: string; delay?: number; animation?: string }> = ({
  imageSrc,
  imageAlt,
  delay = 0,
  animation = "fade-up",
}) => {
  return (
    <div
      data-aos={animation}
      data-aos-delay={delay}
      className="p-[3px] rounded-xl w-full max-w-[400px] transition-shadow duration-300 hover:shadow-[20px_20px_50px_rgba(28,27,83,0.8)]"
      style={{
        background:
          'linear-gradient(135.27deg, #7D7D7D 0%, #424242 34%, #141640 74%)',
        boxShadow: '15px 15px 40px rgba(28, 27, 83, 0.6)',
      }}
    >
      <div className="bg-black rounded-xl flex items-center justify-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={400}
          height={150}
          className="object-contain w-full h-auto"
        />
      </div>
    </div>
  );
};

// Main Component
const AIServicesSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 120,
    });
  }, []);

  return (
    <div
      className="min-h-screen py-20 px-6 sm:px-8"
      style={{
        background:
          'linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* AI Agents Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-32">
          <ContentDiv
            icon="/service/icon(1).svg"
            title="AI Agents"
            description="AI can capture AI-powered solutions that fit in your unique business needs."
            delay={0}
            animation="fade-up"
          />
          <ImageDiv
            imageSrc="/service/img(1).png"
            imageAlt="AI Agents visualization with connected nodes"
            delay={200}
            animation="fade-up"
          />
        </div>

        {/* Voice Bots Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-32">
          <ImageDiv
            imageSrc="/service/img(2).png"
            imageAlt="Voice Bots circular interface design"
            delay={400}
            animation="fade-up"
          />
          <ContentDiv
            icon="/service/icon(3).svg"
            title="Voice Bots"
            description="Get a tailored roadmap for adopting AI in the areas where it will make the biggest difference."
            delay={600}
            animation="fade-up"
          />
        </div>

        {/* Chatbots Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-32">
          <ContentDiv
            icon="/service/icon(2).svg"
            title="Chatbots"
            description="Seamlessly connect AI tools to your existing workflows for instant productivity gains."
            delay={800}
            animation="fade-up"
          />
          <ImageDiv
            imageSrc="/service/img(3).png"
            imageAlt="Chatbots radar-like interface visualization"
            delay={1000}
            animation="fade-up"
          />
        </div>
      </div>
    </div>
  );
};

export default AIServicesSection;
