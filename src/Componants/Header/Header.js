import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar  bg-cyan-400">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-white normal-case text-xl">
            QUIZbash
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 text-white">
            <li>
              <Link to="/">Topic</Link>
            </li>
            <li>
              <Link to="/statistics">Statistics</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKKIvB03HGbiEIUC02_XugPVlMNSoR32C9yCY2A3sq&s"
          alt=""
        />
        <h1 className="text-4xl text-center font-bold mt-5 text-cyan-400">
          Welcome to Quiz Bash
        </h1>
      </div>
    </div>
  );
};

export default Header;
