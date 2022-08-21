import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import SliderData from "../../data.js/sliderData";
import Image from "next/image";
import Footer from "../Footer/Footer";

const BodySlider = () => {
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
    <section className="bg-green-100">
      <section className=" text-xl  bg-green-100 overflow-hidden h-96 flex flex-col justify-center items-center  text-center">
        <div className="md:max-w-3xl mx-auto space-y-32  max-w-sm">
          <h1 className=" md:text-3xl  tracking-wider">
            {" "}
            Brands we work with
          </h1>
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
        </div>
      </section>
      <div>
        <section className=" flex justify-between items-center max-w-7xl mx-auto px-40 pb-6 text-2xl ">
          <h1 className="underline hover:no-underline"> Want to know more? Contact Us!!</h1>
          <section className="flex space-x-2">
            <h1> Follow Us</h1>
            <svg width="32" height="31" viewBox="0 0 32 31" fill="none">
              <path
                d="M25.3333 0H6.66667C2.93333 0 0 2.84167 0 6.45833V24.5417C0 28.1583 2.93333 31 6.66667 31H25.3333C29.0667 31 32 28.1583 32 24.5417V6.45833C32 2.84167 29.0667 0 25.3333 0ZM10.6667 24.5417H6.66667V10.3333H10.6667V24.5417ZM8.66667 8.65417C7.33333 8.65417 6.26667 7.62083 6.26667 6.32917C6.26667 5.0375 7.33333 4.00417 8.66667 4.00417C10 4.00417 10.9333 5.16667 10.9333 6.45833C10.9333 7.62083 10 8.65417 8.66667 8.65417ZM26.6667 24.5417H22.6667C22.6667 24.5417 22.6667 19.2458 22.6667 17.3083C22.6667 12.9167 17.3333 13.3042 17.3333 17.3083C17.3333 19.375 17.3333 24.5417 17.3333 24.5417H13.3333V10.3333H17.3333V12.6583C19.2 9.3 26.6667 9.04167 26.6667 15.8875C26.6667 19.5042 26.6667 24.5417 26.6667 24.5417Z"
                fill="#0D214A"
              ></path>
            </svg>
            <svg width="32" height="31" viewBox="0 0 32 31" fill="none">
              <path
                d="M16.0001 0.0644531C7.16358 0.0644531 0 7.00417 0 15.5645C0 23.2422 5.76835 29.6006 13.3316 30.8318V18.7983H9.47191V14.4679H13.3316V11.2748C13.3316 7.56997 15.6674 5.55103 19.0795 5.55103C20.7137 5.55103 22.1181 5.669 22.5258 5.72095V9.59353L20.1593 9.59464C18.304 9.59464 17.9464 10.4485 17.9464 11.702V14.4657H22.3731L21.7957 18.7961H17.9464V30.9354C25.8627 30.002 32 23.4816 32 15.5601C32 7.00417 24.8364 0.0644531 16.0001 0.0644531Z"
                fill="#0D214A"
              ></path>
            </svg>
          </section>
        </section>
        <Footer/>
      </div>
    </section>
  );
};

export default BodySlider;
