import Skills from "./Skills";

const About = () => {
  return (
    <section className="bg-[#0a0215] text-purple-400 font-semibold py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">ABOUT ME</h2>
        <p className="text-slate-500 leading-relaxed ">
          I'm a full-stack software engineer with a primary focus on front-end development.
          I love working at the intersection of creativity and technology.
          My expertise lies in JavaScript, React, and building user-friendly web experiences.
        </p>
      </div>

      {/* Skills Marquee */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0215]">
        <Skills />
      </div>
    </section>
  );
};

export default About;
