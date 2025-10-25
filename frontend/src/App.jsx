import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import ResourcePage from "./pages/Resource.jsx";
import Upload from "./pages/Upload.jsx";
import Profile from "./pages/Profile.jsx";
import Leaderboard from "./pages/Leaderboard.jsx";
import DiscussionSection from "./components/Discussion/Discussion.jsx";
import EventFeedPage from "./pages/EventFeedPage.jsx";
import Hero from "./pages/Home.jsx";
import Login from "./pages/LoginPage.jsx";
import Register from "./pages/RegisterPage.jsx";
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resource" element={<ResourcePage />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/discussion" element={<DiscussionSection />} />
        <Route path="/twitter" element={<EventFeedPage />} />
      </Routes>
    </>
  );
}


