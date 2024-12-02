import E_Header from '../e_header/header.jsx'
import Footer from '../e_footer/Footer.jsx'

function Courses(props){

    const changeHandler = (e) => {
        const value = e.target.innerHTML;
        setPage(value);
        console.log(page);
      }
    if(props.value == 'Courses'){
        return(
            <>
            <E_Header page="Courses"/>
            <Footer changeHandler={changeHandler}/>
            </>
        )
    }
}
export default Courses