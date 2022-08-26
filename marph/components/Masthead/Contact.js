import React from 'react'
import Image from 'next/image'
import PrimaryButtons from '../buttons/PrimaryButtons'
import Fade from "react-reveal/Fade"

const Contact = () => {
  return (
    <Fade>
      <section>
        <section className=" flex flex-col  subpixel-antialiased   items-center h-screen w-full relative bg-cover">
          <Image
            src="https://cdn.sanity.io/images/wdfk0n2i/production/5a914599f088ec9d1c519861330e481e01921f9d-1440x650.png?fm=webp"
            layout="fill"
            objectFit="cover"
            className="brightness-50 opacity-95"
          />
          <section className="flex flex-col z-20 h-screen items-center justify-center text-white">
            <Fade top duration="2000">
              {" "}
              <PrimaryButtons name="Contact Us" />
            </Fade>
          </section>
        </section>
      </section>
    </Fade>
  );
}

export default Contact