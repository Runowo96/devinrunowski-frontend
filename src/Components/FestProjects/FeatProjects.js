import React from "react";
import "./FeatProjects.scss";
import projectData from "../../data/projects-data.json";
import { NavLink } from "react-router-dom";

function FeatProjects() {
  const featData = [];
  for (let i = 0; i < 2; i++) {
    featData.push(projectData[i]);
  }
  return (
    <>
      <h2 className="feat-project__header">Projects</h2>
      {/* <h2 className="feat-project__header">Featured Projects</h2> */}

      <section className="feat-project">
        {/*featData*/projectData.map((data) => {
          function index() {
            let increment = 0;
            increment++;
            return increment;
          }
          return (
            <a href={data.url} className="feat-project__url">
              <article key={index} className="feat-project__sub-cont">
                <article className="feat-project__img-name-cont">
                  <img
                    src={data.image}
                    alt={data.name}
                    className="feat-project__image"
                  />
                  <h3 className="feat-project__name">{data.name} </h3>
                </article>
                <article className="feat-project__des-cont">
                  <h3 className="feat-project__name feat-project__name--desktop">
                    {data.name}
                  </h3>
                  <p className="feat-project__description">
                    {data.description}
                  </p>
                  <h4 className="feat-project__tech-stack-text">
                    <strong>Tech Stack:</strong>
                  </h4>
                  <ul className="feat-project__tech-stack">
                    {data["tech-stack"].map((tech) => {
                      return (
                        <li className="feat-project__tech-stack-text">
                          {tech}
                        </li>
                      );
                    })}
                  </ul>
                </article>
              </article>
            </a>
          );
        })}
      </section>
      {/* <NavLink className="feat-project__btn-cont" to="/projects">
        <button className="feat-project__btn">View All Projects</button>
      </NavLink> */}
    </>
  );
}

export default FeatProjects;
