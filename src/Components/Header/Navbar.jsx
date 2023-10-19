import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  // Dark Mode toggle
  const toggleTheme = () => {
    const htmlTag = document.documentElement;
    if (htmlTag.getAttribute("data-theme") === "light") {
      htmlTag.setAttribute("data-theme", "dark");
    } else {
      htmlTag.setAttribute("data-theme", "light");
    }
  };

  const logoutHandler = () => {
    logoutUser()
      .then(() => toast.success("Logged out!"))
      .catch((error) => toast.error(error.code));
  };

  return (
    <nav className="shadow-sm">
      <div className="container mx-auto py-4 px-2 md:px-4 flex flex-col md:flex-row gap-6 md:gap-2 justify-between items-center">
        <div>
          <Link to={"/"}>
            <h1 className="text-4xl pb-2 font-semibold text-primary">
              Apparel
            </h1>
            <span className="block text-sm text-gray-3 text-center md:text-left">
              Elegance in Fashion
            </span>
          </Link>
        </div>

        <ul className="flex gap-2 items-center text-base md:text-lg">
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

        <div className="flex items-center gap-2">
          {user ? (
            <div className="flex items-center">
              <p className="hidden sm:block pr-4">{user.displayName}</p>
              <div className="rounded-full w-10 h-10  overflow-hidden">
                <img className="w-full" src={user.photoURL} />
              </div>

              <button
                onClick={logoutHandler}
                className="flex gap-2 items-center px-4 py-2 transition duration-100 hover:ease-in-out text-dark hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>
                <p>Logout</p>
              </button>
            </div>
          ) : (
            <div>
              <Link
                className="px-4 py-2 transition duration-100 hover:ease-in-out text-dark hover:text-primary block"
                to={"/login"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </Link>
            </div>
          )}

          <button onClick={toggleTheme}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
