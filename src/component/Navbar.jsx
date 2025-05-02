import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const Navbar = () => {
  const { user, userLogout, changeTheme, dark } = useAuth();

  const handleLogout = async () => {
    await userLogout();
  };

  const handleTheme = () => {
    changeTheme();
  };
 

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content ${dark && 'bg-black text-white'} bg-amber-300 text-slate-800 font-medium rounded-box z-1 mt-3 w-52 p-2 shadow`}
          >
            <li className="">
              <NavLink to={"/"}>Home</NavLink>
            </li>

            <li>
              <NavLink to={"/all-volunteer-need-posts"}>
                All volunteer Need posts
              </NavLink>
            </li>
            <li>
              <NavLink to={"/volunteer-details"}>Volunteer Details</NavLink>
            </li>
            <li>
              <details>
                <summary>My Profile</summary>
                <ul className={`w-52 ${dark && 'bg-black text-white'} bg-amber-200 z-10 rounded`}>
                  <li>
                    <Link to={"/add-volunteer"}>Add Volunteer need Post</Link>
                  </li>
                  <li>
                    <Link to={"/manage-my-posts"}>Manage My Posts</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
    <a className={`btn btn-ghost -ml-8 md:-ml-0 text-indigo-500 ${dark ? 'hover:bg-black' : 'hover:bg-white'}  md:text-2xl text-xl border-0 shadow-none`}>
          <span className="-mr-2 md:text-6xl text-amber-500">V</span>olunteer
          <span className="-mx-2 md:text-4xl text-amber-500">C</span>onnect
        </a>
      </div>
      <button onClick={handleTheme} className="btn">
        {dark ? 'Light' : 'Dark'}
      </button>
      <div className="navbar-center hidden lg:flex">
        <ul className={`menu menu-horizontal px-1 ${dark && 'text-white'} text-slate-800 font-medium`}>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <details>
              <summary>My Profile</summary>
              <ul className={`w-52 ${dark && 'bg-black'} bg-amber-300 z-10`}>
                <li>
                  <Link to={"/add-volunteer"}>Add Volunteer need Post</Link>
                </li>
                <li>
                  <Link to={"/manage-my-posts"}>Manage My Posts</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <NavLink to={"/all-volunteer-need-posts"}>
              All volunteer Need posts
            </NavLink>
          </li>
          <li>
            <NavLink to={"/volunteer-details"}>Volunteer Details</NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <div className="md:mr-4">
          {user && (
            <img
              title={user?.displayName}
              referrerPolicy="no-referrer"
              className="md:w-12 md:h-12 w-7 h-7  rounded-full hover:cursor-pointer"
              src={user.photoURL}
              alt=""
            />
          )}
        </div>
        {user ? (
          <button onClick={handleLogout} className="btn">
            Logout
          </button>
        ) : (
          <button className="btn">
            <Link to={"/login"}>Login</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
