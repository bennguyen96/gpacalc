import React from 'react';

import { NavLink } from 'react-router-dom';

import logo from '../assets/logo.png';

const Navbar = () => (
  <nav className="z-30 flex items-center justify-between w-full h-16 px-5 py-3 bg-uni-blue">
    <NavLink to="/" className="inline-flex items-center gap-3 group">
      <img className="w-16 h-16" src={logo} alt="" />
      <h1 className="text-white">GPA Calculator</h1>
    </NavLink>
    <span className="flex items-center justify-center gap-5">
      <NavLink to="/faq">
        <button type="button" className="text-white">
          FAQ
        </button>
      </NavLink>
      <NavLink to="/contact">
        <button type="button" className="text-white">
          Contact
        </button>
      </NavLink>
    </span>
  </nav>
);

export default Navbar;
