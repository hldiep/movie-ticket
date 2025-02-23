import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import SeeMore from "./components/Home/SeeMore";
import MovieDetailPage from "./components/Detail/MovieDetailPage";
import Header from "./components/Home/Header";
import Footer from "./components/Home/Footer";
import { Layout } from "lucide-react";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/see-more" element={<SeeMore />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;