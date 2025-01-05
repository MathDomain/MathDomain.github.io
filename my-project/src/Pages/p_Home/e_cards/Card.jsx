function Card(props){
    return (
        <div className="bg-white flex items-center px-4 py-2 m-2 rounded-2xl">
            <img src={props.image} alt={props.name} className="h-28 md:h-44"/>
            <section className="mx-2">
                <h1 className=" md:text-3xl font-bold">{props.name}</h1>
                <p className="md:text-xl max-w-72 my-1">{props.definition}</p>
                <button className="bg-brand300 font-bold text-brandBackground 
                rounded-full py-1 px-3">Learn Now.</button>
            </section>
        </div>
    );
}

export default Card