import React from 'react'
import IndustriesCard from '../../components/body/IndustriesCard';
import Partnership from '../../components/body/Partnership';
import Footer from '../../components/Footer/Footer';
import Industries from '../../components/Masthead/Industries'
import Nav from '../../components/Masthead/Nav'
import IndustriesContact from '../../components/slider/IndustriesContact';


const index = () => {
  return (
    <main>
        <Nav />
        <Industries />
        <Partnership/>
        <IndustriesCard/>
        <IndustriesContact/>
        


    </main>
  );
}

export default index