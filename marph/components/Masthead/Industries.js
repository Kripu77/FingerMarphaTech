import Image from "next/image";
import React from "react";
import Fade from "react-reveal/Fade";
import PrimaryButtons from "../buttons/PrimaryButtons";
import { useParallax } from "react-scroll-parallax";

const Industries = () => {
    const {ref} = useParallax({speed:-70})
  return (
    <Fade>
      <section className="relative h-screen overflow-hidden">
        <section>
          <Image
            src="https://cdn.sanity.io/images/wdfk0n2i/production/72a21bbf47b7323c34b08ee05d0d6926b1f60423-2200x1467.jpg?w=2000&h=1334&fit=crop&fm=webp"
            layout="fill" objectFit="cover"
            className="brightness-75 opacity-95"
          />
        </section>
        <section
          ref={ref}
          className="absolute  min-w-full min-h-screen flex flex-col justify-center items-center space-y-20 text-white text-center backdrop-blur-sm backdrop-opacity-95"
        >
          <Fade delay={1500}>
            <h1 className="text-7xl "> Industries</h1>
            <h1 className="max-w-screen-sm text-2xl">
              {" "}
              Our Partners are the leaders in the areas they are involved in. We
              aid their purpose through our cutting edge Technology
            </h1>
            <PrimaryButtons name="Tell me More" />
          </Fade>
        </section>
      </section>
    </Fade>
  );
};

export default Industries;
