import React from 'react'
import Image from 'next/image';
import PrimaryButtons from '../buttons/PrimaryButtons';
import Fade from "react-reveal/Fade"
import industry from '../../data.js/IndustriesData';
const IndustriesCard = () => {
  return (
    <section>
      {industry.map((singleData, ) => {
        const { id, url, header, secondaryHeader, info } = singleData;
        return (
          <>
            <section className={id % 2 == 0 ? "" : "bg-gray-100"} key={id}>
              <Fade>
                <section className="p-2 md:p-20 xl:flex justify-between xl:space-x-10">
                  <Image
                    src={url}
                    height="1000px"
                    width="1000px"
                    className="rounded-xl"
                  ></Image>
                  <section className="p-2 md:pt-10 space-y-6">
                    <h1 className="text-3xl md:text-5xl font-serif">{header}</h1>
                    <h1 className="text-2xl md:text-3xl font-serif ">{secondaryHeader}</h1>
                    <p className="text-xl font-dark space-y-4">{info.split(".").map((d, index)=>{
                        return (
                          <div key={index}>
                            <span>{ d}</span>
                            <br/>
                          </div>
                        );

                    })}</p>
                    <PrimaryButtons name="Tell me More" />
                  </section>
                </section>
              </Fade>
            </section>
          </>
        );
      })}
    </section>
  );
}

export default IndustriesCard