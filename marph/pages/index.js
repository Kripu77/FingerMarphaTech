import Head from 'next/head'

import Panels from '../components/body/Panels'
import Hero from '../components/Masthead/Hero'
import Nav from '../components/Masthead/Nav'
import BodySlider from '../components/slider/BodySlider'


export default function Home() {
  return (
   <main >
  <Nav/>
  <Hero/>
  <Panels/>
<BodySlider/>
   </main>
  )
}
