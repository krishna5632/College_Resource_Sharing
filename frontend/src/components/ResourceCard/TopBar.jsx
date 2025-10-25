const tags = [
  "All datasets",
  "Computer Science",
  "Education",
  "Classification",
  "Computer Vision",
  "NLP",
  "Data Visualization",
  "Pre-Trained Model",
];

export default function TopBar() {
  return (
    <div className="bg-white border-b py-6 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Datasets</h1>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Search Box */}
          <input
            type="text"
            placeholder="Search datasets"
            className="w-full sm:w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* New Dataset Button */}
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            + New Dataset
          </button>
        </div>

        {/* Category Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-sm px-3 py-1 border rounded-full bg-gray-100 hover:bg-blue-100 cursor-pointer transition"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}