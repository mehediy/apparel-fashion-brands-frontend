import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div className="bg-white text-dark">
      <Navbar />
      <ToastContainer autoClose={2000} theme="light" />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
