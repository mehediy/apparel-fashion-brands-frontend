import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <h1 className="text-2xl">Page not found</h1>
        <Link to={"/"}>
          <button className="bg-primary text-white text-2xl px-4 py-1 block  font-normal rounded-md hover:bg-accent-1 transition duration-150 hover:ease-in-out">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
