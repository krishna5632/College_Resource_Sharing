import React from "react";

export default function FilterPanel() {
  return (
    <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm mb-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <input type="text" placeholder="Search by title..." className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-gray-700 outline-none"/>
        <select className="border border-gray-300 rounded-lg px-3 py-2">
          <option>All Branches</option>
          <option>CSE</option><option>ECE</option><option>ME</option>
        </select>
        <select className="border border-gray-300 rounded-lg px-3 py-2">
          <option>All Semesters</option>
          {[1,2,3,4,5,6,7,8].map(s => <option key={s}>Semester {s}</option>)}
        </select>
        <select className="border border-gray-300 rounded-lg px-3 py-2">
          <option>Category</option>
          <option>Notes</option><option>Assignments</option><option>Question Papers</option><option>Lab Manuals</option>
        </select>
      </div>
    </div>
  );
}
