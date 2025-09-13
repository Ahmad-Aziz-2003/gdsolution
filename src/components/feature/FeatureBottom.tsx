// components/FeaturesListSection.tsx
import React from 'react';
import Image from 'next/image';

interface FeatureListItemProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureListItem: React.FC<FeatureListItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-start space-y- p-4 lg:p-2 gap-1 sm:gap-3">
      {/* Icon + Title in one line */}
      <div className="flex items-center gap-1">
        <Image
          src={icon}
          alt={`${title} icon`}
          width={20}
          height={20}
          className="w-5 h-5 text-white"
        />
        <h3 className="text-white font-medium text-sm lg:text-base leading-tight">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-offwhite text-xs lg:text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};


// Main Features List Section
const FeatureBottom: React.FC = () => {
  // Feature data
  const featuresListData = [
    {
      id: 1,
      icon: "/feature/icon(1).svg",
      title: "Real-Time Data Processing",
      description: "Turn repetitive reporting and tracking into automated, instant insights.",
    },
    {
      id: 2,
      icon: "/feature/icon(4).svg",
      title: "Smart Recognition",
      description: "AI agents that can read, sort, and process documents, images",
    },
    {
      id: 3,
      icon: "/feature/icon(3).svg",
      title: "Optimized Workflows",
      description: "Automated task flows designed with a smooth",
    },
    {
      id: 4,
      icon: "/feature/icon(2).svg",
      title: "Predictive Task Handling",
      description: "Agents that anticipate routine needs and act before you even ask.",
    },
  ];

  return (
    <section className="py-8 lg:py-16 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Features Grid - Responsive Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 xl:gap-12">
          {featuresListData.map((feature) => (
            <FeatureListItem
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBottom;
