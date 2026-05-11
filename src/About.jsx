import React from 'react'
import AboutUsKvasition from './AboutUsKvasition'
import AboutOurStory from './AboutOurStory'
import AboutOur from './AboutOur'
import AboutSubscribe from './AboutSubscribe'
import AboutFooter from './AboutFooter'

function About() {
  return (
    <>
       <div className='outerBorderAboutpage'>
        <AboutUsKvasition/>
        <AboutOurStory />
        <AboutOur />
        <AboutSubscribe/>
          </div>
         <AboutFooter />
     
       </>
  )
}

export default About
