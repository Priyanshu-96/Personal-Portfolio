// src/components/Skills.tsx
import { motion } from 'framer-motion';
import {
  FaNodeJs,
  FaBootstrap,
  FaSass,
  FaLinux,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
  FaDatabase,
  FaTerminal,
} from 'react-icons/fa';
import {// Ensure the package is updated and the export exists
  SiFirebase,
  SiVite,
  SiVercel,
  SiNetlify,
  SiFlask,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

const skills = [
  { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
  // { name: 'ChatGPT', icon: <SiChatgpt color="#10A37F" /> }, // Removed as it is not exported
  { name: 'SQL', icon: <FaDatabase color="#003B57" /> },
  { name: 'Flask', icon: <SiFlask color="#000000" /> },
  { name: 'Bootstrap', icon: <FaBootstrap color="#7952B3" /> },
  { name: 'Firebase', icon: <SiFirebase color="#FFCA28" /> },
  { name: 'Vite', icon: <SiVite color="#646CFF" /> },
  { name: 'Sass', icon: <FaSass color="#CC6699" /> },
  { name: 'Vercel', icon: <SiVercel color="#000000" /> },
  { name: 'Netlify', icon: <SiNetlify color="#00C7B7" /> },
  { name: 'Bash', icon: <FaTerminal color="#4EAA25" /> },
  { name: 'Linux', icon: <FaLinux color="#FCC624" /> },
  { name: 'Git', icon: <FaGitAlt color="#F05032" /> },
  { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
  { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
  { name: 'JavaScript', icon: <FaJsSquare color="#F7DF1E" /> },
  { name: 'React', icon: <FaReact color="#61DAFB" /> },
  { name: 'Python', icon: <FaPython color="#3776AB" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> },
  { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
  {name: 'Express', icon: <FaNodeJs color="#000000" />}, // Assuming Express is represented by Node.js icon
];

const Skills = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center p-4 bg-white bg-opacity-10 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-4xl mb-2">{skill.icon}</div>
          <p className="text-sm text-center text-white">{skill.name}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
