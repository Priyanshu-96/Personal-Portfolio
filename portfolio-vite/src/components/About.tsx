// src/components/About.tsx
import ScrollFadeIn from "./ScrollFadeIn";
import Skills from "./Skills";
import ParticlesComponent from "./ParticlesComponent";

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 relative">
      <ParticlesComponent />
      <section id="about" className="bg-[#0a0215] text-white py-20 relative flex justify-center">
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <h2 className="text-4xl font-bold mb-10 text-center">
              About Me
            </h2>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 text-center">
              Hey, I’m a passionate <span className="text-purple-400 font-semibold">Full-Stack Engineer</span> focused on 
              crafting <span className="text-yellow-300 font-semibold">interactive UI</span> and modern web experiences. 
              With a love for clean code and intuitive design, I specialize in <span className="text-sky-400 font-semibold">React</span>, 
              <span className="text-teal-400 font-semibold"> Tailwind CSS</span>, and <span className="text-pink-400 font-semibold">UX/UI</span> 
              thinking that brings ideas to life and life.
            </p>
            <p className="text-slate-400 text-sm sm:text-base mb-8 text-center">
              I'm always exploring the intersection between creativity & logic—let's build something awesome together! 🚀
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <Skills />
          </ScrollFadeIn>
        </div>
      </section>
    </section>
  );
};

export default About;
