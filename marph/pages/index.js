import Head from 'next/head'
import Panels from '../components/body/Panels'
import Hero from '../components/Masthead/Hero'
import Nav from '../components/Masthead/Nav'


export default function Home() {
  return (
   <main >
  <Nav/>
  <Hero/>
  <Panels/>
   </main>
  )
}
