import React from "react";
import FooterWave from "../assets/Shape_04@2x.png";

const Footer = () => {
    return (
      <>
        <div
          className='flex items-end justify-center'
          style={{
            backgroundImage: `url(${FooterWave})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className='max-w-md px-12 sm:px-6 text-center mt-40'>
            <div className='flex justify-center'>
              <p className='font-bold border-b-4 text-4xl mb-5 pb-5 text-white'>
                Start a project with me
              </p>
            </div>
            <p className='text-white mb-5'>
              Let's discuss our ideas for presenting your business to the world
              in an attractive, efficient and effective way.
            </p>
            <a
              href='https://samiul-hossain.github.io/personal-website/'
              class='whitespace-nowrap inline-flex items-center justify-center px-12 py-2 border border-transparent rounded-3xl shadow-sm text-base font-bold text-purple-700 bg-white mb-10'
            >
              Hire Me
            </a>
          </div>
        </div>
      </>
    )
};

export default Footer;
