import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  return (
    <div className="bg-white text-dark">
      <Navbar />
      <ToastContainer autoClose={2000} theme="light" />
      <Outlet />
    </div>
  );
};

export default MainLayout;
