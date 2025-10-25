import React from "react";

export default function ProfileStats() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-6">
      {[
        { label: "Uploads", value: 14 },
        { label: "Downloads", value: 102 },
        { label: "Upvotes", value: 64 },
      ].map((stat) => (
        <div key={stat.label} className="border border-gray-200 p-4 rounded-xl bg-white text-center">
          <h3 className="text-xl font-bold">{stat.value}</h3>
          <p className="text-sm text-gray-500">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
