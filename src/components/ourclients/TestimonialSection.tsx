import React from "react";
import ClientsHeader from "./ClientsHeader";
import Reviews from "./Reviews";
import BrandBar from "./BrandBar";

const TestimonialSection = () => {
  return (
    <div className="p-4  ">
      <div className="p-2 rounded-xl border border-white/10">
        <ClientsHeader />
        <Reviews />
        <BrandBar />
      </div>
    </div>
  );
};

export default TestimonialSection;
