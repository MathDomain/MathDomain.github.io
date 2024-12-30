function CardCourses(props){

    return(
        <>
        <div className="h-80 w-80 border-2 border-red-500 rounded-3xl">
            <img src={props.image} alt={props.alt} className=""/>
            <h1 className="text-4xl">Name</h1>
        </div>
        </>
    )
}

export default CardCourses