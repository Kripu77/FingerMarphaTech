import React from "react";
import navData from "../../data.js/navData";
import Link from "next/link";
import Fade from "react-reveal/Fade"
import Image from "next/image";

const Nav = () => {
  //track nav state
  const [isOpen, setIsOpen] = React.useState(false);
  const navOpenStyling = "fixed top-0 left-0 bg-white min-h-full text-black min-w-full flex flex-col text-justify justify-start items-end py-12 px-2  bg-opacity-95 text-4xl "

  return (
    <nav className="absolute  top-0 left-0 right-0 z-30 text-white flex justify-between items-center p-6 ">
      <section className="flex ">
        <Image
          src="https://www.fingermark.tech/static/logomark-1d5c1b64166590f9d3062c3269afb42e.png"
          height="40px"
          width="50px"
        />
        <h1 className="cursor-pointer font-bold text-4xl hover:text-slate-200">
          <Link href="/"> Fingermapha™</Link>
        </h1>
      </section>
      <Fade>
        <section
          className={isOpen ? navOpenStyling : "md:flex space-x-4 hidden"}
        >
          {navData.map((singleLi) => {
            return isOpen ? (
              <Fade right big cascade delay={300} duration={1000}>
                <ul key={singleLi.id}>
                  <li className="cursor-pointer font-semibold hover:text-slate-200 ">
                    <Link href={"/" + singleLi.link}>{singleLi.header}</Link>
                  </li>
                </ul>
              </Fade>
            ) : (
              <ul>
                <li className="cursor-pointer font-semibold hover:text-slate-200 ">
                  <Link href={"/" + singleLi.link}>{singleLi.header}</Link>
                </li>
              </ul>
            );
          })}
          {isOpen ? (
            <h1
              className="absolute top-0 right-1"
              onClick={() => setIsOpen(!isOpen)}
            >
              Cross
            </h1>
          ) : (
            ""
          )}
        </section>

        <section className="md:hidden">
          <h1 onClick={() => setIsOpen(!isOpen)}>Menu</h1>
        </section>
      </Fade>
    </nav>
  );
};

export default Nav;
