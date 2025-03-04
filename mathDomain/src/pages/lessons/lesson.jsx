import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Lessons() {
  const Hero = () => {
    return (
      <div className="h-96 relative overflow-hidden">
        <img src="./assets/img/stat-cropped1.jpg" className="h-full w-full" />
        <div className="inset-0 absolute flex items-end bg-gradient-to-t from-black to-transparent text-white">
          <div className="flex justify-center">
            <div className="p-4 max-w-2/4" id="details">
              <h1 className="text-5xl font-bold">Statistics and Probability</h1>
              <br />
              <p className="text-2xl">
                This course introduces the fundamental concepts of statistics and probability, focusing on data analysis, probability theory, and inferential statistics. Students will learn how to collect, organize, interpret, and analyze data using statistical methods, as well as apply probability models to real-world scenarios.
              </p>
            </div>
            <div className="w-1/2 flex items-center justify-center">
              <button className="bg-brand200 p-2 rounded-md text-white text-2xl">Enroll Now</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const MathContent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch("/data/lessons.json")
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error("Error loading lessons:", error));
    }, []);

    return (
      <ul className="flex flex-col">
        {data.map((lesson) => (
          <NavLink key={lesson.id} to={`/lessons/${lesson.lessonID}`}>
            <li className='border-2 border-gray-300 p-4 rounded-md m-2'>
              <h1>{lesson.title}</h1>
            </li>
          </NavLink>
        ))}
      </ul>
    );
  };

  return (
    <>
      <Hero />
      <MathContent />
    </>
  );
}
