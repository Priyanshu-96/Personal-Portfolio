import { motion } from "framer-motion";
import Skills from "./Skills";

const About = () => {
  return (
    <section className="bg-[#0a0215] text-white py-20 relative flex justify-center">
      {/* Background Glow */}
      <div className="absolute w-72 h-72 bg-purple-500 blur-[120px] opacity-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

      <motion.div
        className="container mx-auto px-6 flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Title */}
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-10 text-center">
          ABOUT ME
        </h2>

        {/* Card Wrapper with Hover Effect */}
        <motion.div
          className="relative bg-[#14062d] shadow-lg border border-purple-500 rounded-2xl p-8 max-w-4xl mx-auto text-center flex flex-col lg:flex-row items-center transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(168, 85, 247, 0.5)" }}
        >
          {/* About Text */}
          <motion.div
            className="lg:w-1/2 text-slate-400 leading-relaxed text-lg"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p>
              I'm a full-stack software engineer specializing in front-end development.
              I love working at the intersection of creativity and technology.
              My expertise lies in JavaScript, React, and UI/UX design.
            </p>
            <p className="mt-3">
              I craft seamless digital experiences that not only function beautifully
              but also tell a story. Let's build something amazing together! 🚀
            </p>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            className="lg:w-1/2 flex justify-center mt-10 lg:mt-0"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Skills />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
