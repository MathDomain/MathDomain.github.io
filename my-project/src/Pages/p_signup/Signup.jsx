import React from 'react';
import FloatingLabelInput from '../e_inputs/Inputs';

function Signup(props){

    return(
        <>
        <div className="flex items-center justify-center h-full w-full md:p-12 py-10">
            <div className="md:border-2 border-brand200 flex flex-col items-center rounded-xl p-2">
                <img src='/assets/logo/MathDomain-v3.png' className="h-24 w-24"/>
                <h1 className='text-center'>MathDomain Sign Up Page</h1>
                <div id="loginfield" className="rounded-xl p-2">
                    <form className='flex flex-col items-center'>
                    <section id="name"className="flex flex-row justify-around w-full gap-2">
                        <FloatingLabelInput id="fname" label="First Name" type="text" className=''/>
                        <FloatingLabelInput id="lname" label="Last Name" type="text" className=''/>
                    </section>
                    <section id="birthd" className='w-full'>
                        <div className={`relative w-full my-2`}>
                            <input
                                id="birthday"
                                type="date"
                                className={`peer w-full border border-gray-300 rounded-md p-2 
                                focus:outline-none focus:ring-2 focus:ring-blue-500 
                                transition-all`}/>
                            <label
                                htmlFor="birthday"
                                className={`absolute left-3 bg-white px-1 text-gray-500 pointer-events-none transition-all
                                text-xs -top-2`}>
                                Birthday
                            </label>
                        </div>
                    </section>
                    <FloatingLabelInput id="username" label="Username" type="text" className=''/>
                    <FloatingLabelInput id="email" label="Email" type="email" className=''/>
                    <section id="Password" className='flex flex-row justify-around w-full gap-2'>
                        <FloatingLabelInput id="password" label="Password" type="Password" className="" />
                        <FloatingLabelInput id="cpassword" label="Confirm Password" type="Password" className="" />
                    </section>
                    <button className="bg-brand200 text-white rounded-md 
                    px-4 py-1 text-center m-1 cursor-pointer">Sign Up</button>
                    </form>
                    <p className='text-center'>Already have an account? <a href="#" className="text-blue-500" onClick={() => props.changeHandler(null, "Log In")}>Log In</a></p>
                </div>
            </div>
</div>
        </>
    );
};

export default Signup;