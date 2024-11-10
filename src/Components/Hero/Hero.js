import React from "react";
import "./Hero.scss";
import devinImage from "../../assets/images/sketch-portait.jpg";

function Hero() {
  return (
    <section className="hero">
      <article className="hero__section">
        <h1 className="hero__title">Devin Runowski</h1>
        <h2>Software Engineer</h2>
        <h2>Creative Technologist</h2>
        <article className="hero__traits">
          <p>ATTENTION TO DETAIL</p>
          <hr class="solid" />
          <p>TEAM ORIENTED</p>
          <hr class="solid" />
          <p>RESPONSIVE DESIGN</p>
        </article>
      </article>

      <img className="hero__image" src={devinImage} alt="Devin Runowski" />
    </section>
  );
}

export default Hero;
