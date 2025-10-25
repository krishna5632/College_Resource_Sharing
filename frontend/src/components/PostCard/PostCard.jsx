import React from "react";
import { BsThreeDots } from "react-icons/bs";
import learnerIcon from "../../assets/adventurer2.svg";

export default function PostCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-bp-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-md p-4 space-y-3">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full">
                {/* Profile Picture Placeholder */}
                            <img
                              src={learnerIcon}
                              alt="Learners"
                            />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 leading-none">Lorem ipsum</h3>
              <p className="text-sm text-gray-500">@loremipsum</p>
            </div>
          </div>
          <BsThreeDots className="text-gray-500 cursor-pointer" />
        </div>

        {/* Post Text */}
        <p className="text-gray-700 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien sit amet.
        </p>

        {/* Image Placeholder */}
        <div className="w-full h-64 bg-gray-300 rounded-xl"></div>

        {/* Footer */}
        <div className="text-sm text-gray-500 space-x-2">
          <span>23:54 · 23/10/2022</span>
          <span>·</span>
          <a href="#" className="text-blue-500 hover:underline">
            Twitter for Web
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-4 text-sm border-t border-gray-200 pt-3">
          <span>
            <span className="font-semibold text-gray-800">100</span> Retweets
          </span>
          <span>
            <span className="font-semibold text-gray-800">56</span> Quote Tweets
          </span>
          <span>
            <span className="font-semibold text-gray-800">800</span> Likes
          </span>
        </div>
      </div>
    </div>
  );
}
