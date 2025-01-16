import React, { useState } from 'react';
import Navbar from './Pages/e_navbar/navbar.jsx';
import './App.css';
import Home from './Pages/p_Home/Home.jsx';
import Courses from './Pages/p_Courses/Courses.jsx';
import Lessons from './Pages/p_Lessons/Lessons.jsx';
import About from './Pages/p_About/About.jsx';
import Login from './Pages/p_login/Login.jsx';
import Footer from './Pages/e_footer/Footer.jsx';
import Signup from './Pages/p_signup/Signup.jsx';
import Dashboard from './Pages/p_dash/dashboard.jsx';

function App() {
  const [isLoggedin, setIsLoggedin] = useState(true); // Use state for login status
  const [page, setPage] = useState(isLoggedin ? 'Dashboard': 'Home');

  const changeHandler = (e, page="") => {
    const value = e?.target?.innerHTML || page;
    setPage(value);
    console.log(page);
  };

  const renderPage = () => {
    switch (page) {
      case 'Home':
        return <Home />;
      case 'Courses':
        return <Courses />;
      case 'Lessons':
        return <Lessons />;
      case 'About':
        return <About />;
      case 'Log In':
        return (
          <Login
            changeHandler={changeHandler}
            setIsLoggedin={setIsLoggedin}
          />
        );
      case 'Sign Up':
        return <Signup changeHandler={changeHandler} />;
      case 'Dashboard':
        return <Dashboard/>;
      default:
        
    }
  };

  return (
    <>
      <Navbar changeHandler={changeHandler} isloggedin={isLoggedin} />
      <main>
        {renderPage()}
      </main>
      <Footer changeHandler={changeHandler}></Footer>
    </>
  );
}

export default App;
