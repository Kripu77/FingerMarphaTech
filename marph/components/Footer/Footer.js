import Image from "next/image";
import addData from "../../data.js/Address";


const Footer = () => {
  return (
    <footer className=" z-20 bg-blue-900 p-10 text-white  md:mr-10 md:rounded-tr-3xl ">
      <section className=" flex flex-col items-start space-y-4  md:flex md:flex-row md:justify-between md:items-center  mb-20">
        <h1 className=" text-2xl md:text-4xl max-w-xs ">
          Marphatech™ | Where Human Experience Matters{" "}
        </h1>
        <section>
          <Image
            src="https://www.fingermark.tech/static/logomark-1d5c1b64166590f9d3062c3269afb42e.png"
            height="70px"
            width="80px"
          />
        </section>
      </section>
      <section className="block md:grid grid-cols-3 gap-20 lg:grid-cols-5  border-b-2 pb-10 border-green-700 ">
        {addData.map((singleAdd) => {
          const { id, header, loaction, contact } = singleAdd;
          return (
            <div key={id}>
              <h1 className="text-gray-400 text-xs"> {header}</h1>
              <p className="leading-6">{loaction}</p>
              <p className="pt-3">{contact}</p>
            </div>
          );
        })}
      </section>
      <section className="pt-9 md:flex justify-between text-center ">
        <h1 className="whitespace-nowrap"> Privacy Policy</h1>
        <h1>
          © Marphatech 2022 |{" "}
          <span className="font-italic">Leading the Tech</span>
        </h1>
      </section>
    </footer>
  );
}

export default Footer