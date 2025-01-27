import { motion } from "framer-motion";
import project1 from "/project1.png";
import project2 from "/project2.png";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// Data for Projects
const projectsData = [
  {
    image: project1,
    title: "Personal Portfolio",
    description:
      "I always wanted to create a personal website for myself, showcasing my work and skills in a visually appealing way.",
    technologies: ["REACT", "Node.js"],
    demoLink: "https://your-portfolio-demo-link.com",
    githubLink: "https://github.com/yourusername/portfolio",
  },
  {
    image: project2,
    title: "JobVerse-Job-Portal",
    description:
      "This is a Job Portal, which is a full-stack application. It allows recruiters to post, delete, and update jobs, while candidates can apply and track their application status. Built using Supabase and Clerk.",
    technologies: [
      "REACT",
      "Node.js",
      "Tailwind CSS",
      "Supabase",
      "Clerk",
      "ShadCN UI",
    ],
    demoLink: "https://jobverse-ten.vercel.app/",
    githubLink: "https://github.com/malavikasajith05/JobPortal",
  },
];

// ScrollReveal Component
const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

// ProjectCard Component
const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col gap-6 rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105">
        {/* Project Image */}
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-lg"
          />
        </div>

        {/* Project Content */}
        <div className="flex flex-col gap-4">
          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>

          {/* Description */}
          <p className="text-gray-600">{project.description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex justify-between border-t border-gray-200 pt-4">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-900"
          >
            <FaGithub /> GitHub Repo
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
};

// Projects Component
const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:py-24"
    >
      {/* Section Title */}
      <ScrollReveal>
        <h1 className="text-4xl font-light text-black md:text-6xl">
          My Projects
        </h1>
      </ScrollReveal>

      {/* Project Cards */}
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-amber-800">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

