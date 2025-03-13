import { FaGithub, FaLinkedin, FaLink } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

const Socials = () => {
  return (
    <div className="fixed top-20 right-5 flex items-center gap-4 bg-opacity-30 backdrop-blur-md px-6 py-3 rounded-full border border-gray-600 shadow-lg bg-gradient-to-r from-gray-900 to-gray-800">
      {/* GitHub */}
      <a href="https://github.com/Priyanshu-96" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-white text-xl hover:text-purple-400 transition duration-300" />
      </a>

      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/priyanshu-srivastava-419979280/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-white text-xl hover:text-purple-400 transition duration-300" />
      </a>

      {/* Portfolio Link */}
      <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer">
        <FaLink className="text-white text-xl hover:text-purple-400 transition duration-300" />
      </a>

      {/* CV Download */}
      <a href="https://drive.google.com/file/d/1a43AFbB5WUy_FjvIgHU7QHw7jpXX4-F3/view?usp=drive_link" download>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-700 text-white rounded-full hover:bg-purple-600 transition duration-300">
          Resume <IoMdDownload />
        </button>
      </a>
    </div>
  );
};

export default Socials;
