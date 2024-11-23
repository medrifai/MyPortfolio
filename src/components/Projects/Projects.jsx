import { motion } from 'framer-motion';
import React from 'react';

export const Projects = () => {
  const projects = [
    {
      title: "Projet Académique : App Desktop de Gestion Administrative d'un Collège",
      description: (
        <>
          <strong>Technologies utilisées :</strong> Java, JavaFX, MySQL
          <br />
          Conception et développement d’une application pour gérer les étudiants, enseignants, et emplois du temps.
          <ul className="list-inside list-disc text-gray-600">
            <li><strong>Backend :</strong> Implémentation de la logique métier en Java pour gérer les opérations CRUD.</li>
            <li><strong>Frontend :</strong> Conception d’une interface intuitive avec JavaFX.</li>
            <li><strong>Fonctionnalités :</strong> Gestion des inscriptions, emplois du temps, gestion d’abscence.</li>
          </ul>
        </>
      ),
      technologies: ["Java", "JavaFX", "MySQL"],
      image: "/assets/images/javaProject.png",
    },
    // Ajoutez d'autres projets ici si nécessaire
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mt-6"  // Margin top ajouté ici
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-60 object-cover mx-auto mt-4"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
