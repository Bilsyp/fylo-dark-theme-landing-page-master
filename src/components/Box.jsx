const Box = ({ source, title, paragraph }) => {
  return (
    <div className='box flex justify-center items-center flex-col text-center'>
      <div className='image-wrapper'>
        <img src={source} alt='' className='my-8' />
      </div>
      <div className='deskripsi text-white'>
        <h2>{title}</h2>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default Box;
