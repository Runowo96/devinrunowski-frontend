import React from 'react'
import "./Skills.scss"
import skillData from "../../data/skills-icon-data.json"

function Skills() {
    const frontData = skillData[0].frontend;
    const backData = skillData[1].backend;
    const devToolsData = skillData[2].devtools;
  return (
    <>
      <h2 className='skills__header'>Skills</h2>
      <section className='skills__sub-container'>
      <h3 className='skills__sub-header'>Front-End</h3>
      <article className='skills__section'>
      {frontData.map((data)=>{
        function index() {
            let increment = 0;
            increment++;
            return increment;
          }
        return(
            <article className='skills__sub-sect' key={index}>
            <h4 key={index}>{data.name}</h4>
            <img className='skills__img' src={data.img} alt={data.name}/>
            </article>
        )
      })}
      </article>


      </section>
      <section className='skills__sub-container'>
      <h3 className='skills__sub-header'>Back-End</h3>
      <article className='skills__section'>
      {backData.map((data)=>{
        function index() {
            let increment = 0;
            increment++;
            return increment;
          }
        return(
            <article className='skills__sub-sect' key={index}>
            <h4 >{data.name}</h4>
            <img className='skills__img' src={data.img} alt={data.name}/>
            </article>
        )
      })}

      </article>

      </section>
      <section className='skills__sub-container'>
      <h3 className='skills__sub-header'>Deployment and Development Tools</h3>
      <article className='skills__section'>
      {devToolsData.map((data)=>{
        function index() {
            let increment = 0;
            increment++;
            return increment;
          }
        return(
            <article className='skills__sub-sect' key={index}>
            <h4 >{data.name}</h4>
            <img className='skills__img' src={data.img} alt={data.name}/>
            </article>
        )
      })}

      </article>

      </section>

    </>
  )
}

export default Skills
