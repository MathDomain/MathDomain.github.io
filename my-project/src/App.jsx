import React, { useState } from 'react';
import Navbar from './Pages/e_navbar/narbar.jsx';
import './App.css';
import Home from './Pages/p_Home/Home.jsx';
import Courses from './Pages/p_Courses/Courses.jsx';
import Lessons from './Pages/p_Lessons/Lessons.jsx';
import About from './Pages/p_About/About.jsx';
import Login from './Pages/p_login/Login.jsx';
import Footer from './Pages/e_footer/Footer.jsx';
import Signup from './Pages/p_signup/Signup.jsx';

function App() {
  const [page, setPage] = useState('Home');
  const [isLoggedin, setIsLoggedin] = useState(false); // Use state for login status

  const changeHandler = (e, newPage) => {
    const targetPage = newPage || e.target.innerHTML;
    setPage(targetPage);
    console.log(targetPage);
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
    }
  };

  return (
    <>
      <Navbar changeHandler={changeHandler} isloggedin={isLoggedin} />
      <main>
        {isLoggedin ? 'User is logged in' : renderPage()}
      </main>
      <Footer changeHandler={changeHandler}></Footer>
    </>
  );
}

export default App;
