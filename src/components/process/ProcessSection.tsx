import React from "react";
import Image from "next/image";
import ProcessHeader from "./ProcessHeader";
import ProcessSteps from "./ProcessSteps";

const ProcessSection = () => {
  return (
    <section className="relative">
      {/* Background Image */}
      <Image
        src="/feature/bg.png"
        alt="Service Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Content */}
      <div className="relative z-10">
        <ProcessHeader />
        <ProcessSteps />
      </div>
    </section>
  );
};

export default ProcessSection;
