import Image from "next/image";
import React from "react";
import panelData from "../../data.js/PanelData";
import PrimaryButtons from "../buttons/PrimaryButtons";

const Panels = ({panel, btnTextOne, btnTextTwo}) => {
  return (
    <section className=" max-w-8xl mx-auto space-y-14 ">
      {panel.map((indi) => {
        const { id, header, body, img } = indi;
        return (
          <div
            key={id}
            className="block md:flex flex-row-reverse justify-evenly place-items-center text-left   px-4  "
          >
            <section>
              {" "}
              <Image src={img} height="423px" width="628px" objectFit="cover" />
            </section>

            <section className="max-w-screen-sm ">
              <section className="w-4/5  p-4 mx-auto">
                {" "}
                <h1 className=" font-serif leading-10 text-4xl py-4 lg:text-5xl">
                  {header}
                </h1>
                <p className="text-gray-700 text-md">{body}</p>
              </section>
            </section>
          </div>
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
