import React from "react";
import navData from "../../data.js/navData";
import Link from "next/link";
import Fade from "react-reveal/Fade"
import Image from "next/image";

const Nav = () => {
  //track nav state
  const [isOpen, setIsOpen] = React.useState(false);
  const navOpenStyling = "fixed top-0 left-0 bg-blue-700 min-h-full text-white min-w-full flex flex-col text-justify justify-start items-end py-12 px-2  bg-opacity-95 text-4xl "

  return (
    <nav className="absolute  top-0 left-0 right-0 z-30 text-white flex justify-between items-center p-6 ">
      <section className="flex ">
        <Image
          src="https://www.fingermark.tech/static/logomark-1d5c1b64166590f9d3062c3269afb42e.png"
          height="40px"
          width="50px"
        />
        <h1 className="cursor-pointer font-bold text-3xl hover:text-slate-200">
          <Link href="/"> Marphatech™</Link>
        </h1>
      </section>
      <Fade>
        <section
          className={isOpen ? navOpenStyling : "md:flex space-x-4 hidden"}
        >
          {navData.map((singleLi) => {
            return isOpen ? (
              <Fade right big cascade delay={300} duration={1000} key={singleLi.id}>
                <ul key={singleLi.id} >
                  <li className="cursor-pointer font-semibold hover:text-slate-200 " onClick={()=>setIsOpen(false)}> 
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
              className="absolute top-2 right-4"
              onClick={() => setIsOpen(!isOpen)}
            > X
            </h1>
          ) : (
            ""
          )}
        </section>

        <section className="md:hidden">
          <h1 onClick={() => setIsOpen(!isOpen)}> 
          {isOpen?"":<svg class="burger" width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M33 27.0075C33 27.8325 32.331 28.5 31.5075 28.5H19.4925C19.0967 28.5 18.717 28.3428 18.4371 28.0629C18.1572 27.783 18 27.4033 18 27.0075C18 26.6117 18.1572 26.2321 18.4371 25.9522C18.717 25.6723 19.0967 25.515 19.4925 25.515H31.5075C32.3325 25.515 33 26.1825 33 27.0075Z" fill="white"></path><path d="M33 18C33 18.825 32.331 19.4925 31.5075 19.4925H4.4925C4.09666 19.4925 3.71704 19.3353 3.43714 19.0554C3.15725 18.7755 3 18.3958 3 18C3 17.6042 3.15725 17.2245 3.43714 16.9447C3.71704 16.6648 4.09666 16.5075 4.4925 16.5075H31.5075C32.3325 16.5075 33 17.1765 33 18Z" fill="white"></path><path d="M31.5075 10.485C31.9033 10.485 32.283 10.3278 32.5629 10.0479C32.8428 9.76796 33 9.38833 33 8.9925C33 8.59666 32.8428 8.21704 32.5629 7.93714C32.283 7.65724 31.9033 7.5 31.5075 7.5H13.4925C13.2965 7.5 13.1024 7.5386 12.9213 7.61361C12.7403 7.68861 12.5757 7.79855 12.4371 7.93714C12.2986 8.07573 12.1886 8.24027 12.1136 8.42134C12.0386 8.60242 12 8.7965 12 8.9925C12 9.1885 12.0386 9.38258 12.1136 9.56365C12.1886 9.74473 12.2986 9.90926 12.4371 10.0479C12.5757 10.1864 12.7403 10.2964 12.9213 10.3714C13.1024 10.4464 13.2965 10.485 13.4925 10.485H31.5075Z" fill="white"></path></svg>}</h1>
        </section>
      </Fade>
    </nav>
  );
};

export default Nav;
