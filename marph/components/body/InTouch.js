import React from 'react'
import PrimaryButtons from '../buttons/PrimaryButtons'
import Fade from "react-reveal/Fade"

const InTouch = () => {
  return (
    <section className=" p-8 md:p-20 max-w-screen-xl mx-auto ">
      <Fade left cascade>
        <section className="space-y-10 text-center">
          <h1 className="text-4xl font-semibold text-gray-800">
            {" "}
            Get In Touch
          </h1>
          <h1> Sales & Reseller Enquiry </h1>
          <Fade duration={3000}>
            <PrimaryButtons name="Get In Touch" />
          </Fade>
        </section>
      </Fade>
      <Fade bottom>
        <section className="py-24 text-2xl  font-thin leading-10 space-y-5">
          <section>
            <h1 className="text-green-500"> Support</h1>
            <h1>fingermarphaglobal.zendesk.com</h1>
          </section>
          <section>
            <h1 className="text-green-500"> Accounts</h1>
            <h1>accounts@fingermark.tech</h1>
          </section>
        </section>
      </Fade>
    </section>
  );
}

export default InTouch