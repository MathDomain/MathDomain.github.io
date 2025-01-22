import {Link} from 'react-router-dom'

function CardCourses(props){

    return(
        <>
        <div className="h-80 w-80 shadow-2xl rounded-xl overflow-hidden flex flex-col">
            <img src={props.image} alt={props.alt} className=""/>
            <section className='px-4 py-2'>
                <h1 className="text-4xl">{props.course}</h1>
                <section className='mt-4'>
                    <Link to={`/courses/${props.course.toLowerCase()}`} className="text-center bg-brand200 text-white py-2 px-4 rounded">
                              Go to {props.course}
                            </Link>
                </section>
            </section>
        </div>
        </>
    )
}

export default CardCourses