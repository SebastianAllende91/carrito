import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div
        className="container text-center position-relative"
        data-aos="fade-in"
        data-aos-delay="200"
      >
        <h1>Bienvenido al Ecommerce</h1>
        <h2>Trabajo Práctico para la Universidad de Lomas de Zamora</h2>
        <a href="#about" className="btn-get-started scrollto">
          Empezar
        </a>
      </div>
    </section>
  );
};

export default Hero;
