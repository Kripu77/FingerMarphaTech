import PrimaryButtons from "../buttons/PrimaryButtons";
import Fade from "react-reveal/Fade";

const Solutions = () => {
  return (
    <section className=" text-center pt-20 flex flex-col justify-center items-center space-y-20">
      <Fade top>
        <h1 className="text-4xl font-semibold">Solution Overview brochure</h1>
   
        <p className="max-w-sm text-center font-light">
          Fill out the form below to download our Solution Overview brochure.
        </p>
     
   
        <input
          type="text"
          placeholder="Name"
          className="w-96 py-2 bg-transparent border-b-2 border-black active:border-none outline-none
      "
        ></input>
      </Fade>
      <PrimaryButtons name="Next ->"></PrimaryButtons>
    </section>
  );
};

export default Solutions;
