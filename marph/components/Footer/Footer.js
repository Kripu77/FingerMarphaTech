import Image from "next/image";
import addData from "../../data.js/Address";


const Footer = () => {
  return (
    <footer className=" z-20 bg-blue-900 p-10 text-white  mr-10 rounded-tr-3xl ">
      <section className="flex justify-between items-center mb-20">
        <h1 className="text-4xl max-w-xs ">
          Fingermarpha™ | Where Human Experience Matters{" "}
        </h1>
        <Image
          src="https://www.fingermark.tech/static/logomark-1d5c1b64166590f9d3062c3269afb42e.png"
          height="60px"
          width="70px"
        />
      </section>
      <section className="grid grid-cols-3 gap-20 lg:grid-cols-5  border-b-2 pb-10 border-green-700 ">
        {addData.map((singleAdd) => {
          const { id, header, loaction, contact } = singleAdd;
          return (
            <div key={id} >
              <h1 className="text-gray-400 text-xs"> {header}</h1>
              <p className="leading-6">{loaction}</p>
              <p className="pt-3">{contact}</p>
            </div>
          );
        })}
      </section>
      <section className="pt-9 flex justify-between">
        <h1> Privacy Policy</h1>
        <h1>
          © Fingermarpha 2022 | <span className="font-italic">Leading the Tech</span>
        </h1>
      </section>
    </footer>
  );
}

export default Footer