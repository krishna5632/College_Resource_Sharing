import React from "react";

export default function Leaderboard() {
  const users = [
    { name: "Amit Verma", uploads: 20, upvotes: 95 },
    { name: "Sneha Gupta", uploads: 15, upvotes: 78 },
    { name: "Rahul Singh", uploads: 10, upvotes: 64 },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Top Contributors</h1>
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-3">Rank</th>
              <th className="p-3">Name</th>
              <th className="p-3">Uploads</th>
              <th className="p-3">Upvotes</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={u.name} className="border-b hover:bg-gray-50">
                <td className="p-3 font-medium">#{i + 1}</td>
                <td className="p-3">{u.name}</td>
                <td className="p-3">{u.uploads}</td>
                <td className="p-3">{u.upvotes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
