import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar"
import RecommendedVideos from "./RecommendedVideos"
function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* SideBar */}
      <div className="app__page">
      <Sidebar />
      <RecommendedVideos />
      </div>
      {/* RecommendedVideos */}
    </div>
  );
}

export default App;
