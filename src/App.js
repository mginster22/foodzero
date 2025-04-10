import React from "react";
import { Routes, Route } from "react-router";
import HomePage from "./components/Pages/HomePage/HomePage";
import MenuPage from "./components/Pages/MenuPage/MenuPage";
import s from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import ContactPage from "./components/Pages/ContactPage/ContactPage";
import AboutPage from "./components/Pages/AboutPage/AboutPage";
import BlogsPage from "./components/Pages/BlogsPage/BlogsPage";
const App = () => {
  return (
    <div className={s.appContainer}>
      <div className={s.content}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
