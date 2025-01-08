import MathDomainLogo from "../assets/logo/MathDomain-v3.png"

function Navbar(props){

    const isloggedin = props.isloggedin;

    return(
        <nav className="bg-white border-b-2 border-black m-0 flex items-center justify-between px-3 shadow-md">
          <div className="flex items-center cursor-pointer" onClick={() => props.changeHandler(null, "Home")}>
            <img className="h-12 p-1" src={MathDomainLogo} alt="MathDomain Logo" />
            <h1 className="text-xl font-Montserrat font-bold md:flex hidden">MathDomain</h1>
          </div>
          <ul className="items-center justify-center hidden lg:flex">
            {['Home', 'Courses', 'Lessons', 'About'].map((menu) => (
              <li
                key={menu}
                className="no-underline font-Montserrat 
                hover:bg-brandText hover:text-brandBackground 
                my-1 py-2 px-4 mx-4 
                active:bg-brandAccent transition duration-300 cursor-pointer rounded-md"
                onClick={props.changeHandler}
              >
                {menu}
              </li>
            ))}
          </ul>
          <ul className={`  hidden ${isloggedin ? 'md:hidden' : 'md:flex'}`}>
            <li className='border-brand200 border-2 
            rounded-md px-4 py-1 text-center m-1 cursor-pointer' onClick={props.changeHandler}>Log In</li>
            <li className=' bg-brand200 text-white 
            rounded-md px-4 py-1 text-center m-1 cursor-pointer' onClick={props.changeHandler}>Sign Up</li>
          </ul>
          <img src="./assets/User.png" className={`w-12 h-13 p-2 ${isloggedin ? 'md:relative':'md:hidden'}`} 
          onClick={() => props.changeHandler(null, "Log In")}/>
        </nav>
    );
}

export default Navbar