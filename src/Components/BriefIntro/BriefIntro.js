import React from "react";
import "./BriefIntro.scss";

function BriefIntro() {
  return (
    <article className="intro">
      <h2 className="intro__header">Welcome to My Portfolio!</h2>
      <section className="intro__sub-section-a">
        <p className="intro__sub-text intro__sub-section-ab">
          Hi, I'm Devin Runowski, a passionate software engineer with a strong
          background in HTML, CSS, JavaScript, React, and APIs. With a knack for
          problem-solving and a love for coding, I thrive on creating innovative
          and efficient solutions. My journey in software engineering has
          equipped me with a diverse set of skills, and I am currently expanding
          my expertise by learning Flutter and Python to dive into mobile app
          development and artificial intelligence.
        </p>
        <hr class="solid intro__divider"/>
        <section className="intro__sub-section-ab">
          <p className="intro__sub-text">
            I enjoy turning complex challenges into elegant, user-friendly
            applications. Whether it's developing a sleek web interface or
            designing a robust backend system, I am dedicated to delivering
            high-quality work that meets the needs of users and clients alike.
          </p>
          <p className="intro__sub-text">
            Explore my portfolio to see some of the projects I've worked on,
            learn more about my skills and experiences, and feel free to get in
            touch if you'd like to collaborate or have any questions.
          </p>
        </section>
      </section>
      <p className="intro__sub-text">Thank you for visiting!</p>
    </article>
  );
}

export default BriefIntro;
