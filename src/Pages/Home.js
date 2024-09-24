import React from 'react'
import Hero from '../Components/Hero/Hero'
import BriefIntro from '../Components/BriefIntro/BriefIntro'
import FeatProjects from '../Components/FestProjects/FeatProjects'
import Skills from '../Components/Skills/Skills'
// import ResumeBtn from '../Components/ResumeBtn/ResumeBtn'

function Home() {
  return (
    <main>
      <Hero />
      <BriefIntro />
      <Skills/>
      <FeatProjects />

      {/* <ResumeBtn /> */}
    </main>
  )
}

export default Home
