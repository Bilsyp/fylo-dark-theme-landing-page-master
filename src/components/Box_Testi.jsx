const Box_Testi = ({ source, title }) => {
  return (
    <div className='testimonial px-6 py-3 md:mt-[2.8rem] text-white  bg-testimonial rounded-md'>
      <article className=' text-arcticle py-5 font-OpenSans  font-normal text-[0.87rem] max-w-sm '>
        <p className=' leading-[2rem]'>
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
      </article>
      <div className='user flex  my-4 justify-stretch items-center gap-[1.1rem]'>
        <div className='image-wrapper'>
          <img width={38} className=' rounded-full' src={source} alt='user' />
        </div>
        <div>
          <h2 className=' text-[0.96rem] font-semibold font-OpenSans'>
            {title}
          </h2>
          <p className='text-[0.70rem] font-Railway text-arcticle'>
            Founder & CEO, Huddle
          </p>
        </div>
      </div>
      {title == "Satish Patel" ? (
        <div className='image-wrapper s absolute top-[-20px] left-0'>
          <img
            src='/images/bg-quotes.png'
            className='w-[55%] md:w-[90%]'
            alt=''
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Box_Testi;
