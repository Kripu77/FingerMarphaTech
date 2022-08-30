import React from 'react'
import InTouch from '../../components/body/InTouch'
import Footer from '../../components/Footer/Footer'
import Map from '../../components/location/Map'
import Contact from '../../components/Masthead/Contact'
import Nav from '../../components/Masthead/Nav'

const index = () => {
  return (
  <main>
 
    <Contact/>
    <InTouch/>
    <Map/>
    <Footer/>
  </main>
  )
}

export default index