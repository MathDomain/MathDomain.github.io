function Footer(props){

    return(
    <section id="footer" className='bg-brandAccent p-10'>
        <div className='flex items-center'>
            <img src="/assets/logo/MathDomainv3-white.png" alt="MathDomain Logo" className='h-14 float-left'/>
            <h1 className='font-MontRSub text-brandBackground font-bold'>MathDomain</h1>
        </div>
        <div className='font-Montserrat text-brandBackground'>
        <ul>
            <li onClick={() => props.changeHandler(null, "Home")}>Home</li>
            <li onClick={() => props.changeHandler(null, "About")}>About</li>
            <li onClick={() => props.changeHandler(null, "Courses")}>Courses</li>
            <li onClick={() => props.changeHandler(null, "Lesson")}>Lesson</li>
        </ul>
        <ul>
            <li>Sign Up</li>
            <li>Log In</li>
        </ul>
        </div>
    </section>)
}
export default Footer