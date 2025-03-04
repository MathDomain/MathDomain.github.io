import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from '../../assets/MathDomain v4-01.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Background Overlay (appears when sidebar is open) */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)} // Clicking outside closes menu
      ></div>

      <nav className="bg-white p-3 border-b-2 border-black flex justify-between items-center relative z-50">
        {/* Logo */}
        <div
          className={`transform transition-all duration-500 ${
            isOpen ? "-translate-x-96 opacity-0" : "translate-x-0 opacity-100"
          }`}
        >
          <NavLink to="/">
            <img
              src={logo}
              alt="MathDomain Logo"
              className="h-8"
            />
          </NavLink>
        </div>

        {/* Hamburger Menu */}
        <div
          className="md:hidden cursor-pointer z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={`w-6 h-6 flex flex-col justify-between p-1 ${isOpen ? "bg-brand200" : ""}`}>
            <div
              className={`w-full h-1 bg-black transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></div>
            <div
              className={`w-full h-1 bg-black transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <div
              className={`w-full h-1 bg-black transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-3" : ""
              }`}
            ></div>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-500 md:relative md:translate-x-0 md:shadow-none p-5 md:p-0 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            {["Home", "Lessons"].map((menu, index) => (
              <NavLink
                key={index}
                to={menu === "Home" ? "/" : `/${menu.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-xl font-Montserrat px-4 py-2 rounded-md transition-colors ${
                    isActive ? "bg-brand200 text-white" : "hover:bg-brand200 hover:text-white"
                  }`
                }
              >
                {menu}
              </NavLink>
            ))}
          </ul>

          <div className="mt-8 text-center flex md:hidden">
            Have any bugs? <br />
            <a href="mailto:joshramores9@gmail.com" className="text-blue-500">
              Contact Us</a>
          </div>
        </div>
      </nav>
    </>
  );
}
