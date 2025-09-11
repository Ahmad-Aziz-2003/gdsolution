// import React from 'react';
// import Image from 'next/image';

// // Content Component
// const ContentDiv: React.FC<{ icon: string; title: string; description: string }> = ({
//   icon,
//   title,
//   description,
// }) => {
//   return (
//     <div className="flex flex-col items-start text-white">
//       <div className="w-13 h-13 bg-white rounded flex items-center justify-center mb-5">
//         <Image
//           src={icon}
//           alt={`${title} icon`}
//           width={26}
//           height={26}
//           className="filter-none"
//         />
//       </div>
//       <h3 className="text-5xl  mb-7">{title}</h3>
//       <p className="text-offwhite text-base leading-relaxed max-w-md">
//         {description}
//       </p>
//     </div>
//   );
// };



// const ImageDiv: React.FC<{ imageSrc: string; imageAlt: string }> = ({
//   imageSrc,
//   imageAlt,
// }) => {
//   return (
//     <div
//       className="p-[3px] rounded-xl"
//       style={{
//         background:
//           "linear-gradient(135.27deg, #7D7D7D 0%, #424242 34%, #141640 74%)",
//         boxShadow: "15px 15px 40px rgba(28, 27, 83, 0.6)", // only right + bottom
//       }}
//     >
//       <div className="bg-black rounded-xl flex items-center justify-center">
//         <Image
//           src={imageSrc}
//           alt={imageAlt}
//           width={400}
//           height={150}
//           className="object-contain"
//         />
//       </div>
//     </div>
//   );
// };




// // Main Component
// const AIServicesSection: React.FC = () => {
//   return (
//     <div 
//       className="min-h-screen py-20 px-8"
//       style={{
//         background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)'
//       }}
//     >
//       <div className="max-w-7xl mx-auto">
        
//         {/* AI Agents Section */}
//           <div className="flex  justify-center gap-80 mb-16">
//           <ContentDiv
//             icon="/service/icon(1).svg"
//             title="AI agents"
//             description="AI can capture AI-powered solutions that fit in your unique business needs."
//           />
//           <ImageDiv
//             imageSrc="/service/img(1).png"
//             imageAlt="AI Agents visualization with connected nodes"
//           />
//         </div>

//         {/* Voice Bots Section */}
//         <div className="flex items-center justify-center gap-80 mb-16">
//               <ImageDiv
//             imageSrc="/service/img(2).png"
//             imageAlt="Voice Bots circular interface design"
//           />
//           <ContentDiv
//             icon="/service/icon(2).svg"
//             title="Voice Bots"
//             description="Get a conversational trip that adjusting AI to the areas where it will make the biggest difference."
//           />
        
//         </div>

//         {/* Chatbots Section */}
//             <div className="flex  justify-center gap-80 mb-16">
//           <ContentDiv
//             icon="/service/icon(3).svg"
//             title="Chatbots"
//             description="Seamlessly connect & train to your existing workflows for instant productivity gains."
//           />
//           <ImageDiv
//             imageSrc="/service/img(3).png"
//             imageAlt="Chatbots radar-like interface visualization"
//           />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default AIServicesSection;

import React from 'react';
import Image from 'next/image';

// Content Component
const ContentDiv: React.FC<{ icon: string; title: string; description: string }> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-start lg:items-start text-white text-center  lg:text-left">
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
const ImageDiv: React.FC<{ imageSrc: string; imageAlt: string }> = ({
  imageSrc,
  imageAlt,
}) => {
  return (
    <div
      className="p-[3px] rounded-xl w-full max-w-[400px]"
      style={{
        background:
          "linear-gradient(135.27deg, #7D7D7D 0%, #424242 34%, #141640 74%)",
        boxShadow: "15px 15px 40px rgba(28, 27, 83, 0.6)",
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
          />
          <ImageDiv
            imageSrc="/service/img(1).png"
            imageAlt="AI Agents visualization with connected nodes"
          />
        </div>

        {/* Voice Bots Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-32">
          <ImageDiv
            imageSrc="/service/img(2).png"
            imageAlt="Voice Bots circular interface design"
          />
          <ContentDiv
            icon="/service/icon(2).svg"
            title="Voice Bots"
            description="Get a conversational trip that adjusting AI to the areas where it will make the biggest difference."
          />
        </div>

        {/* Chatbots Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-32">
          <ContentDiv
            icon="/service/icon(3).svg"
            title="Chatbots"
            description="Seamlessly connect & train to your existing workflows for instant productivity gains."
          />
          <ImageDiv
            imageSrc="/service/img(3).png"
            imageAlt="Chatbots radar-like interface visualization"
          />
        </div>
      </div>
    </div>
  );
};

export default AIServicesSection;
