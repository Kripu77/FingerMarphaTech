import Image from "next/image";
import React from "react";
import panelData from "../../data.js/PanelData";
import PrimaryButtons from "../buttons/PrimaryButtons";
import Fade from "react-reveal/Fade";

const Panels = ({panel, btnTextOne, btnTextTwo}) => {
  const panelClass =
    "block md:flex  justify-evenly place-items-center max-w-7xl mx-auto text-left  ";
  return (
    <section className=" max-w-8xl mx-auto space-y-28 ">
      {panel.map((indi) => {
        const { id, header, body, img } = indi;
        return (
          <>
            <div
              key={id}
              className={id % 2==0 ?panelClass: panelClass+ " flex-row-reverse"}
            >
              <Fade bottom duration={2000}>
                <section>
                  {" "}
                  <Image
                    src={img}
                    height="423px"
                    width="628px"
                    objectFit="cover"
                    
                  />
                </section>
              </Fade>

              <section className="max-w-screen-sm ">
                <Fade  top cascade>
                  <section className="w-4/5  mx-auto">
                    {" "}
                    <h1 className=" font-serif leading-10 text-4xl lg:text-5xl">
                      {header}
                    </h1>
                    <p className="text-gray-700 text-md">{body}</p>
                  </section>
                </Fade>
              </section>
            </div>
          </>
        );
      })}
      
      <section className="text-right pr-20 space-y-2">
        <PrimaryButtons name={btnTextOne} />
        <br />
        <PrimaryButtons name={btnTextTwo} />
      </section>
    </section>
  );
};

export default Panels;
