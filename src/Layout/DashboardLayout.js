import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import Navbar from "../Components/Navbar";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex">
        <div className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r">
          <div className="m-4 font-medium text-gray-900 text-left">
            <aside>
              <h3 className="text-2xl font-semibold mb-6">QUICK LINKS</h3>
              <ul>
                <li className="hover:text-gray-700 my-4">
                  <Link to="summary">Summary</Link>
                </li>
                <li className="hover:text-gray-700 my-4">
                  <Link to="products">Products</Link>
                </li>
                <li className="hover:text-gray-700 my-4">
                  <Link to="orders">Orders</Link>
                </li>
                <li className="hover:text-gray-700 my-4">
                  <Link to="users">Users</Link>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        <div className="w-full h-full m-8 overflow-y-auto">
          <div className="flex items-center justify-center border-2 border-dotted">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
