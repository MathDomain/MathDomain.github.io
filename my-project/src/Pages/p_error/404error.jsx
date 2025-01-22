import { NavLink } from "react-router-dom";

function Error() {

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-9xl font-bold text-brandAccent">404</h1>
            <h3 className="text-3xl font-bold text-brandAccent">Page Not Found</h3> 
            <NavLink to="/" className="text-xl font-bold text-white p-2 mt-2 bg-brandAccent rounded-lg">Go back to Home</NavLink>
        </div>
    );

};

export default Error;