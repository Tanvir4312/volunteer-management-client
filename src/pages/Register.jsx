import registerAnimation from "../assets/Animation - 1745950141968 (1).json";
import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";

const Register = () => {
  const { userRegister, userProfileUpdate } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const email = initialData.email;
    const password = initialData.password;
    const userName = initialData.userName;
    const photoURL = initialData.photoURL;
    console.log(email, password);
    try {
      await userRegister(email, password);
      await userProfileUpdate(userName, photoURL);
      toast.success("Registration successfully");
      navigate("/");
    } catch (err) {
      toast.error(err,"Email already use");
      console.log(err);
    }
  };

  return (
    <div className="md:w-6xl mx-auto my-9">
      <div className="mb-10 text-center">
        <h1 className="text-5xl font-bold">
          <span className="text-amber-500">Register</span> Now
        </h1>
      </div>
      <div className="w-full md:flex gap-6">
        <div className="md:w-[50%]">
          <Lottie className="h-80" animationData={registerAnimation}></Lottie>
        </div>
        <div className="md:w-[50%] bg-slate-200 p-8 rounded">
          <form onSubmit={handleRegister}>
            {/* User name */}
            <label className="input validator w-full mb-4">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </g>
              </svg>
              <input
                className="w-full"
                type="input"
                name="userName"
                required
                placeholder="Username"
                title="Only letters, numbers or dash"
              />
            </label>

            {/* Email field */}
            <label className="input validator w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                className="w-full"
                type="email"
                name="email"
                placeholder="mail@site.com"
                required
              />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>

            {/* Password field */}
            <label className="input validator w-full my-4">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                className="w-full"
                type="password"
                name="password"
                required
                placeholder="Password"
                minLength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              />
            </label>
            <p className="validator-hint hidden">
              Must be more than 8 characters, including
              <br />
              At least one number <br />
              At least one lowercase letter <br />
              At least one uppercase letter
            </p>

            {/* Photo URL */}
            <label className="input validator w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </g>
              </svg>
              <input
                className="w-full"
                type="url"
                name="photoURL"
                required
                placeholder="https://"
                pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                title="Must be valid URL"
              />
            </label>
            <p className="validator-hint">Must be valid URL</p>

            {/* Button */}
            <button className="btn btn-block bg-indigo-400 font-bold hover:text-white">
              Register
            </button>
          </form>
          <p className="mt-3">
            Already have an account? Please{" "}
            <Link to={"/login"}>
              <span className="text-indigo-500 font-medium">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
