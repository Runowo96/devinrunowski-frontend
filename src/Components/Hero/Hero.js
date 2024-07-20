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
      {/* <h2>Welcome to My Portfolio!</h2>
      <p>
        Hi, I'm Devin Runowski, a passionate software engineer with a strong
        background in HTML, CSS, JavaScript, React, and APIs. With a knack for
        problem-solving and a love for coding, I thrive on creating innovative
        and efficient solutions. My journey in software engineering has equipped
        me with a diverse set of skills, and I am currently expanding my
        expertise by learning Flutter and Python to dive into mobile app
        development and artificial intelligence.
      </p>
      <p>
        I enjoy turning complex challenges into elegant, user-friendly
        applications. Whether it's developing a sleek web interface or designing
        a robust backend system, I am dedicated to delivering high-quality work
        that meets the needs of users and clients alike.
      </p>
      <p>
        Explore my portfolio to see some of the projects I've worked on, learn
        more about my skills and experiences, and feel free to get in touch if
        you'd like to collaborate or have any questions.
      </p>
      <p>Thank you for visiting!</p> */}
    </div>
  );
}

export default Hero;
