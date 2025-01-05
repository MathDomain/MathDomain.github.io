import React, { useState } from 'react';
import styles from './Home.module.css'
import wave from './wavesNegative (1).svg'
import Card from './e_cards/Card.jsx'
import App from '../../App.jsx'
import Footer from '../e_footer/Footer.jsx'

const Home = () => {
  const [page, setPage] = useState('');

  const changeHandler = (e) => {
    const value = e.target.innerHTML;
    setPage(value);
    console.log(page);
  };

  return (
    <div className="home">
      <section id="hero" className="bg-brandGradient flex justify-center flex-col items-left rounded-2xl 
      m-4 px-4 md:py-44 py-20 transition duration-300">
        <h1 className="text-left md:text-7xl text-5xl font-bold text-white transition duration-300">
          Learn Math, <br />
          made easier.
        </h1>
        <h5 className="md:text-3xl text-white text-lg transition duration-300">
          With MathDomain.
        </h5>
        <input type="text" placeholder="Search for a course" className="w-1/2 p-2 rounded-full" />
      </section>
      <section id="secondpage" className="bg-white flex flex-col items-center justify-center py-20">
        <h1 className="text-4xl font-bold text-brandText">Our Mission</h1>
        <p className='text-2xl md:max-w-xl max-w-60 text-center mt-11'>
          Our Mission is to give students a way to learn math, in the easiest, most enjoyable, 
          and accessible way.</p>
        </section>
        <section className='bg-brand200 flex flex-col items-start justify-center md:px-4 md:py-2 px-2 py-4'>
          <h1 className="text-3xl text-white ">Courses Offered:</h1>
          <section className="flex justify-around w-full flex-wrap my-4">
            <Card image="./assets/Math-01.png"
            name="Statistics"
            definition="a courses fully tailored for learning Statistics and Probability." />
            <Card image="./assets/Math-01.png"
            name="Algebra"
            definition="Learning algebra was never made easier than this."/>
          </section>
        </section>
    </div>
  );
};

export default Home;