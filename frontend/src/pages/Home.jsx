import React from "react";
import HeroSection1 from "../components/Home/Section/Section1";
import HeroSection2 from "../components/Home/Section/Section2";
import PaperPlaneAnimation from "../components/PaperPlaneAnimation/PaperPlaneAnimation";


import HeroSection3 from "../components/Home/Section/Section3";
const Hero = () => {
  return (
    <>
    <HeroSection1 />
    <HeroSection2 />

    <HeroSection3 />

    

      {/* Section 3 */}
      <section className="section3 relative min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-7xl w-full px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            Section 3
          </h1>
          <PaperPlaneAnimation section="section3" />
        </div>
      </section>
    </>
  );
};

export default Hero;