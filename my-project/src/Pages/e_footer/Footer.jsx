function Footer(props){

    return(
    <section id="footer" className='bg-brand100 position:fixed bottom-0 p-10'>
        <div className='flex items-center'>
            <img src="/assets/logo/MathDomainv3-white.png" alt="MathDomain Logo" className='h-14 float-left'/>
            <h1 className='font-MontRSub text-brandBackground font-bold'>MathDomain</h1>
        </div>
        <div className='font-Montserrat text-brandBackground'>
        <ul>
            {['Home', 'Courses','Lessons', 'About', 'Log In', 'Sign Up'].map((menu) => ( 
            <li key={menu}
            onClick={() => props.changeHandler(null, "Home")}
            className="cursor-pointer">{menu}</li>
            ))}</ul>
        <ul>
        </ul>
        </div>
    </section>)
}
export default Footer