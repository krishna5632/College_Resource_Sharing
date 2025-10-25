import React,{useEffect} from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import PaperPlaneAnimation from '../../PaperPlaneAnimation/PaperPlaneAnimation.jsx'
import learnerIcon from '../../../assets/adventurer3.svg'
import developerIcon from '../../../assets/adventurer2.svg'
import researcherIcon from '../../../assets/adventurer1.svg'
const HeroSection1 = () => {
  useEffect(() => {
    // Base continuous rotations
    gsap.to(".floating-circle", {
      rotation: "+=360",
      repeat: -1,
      ease: "none",
      duration: 6,
      transformOrigin: "50% 50%",
    });

    gsap.to(".rotating-dot", {
      rotation: "-=360",
      repeat: -1,
      ease: "none",
      duration: 5,
      transformOrigin: "50% 50%",
    });

    // Scroll-based SVG rotation
    gsap.to(".hero-svg", {
      rotation: 720, // total rotation while scrolling
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom+=800 center",
        scrub: 1, // makes it follow scroll
      },
      transformOrigin: "50% 50%",
    });

    // Optional gentle pulsing effect
    gsap.to(".hero-svg", {
      scale: 1.7,
      repeat: -1,
      yoyo: true,
      duration: 2.5,
      ease: "sine.inOut",
    });
  }, []);

  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden font-serif pt-[11rem]">
      <div className="max-w-7xl w-full px-6 grid md:grid-cols-2 gap-10 mt-10">
        {/* Left content */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            Welcome to NIT-C Hub{" "}
            <span className="text-[rgb(76,228,32)]">manifestations</span>.
          </h1>
          <p className="text-gray-600 text-base font-sans max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Experience
            creativity from artists across the globe.
          </p>
          <PaperPlaneAnimation />
          <div>
            <button className="border-2 bg-[rgb(76,228,32)] text-black px-6 py-2 rounded-full hover:bg-yellow-400 hover:text-white transition-all text-sm">
              View More
            </button>
          </div>
        </div>
      {/* Right visual */}
 {/* Right visual */}
        <div className="relative flex justify-center items-center">
          {/* Glowing circle */}
          <div className="floating-circle absolute w-64 h-64 bg-[rgb(76,228,32)] rounded-full opacity-90"></div>

          {/* Rotating ring */}
          <div className="rotating-dot absolute w-80 h-80 border border-gray-800 rounded-full flex justify-center items-start">
            <div className="w-4 h-4 bg-black rounded-full"></div>
          </div>

          {/* Scroll-reactive SVG */}
          <img
            src="/src/assets/adventurer3.svg"
            alt="Rotating Logo"
            className="hero-svg absolute w-48 h-48 select-none"
          />
        </div>

      </div>

      {/* Who’s on NIT-C Hub Section */}
      <div className="w-full mt-20 px-6 font-sans">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
          Who’s on NIT-C Hub?
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {/* Learners */}
          <div className="flex flex-col items-center space-y-3">
            <img
              src={learnerIcon}
              alt="Learners"
              className="w-16 h-16 md:w-20 md:h-20"
            />
            <h3 className="text-lg font-semibold text-black">Learners</h3>
            <p className="text-gray-600 text-sm max-w-xs">
              Dive into NIT-C Hub resources, competitions & forums.
            </p>
          </div>

          {/* Developers */}
          <div className="flex flex-col items-center space-y-3">
            <img
              src={developerIcon}
              alt="Developers"
              className="w-16 h-16 md:w-20 md:h-20"
            />
            <h3 className="text-lg font-semibold text-black">Developers</h3>
            <p className="text-gray-600 text-sm max-w-xs">
              Build and share your innovative projects, code, and datasets.
            </p>
          </div>

          {/* Researchers */}
          <div className="flex flex-col items-center space-y-3">
            <img
              src={researcherIcon}
              alt="Researchers"
              className="w-16 h-16 md:w-20 md:h-20"
            />
            <h3 className="text-lg font-semibold text-black">Researchers</h3>
            <p className="text-gray-600 text-sm max-w-xs">
              Collaborate, publish insights, and explore real-world challenges.
            </p>
          </div>
        </div>

        {/* Left-aligned See More button */}
        <div className="flex justify-start mt-10 max-w-6xl mx-auto">
          <button className="border border-gray-400 text-sm text-black px-5 py-2 rounded-full hover:bg-[rgb(76,228,32)] hover:text-white transition-all">
            See more
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection1;