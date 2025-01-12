import React from 'react';
import styles from './Login.module.css';
import FloatingLabelInput from '../e_inputs/Inputs.jsx';

function Login(props) {
  const { setIsLoggedin, changeHandler } = props;

  const handleLogin = (e) => {
    setIsLoggedin(true);
    console.log(setIsLoggedin);
    changeHandler(e, "Dashboard");
  };

  return (
    <div className="flex items-center justify-center h-full w-full md:p-36 py-10">
      <div className="md:border-2 border-brand200 flex flex-col items-center rounded-xl p-2">
        <img
          src="/assets/logo/MathDomain-v3.png"
          className="h-24 w-24"
          alt="MathDomain Logo"
        />
        <h1 className="text-center">MathDomain Log In</h1>
        <div id="loginfield" className="rounded-xl p-2">
          <form className="flex flex-col items-center">
            <FloatingLabelInput
              id="username"
              label="Username"
              type="text"
              className=""
            />
            <FloatingLabelInput
              id="password"
              label="Password"
              type="Password"
              className=""
            />
            <button
              type="submit"
              className="bg-brand200 text-white rounded-md px-4 py-1 text-center m-1 cursor-pointer"
              onClick={handleLogin}
            >
              Log In
            </button>
          </form>
          <p className="text-center">
            Don't have an account?{' '}
            <a
              href="#"
              className="text-blue-500"
              onClick={() => changeHandler(null, 'Sign Up')}
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
