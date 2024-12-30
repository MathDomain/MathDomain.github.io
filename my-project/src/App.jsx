  import React, { useState } from 'react';
  import Navbar from './navbar/narbar';
  import './App.css';
  import MathDomainLogo from './assets/logo/MathDomain-v3.png';
  import Home from './Pages/p_Home/Home.jsx';
  import Courses from './Pages/p_Courses/Courses.jsx';
  import Lessons from './Pages/p_Lessons/Lessons.jsx';
  import About from './Pages/p_About/About.jsx';
  import Login from './Pages/p_login/Login.jsx';
  import Footer from './Pages/e_footer/Footer.jsx';

  function App() {
    const [page, setPage] = useState('Home');

    const changeHandler = (e, newPage = null) => {
      const targetPage = newPage || e.target.innerHTML;
      setPage(targetPage);
      console.log(targetPage);
    };

    const renderPage = () => {
      switch (page) {
        case 'Home':
          return <Home/>;
        case 'Courses':
          return <Courses/>;
        case 'Lessons':
          return <Lessons/>;
        case 'About':
          return <About/>;
        default:
          return <Login changeHandler={changeHandler} />;
      }
    };

    return (
      <>
        <nav className="bg-brandBackground m-0 flex items-center justify-between px-3">
          <div className="flex items-center cursor-pointer">
            <img className="h-12 p-1" src={MathDomainLogo} alt="MathDomain Logo" />
            <h1 className="text-xl font-Montserrat font-bold">MathDomain</h1>
          </div>
          <ul className="items-center justify-center hidden lg:flex">
            {['Home', 'Courses', 'Lessons', 'About'].map((menu) => (
              <li
                key={menu}
                className="no-underline font-Montserrat hover:bg-brandText hover:text-brandBackground py-3 px-4 mx-4 active:bg-brandAccent transition duration-300 cursor-pointer"
                onClick={changeHandler}
              >
                {menu}
              </li>
            ))}
          </ul>
          <ul className='md:flex hidden'>
            <li className='border-brand200 border-2 rounded-md px-4 py-1 text-center m-1 cursor-pointer'>Log In</li>
            <li className=' bg-brand200 text-white rounded-md px-4 py-1 text-center m-1 cursor-pointer'>Sign Up</li>
          </ul>
          <img src="./assets/User.png" className='w-12 h-13 p-2 md:hidden'/>
        </nav>
        <main>{renderPage()}</main>
        <Footer changeHandler={changeHandler}></Footer>
      </>
    );
  }

  export default App;
