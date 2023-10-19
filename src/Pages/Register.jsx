import { Link } from "react-router-dom";

const Register = () => {
  const registerHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { name, photo, email, password };
  };
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-sm mx-auto px-8 py-4">
        <h1 className="text-dark text-4xl text-center pb-12">Sign Up</h1>
        <form onSubmit={registerHandler}>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-xl">
              Name
              <input
                className="block outline outline-1 outline-gray-2 focus:outline-primary my-2 p-2 w-full text-base font-normal rounded-md"
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </label>
            <label className="font-medium text-xl">
              Profile Picture
              <input
                className="block outline outline-1 outline-gray-2 focus:outline-primary my-2 p-2 w-full text-base font-normal rounded-md"
                type="text"
                name="photo"
                placeholder="Enter your photo URL"
              />
            </label>
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

            <button
              type="submit"
              className="bg-secondary-1 text-2xl py-1 block w-full font-normal rounded-md col-span-2 outline outline-1 outline-primary hover:bg-primary hover:text-white transition duration-150 hover:ease-in-out"
            >
              Sign Up
            </button>
            <span className="text-center text-gray-3 text-sm hover:text-primary pt-4 transition duration-150 hover:ease-in-out">
              <Link to={"/login"}>Already have an account? Login!</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
