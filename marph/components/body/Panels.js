import Image from "next/image";
import React from "react";
import panelData from "../../data.js/PanelData";
import PrimaryButtons from "../buttons/PrimaryButtons";

const Panels = () => {
  return (
    <section className=" max-w-8xl mx-auto space-y-14 ">
      {panelData.map((indi) => {
        const { id, header, body, img } = indi;
        return (
          <div
            key={id}
            className="block md:flex justify-evenly items-center text-left "
          >
            <Image src={img} height="300px" width="400px" objectFit="cover" />
            <section className="max-w-md lg:max-w-2xl p-4">
              {" "}
              <h1 className=" font-serif leading-10 text-4xl py-4 lg:text-5xl">
                {header}
              </h1>
              <p className="text-gray-700 lg:text-xl">{body}</p>
            </section>
          </div>
        );
      })}
      <section className="text-right pr-20 space-y-2">
        <PrimaryButtons name="QSR Technology" />
        <br />
        <PrimaryButtons name="Mining & Industrial" />
      </section>
    </section>
  );
};

export default Panels;
