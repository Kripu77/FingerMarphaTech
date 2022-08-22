import React from 'react'
import SliderData from "../../data.js/sliderData";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const PartnerSlider = () => {

    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 7,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
      },
    };
  return (
    <Carousel
      responsive={responsive}
      dditionalTransfrom={0}
      arrows={false}
      autoPlay={true}
      autoPlaySpeed={1}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      customTransition="all 7s linear"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={140}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      rewind={true}
      rewindWithAnimation={true}
      rtl={false}
      shouldResetAutoplay={true}
      showDots={false}
      sliderClass=""
      slidesToSlide={3}
      swipeable
      transitionDuration={4000}
    >
      {SliderData.map((singleData) => {
        const { id, url } = singleData;
        return (
          <div key={id}>
            <Image src={url} height="60px" width="100px" />
          </div>
        );
      })}
    </Carousel>
  );
}

export default PartnerSlider