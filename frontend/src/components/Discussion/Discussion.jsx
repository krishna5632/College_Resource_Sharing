import React, { useState } from "react";
import { Search, Filter, ChevronUp } from "lucide-react";

import avatar1 from '../../assets/adventurer3.svg'
import avatar2 from '../../assets/adventurer1.svg'
import avatar3 from '../../assets/adventurer2.svg'


const discussions = [
  {
    id: 1,
    title: "1st Place Solution",
    author: "tascj",
    competition: "MAP - Charting Student Math Misunderstandings",
    lastComment: "2h ago by DRBendermun",
    votes: 143,
    comments: 26,
    avatar: avatar1,
  },
  {
    id: 2,
    title: "18th Place - Pyramid Ensemble",
    author: "Chris Deotte",
    competition: "MAP - Charting Student Math Misunderstandings",
    lastComment: "10h ago by Sibonile Mthunzi",
    votes: 73,
    comments: 36,
    avatar:avatar2,
  },
  {
    id: 3,
    title: "Another data generation competition?",
    author: "Bilzard",
    competition: "PhysioNet - Digitization of ECG Images",
    lastComment: "5h ago by POOJA SHINDE",
    votes: 12,
    comments: 17,
    avatar:avatar3,
  },
  {
    id: 4,
    title: "New teams conquering medal rankings",
    author: "Yangle Ma",
    competition: "Jigsaw - Agile Community Rules Classification",
    lastComment: "2h ago by CPMP",
    votes: 11,
    comments: 21,
    avatar: avatar3,
  },
];

const filters = [
  "Your Activity",
  "Bookmarks",
  "Beginner",
  "Data Visualization",
  "Computer Vision",
  "NLP",
  "Neural Networks",
];

const DiscussionPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDiscussions = discussions.filter((d) =>
    d.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-white py-10 px-4 font-sans pt-[11rem]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <span className="text-gray-800">Discussion from across Nitc</span>
        </h1>

        {/* Search & Filter */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search discussions"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border rounded-full pl-9 pr-4 py-2 focus:ring-2 focus:ring-[rgb(76,228,32)] outline-none text-sm"
            />
          </div>
          <button className="flex items-center gap-2 border px-4 py-2 rounded-full text-gray-700 hover:bg-gray-100 transition">
            <Filter size={16} /> Filters
          </button>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          {filters.map((f, index) => (
            <button
              key={index}
              className="bg-gray-100 text-gray-700 text-sm px-4 py-1.5 rounded-full hover:bg-gray-200 transition"
            >
              {f}
            </button>
          ))}
        </div>

        {/* Sort Bar */}
        <div className="flex justify-end mb-3 text-sm text-gray-600">
          <span>Hotness ▼</span>
        </div>

        {/* Discussion List */}
        <div className="space-y-4">
          {filteredDiscussions.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border rounded-lg p-4 hover:bg-gray-50 transition"
            >
              {/* Left section */}
              <div className="flex items-start gap-4">
                <img
                  src={item.avatar}
                  alt="avatar"
                  className="w-10 h-10 rounded-full border"
                />
                <div>
                  <h3 className="font-medium text-gray-900 hover:text-[rgb(76,228,32)] cursor-pointer">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {item.author} · in{" "}
                    <span className="text-[rgb(76,228,32)] cursor-pointer hover:underline">
                      {item.competition}
                    </span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Last comment {item.lastComment}
                  </p>
                </div>
              </div>

              {/* Right section */}
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center text-gray-700">
                  <ChevronUp size={18} />
                  <span className="text-sm font-medium">{item.votes}</span>
                </div>
                <p className="text-sm text-gray-500">{item.comments} comments</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscussionPage;
