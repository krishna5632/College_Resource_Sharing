import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const navItems = [
    { name: "Resources", path: "/resource" },
    { name: "Discussion", path: "/discussion" },
    { name: "X", path: "/news" },
    { name: "Exhibitions", path: "/exhibitions" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm font-serif">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-black tracking-tight">
          Nitc<span className="text-[rgb(76,228,32)]">Hub</span>
        </NavLink>

        {/* Nav links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium uppercase tracking-wide text-sm relative">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end
                className={({ isActive }) =>
                  `relative transition-all duration-300 pb-1 
                  hover:text-black
                  after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px]
                  after:w-0 after:bg-[rgb(76,228,32)] after:transition-all after:duration-300
                  hover:after:w-full 
                  ${isActive ? "text-black after:w-full" : "text-gray-700"}`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Join Button */}

        <div>
        <NavLink
          to="/login"
          className=" bg-[rgb(240,245,239)] text-black px-4 py-2 rounded-full hover:bg-[rgb(169,174,168)] transition-all uppercase text-sm font-sans"
        >
          Sign In
        </NavLink>
        <NavLink
          to="/register"
          className="ml-4 bg-[rgb(76,228,32)] text-black px-4 py-2 rounded-full hover:bg-[rgb(76,228,32)] transition-all uppercase text-sm font-sans"
        >
          Register
        </NavLink>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
