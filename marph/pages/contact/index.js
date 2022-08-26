import React from 'react'
import InTouch from '../../components/body/InTouch'
import Map from '../../components/location/Map'
import Contact from '../../components/Masthead/Contact'
import Nav from '../../components/Masthead/Nav'

const index = () => {
  return (
  <main>
    <Nav/>
    <Contact/>
    <InTouch/>
    <Map/>
  </main>
  )
}

export default index