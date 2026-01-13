import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";

const Navbar = () => {
  const { isLoggedIn, user, logout } = useAuth();

  return (
    <nav
      className="flex justify-between items-center px-10 py-4
      bg-linear-to-r from-yellow-400 to-yellow-600
      text-white shadow-lg"
    >
      {/* Logo */}
      <Link to="/">
        <div className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="CircleUp logo"
            className="w-10 h-10 rounded-lg shadow-md"
          />
          <h1 className="text-3xl font-bold">CircleUp</h1>
        </div>
      </Link>

      {/* Menu */}
      <ul className="flex gap-8 text-lg items-center">
        <li>
          <Link className="hover:text-fuchsia-200 transition" to="/">
            Home
          </Link>
        </li>

        <li>
          <Link className="hover:text-fuchsia-200 transition" to="/events">
            Events
          </Link>
        </li>

        <li>
          <Link className="hover:text-fuchsia-200 transition" to="/calender">
            Calender
          </Link>
        </li>

        <li>
          <Link className="hover:text-fuchsia-200 transition" to="/map">
            Map
          </Link>
        </li>

        {/* RIGHT SIDE – LOGIN / USER */}
        {!isLoggedIn ? (
          <li>
            <Link
              to="/login"
              className="px-4 py-1 rounded-lg bg-black
              font-semibold hover:bg-yellow-400 hover:text-black transition"
            >
              Login
            </Link>
          </li>
        ) : (
          <li className="flex items-center gap-3">
            {/* Avatar */}
            <div
              className="w-9 h-9 bg-black text-yellow-400
              rounded-full flex items-center justify-center font-bold"
            >
              {user?.charAt(0).toUpperCase()}
            </div>

            {/* Username */}
            <span className="font-semibold">{user}</span>

            {/* Logout */}
            <button
              onClick={logout}
              className="px-3 py-1 rounded-lg border border-black
              text-black font-semibold hover:bg-black hover:text-yellow-400 transition"
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
