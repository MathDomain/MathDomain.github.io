function Card(props){
    return (
        <div className="border-2 border-brandAccent w-52 flex justify-center flex-col rounded-xl p-6 shadow-2xl shadow-white">
            <img src={props.image} alt={props.name} className="h-44"/>
            <h1>{props.name}</h1>
            <button className="bg-brandAccent m-2 text-brandBackground rounded-full py-1 px-2">Learn Now.</button>
        </div>
    );
}

export default Card