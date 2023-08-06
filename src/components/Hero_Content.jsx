import React from "react";

const Hero_Content = () => {
  return (
    <div className='hero_content '>
      <div className='out_content z-10 mt-24 md:mt-12'>
        <div className='image-wrapper md:mt-[6.8rem]'>
          <img
            className='w-[70%] md:w-[65%] mx-auto'
            src='/images/illustration-intro.png'
            alt=''
          />
        </div>
        <div className='descrition md:max-w-2xl md:mx-auto  '>
          <h2 className=' font-semibold font-Railway  py-4 text-2xl md:text-4xl'>
            All your files in one secure location, accessible anywhere.
          </h2>
          <p className=' font-OpenSans font-normal py-5  px-2 md:py-3'>
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button className='btn font-Railway bg-gradient-to-r from-green_gradient to-blue_gradient py-3 px-10 mt-5 w-[80%] rounded-xl  font-semibold md:w-[50%]  hover:from-transparent  hover:bg-btn'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero_Content;
