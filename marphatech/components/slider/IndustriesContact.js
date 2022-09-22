import React from 'react'
import Footer from '../Footer/Footer'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import data from '../../data.js/IndustrySlider';
import Contact from './Contact';

const IndustriesContact = () => {
    
  return (
    <section className="  bg-green-100">
      <section className=" p-20    text-center max-w-screen-md mx-auto">
        <Carousel
          dditionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=" "
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 1,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 1,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {data.map((singleData) => {
            const { id, header, contact } = singleData;
            return (
              <div className="space-y-6 pb-4" key={id}>
                <h1 className="text-2xl font-serif"> {header}</h1>
                <h2 className="text-lg">{contact}</h2>
              </div>
            );
          })}
        </Carousel>
      </section>
      <Contact/>
      <Footer />
    </section>
  );
}

export default IndustriesContact