import { useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Menu, X } from "lucide-react";
import ParticlesComponent from "../components/ParticlesComponent";
 // Corrected import path

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="flex flex-col items-center justify-center h-screen px-6 relative">
      {/* Particle Background */}
      <ParticlesComponent />

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-transparent shadow-md z-50">
        <div className="flex justify-between items-center py-6 px-4 md:px-10">
          <h1 className="text-lg font-extrabold font-serif text-white">PRIYANSHU</h1>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="relative group text-purple-400 text-sm font-serif hover:text-sky-500">
              ABOUT
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#projects" className="relative group text-purple-400 text-sm font-serif hover:text-sky-500">
              PROJECTS
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#contact" className="relative group text-purple-400 text-sm font-serif hover:text-sky-500">
              CONTACT
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="https://drive.google.com/file/d/1a43AFbB5WUy_FjvIgHU7QHw7jpXX4-F3/view?usp=sharing" className="relative group text-purple-400 text-sm font-serif hover:text-sky-500">
              RESUME
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
          </div>
          <button className="md:hidden text-purple-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center py-4 space-y-4 bg-[#0a0215]">
            <a href="#about" className="text-purple-400 hover:text-sky-500" onClick={() => setIsMenuOpen(false)}>ABOUT</a>
            <a href="#projects" className="text-purple-400 hover:text-sky-500" onClick={() => setIsMenuOpen(false)}>PROJECTS</a>
            <a href="#contact" className="text-purple-400 hover:text-sky-500" onClick={() => setIsMenuOpen(false)}>CONTACT</a>
          </div>
        )}
      </nav>

      {/* Background Blur Effect */}
      <motion.div
        className="absolute w-60 h-60 bg-purple-500 blur-[90px] opacity-50"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* SVG Avatar with Floating Animation */}
      <motion.div
        className="relative w-40 h-40 sm:w-56 sm:h-56 flex items-center justify-center mt-16"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <object 
          type="image/svg+xml" 
          data="/avatar-laptop.svg" 
          className="w-full h-full"
        ></object>
      </motion.div>

      {/* Heading with Fade-in Animation */}
      <motion.h2
        className="text-2xl sm:text-4xl font-cursive mt-6 text-center z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Priyanshu 👋🏼
      </motion.h2>

      {/* Typing Animation for Role */}
      <h3 className="text-sm sm:text-lg font-bold tracking-wide mt-2 text-center z-10">
        <Typewriter
          options={{
            strings: ["Frontend Engineer", "React Enthusiast", "UI/UX Passionate"],
            autoStart: true,
            loop: true,
          }}
        />
      </h3>

      {/* Paragraph with Fade-in Effect */}
      <motion.p
        className="text-center text-gray-600 dark:text-gray-300 max-w-xs sm:max-w-lg mt-4 leading-relaxed z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        I specialize in crafting modern, user-friendly interfaces with JavaScript and React.
        My goal is to build web applications that not only function seamlessly but also deliver an intuitive experience.
        Let's create something amazing together!
      </motion.p>
    </section>
  );
};

export default Home;
