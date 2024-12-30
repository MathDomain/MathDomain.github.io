function Login(props){

    return(
<div className="flex items-center h-full w-full">
<div className="border-2 border-red-600 flex flex-col items-center rounded-xl w-96 p-2">
    <img src='/assets/logo/MathDomain-v3.png' className="h-24 w-24"/>
    <h1>MathDomain Login</h1>
    <div id="login field" className="">
        <h1 className="text-left">Username:</h1>
        <input className="border-2 border-black rounded-full w-72"></input>
    </div>
</div>
</div>
    )
}

export default Login