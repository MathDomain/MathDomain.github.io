import Navbar from './navbar/narbar'
import './App.css'
import React, {useState} from 'react'
import MathDomain from  './assets/logo/MathDomain-v3.png'
import Home from './Pages/p_Home/Home.jsx'
import Courses from './Pages/p_Courses/Courses.jsx'
import Lessons from './Pages/p_Lessons/Lessons.jsx'
import About from './Pages/p_About/About.jsx'

function App() {

  const [page, setPage] = useState('Login');

  const changeHandler = (e, page=null) => {
    const value = page || e.target.innerHTML;
    setPage(value);
    console.log(value);
  }
  // const changeHandler = (e) => {
  //   if (page == e.target.innerHTML)
    
  // }

  return (
    <>
            <nav className="bg-brandBackground m-0 flex items-center justify-between px-3">
                <div className="flex items-center">
                    <img className="h-12 p-1" src={MathDomain}/>
                    <h1 className="text-sm font-Montserrat font-bold">MathDomain</h1>
                </div>
                <input placeholder='Search for Math lessons' className='rounded-full px-2 py-0.5 w-72 border-brandSecondary border-2 lg:block hidden'></input>
                    <ul className=' items-center justify-center hidden md:flex'>
                        <li className="no-underline font-Montserrat hover:bg-brandText hover:text-brandBackground py-3 px-4 mx-4 active:bg-brandAccent transition" onClick={changeHandler} >Home</li>
                        <li className="no-underline font-Montserrat hover:bg-brandText hover:text-brandBackground py-3 px-4 mx-4 active:bg-brandAccent transition" onClick={changeHandler} >Courses</li>
                        <li className="no-underline font-Montserrat hover:bg-brandText hover:text-brandBackground py-3 px-4 mx-4 active:bg-brandAccent transition" onClick={changeHandler} >Lessons</li>
                        <li className="no-underline font-Montserrat hover:bg-brandText hover:text-brandBackground py-3 px-4 mx-4 active:bg-brandAccent transition" onClick={changeHandler} >About</li>
                    </ul>
            </nav>
            <main>
                <Home value={page} changeHandler={changeHandler}/>
                <Courses value={page} changeHandler={changeHandler}/>
                <Lessons value={page} changeHandler={changeHandler}/>
                <About value={page} changeHandler={changeHandler}/>
            </main>
        </>
  )
}

export default App
