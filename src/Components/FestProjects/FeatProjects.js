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
    <section className="feat-project">
      <h2>Featured Projects</h2>
      {featData.map((data) => {
        function index() {
          let increment = 0;
          increment++;
          return increment;
        }
        return (
          <article key={index} className="feat-project__sub-cont">
            <img
              src={data.image}
              alt={data.name}
              className="feat-project__image"
            />
            <a className="feat-project__name-link" href={data.url}>
              <h3 className="feat-project__name">{data.name} </h3>
            </a>
            <p className="feat-project__description">{data.description}</p>
            <ul className="feat-project__tech-stack">
              {data["tech-stack"].map((tech) => {
                return (
                  <li className="feat-project__tech-stack-text">{tech}</li>
                );
              })}
            </ul>
            <a href={data.url} className="feat-project__url">
              {data.url}
            </a>
          </article>
        );
      })}
      <NavLink to="/projects">
        <button className="feat-project__btn">View All Projects</button>
      </NavLink>
    </section>
  );
}

export default FeatProjects;
