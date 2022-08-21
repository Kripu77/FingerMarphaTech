import React from "react";
import navData from "../../data.js/navData";

const Nav = () => {
  return (
    <nav className="absolute  top-0 left-0 right-0 z-30 text-white flex justify-between items-center p-6 ">
      <section>
        <h1 className="cursor-pointer font-bold text-4xl hover:text-slate-200">
         
       
          Fingermapha
        </h1>
      </section>
      <section className="md:flex space-x-4 hidden">
        {navData.map((singleLi) => {
          return (
            <ul key={singleLi.id}>
              <li className="cursor-pointer font-semibold hover:text-slate-200 ">
                {singleLi.header}
              </li>
            </ul>
          );
        })}
      </section>
    </nav>
  );
};

export default Nav;
