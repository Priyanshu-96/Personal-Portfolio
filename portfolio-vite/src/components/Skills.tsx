import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", level: 75 },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", level: 85 },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg", level: 70 },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", level: 90 },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", level: 95 },
  { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg", level: 80 },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", level: 75 },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg", level: 65 },
];

const orbitVariants = {
  rotate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 12,
      ease: "linear",
    },
  },
};


const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<{ name: string; level: number } | null>(null);

  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-md h-[350px]">
      {/* Glowing Centerpiece */}
      <motion.div
        className="absolute w-60 h-60 bg-purple-500 blur-[90px] opacity-50"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating "Skills" Text */}
      <motion.div
        className="text-xl font-semibold z-10 text-white mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Skills
      </motion.div>

      {/* Orbiting Skills */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        variants={orbitVariants}
        animate="rotate"
      >
        {skills.map((skill, index) => (
          <motion.img
            key={index}
            src={skill.icon}
            alt={skill.name}
            className="w-12 h-12 absolute cursor-pointer hover:scale-110 transition-transform"
            style={{
              transform: `rotate(${index * (360 / skills.length)}deg) translate(140px) rotate(-${index * (360 / skills.length)}deg)`,
            }}
            onClick={() => setSelectedSkill(skill)}
          />
        ))}
      </motion.div>

      {/* Skill Progress Modal */}
      <AnimatePresence>
  {selectedSkill && (
    <motion.div
      key="modal"
      className="fixed inset-0 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Dark Overlay */}
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={() => setSelectedSkill(null)}
      />
      {/* Modal Box */}
      <motion.div
        className="relative bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col items-center w-80"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <h2 className="text-xl font-semibold mb-3 text-center">
          {selectedSkill.name}
        </h2>
        {/* Progress Bar */}
        <div className="w-full bg-gray-700 rounded-full h-5 overflow-hidden relative">
          <motion.div
            key={selectedSkill.name}  // forces re-render when skill changes
            className="h-5 bg-purple-500 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${selectedSkill.level}%` }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>
        <p className="mt-2 text-sm text-gray-300 ">
          {selectedSkill.level}% Proficiency
        </p>
        <button
          className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition"
          onClick={() => setSelectedSkill(null)}
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
};

export default Skills;
