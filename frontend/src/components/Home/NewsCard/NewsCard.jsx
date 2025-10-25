import React from "react";

const NewsCard = ({ title, category, description, icon }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col justify-between h-[180px]">
      <div>
        <h3 className="text-sm font-semibold text-black leading-snug line-clamp-2">
          {title}
        </h3>
        <p className="text-xs font-semibold text-gray-700 mt-2">{category}</p>
        <p className="text-gray-600 text-xs mt-1 line-clamp-3">
          {description}
        </p>
      </div>
      <div className="flex justify-end mt-3">
        <img src={icon} alt={`${title} icon`} className="w-6 h-6" />
      </div>
    </div>
  );
};

export default NewsCard;
