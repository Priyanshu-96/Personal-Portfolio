import { useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Menu, X } from "lucide-react"; // Icons for hamburger menu

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="flex flex-col items-center justify-center h-screen px-6 relative">
      
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center py-6 px-10 absolute top-0 z-50">
        <h1 className="text-lg font-extrabold font-serif">PRIYANSHU</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
        <a href="#about"className="text-purple-400 text-sm font-serif hover:text-sky-500"
         onClick={(e) => {e.preventDefault(); document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
        }}
        >
        ABOUT
        </a>
          <a href="#Projects" className="text-purple-400 text-sm font-serif hover:text-sky-500 "
          onClick={(e) => {e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
        }
        }
          >PROJECTS</a>
          <a href="#contact" className="text-purple-400 text-sm font-serif  hover:text-sky-500 ">CONTACT</a>
          <a href="https://drive.google.com/file/d/1a43AFbB5WUy_FjvIgHU7QHw7jpXX4-F3/view?usp=sharing" className="text-purple-400 text-sm font-serif  hover:text-sky-500 ">RESUME</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-purple-400"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="absolute top-16 left-0 w-full bg-[#0a0215]  shadow-md md:hidden flex flex-col items-center py-4 space-y-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <a href="#about" className="text-purple-400  hover:text-sky-500 "  onClick={() => setIsMenuOpen(false)}>ABOUT</a>
          <a href="#projects" className="text-purple-400  hover:text-sky-500 " onClick={() => setIsMenuOpen(false)}>PROJECTS</a>
          <a href="#contact" className="text-purple-400  hover:text-sky-500 " onClick={() => setIsMenuOpen(false)}>CONTACT</a>
        </motion.div>
      )}

      {/* Dark Mode Toggle */}
     

      {/* Background Blur Effect */}
      <motion.div
        className="absolute w-60 h-60 bg-purple-500 blur-[90px] opacity-50"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* SVG Avatar with Floating Animation */}
      <motion.div
        className="relative w-56 h-56 flex items-center justify-center mt-16"
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
        className="text-4xl font-cursive mt-6 text-center "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Priyanshu 👋🏼
      </motion.h2>

      {/* Typing Animation for Role */}
      <h3 className="text-lg font-bold tracking-wide mt-2 text-center">
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
        className="text-center text-gray-600 dark:text-gray-300 max-w-lg mt-4 leading-relaxed"
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
