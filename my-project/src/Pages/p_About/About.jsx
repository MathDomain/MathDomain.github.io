import E_Header from '../e_header/header.jsx'

function About(props){

    if (props.value == 'About'){
        console.log("Selected Home page")
    return(
        <>
        <E_Header page="About"/>
        </>
    )
}
}

export default About;