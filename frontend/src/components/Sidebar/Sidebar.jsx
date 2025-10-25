import React from "react";
import { Home, Folder, Star, Upload, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const links = [
    { to: "/", label: "Home", icon: <Home size={18} /> },
    { to: "/resources", label: "Resources", icon: <Folder size={18} /> },
    { to: "/leaderboard", label: "Leaderboard", icon: <Star size={18} /> },
    { to: "/upload", label: "Upload", icon: <Upload size={18} /> },
    { to: "/profile", label: "Profile", icon: <User size={18} /> },
  ];

  return (
    <aside className="bg-gray-50 border-r border-gray-200 min-h-screen w-60 p-5 hidden md:block">
      <h2 className="font-bold text-lg mb-6 text-gray-800">CampusStack</h2>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="flex items-center gap-2 text-gray-700 hover:text-black hover:bg-gray-100 p-2 rounded-lg">
              {l.icon} {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
    