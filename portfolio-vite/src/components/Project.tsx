import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Project One",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical literature.",
    image: "", // Add project image URL
  },
  {
    id: 2,
    title: "Project Two",
    description:
      "This book is a treatise on the theory of ethics, very popular during the Renaissance.",
    image: "", // Add project image URL
  },
];

const Projects = () => {
  return (
    <section className="bg-[#0a0215] text-purple-400 font-semibold py-20">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-12">PROJECTS</h2>

        {/* Projects List */}
        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`flex flex-col md:flex-row items-center justify-between bg-[#1a1525] p-6 md:p-10 rounded-2xl shadow-lg w-full`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Image / Placeholder */}
              <div
                className={`w-[180px] h-[120px] md:w-[250px] md:h-[150px] bg-pink-400 rounded-xl ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              ></div>

              {/* Project Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
