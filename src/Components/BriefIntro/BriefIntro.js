import React from "react";
import "./BriefIntro.scss";

function BriefIntro() {
  return (
    <article className="intro">
      <h2 className="intro__header">Welcome to My Portfolio!</h2>
      <section className="intro__sub-section-a">
        <p className="intro__sub-text">
        I'm Devin, a full-stack software engineer with a passion for building robust, scalable applications from end to end. With expertise in both front-end frameworks like React and Flutter, and back-end technologies like Node.js and PostgreSQL, I create seamless, dynamic user experiences while ensuring the server-side logic is efficient and reliable.

I thrive in environments where I can take ownership of the entire development lifecycle-designing responsive interfaces, integrating complex APIs, and optimizing databases for performance. My projects range from mobile apps and interactive websites to backend services and custom API solutions, always with a focus on clean, maintainable code.

When I'm not deep in code, I'm exploring creative projects like laser cutting and 3D printing, finding new ways to blend technology and art.
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
