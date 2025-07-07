import React from "react";

import Layout from "./HOC/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import About from "./Pages/About";
import BlogDetail from "./Pages/BlogDetail";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blogdetail" element={<BlogDetail />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
