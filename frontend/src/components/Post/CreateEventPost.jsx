import { useState } from "react";

const CreateEventPost = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm mb-6">
        <div className="flex items-start space-x-3">
          <img
            src="https://i.pravatar.cc/40"
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />
          <button
            onClick={() => setOpen(true)}
            className="flex-1 text-gray-600 text-left px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
          >
            What's happening on campus?
          </button>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Create Event Post
            </h2>

            <textarea
              placeholder="Share something about a campus event..."
              className="w-full border border-gray-300 rounded-lg p-3 h-28 resize-none focus:ring-2 focus:ring-blue-500 mb-3"
            ></textarea>

            <input
              type="text"
              placeholder="Optional image URL"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-3 focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateEventPost;
