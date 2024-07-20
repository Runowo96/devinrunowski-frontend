import React from "react";
import "./Hero.scss";
import devinImage from "../../assets/images/sketch-portait.jpg";

function Hero() {
  return (
    <div className="hero">
      <section className="hero__section">
        <h1 className="hero__title">Devin Runowski</h1>
        <h2>Software Engineer</h2>
      </section>

      <img className="hero__image" src={devinImage} alt="Devin Runowski" />
    </div>
  );
}

export default Hero;
