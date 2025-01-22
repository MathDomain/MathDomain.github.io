import React, { useState } from 'react';
import { useNavigate, Link} from 'react-router-dom';
import FloatingLabelInput from '../../../Components/e_inputs/Inputs.jsx';

function Login(props) {
  const { setIsLoggedin, changeHandler } = props;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); // Add a loading state

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading state
    setTimeout(() => { // Simulate login process
      setIsLoggedin(true);
      setIsLoading(false); // End loading state
      navigate('/dashboard');
    }, 1000); // Simulate a 1-second delay
  };

  return (
    <div className="flex items-center justify-center h-full w-full md:p-36 py-10">
      <div className="md:border-2 border-brand200 flex flex-col items-center rounded-xl p-2">
        <img
          src="/assets/logo/MathDomain v4-01.png"
          className="h-14 m-4"
          alt="MathDomain Logo"
        />
        {/* <h1 className="text-center">MathDomain Log In</h1> */}
        <div id="loginfield" className="rounded-xl p-2">
          <form className="flex flex-col items-center" onSubmit={handleLogin}>
            <FloatingLabelInput
              id="username"
              label="Username"
              type="text"
              className=""
            />
            <FloatingLabelInput
              id="password"
              label="Password"
              type="password"
              className=""
            />
            <button
              type="submit"
              className={`bg-brand200 text-white rounded-md px-4 py-1 text-center m-1 cursor-pointer ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isLoading} // Disable button during loading
            >
              {isLoading ? 'Logging in...' : 'Log In'}
            </button>
          </form>
          <p className="text-center">
            Don't have an account?{' '}
            <Link
              to="/Signup"
              className="text-blue-500"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
