import SkillsMarquee from "./SkillsMarquee";

const About = () => {
  return (
    <section className="bg-black text-white py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">ABOUT ME</h2>
        <p className="text-gray-300 leading-relaxed max-w-2xl">
          I'm a full-stack software engineer with a primary focus on front-end development.
          I love working at the intersection of creativity and technology.
          My expertise lies in JavaScript, React, and building user-friendly web experiences.
        </p>
      </div>

      {/* Skills Marquee */}
      <div className="mt-10">
        <SkillsMarquee />
      </div>
    </section>
  );
};

export default About;
