import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Navigation/Header";
import Footer from "../Components/Footer/Footer";
import Home from "../Pages/Home";
import Gallery from "../Pages/Gallery";
import SocialMedia from "../Pages/SocialMedia";

function Layout() {
  return (
    <div className="flex flex-col gap-24">
      <Header />

      <div>
        <Outlet />
      </div>

      <Gallery></Gallery>

      <SocialMedia></SocialMedia>

      <Footer></Footer>
    </div>
  );
}

export default Layout;
