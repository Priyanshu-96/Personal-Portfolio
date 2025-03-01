
const skills = [
  "HTML/CSS", "JAVASCRIPT", "TAILWIND CSS", "REACTJS",
  "MONGO DB", "PYTHON", "POSTGRESQL","GIT"
];

const SkillsMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden bg-red-500 py-3 -rotate-2">
      {/* Marquee Wrapper */}
      <div className="flex whitespace-nowrap animate-marquee">
        {[...skills, ...skills].map((skill, index) => (
          <span
            key={index}
            className="mx-4 text-white font-bold uppercase tracking-wider text-lg"
          >
            ♦ {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsMarquee;
