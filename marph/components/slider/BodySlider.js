
import React from "react";

import Footer from "../Footer/Footer";
import PartnerSlider from "./PartnerSlider";
import Solutions from "./Solutions";
import { useParallax } from "react-scroll-parallax";
import Contact from "./Contact";

const BodySlider = ({primaryInfo}) => {
  //parrallax effect
  const {ref} = useParallax({speed:-2})
  return (
    <section className="bg-green-100">
      <section ref={ref} className="-z-10">
        <Solutions />
        <section className=" text-xl  bg-green-100 overflow-hidden h-96 flex flex-col justify-center items-center  text-center">
          <div className="md:max-w-3xl mx-auto space-y-32  max-w-sm">
            <h1 className=" md:text-3xl  tracking-wider"> {primaryInfo}</h1>
            <PartnerSlider />
          </div>
        </section>
        <Contact/>
      </section>
      <Footer />
    </section>
  );
};

export default BodySlider;
