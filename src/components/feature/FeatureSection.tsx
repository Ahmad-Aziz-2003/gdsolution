'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FeatureHeader from './Featureheader';
import FeatureList from './FeatureList';
import FeatureBottom from './FeatureBottom';

const FeatureSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,   // allows animation on scroll up
      offset: 120,
    });
  }, []);

  return (
    <div className="space-y-16">
      <div data-aos="fade-up">
        <FeatureHeader />
      </div>

      <div data-aos="fade-up">
        <FeatureList />
      </div>

      <div data-aos="fade-up">
        <FeatureBottom />
      </div>
    </div>
  );
};

export default FeatureSection;
