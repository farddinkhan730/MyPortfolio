import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from '../components/ProjectModal';

// Import project images
import comicCrafterImg from '../assets/project-image/comic-crafter-ai.png';
import techroad from '../assets/project-image/techroad.png';
import LearnX from '../assets/project-image/learnX.png';

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = useMemo(() => [
    // {
    //   category: 'ML Model',
    //   title: 'Comic Crafter AI',
    //   description: 'AI-powered comic panel generator',
    //   longDescription: 'Comic Crafter AI lets users create custom comic strips using AI, leveraging OpenAI GPT-3.5 Turbo for story generation and DALL·E for image creation.',
    //   image: comicCrafterImg,
    //   type: 'AI Application',
    //   client: 'Personal Project',
    //   tools: 'Python, Tailwind CSS, OpenAI GPT-3.5, DALL·E',
    //   tags: ['AI', 'ML', 'Web'],
    //   github: 'https://github.com/Ayak-Here/Comic_generator'
    // },
    {
      "category": "Frontend",
      "title": "TechRoad",
      "description": "Gives Roadmap to learn tech",
      "longDescription": "TechRoad is a web application that provides a comprehensive roadmap for learning various technologies. It offers a structured approach to mastering tech skills.",
      "image": techroad,
      "type": "Web Application",
      "client": "Open Source",
      "tools": "HTML, CSS, JS",
      "tags": [],
      "github": "https://github.com/farddinkhan730/TechRoad-Full-Stack-Project"
    },
    {
      category: 'FullStack',
      title: 'LearnX',
      description: 'A platform for learning and sharing knowledge',
      longDescription: 'LearnX is a web application that allows users to learn and share knowledge on various topics. It features user authentication, content creation, and community engagement.',
      image: LearnX,
      type: 'Web App',
      client: 'Open Source',
      tools: 'React, Tailwind CSS , JS ',
      tags: [],
      github: 'https://github.com/farddinkhan730/LearnX-1'
    }
  ], []);

  return (
    <section id="works" className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-green-500 text-lg font-semibold uppercase">Portfolio</span>
          <motion.h2 
            className="text-3xl font-bold text-gray-900 dark:text-white mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >Recent Works</motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article 
              key={index} 
              className="relative p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition hover:shadow-lg hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{project.description}</p>
              </div>
              <div className="mt-4">
                <motion.img 
                  src={project.image} 
                  alt={`${project.title} project thumbnail`}
                  className="w-full h-auto object-cover rounded-lg"
                  whileHover={{ scale: 1.1, rotate: 2, transition: { duration: 0.3 } }}
                />
              </div>
              <button 
                className="absolute top-4 right-4 bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-green-600 transition"
                onClick={() => setSelectedProject(project)}
                aria-label={`View details for ${project.title}`}
              >
                +
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Works;
