import React, { useState } from 'react';
import { createBrowserRouter, Route, RouterProvider, Outlet, Navigate, createRoutesFromElements } from 'react-router-dom';

import Navbar from './Components/e_navbar/navbar.jsx';
import './App.css';
import Home from './Pages/p_Home/Home.jsx';
import Courses from './Pages/p_Courses/p_maincourse/Courses.jsx';
import Lessons from './Pages/p_Lessons/Lessons.jsx';
import About from './Pages/p_About/About.jsx';
import Login from './Pages/Accounts Center/p_login/Login.jsx';
import Footer from './Components/e_footer/Footer.jsx';
import Signup from './Pages/Accounts Center/p_signup/Signup.jsx';
import Dashboard from './Pages/Accounts Center/p_dash/dashboard.jsx';
import ErrorPage from './Pages/p_error/404error.jsx';
import CoursePage from './Pages/p_Courses/p_maincourse/coursepage.jsx';

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);

  const Layout = () => (
    <div>
      <Navbar isloggedin={isLoggedin} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />}/>
        <Route path="courses" element={<Courses/>}/>
        <Route path="courses/:course" element={<CoursePage/>}/>
        <Route path="lessons" element={<Lessons/>}/>
        <Route path="about" element={<About/>}/>
      </Route>
    ),
  );

  return (<RouterProvider router={router} />);
}

export default App;
