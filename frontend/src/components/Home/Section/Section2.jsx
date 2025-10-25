import React from "react";
import PaperPlaneAnimation from "../../PaperPlaneAnimation/PaperPlaneAnimation.jsx";
import NewsCard from "../NewsCard/NewsCard.jsx";
const HeroSection2 = () => {
  const newsData = [
    {
      title: "Join the 5-Day AI Agents Intensive",
      type: "Announcement",
      description:
        "5-Day AI Agents Intensive — a no-cost course designed to help you build and deploy the next frontier of AI.",
      imgSrc: "/assets/ai.svg",
    },
    {
      title: "OpenAI to Z Challenge Finalists",
      type: "Hackathon",
      description:
        "Watch: Finalists from the OpenAI to Z Challenge discuss their winning projects.",
      imgSrc: "/assets/openai.svg",
    },
    {
      title: "Magistral Small 2506 – Now available on NIT-C Hub",
      type: "Model",
      description:
        "Our first reasoning model — effective for domain-specific, transparent, and multilingual reasoning.",
      imgSrc: "/assets/model.svg",
    },
    {
      title: "Check out BIM’s Granite 4.0 Model",
      type: "Model",
      description:
        "Built for fast inference, long-context understanding, and cost-efficient deployments.",
      imgSrc: "/assets/granite.svg",
    },
  ];

  return (
    <section className="section2 relative min-h-screen flex flex-col justify-center items-center bg-gray-100 py-20">
      <div className="max-w-7xl w-full px-6">
        {/* Section Title */}
        <div className="flex flex-col items-start space-y-3">
          <div className="flex items-center space-x-3">
            {/* Small SVG icon (flame-like Kaggle icon) */}
            <img
              src="/assets/flame.svg"
              alt="New"
              className="w-6 h-6 opacity-90"
            />
            <h1 className="text-3xl md:text-4xl font-bold text-black leading-tight">
              New and Exciting
            </h1>
          </div>

          <p className="text-gray-600 text-sm md:text-base">
            The latest events, big announcements, and high-priority news on
            NIT-C Hub.
          </p>

          {/* ✈️ Paper plane animation */}
        </div>
          <PaperPlaneAnimation />

        {/* Cards Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsData.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;
