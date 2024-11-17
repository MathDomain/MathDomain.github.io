import styles from './Home.module.css'
import wave from './wavesNegative (1).svg'
import Card from './e_cards/Card.jsx'
import App from '../../App.jsx'

function Home(props){

    const changeHandler = (e) => {
        const value = e.target.innerHTML;
        setPage(value);
        console.log(page);
      }

    if (props.value == 'Home'){
        console.log("Selected Home page")
    return(
        <div className={`home`}>
            <section className={styles.sec1cont} id='section1'>
            <div id="sec1cont" className={`${styles.container} p-14`}>
                    <h1 className={`font-MontBSub tracking-tighter text-brandBackground`}>MathDomain</h1>
                    <p className="text-4xl text-brandBackground">Learn Math, the Easy Way.</p>
                    <button className='text-2xl py-1 px-2 w-52 border-brandAccent border-2 rounded bg-brandBackground my-6' onClick={() => props.changeHandler(null, "About")}>Sign up</button>
            </div>
            </section>
            <img src={wave} className='bg-brandBackground'/>
            <section className='w-full flex justify-center items-center p-24 flex-col bg-brandBackground' id='section2'>
                <div className='text-center flex-col max-w-4xl'>
                    <h1 className='font-Montserrat font-bold text-4xl'>
                        Our Mission
                    </h1>
                    <br/>
                    <p className='break-words'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla ratione aperiam unde atque eveniet laboriosam ipsam aut voluptates corporis nesciunt. Eligendi magnam voluptatum facilis ducimus quis nihil soluta officia repellat!
                    </p>
                    <br/>
                    <input  className="bg-brandPrimary px-4 py-3 rounded-full w-32" type="button" value="About us"/>
                </div>
            </section>
            <section id='card' className='p-5 flex justify-center flex-col font-Montserrat bg-brandBackground'>
                <h1 className='text-center text-2xl'>We offer Courses for:</h1>
                <cards className='m-6 flex flex-row justify-around flex-wrap'>
                <Card image="/assets/squareroot-02-02.svg" name='Algebra'/>
                <Card image="/assets/angle-02.svg" name="Trigonometry"/>
                <Card image="/assets/calculus-02.svg" name="Calculus"/>
                </cards>
            </section>
            <section id="footer" className='bg-brandAccent p-10'>
                <div className='flex items-center'>
                    <img src="/assets/logo/MathDomainv3-white.png" alt="MathDomain Logo" className='h-14 float-left'/>
                    <h1 className='font-MontRSub text-brandBackground font-bold'>MathDomain</h1>
                </div>
                <div className='font-Montserrat text-brandBackground'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Courses</li>
                    <li>Lesson</li>
                </ul>
                <ul>
                    <li>Sign Up</li>
                    <li>Log In</li>
                </ul>
                </div>
            </section>
        </div>
    );
    }
}
export default Home;