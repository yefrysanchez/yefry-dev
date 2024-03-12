import AboutParagraph from "./AboutParagraph";

const About = () => {
  return (
    <section className="border-t-2 flex flex-col items-center 2xl:flex-row 2xl:gap-12 2xl:justify-center">
      <h2 className="font-semibold italic text-xl lg:text-4xl mt-4 self-start">
        About
      </h2>
      <div className="my-20  h-[350px] lg:h-[500px] lg:max-w-[780px] rounded-3xl overflow-hidden 2xl:mt-40">
        <img
          className="h-full w-full object-cover"
          src="https://w.wallhaven.cc/full/yj/wallhaven-yjdl2k.png"
          alt="about image"
        />
      </div>
      <AboutParagraph />
    </section>
  );
};

export default About;
