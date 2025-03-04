import { motion } from "framer-motion";

const skills = [
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" },
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
  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-[#0a0215] text-white">
      {/* Centerpiece Glow */}
      <motion.div
        className="absolute w-60 h-60 bg-purple-500 blur-[90px] opacity-50"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating "Skills" Text */}
      <motion.div
        className=" flex items-center justify-center text-2xl font-semibold z-10 shadow-lg shadow-purple-500/30"
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
            className="w-12 h-12 absolute"
            style={{
              transform: `rotate(${index * (360 / skills.length)}deg) translate(110px) rotate(-${index * (360 / skills.length)}deg)`,
            }}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
