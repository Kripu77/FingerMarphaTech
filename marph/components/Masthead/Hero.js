import React from 'react'
import PrimaryButtons from '../buttons/PrimaryButtons';

const Hero = () => {
  return (
    <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
      <div className="relative z-20 p-5 text-2xl max-w-3xl text-white text-center  rounded-xl space-y-10">
        <h2 className='text-4xl md:text-5xl font-semibold  '> Human Experience Matters </h2>
        <section>
          <p className='text-md font-extralight'>
            Fingermarpha™ empowers your team to unlock game-changing improvements
            in operational efficiency, health and safety, and customer
            experience.
          </p>
        </section>
        <PrimaryButtons name="Tell me More!"/>
      </div>
      <video
        autoPlay
        loop
        muted
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none brightness-50"
      >
        <source
          src="https://player.vimeo.com/external/461626348.sd.mp4?s=07a7a2cec45f2ec31a683f6569c08028da2803e5&profile_id=165"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </header>
  );
}

export default Hero