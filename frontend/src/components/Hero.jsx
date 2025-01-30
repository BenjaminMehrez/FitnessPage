import React from "react";
import { Link } from "react-router-dom";
import "animate.css";

function Hero() {
  return (
    <section className="hero flex flex-col items-center justify-center text-center text-white gap-10 bg-cover bg-center relative">
      {/* Fondo con desenfoque */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <h1 className="text-3xl md:text-5xl font-extrabold leading-tight transform opacity-0 animate__animated animate__fadeIn animate__delay-0.8s">
        Transform Your Life with Fitness Supplements
      </h1>

      <p className="w-4/5 md:w-2/3 text-lg md:text-xl opacity-0 animate__animated animate__fadeIn animate__delay-1s">
        Achieve Peak Performance with Our Handpicked Fitness Supplements
      </p>

      <Link
        to="/products"
        className="btn mt-10 bg-white text-black px-8 py-4 rounded-lg font-bold transform opacity-0 animate__animated animate__fadeIn animate__delay-2s hover:bg-gray-200 transition duration-300"
      >
        Start Your Fitness Journey Now
      </Link>
    </section>
  );
}

export default Hero;
