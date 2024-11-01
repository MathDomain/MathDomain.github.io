import Navbar from './navbar/narbar'
import './App.css'
import React, {useState} from 'react'

function App() {

  const [page, setPage] = useState();

  const changeHandler = (e) => {

  }

  return (
    <>
            <nav className="bg-brandBackground m-0 flex items-center justify-between px-3">
                <div>
                    <img className="h-16" src={MathDomain}/>
                    <h1 className="md:hidden font-Montserrat text-4xl font-bold">MathDomain</h1>
                </div>
                <ul>
                    <li className="no-underline font-Montserrat bg-slate-400 hover:bg-brandText hover:text-brandBackground p-6" onClick={changeHandler}></li>
                </ul>
            </nav>
        </>
  )
}

export default App
