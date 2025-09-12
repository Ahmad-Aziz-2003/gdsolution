// components/FeaturesSection.tsx
import React from 'react';
import FeatureCard from './FeatureCard';



// Feature data
const featuresData = [
  {
    id: 1,
    title: "Seamless Integrations",
    description: "Connect effortlessly with major platforms to enhance and automate your workflows.",
    image: "/feature/img(2).png",
    imageAlt: "Integration dashboard showing connected platforms"
  },
  {
    id: 2,
    title: "Trusted Data Security",
    description: "Trusted, secure systems to protect your data and ensure reliable operations.",
    image: "/feature/img(1).png",
    imageAlt: "Security dashboard with data protection features"
  },
  {
    id: 3,
    title: "Cognitive Automation",
    description: "Enable your user to control or navigate your site using speech.",
    image: "/feature/img(3).png",
    imageAlt: "Speech recognition interface with voice controls"
  }
];

const FeatureList: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-black border-y-2 border-white/10">
      <div className="max-w-7xl mx-auto">
      
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              imageAlt={feature.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureList;