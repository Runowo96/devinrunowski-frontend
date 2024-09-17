import React from "react";
import "./BriefIntro.scss";

function BriefIntro() {
  return (
    <article className="intro">
      <h2 className="intro__header">Welcome to My Portfolio!</h2>
      <section className="intro__sub-section-a">
        <p className="intro__sub-text">
          Hi, I'm Devin Runowski, a software engineer with a passion for
          building and learning. My journey from summer projects on the family
          farm to software development has been fueled by a love for
          problem-solving and creating user-friendly applications. With
          expertise in HTML, CSS, JavaScript, React, and APIs, I'm currently
          diving into Flutter and Python to explore mobile app development and
          AI. Check out my projects and feel free to reach out – I’m always
          excited to connect and collaborate!
        </p>
        {/* <hr class="solid intro__divider"/> */}
        {/* <section className="intro__sub-section-ab">
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
        </section> */}
      </section>
      <p className="intro__sub-text">Thank you for visiting!</p>
    </article>
  );
}

export default BriefIntro;
