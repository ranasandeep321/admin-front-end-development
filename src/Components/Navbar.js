import React, { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div class="bg-gray-900 px-6 py-5 mx-auto">
      <ul class="flex items-center justify-between">
        <li className="text-3xl">
          <Link
            to="/"
            aria-label="Our product"
            title="Our product"
            class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
          >
            Stunhaul
          </Link>
        </li>
        <li>
          <button
            class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
            onClick={handleLogout}
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
