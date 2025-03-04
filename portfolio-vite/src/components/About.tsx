import Skills from "./Skills";

const About = () => {
  return (
    <section className="bg-[#0a0215] text-purple-400 font-semibold py-20 relative">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-10 text-center w-full">ABOUT ME</h2>
        <div className="flex flex-col lg:flex-row items-center justify-between w-full">
        <div className="lg:w-1/2 text-left">
          <p className="text-slate-500 max-w-lg leading-relaxed text-center">
            I'm a full-stack software engineer with a primary focus on front-end development.
            I love working at the intersection of creativity and technology.
            My expertise lies in JavaScript, React, and building user-friendly web experiences.
            A front-end developer with a passion for building seamless digital experiences.
        With expertise in JavaScript, React, and UI/UX design, I create websites and applications
        that not only function beautifully but also tell a story.
          </p>
        </div>

        {/* Right - Skills Animation */}
        <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
          <Skills />
        </div>

      </div>
      </div>
    </section>
  );
};

export default About;


