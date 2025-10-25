import React from "react";
import ProfileStats from "../components/ProfileStats/ProfileStats";
import ResourceCard from "../components/ResourceCard/ResourceCard";

export default function Profile() {
  const uploaded = [
    { title: "C++ Programming Notes", branch: "CSE", semester: 2, upvotes: 23, downloads: 130, uploadedBy: "You" },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Your Profile</h1>
      <p className="text-gray-600 mb-6">Manage your uploaded and downloaded resources.</p>

      <ProfileStats />

      <h2 className="text-2xl font-semibold mt-10 mb-4">Your Uploads</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {uploaded.map((r, i) => <ResourceCard key={i} {...r} />)}
      </div>
    </div>
  );
}
