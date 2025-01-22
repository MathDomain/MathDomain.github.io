import { useEffect, useState } from "react";

function HisCard(props){

    const [course, setCourse] = useState("Course");
    const [subject, setSubject] = useState("Subject");
    const [score, setScore] = useState("Subject");
    const [totalscore, setTotalScore] = useState("Subject");

    const setInfos = () => {
        setCourse(props.course);
        setSubject(props.subject);
        setScore(props.score);
        setTotalScore(props.total);
    };

    useEffect(() => {
        setInfos();
      }, [props.course, props.subject]);

    return(<div className="mx-2 border-2 border-brand200 shadow-lg
     flex flex-col p-2 max-w-60">
        <img src="/assets/landscape-placeholder.svg" className="h-44"/>
        <section id="texts" className="flex justify-between">
            <section id="details" className="flex flex-col max-w-40">
                <h1 className="text-xl font-bold">{course}</h1>
                <h1 className="text-md">{subject}</h1>
            </section>
            <section id="score">
                <h1 className="text-2xl text-center">{score}</h1>
                <hr/>
                <h1 className="text-2xl text-center">{totalscore}</h1>
            </section>
        </section>
    </div>)

}
export default HisCard;