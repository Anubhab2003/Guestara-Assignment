import React from "react";
import PropTypes from "prop-types";

const Navbar = () => {
  return (
    <nav className="text-blue-700 ">
      <ul className=" flex items-center justify-between p-3 bg-slate-100 font-sans font-thin text-2xl border">
        <li>
          <a href="/">July 2024</a>
        </li>
        <li>
          <a href="/contact">
            Today
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
