import { useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import ParticlesComponent from "../components/ParticlesComponent";
import Socials from "../components/Socials";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsMenuOpen(e.target.checked);
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 relative">
      <ParticlesComponent />
      <Socials isMenuOpen={isMenuOpen} />

      <nav className="fixed top-0 w-full bg-transparent shadow-md z-50">
        <div className="flex justify-between items-center py-6 px-4 md:px-10">
          <h1 className="text-lg font-extrabold font-serif text-white">PRIYANSHU</h1>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {["about", "projects", "connect"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="relative group text-white text-sm font-Cambria hover:text-purple-400 "
              >
                {item.toUpperCase()}
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-purple-400 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <input
              type="checkbox"
              id="checkbox"
              className="hidden"
              checked={isMenuOpen}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="checkbox" className="toggle">
              <div className="bars" id="bar1"></div>
              <div className="bars" id="bar2"></div>
              <div className="bars" id="bar3"></div>
            </label>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col items-center py-6 space-y-6 bg-transparent backdrop-blur-md"
          >
            {["about", "projects", "connect"].map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className="text-purple-400 text-lg font-medium hover:text-sky-500"
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.toUpperCase()}
              </motion.a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Animated Avatar + Typewriter */}
      <motion.div
        className="absolute w-60 h-60 bg-purple-500 blur-[90px] opacity-50"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
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
      <motion.h2
        className="text-2xl sm:text-4xl font-cursive mt-6 text-center z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Priyanshu 👋🏼
      </motion.h2>
      <h3 className="text-sm sm:text-lg font-bold tracking-wide mt-2 text-center z-10">
        <Typewriter
          options={{
            strings: ["Frontend Engineer", "React Enthusiast", "UI/UX Passionate"],
            autoStart: true,
            loop: true,
          }}
        />
      </h3>
      <motion.p
        className="text-center text-gray-600 dark:text-gray-300 max-w-xs sm:max-w-lg mt-4 leading-relaxed z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        I specialize in crafting modern, user-friendly interfaces with JavaScript and React. My goal is to build web applications that not only function seamlessly but also deliver an intuitive experience. Let's create something amazing together!
      </motion.p>
    </section>
  );
};

export default Home;
