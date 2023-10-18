import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="shadow-sm">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div>
          <Link to={"/"}>
            <h1 className="text-4xl font-semibold text-primary">Apparel</h1>
            <span className="text-sm text-gray-3">Elegance in Fashion</span>
          </Link>
        </div>

        <ul className="flex gap-2 items-center">
          <li>
            <NavLink
              className="px-4 py-2 transition duration-100 hover:ease-in-out rounded-md bg-white hover:bg-secondary-1 text-dark hover:text-primary"
              to={"/"}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className="px-4 py-2 transition duration-100 hover:ease-in-out rounded-md bg-white hover:bg-secondary-1 text-dark hover:text-primary"
              to={"/add-product"}
            >
              Add Product
            </NavLink>
          </li>
          <li>
            <NavLink
              className="px-4 py-2 transition duration-100 hover:ease-in-out rounded-md bg-white hover:bg-secondary-1 text-dark hover:text-primary"
              to={"/my-cart"}
            >
              My Cart
            </NavLink>
          </li>
        </ul>

        <div>
          <Link
            className="px-4 py-2 transition duration-100 hover:ease-in-out text-dark hover:text-primary block"
            to={"/login"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
