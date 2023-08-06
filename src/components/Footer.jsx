import { ImLocation } from "react-icons/im";
import { FaPhoneVolume } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className=' bg-footer text-white px-4 py-8 relative'>
      <div className='footer_content mt-[15rem] md:p-8 md:mt-[10rem]'>
        <div className='image-wrapper'>
          <img src='/images/logo.svg' alt='' />
        </div>
        <div className='md:grid grid-cols-2'>
          <div>
            <ul className='info'>
              <li>
                <ImLocation className='text-2xl md:self-start' />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </li>
              <li>
                <FaPhoneVolume className='text-2xl' />
                <p>+1-543-123-4567</p>
              </li>
              <li>
                <BiLogoGmail className='text-2xl' />
                <p>example@fylo.com</p>
              </li>
            </ul>
          </div>
          <div className='list_info'>
            <ul className=''>
              <li>About Us </li>
              <li>Jobs</li>
              <li>Press</li>
              <li>Blog</li>
            </ul>
            <ul>
              <li>Contact Us</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
            <ul className='flex justify-center items-center md:justify-end md:self-start text-3xl gap-5'>
              <li>
                <CiFacebook />
              </li>
              <li>
                <CiTwitter />
              </li>
              <li>
                <CiInstagram />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='side-box'>
        <h1>Get early access today</h1>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div className='form'>
          <input
            placeholder='email@example.com'
            className='w-[90%] rounded-full outline-none text-black px-5 py-4 '
          />
          <button className=' font-Railway bg-gradient-to-t from-green_gradient to-blue_gradient text-[15px] py-4 mt-5 w-[90%] rounded-full font-semibold hover:from-transparent  hover:bg-btn'>
            Get Started For Free
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
