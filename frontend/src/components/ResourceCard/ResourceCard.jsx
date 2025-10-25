import React from "react";
import { ThumbsUp, Download, FileText } from "lucide-react";

const ResourceCard = ({ 
  title, 
  author, 
  updated, 
  usability, 
  size, 
  downloads, 
  files, 
  likes, 
  image 
}) => {
  return (
    <div className="w-80 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 overflow-hidden cursor-pointer">
      {/* Image */}
      <div className="h-36 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-[15px] font-semibold text-gray-800 leading-snug hover:text-indigo-600 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-500">
          <span className="text-indigo-600 font-medium">{author}</span> • {updated}
        </p>

        <div className="flex flex-wrap gap-2 text-xs text-gray-500 mt-2">
          <span className="font-medium text-gray-800">Usability {usability}</span>
          <span>• {size}</span>
          <span>• {downloads} downloads</span>
          <span>• {files} File (CSV)</span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-center px-4 py-3 border-t border-gray-100 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <ThumbsUp className="w-4 h-4 text-gray-500" />
          <span>{likes}</span>
        </div>
        <div className="flex items-center gap-3">
          <Download className="w-4 h-4 text-gray-500 hover:text-indigo-600 transition-colors" />
          <FileText className="w-4 h-4 text-gray-500 hover:text-indigo-600 transition-colors" />
        </div>
        <img
          src="https://avatars.githubusercontent.com/u/9919?v=4"
          alt="User Avatar"
          className="w-6 h-6 rounded-full border"
        />
      </div>
    </div>
  );
};

export default ResourceCard;
