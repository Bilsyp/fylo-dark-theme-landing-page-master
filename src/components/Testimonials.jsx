import Box_Testi from "./Box_Testi";

const Testimonials = () => {
  // Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
  // become a well-oiled collaboration machine.

  // Satish Patel
  // Founder & CEO, Huddle

  // Bruce McKenzie
  // Founder & CEO, Huddle

  // Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
  // become a well-oiled collaboration machine.

  // Iva Boyd
  // Founder & CEO, Huddle

  // Get early access today

  // It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
  // questions, our support team would be happy to help you.

  return (
    <section className='Testimonials_container'>
      <Box_Testi title={"Satish Patel"} source={"/images/profile-1.jpg"} />
      <Box_Testi
        title={"Bruce McKenzie"}
        source={"/images/profile-2.jpg"}
      />{" "}
      <Box_Testi title={"Iva Boyd"} source={"/images/profile-3.jpg"} />
    </section>
  );
};

export default Testimonials;
