import React from "react";
import { Link } from "react-router-dom";
import loginAnimation from '../assets/Animation - 1741718582255.json'
import Lottie from 'lottie-react';

const Login = () => {
  return (
    <div className="md:w-6xl mx-auto my-9">
      <div className="mb-6 text-center">
        <h1 className="text-5xl font-bold">
          <span className="text-amber-500">Login</span> Now
        </h1>
      </div>
      <div className="w-full md:flex gap-6">
        <div className="md:w-[50%]">
          <Lottie className="h-80" animationData={loginAnimation}></Lottie>
        </div>
        <div className="md:w-[50%] bg-slate-200 p-8 rounded">
          <form>
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
                placeholder="mail@site.com"
                required
              />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>

            {/* Password field */}
            <label className="input validator w-full mt-7">
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
                required
                placeholder="Password"
                minlength="8"
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

            {/* buttons */}
            <button className="btn my-4"> <img className="w-9" src="https://img.icons8.com/?size=48&id=17949&format=png" alt="" /> Login with Google</button>
            <button className="btn btn-block bg-indigo-400 font-bold hover:text-white">Login</button>
          </form>
          <p className="mt-3">Do not have an account? Please <Link to={'/register'}><span className="text-indigo-500 font-medium">Register</span></Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
