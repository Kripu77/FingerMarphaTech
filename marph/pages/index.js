import Head from 'next/head'

import Panels from '../components/body/Panels'
import Hero from '../components/Masthead/Hero'
import Nav from '../components/Masthead/Nav'
import SEO from '../components/SEO/SEO'
import BodySlider from '../components/slider/BodySlider'


export default function Home() {
  return (
   <main >
    <SEO/>
  <Nav/>
  <Hero/>
  <Panels/>
<BodySlider/>
   </main>
  )
}
