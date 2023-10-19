import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const loginHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // const user = { email, password };
    loginUser(email, password)
      .then((userCredential) => {
        setLoginError("");
        // Signed in
        navigate(location?.state ? location.state : "/");
        toast.success("Successfully logged in!");
        // console.log(userCredential.user);
        // ...
      })
      .catch((error) => {
        setLoginError(error.code);
      });
  };

  const googleLoginHandler = () => {
    googleLogin()
      .then((res) => {
        setLoginError("");
        console.log("Successfully logged in");
        navigate(location?.state ? location.state : "/");
        toast.success("Successfully logged in!");
      })
      .catch((error) => setLoginError(error.code));
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-sm mx-auto px-8 py-4">
        <h1 className="text-dark text-4xl text-center pb-12">Login</h1>
        <form onSubmit={loginHandler}>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-xl">
              Email
              <input
                className="block outline outline-1 outline-gray-2 focus:outline-primary my-2 p-2 w-full text-base font-normal rounded-md"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </label>
            <label className="font-medium text-xl">
              Password
              <input
                className="block outline outline-1 outline-gray-2 focus:outline-primary my-2 p-2 w-full text-base font-normal rounded-md"
                type="password"
                name="password"
                placeholder="Enter your password"
                required
              />
            </label>

            <span className="text-sm text-primary">{loginError}</span>

            <button
              type="submit"
              className="bg-secondary-1 text-2xl py-1 block w-full font-normal rounded-md col-span-2 outline outline-1 outline-primary hover:bg-primary hover:text-white transition duration-150 hover:ease-in-out"
            >
              Login
            </button>
            <button
              onClick={googleLoginHandler}
              className="bg-secondary-1 text-2xl py-1 block w-full font-normal rounded-md col-span-2 outline outline-1 outline-primary hover:bg-primary hover:text-white transition duration-150 hover:ease-in-out"
            >
              Login with Google
            </button>
            <span className="text-center text-gray-3 text-sm hover:text-primary pt-4 transition duration-150 hover:ease-in-out">
              <Link to={"/register"}>Don't have an account? Register!</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
