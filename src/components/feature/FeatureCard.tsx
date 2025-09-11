// components/FeatureCard.tsx
import React from 'react';
import Image from 'next/image';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  image,
  imageAlt,
}) => {
  return (
    <div className="relative rounded-2xl bg-[#080808] overflow-hidden border-2 border-white/10">
      {/* Gradient Top Border */}
     <div
  className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[3px]"
  style={{
    background:
      "linear-gradient(90deg, rgba(92, 95, 254, 0) 0%, #5C5FFE 50%, rgba(92, 95, 254, 0) 100%)",
  }}
/>


      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/feature/cardbg.png"
          alt="Card background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 flex flex-col items-center text-center h-full">
        {/* Icon */}
        <div className="mb-6 p-3 rounded-full bg-gradient-to-b from-[#5C5FFE] to-[#A3A5FF]">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-4xl font-semibold text-white mb-4 leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-offwhite text-sm leading-relaxed mb-8 max-w-xs">
          {description}
        </p>

        {/* Image */}
        <div className="mt-auto w-full max-w-xs">
          <Image
            src={image}
            alt={imageAlt}
            width={300}
            height={200}
            className="rounded-lg shadow-lg w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
