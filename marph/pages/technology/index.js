import React from 'react'
import Nav from '../../components/Masthead/Nav'
import Hero from '../../components/Masthead/Hero';
import Panels from '../../components/body/Panels';
import techData from '../../data.js/TechnologyBody';
import BodySlider from '../../components/slider/BodySlider';

const index = () => {
  return (
    <main>
      <Nav />
      <Hero
        primaryInfo="Our QSR Technology"
        secondaryInfo="Unparalleled expertise in machine vision and data visualisation. Our solutions are designed to understand and apply technology and integrate to drive game changing improvements in your business and improve the human experience in a significant way. "
        videoLink="https://player.vimeo.com/external/461643346.hd.mp4?s=52a251e0100863382b727a2e6b82b75a14254021&profile_id=175"
        btnText="What do we offer?"
      />
      <Panels
        panel={techData}
        btnTextOne="Tell me More"
        btnTextTwo="Download Step Out of the Loop White paper"
      />
      <BodySlider primaryInfo="Trusted by the world's best restaurant brands" />
    </main>
  );
}

export default index