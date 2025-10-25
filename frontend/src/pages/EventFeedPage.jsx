import EventPostCard from "../components/Post/EventPostCard";
import CreateEventPost from "../components/Post/CreateEventPost";

const EventFeedPage = () => {
  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Campus Events Feed
      </h1>

      {/* Create post section */}
      <CreateEventPost />

      {/* Feed (Static UI) */}
      <EventPostCard />
      <EventPostCard />
      <EventPostCard />
    </div>
  );
};

export default EventFeedPage;
