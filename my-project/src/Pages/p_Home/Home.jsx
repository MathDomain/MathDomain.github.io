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
      <section id="hero" className="bg-brandGradient flex justify-center flex-col items-left rounded-2xl m-4 px-4 md:py-44 py-20 transition duration-300">
        <h1 className="text-left md:text-7xl text-5xl font-bold text-white transition duration-300">
          Learn Math, <br />
          made easier.
        </h1>
        <h5 className="md:text-3xl text-white text-lg transition duration-300">
          With MathDomain.
        </h5>
        <input type="text" placeholder="Search for a course" className="w-1/2 p-2 rounded-full" />
      </section>
    </div>
  );
};

export default Home;