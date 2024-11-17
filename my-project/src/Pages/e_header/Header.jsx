import styles from './Header.module.css'

function E_Header(props){
  return(
    <>
    <div className={`h-full bg-brandGradient ${styles.header}`} id="">
      <h1 className='font-Montserrat font-bold text-brandBackground p-4 text-2xl'>MathDomain.{props.page}</h1>
    </div>
    </>
  );  
}

export default E_Header;