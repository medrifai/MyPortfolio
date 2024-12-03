import { motion } from 'framer-motion';
import React from 'react';

export const Projects = () => {
  const projects = [
    {
      title: "App Desktop de Gestion Administrative d'un Collège",
      description: (
        <div className="bg-blue-100 p-4 rounded-lg">
          <ul className="text-blue-900">
            <li><strong>Génération des emplois du temps</strong></li>
            <li><strong>Gestion des absences</strong></li>
            <li><strong>Gestion des salles et du matériel</strong></li>
          </ul>
        </div>
      ),
      technologies: ["Java", "JavaFX", "MySQL"],
      image: "/assets/images/javaProject.png",
    },
    // Ajoutez d'autres projets ici si nécessaire
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-r from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-16 text-gray-800"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 mb-8 max-w-xs md:max-w-sm lg:max-w-md"
            >
              <motion.img 
                src={project.image} 
                alt={project.title}
                className="w-full h-60 object-cover rounded-t-2xl transition-transform duration-300 hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{project.title}</h3>
                <div className="text-lg leading-relaxed mb-4">{project.description}</div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span key={tech} className="bg-blue-100 text-blue-800 text-sm px-4 py-2 rounded-full transform hover:scale-110 transition-transform duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.button 
                  className="mt-4 px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  Voir le projet
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
