import React from 'react'
import { Hero } from '../sections/about/hero'
import { WhoWeAre } from '../sections/about/who_we_are'
import { Process } from '../sections/about/process'
import { Mission } from '../sections/about/mission'
import { Benefit } from '../sections/about/benefit.jsx'
import { Team } from '../sections/about/team'

const About = () => {
  return (
    <>
      <Hero />
     <WhoWeAre />
      <Process />
     <Mission />
        {/* <Benefit />
      <Team/> */}
    </>
  )
}

export default About
