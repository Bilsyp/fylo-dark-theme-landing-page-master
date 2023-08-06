import Box from "./Box";

const Hero_Service = () => {
  return (
    <section
      className=' p-3 md:grid-cols-2 grid
   gap-[3rem] md:my-[6rem]'
    >
      <Box
        source={"/images/icon-access-anywhere.svg"}
        title={"Access your files, anywhere"}
        paragraph={
          "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
        }
      />
      <Box
        source={"/images/icon-security.svg"}
        title={"Security you can trust"}
        paragraph={
          "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
        }
      />

      <Box
        source={"/images/icon-collaboration.svg"}
        title={"Real-time collaboration"}
        paragraph={
          "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
        }
      />

      <Box
        source={"/images/icon-any-file.svg"}
        title={"Store any type of file"}
        paragraph={
          "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
        }
      />
    </section>
  );
};

export default Hero_Service;
