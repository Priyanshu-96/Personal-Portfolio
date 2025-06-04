import { Tilt } from "react-tilt";
import ScrollFadeIn from "./ScrollFadeIn";

const projects = [
  {
    title: "DeepCure AI",
    year: "2024",
    description:
      "A web app using React, Node.js & Python Microservices to suggest medicine based on symptoms.",
    tech: ["React", "Node.js", "Python", "REST API"],
  },
  {
    title: "Crowdfunding Platform",
    year: "2024",
    description:
      "An AI-powered chatbot built with Python and FastAPI to handle user queries smartly.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Personal Portfolio Website",
    year: "2025",
    description:
      "A mobile-first personal portfolio made with Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind", "Framer Motion", "TypeScript"],
  },
];

interface Project {
  title: string;
  year: string;
  description: string;
  tech: string[];
}

const ProjectCard = ({ project }: { project: Project }) => (
  <Tilt
    tiltMaxAngleX={10}
    tiltMaxAngleY={10}
    perspective={900}
    scale={1.03}
    transitionSpeed={450}
    glareEnable={false}
  >
    <div
      className="bg-black/30 backdrop-blur-md shadow-xl border border-purple-500 rounded-2xl p-6 m-4 max-w-sm sm:max-w-md transition-transform duration-300 ease-out will-change-transform"
      style={{
        transform: "translateZ(0)",
      }}
    >
      <h3 className="text-xl font-bold text-white">{project.title}</h3>
      <p className="text-purple-400 text-sm">{project.year}</p>
      <p className="text-gray-300 mt-2 text-sm">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </Tilt>
);

const ProjectsSection = () => (
  <section
    id="projects"
    className="text-center py-14 sm:py-20 px-4 sm:px-6 overflow-x-hidden scroll-smooth relative z-10"
  >
    <ScrollFadeIn>
      <h2 className="text-4xl font-serif text-white mb-10 tracking-tight">
        PROJECTS
      </h2>
    </ScrollFadeIn>

    <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
      {projects.map((project, index) => (
        <ScrollFadeIn key={index}>
          <ProjectCard project={project} />
        </ScrollFadeIn>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
