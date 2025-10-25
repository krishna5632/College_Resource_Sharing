import React, { useEffect, useRef } from "react";
import { Search, Filter, Plus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ResourceCard from "../components/ResourceCard/ResourceCard.jsx";

gsap.registerPlugin(ScrollTrigger);

const ResourcesPage = () => {
  const sectionsRef = useRef([]);

  const sections = [
    {
      title: "⭐ Featured Datasets",
      data: [
        {
          id: 1,
          title: "Global Earthquake-Tsunami Risk Assessment",
          author: "Ahmed Mohamed Zaki",
          updated: "22 days ago",
          downloads: "9,426",
          files: "1 File (CSV)",
          image:
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 2,
          title: "Hospital Beds Management",
          author: "Weiwei Zhu",
          updated: "20 days ago",
          downloads: "7,939",
          files: "4 Files (CSV)",
          image:
            "https://images.unsplash.com/photo-1576765607924-bd59a4d3e92c?auto=format&fit=crop&w=800&q=60",
        },
      ],
    },
    {
      title: "🔥 Trending Datasets",
      data: [
        {
          id: 3,
          title: "Urban Traffic Patterns Dataset",
          author: "John Doe",
          updated: "5 days ago",
          downloads: "12,560",
          files: "3 Files (CSV)",
          image:
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 4,
          title: "Smart City Infrastructure Data",
          author: "Emma Liu",
          updated: "8 days ago",
          downloads: "8,240",
          files: "2 Files (CSV)",
          image:
            "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 5,
          title: "Public Transport Delay Insights",
          author: "Mark Patel",
          updated: "12 days ago",
          downloads: "10,543",
          files: "5 Files (CSV)",
          image:
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
        },
      ],
    },
    {
      title: "🕒 Recently Viewed Datasets",
      data: [
        {
          id: 6,
          title: "Health & Nutrition Survey Data",
          author: "Maria Smith",
          updated: "2 days ago",
          downloads: "4,112",
          files: "2 Files (CSV)",
          image:
            "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 7,
          title: "Air Pollution Global Report",
          author: "Karthik Rao",
          updated: "3 days ago",
          downloads: "5,847",
          files: "3 Files (CSV)",
          image:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 8,
          title: "Wildlife Migration Data",
          author: "Ava Turner",
          updated: "1 day ago",
          downloads: "3,219",
          files: "2 Files (CSV)",
          image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
        },
      ],
    },
  ];

  // Animate cards on scroll
  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      const cards = section.querySelectorAll(".resource-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "bottom 40%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 px-6 py-10 font-sans pt-[11rem]">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Datasets
        </h1>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition">
            <Plus size={18} /> New Dataset
          </button>
          <button className="border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            Your Work
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center gap-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full px-4 py-2 shadow-sm max-w-2xl mx-auto">
        <Search className="text-gray-500 w-5 h-5" />
        <input
          type="text"
          placeholder="Search datasets"
          className="w-full bg-transparent outline-none text-gray-700 dark:text-gray-200"
        />
        <Filter className="text-gray-500 w-5 h-5" />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {[
          "All datasets",
          "Computer Science",
          "Education",
          "Classification",
          "Computer Vision",
          "NLP",
          "Data Visualization",
          "Pre-Trained Model",
        ].map((tag, i) => (
          <span
            key={i}
            className="px-4 py-1 border border-gray-300 dark:border-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/40 cursor-pointer transition"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Resource Sections */}
      {sections.map((section, idx) => (
        <section
          key={idx}
          ref={(el) => (sectionsRef.current[idx] = el)}
          className="mt-20 mb-20"
        >
          <h2 className="text-2xl font-semibold mb-10 text-gray-900 dark:text-white">
            {section.title}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 place-items-center w-full">
            {section.data.map((item) => (
              <div
                key={item.id}
                className="resource-card w-full max-w-sm transform transition-transform hover:scale-105 hover:-translate-y-2"
              >
                <ResourceCard data={item} />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ResourcesPage;
