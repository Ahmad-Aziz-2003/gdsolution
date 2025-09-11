// components/FeaturesSection.tsx
import React from 'react';
import FeatureCard from './FeatureCard';

// Icon components (you can replace these with your preferred icons)
const IntegrationIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 9.74s9-4.19 9-9.74V7l-10-5z"/>
    <path d="M12 7L7 9.5v5l5 2.5 5-2.5v-5L12 7z"/>
  </svg>
);

const SecurityIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1L3 5v6c0 5.55 3.84 9.74 9 9.74s9-4.19 9-9.74V5l-9-4z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
);

const AutomationIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    <path d="M13 7h-2v5l4.28 2.54.72-1.21-3.5-2.08V7z"/>
  </svg>
);

// Feature data
const featuresData = [
  {
    id: 1,
    icon: <IntegrationIcon />,
    title: "Seamless Integrations",
    description: "Connect effortlessly with major platforms to enhance and automate your workflows.",
    image: "/feature/img(2).png",
    imageAlt: "Integration dashboard showing connected platforms"
  },
  {
    id: 2,
    icon: <SecurityIcon />,
    title: "Trusted Data Security",
    description: "Trusted, secure systems to protect your data and ensure reliable operations.",
    image: "/feature/img(1).png",
    imageAlt: "Security dashboard with data protection features"
  },
  {
    id: 3,
    icon: <AutomationIcon />,
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
              icon={feature.icon}
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