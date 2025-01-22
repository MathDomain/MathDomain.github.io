import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar(props) {
  const isloggedin = props.isloggedin;

  const navlinkstyle = 
  "no-underline font-Montserrat hover:bg-brandText hover:text-brandBackground my-1 py-2 px-4 mx-4 active:bg-brandAccent transition duration-300 cursor-pointer rounded-md"

  return (
    <nav className="bg-white border-b-2 border-black m-0 flex items-center justify-between px-3 shadow-md">
      <div className="flex items-center cursor-pointer" onClick={() => props.changeHandler(null, "Home")}>
        <NavLink to="/"><img className="h-10 p-1" src='./assets/logo/MathDomain v4-01.png' alt="MathDomain Logo" /></NavLink>
      </div>
      <ul className="items-center justify-center hidden lg:flex">
        <NavLink to="/">
        <li className={navlinkstyle}> Home
          </li></NavLink>
        <NavLink to="/courses">
          <li className={navlinkstyle} 
          onClick={() => props.changeHandler(null, "Courses")}>Courses</li>
        </NavLink>
        <NavLink to="/lessons">
          <li className={navlinkstyle} 
          onClick={() => props.changeHandler(null, "Lessons")}>Lessons</li>
        </NavLink>
        <NavLink to="/about">
          <li className={navlinkstyle} o
          nClick={() => props.changeHandler(null, "About")}>About</li>
        </NavLink>
      </ul>
      <ul className={`hidden ${isloggedin ? 'md:hidden' : 'md:flex'}`}>
        <NavLink to='/login'>
          <li className='border-brand200 border-2
          rounded-md px-4 py-1 text-center m-1 cursor-pointer' 
          onClick={props.changeHandler}>Log In</li>
        </NavLink>
        <NavLink to='/signup'>
          <li className='bg-brand200 text-white
          rounded-md px-4 py-1 text-center m-1 cursor-pointer' 
          onClick={props.changeHandler}>Sign Up</li>
        </NavLink>
      </ul>
      <NavLink to={isloggedin ? '/dashboard' : '/login'} 
      className={`  ${isloggedin ? 'md:relative' : 'md:hidden'} cursor-pointer`}>
        <img
          src="./assets/icons/Profile.png"
          className={`w-12 h-13 p-2 ${isloggedin ? 'md:relative' : 'md:hidden'} cursor-pointer`}
          onClick={() => props.changeHandler(null, isloggedin ? 'Dashboard' : 'Log In')}
          />
      </NavLink>

    </nav>
  );
}

export default Navbar;