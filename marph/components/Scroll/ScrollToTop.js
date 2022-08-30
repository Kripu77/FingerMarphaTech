import React from "react";

const ScrollToTop = () => {
  const [scrollClicked, setIsScrollClicked] = React.useState(false);

  //scroll handler
  const handleScroll = () => {
    setIsScrollClicked(!scrollClicked);
    window.scrollTo({ top:0, left: 0, behavior: "smooth" });
    console.log("I am running");
  };

  return (
    <section className="absolute z-20 min-w-screen bottom-2 right-2 ">
      <button
        className="rounded-full  text-2xl hover:scale-125 hover:text-white transition-all duration-300 "
        onClick={handleScroll}
      >
        🔝
      </button>
    </section>
  );
};

export default ScrollToTop;
