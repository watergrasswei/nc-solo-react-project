import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/thearticlelist" element={<TheArticleList />} />
      </Routes>
    </>
  );
}

const TheArticleList = () => {
  return (
    <div>
      <ArticleList />
    </div>
  );
};

export default App;
