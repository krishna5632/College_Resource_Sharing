import { Heart, MessageCircle, Share2 } from "lucide-react";

const EventPostCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 mb-4 hover:shadow-md transition">
      {/* Header */}
      <div className="flex items-start space-x-3">
        <img
          src="https://i.pravatar.cc/40"
          alt="User"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-gray-900">Anjali Sharma</h3>
            <span className="text-xs text-gray-400">2h ago</span>
          </div>
          <p className="text-sm text-gray-700 mt-1">
            🎉 Excited to announce — our annual <b>TechFest 2025</b> will be held
            on <b>Oct 25</b>! Join workshops, coding contests & fun activities 🚀
          </p>

          {/* Optional Image */}
          <div className="mt-3">
            <img
              src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=60"
              alt="Event"
              className="rounded-2xl w-full max-h-72 object-cover border border-gray-200"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-between text-gray-500 text-sm mt-4">
            <button className="flex items-center space-x-1 hover:text-red-500 transition">
              <Heart size={18} />
              <span>42</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-blue-500 transition">
              <MessageCircle size={18} />
              <span>8</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-green-500 transition">
              <Share2 size={18} />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPostCard;
