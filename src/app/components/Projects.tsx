import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Flower Themed Website",
    description: "A beautiful flower-themed website built using React.",
    imageUrl: "/images/flower.png",
    link: "https://flower-themed-website.vercel.app/"
  },
  {
    title: "Teacher Hiring Website",
    description: "A modern and user-friendly teacher hiring website built using React.js.",
    imageUrl: "/images/teacher.png", 
    link: "https://teacher-hiring-website.vercel.app/"
  },
  
  {
    title: "Dynamic Blog",
    description: "A responsive and feature-rich dynamic blog built with interactive functionalities.",
    imageUrl: "/images/blog.png", 
    link: "https://dynamic-blog-gules.vercel.app/"
  },
  {
    title: "Static Resume Builder",
    description: "A beautifully designed static resume builder created using HTML and CSS.",
    imageUrl: "/images/resume.png", 
    link: "https://static-resume-builder-delta.vercel.app/"
  },

  {
    title: "ATM Machine",
    description: "An ATM machine simulation with functional user interface.",
    imageUrl: "/images/atm-machine.jpg",
    link: "https://github.com/rubii22/Colorfull-ATM-Machine.git"
  },
  
  
  {
    title: "Shareable Resume Builder",
    description: "A dynamic resume builder with shareable link functionality.",
    imageUrl: "/images/resume.jpg", 
    link: "https://hackathon-milestone-5-seven.vercel.app/"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative p-16 md:p-24 text-center bg-gray-50">
      
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 animate-gradientMove opacity-50"></div>

      {/* Heading with Gradient and Animation */}
      <h2 className="relative text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-10 z-10 animate-pulse">
        My Projects
      </h2>

      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 z-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out transform"
          >
            <div className="relative w-full h-56 mb-6">
              <Image
                src={project.imageUrl}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
            <p className="text-lg text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-500 hover:text-blue-700 font-medium"
            >
              View Project <FaExternalLinkAlt className="ml-2" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
