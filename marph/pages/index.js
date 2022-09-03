import Head from 'next/head'

import Panels from '../components/body/Panels'
import Hero from '../components/Masthead/Hero'
import Nav from '../components/Masthead/Nav'
import ScrollToTop from '../components/Scroll/ScrollToTop'
import SEO from '../components/SEO/SEO'
import BodySlider from '../components/slider/BodySlider'
import panelData from '../data.js/PanelData'


export default function Home() {
  return (
    <main>
      <Hero
        primaryInfo="Human Experience Matters to us!!"
        secondaryInfo="Fingermarpha™ empowers your team to unlock game-changing improvements in operational efficiency, health and safety, and customer experience."
        videoLink="https://player.vimeo.com/external/461626348.sd.mp4?s=07a7a2cec45f2ec31a683f6569c08028da2803e5&profile_id=165"
        btnText="Tell me more"
      />
      <Panels panel={panelData} btnTextOne="Our QSR Tecgnology" btnTextTwo="Agriculture & Mining" />
      <BodySlider primaryInfo={"Brands We Work With!"} />
      <ScrollToTop/>
    </main>
  );
}
