import React from "react";
import HeroWave from "../assets/Shape_01@2x.png";
import HeroImage from "../assets/image_01.png";

const Hero = () => {
    return (
      <div
        className='items-center flex h-screen'
        style={{
          backgroundImage: `url(${HeroWave}), linear-gradient(to right, #6E3BC7, #E692D0)`,
          backgroundPosition: 'center bottom',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='max-w-6xl mx-auto grid md:grid-cols-2 px-4 sm:px-6'>
          <div className='grid grid-cols-1 justify-center items-center text-center md:text-left'>
            <div>
              <p className='font-bold uppercase text-white mb-5'>
                Business Workflow
              </p>
              <p className='font-bold leading-tight text-white text-4xl md:text-5xl mb-5'>
                Get the most efficient UI design for your business now!
              </p>
              <p className='text-white md:mb-10 mb-5'>
                Hire me to design a clean and modren UI for your product's
                website
              </p>
              <div className='md:pr-40'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 justify-center md:justify-start'>
                  <a
                    href='https://samiul-hossain.github.io/personal-website/'
                    class='whitespace-nowrap inline-flex items-center justify-center px-12 py-2 border border-transparent rounded-3xl shadow-sm text-base font-bold text-purple-700 bg-white col-span-1'
                  >
                    Hire Me
                  </a>
                  <a
                    href='#'
                    class='whitespace-nowrap inline-flex items-center justify-center px-12 py-2 border border-transparent rounded-3xl shadow-sm text-base font-bold text-purple-700 bg-white'
                  >
                    Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <img className='w-60 md:w-80' src={HeroImage} alt='' />
          </div>
        </div>
      </div>
    )
};

export default Hero;
