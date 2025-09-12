import React from 'react';
import Image from 'next/image';

interface InsightCardProps {
  iconSrc: string;
  title: string;
  description: string;
}





const InsightCard: React.FC<InsightCardProps> = ({ iconSrc, title, description }) => {
  return (
    <div className="relative flex flex-col items-center text-center p-8 bg-[#080808] rounded-lg border border-white/10 overflow-hidden">
      {/* Top Gradient Border */}
    <div
  className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1.3px]"
  style={{
    background:
      "linear-gradient(90deg, rgba(92, 95, 254, 0) 0%, #5C5FFE 50%, rgba(92, 95, 254, 0) 100%)",
  }}
/>


      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/feature/cardbg.png"
          alt="Card background"
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>

      {/* Content */}
<div
  className="w-12 h-12 mb-6 rounded-full bg-gradient-to-b from-[#5C5FFE] to-[#A3A5FF] flex items-center justify-center"
  style={{
    boxShadow: `
      0px 10px 18px -1.25px #4F1AD661,
      0px 2.29px 4.12px -0.83px #4F1AD62E,
      0px 0.6px 1.08px -0.42px #4F1AD624
    `,
  }}
>
  <Image
    src={iconSrc}
    alt={`${title} icon`}
    width={24}
    height={24}
    className="text-white"
  />
</div>

      <h3 className="text-2xl  text-white mb-4">{title}</h3>
      <p className="text-offwhite leading-relaxed max-w-sm">{description}</p>
    </div>
  );
};



const ProcessSteps: React.FC = () => {
  const insights = [
    {
      iconSrc: "/process/icon1.svg",
      title: "Discover Insights",
      description: "We analyze your goals, challenges, and vision to craft a tailored AI strategy."
    },
    {
      iconSrc: "/process/icon2.svg", 
      title: "Develop Solutions",
      description: "Our experts design and build cutting-edge AI solutions that drive results."
    },
    {
      iconSrc: "/process/icon3.svg",
      title: "Deploy Success", 
      description: "We implement, optimize, and scale your AI-powered success for long-term impact."
    }
  ];

  return (
    <section className="py-20 px-4">
      
      <div className="max-w-5xl mx-auto bg-[#080808] p-2 rounded-lg border border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <InsightCard
              key={index}
              iconSrc={insight.iconSrc}
              title={insight.title}
              description={insight.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;