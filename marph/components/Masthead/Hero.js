import React from 'react'
import PrimaryButtons from '../buttons/PrimaryButtons';
import Fade from "react-reveal/Fade";
import { useParallax } from 'react-scroll-parallax';

const Hero = ({primaryInfo, secondaryInfo, videoLink, btnText }) => {
  //parallax effects
  const {ref} = useParallax({speed:-50});

  return (
    <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
      <div ref={ref} className="relative z-20 p-5 text-2xl max-w-3xl text-white text-center  rounded-xl space-y-10">
        <Fade top>
          <h2 className="text-4xl md:text-5xl font-semibold  ">
            {" "}
            {primaryInfo}{" "}
          </h2>
        </Fade>

        <section>
          <Fade bottom>
            <p className="text-md font-extralight">{secondaryInfo}</p>
          </Fade>
        </section>
        <Fade >
          <PrimaryButtons name={btnText} />
        </Fade>
      </div>
      <video
        autoPlay
        loop
        muted
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none brightness-50"
      >
        <source src={videoLink} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </header>
  );
}

export default Hero