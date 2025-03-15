import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Alternative Medicine Recommender",
    year: "2024",
    description: "A web application built with React,Node.js and Python Microservices to recommend medicines based in user symptoms.",
    tech: ["React", "Node.js", "Python Microservices"],
  },
  {
    title: "Crowdfunding Platform",
    year: "2024",
    description: "An AI-powered chatbot using Python and FastAPI, capable of answering queries intelligently.",
    tech: ["Python", "FastAPI", "OpenAI API"],
  },
  {
    title: "Personal Portfolio Website",
    year: "2025",
    description: "A mobile-friendly personla portfolio website developed using Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
];
interface Project {
  title: string;
  year: string;
  description: string;
  tech: string[];
}
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.05} transitionSpeed={500}>
      <motion.div
        className="bg-black/30 backdrop-blur-lg shadow-lg border border-purple-500 rounded-2xl p-6 m-4 max-w-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        <p className="text-purple-400 text-sm">{project.year}</p>
        <p className="text-gray-300 mt-2">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span key={index} className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </Tilt>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="text-center py-12">
      <h2 className="text-4xl font-bold text-purple-400 mb-10">PROJECTS</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
