import React, { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaLink, FaShareAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
const Socials = ({ isMenuOpen = false }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const manualCollapse = useRef(false);
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setCollapsed(false);
        manualCollapse.current = false;
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);

      if (y > 100 && !collapsed && !manualCollapse.current) {
        setCollapsed(true);
      } else if (y <= 100 && collapsed && !manualCollapse.current) {
        setCollapsed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [collapsed]);

  const toggleCollapsed = () => {
    const newState = !collapsed;
    manualCollapse.current = newState;
    setCollapsed(newState);
  };

  if (isMenuOpen) return null;

  return (
    <div className="fixed top-20 right-5 z-40">
      <AnimatePresence>
        {isMobile && collapsed ? (
          // FAB button (collapsed)
          <motion.button
            key="social-icon"
            onClick={toggleCollapsed}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-purple-600 text-white p-3 rounded-full shadow-md hover:bg-purple-700 transition duration-300"
            title="Show Social Links"
          >
            <FaShareAlt className="text-xl" />
          </motion.button>
        ) : isMobile && !collapsed ? (
          // Full menu (mobile expanded)
          <motion.div
            key="social-bar"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-4 bg-opacity-30 backdrop-blur-md px-6 py-3 rounded-full border border-gray-600 bg-[#100b2c]"
          >
            <a href="https://github.com/Priyanshu-96" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white text-xl hover:text-purple-400 transition duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/priyanshu-srivastava-419979280/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white text-xl hover:text-purple-400 transition duration-300" />
            </a>
            <a href="https://priyanshu-dev-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
              <FaLink className="text-white text-xl hover:text-purple-400 transition duration-300" />
            </a>
            <a
              href="https://drive.google.com/file/d/1a43AFbB5WUy_FjvIgHU7QHw7jpXX4-F3/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-2 px-4 py-2 bg-purple-700 text-white rounded-full hover:bg-purple-600 transition duration-300">
                Resume <IoMdDownload />
              </button>
            </a>
            <button
              onClick={toggleCollapsed}
              className="text-white hover:text-purple-400 transition duration-300"
              title="Hide Social Links"
            >
              ✕
            </button>
          </motion.div>
        ) : (
          // Desktop view: always visible
          <motion.div
            key="social-bar-desktop"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-4 bg-opacity-30 backdrop-blur-md px-6 py-3 rounded-full border border-gray-600 bg-[#100b2c]"
          >
            <a href="https://github.com/Priyanshu-96" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white text-xl hover:text-purple-400 transition duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/priyanshu-srivastava-419979280/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white text-xl hover:text-purple-400 transition duration-300" />
            </a>
            <a href="https://priyanshu-dev-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
              <FaLink className="text-white text-xl hover:text-purple-400 transition duration-300" />
            </a>
            <a
              href="https://drive.google.com/file/d/1a43AFbB5WUy_FjvIgHU7QHw7jpXX4-F3/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-2 px-4 py-2 bg-purple-700 text-white rounded-full hover:bg-purple-600 transition duration-300">
                Resume <IoMdDownload />
              </button>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Socials;
