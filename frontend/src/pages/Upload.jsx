import React from "react";
import { UploadCloud } from "lucide-react";

export default function Upload() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Upload Resource</h1>
      <form className="space-y-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <input type="text" placeholder="Title" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-gray-700 outline-none"/>
        <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
          <option>Select Branch</option>
          <option>CSE</option><option>ECE</option><option>ME</option>
        </select>
        <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
          <option>Select Semester</option>
          {[1,2,3,4,5,6,7,8].map(s => <option key={s}>Semester {s}</option>)}
        </select>
        <textarea placeholder="Description" rows={4} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-gray-700 outline-none"/>
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-6 text-gray-500 hover:border-gray-400 cursor-pointer">
          <UploadCloud size={28}/> <p>Click to upload PDF/DOC</p>
        </div>
        <button type="submit" className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">Upload</button>
      </form>
    </div>
  );
}
