import Nav from "./Nav";
import Hero_Content from "./Hero_Content";
import Hero_Service from "./Hero_Service";
import Hero_Productive from "./Hero_Productive";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const Hero = () => {
  return (
    <div className='containers'>
      <Nav />
      <Hero_Content />
      <Hero_Service />
      <Hero_Productive />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Hero;
