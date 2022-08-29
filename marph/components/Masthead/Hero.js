import React from "react";
import PrimaryButtons from "../buttons/PrimaryButtons";
import Fade from "react-reveal/Fade";
import { useParallax } from "react-scroll-parallax";

const Hero = ({ primaryInfo, secondaryInfo, videoLink, btnText }) => {
  //parallax effects
  const { ref } = useParallax({ speed: -70 });

  return (
    <Fade>
      <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
        <div
          ref={ref}
          className="relative z-20 p-5 text-xl max-w-3xl text-white text-center  rounded-xl space-y-10"
        >
          <Fade top>
            <h2 className="text-4xl md:text-4xl font-semibold  ">
              {" "}
              {primaryInfo}{" "}
            </h2>
          </Fade>

          <section>
            <Fade bottom>
              <p className="text-md font-thin ">{secondaryInfo}</p>
            </Fade>
          </section>
          <Fade>
            <PrimaryButtons name={btnText} />
          </Fade>
        </div>
        <video
          autoPlay
          loop
          muted
          poster="https://cdn.sanity.io/images/wdfk0n2i/production/ec3f7d7e288038a34c9484d7947bb38da1aff83e-2880x2048.jpg?w=1000&h=711&fit=crop&fm=webp"
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none brightness-50"
        >
          <source src={videoLink} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </header>
    </Fade>
  );
};

export default Hero;
