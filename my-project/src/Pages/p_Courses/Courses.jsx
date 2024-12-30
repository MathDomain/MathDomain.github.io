import E_Header from '../e_header/header.jsx'
import Footer from '../e_footer/Footer.jsx'
import CardCourses from './e_cards/Card_courses.jsx'

function Courses(props){

    const changeHandler = (e) => {
        const value = e.target.innerHTML;
        setPage(value);
        console.log(page);
      }
        return(
            <>
            <E_Header page="Courses"/>
            <div className="border-2 border-brandAccent">
                <CardCourses image="/assets/pexels-alesiakozik-6770610.jpg" alt="statistics"/>
            </div>
            <Footer changeHandler={changeHandler}/>
            </>
        )
    }
export default Courses