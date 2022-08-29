import Image from "next/image";
import React from "react";
import PrimaryButtons from "../buttons/PrimaryButtons";
import Fade from "react-reveal/Fade";
import { useParallax } from "react-scroll-parallax";

const Panels = ({panel, btnTextOne, btnTextTwo}) => {

  const { ref } = useParallax({
     translate:[100, -30] ,
    scale:[0.4, 1.4],
   
  });
  const panelClass =
    "block md:flex  justify-evenly place-items-center max-w-7xl mx-auto text-left  ";
  return (
    <section className=" max-w-8xl mx-auto space-y-28 overflow-hidden ">
      {panel.map((indi) => {
        const { id, header, body, img } = indi;
        return (
          <>
            <div
              ref={ref}
              key={id}
              className={
                id % 2 == 0 ? panelClass : panelClass + " flex-row-reverse"
              }
            >
              <Fade left duration={1200} cascade>
                <section>
                  {" "}
                  <Image
                    src={img}
                    height="423px"
                    width="628px"
                    objectFit="cover"
                  />
                </section>

                <section className="max-w-screen-sm ">
                  <section className="w-4/5  mx-auto">
                    {" "}
                    <h1 className=" font-serif leading-10 text-4xl lg:text-5xl">
                      {header}
                    </h1>
                    <p className="text-gray-700 text-md">{body}</p>
                  </section>
                </section>
              </Fade>
            </div>
          </>
        );
      })}

      <section className="text-right pr-20 space-y-2">
        <PrimaryButtons name={btnTextOne} className="font-thin " />
        <br />
        <PrimaryButtons name={btnTextTwo} />
      </section>
    </section>
  );
};

export default Panels;
