function Footer(props){

    return(
    <section id="footer" className='bg-brand100 position:fixed bottom-0 p-10'>
        <div className='flex items-center'>
            <img src="/assets/logo/MathDomain v4-02.png" alt="MathDomain Logo" className='h-14 float-left'/>
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