import { motion } from 'framer-motion';
import { ArrowRight, FileText, Github, PlayCircle } from 'lucide-react';
import React, { useState } from 'react';

export const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "College Administrative Management Desktop App",
      description: (
        <>
          <p>A comprehensive solution for educational institutions that streamlines:</p>
          <ul className="list-none space-y-1 mt-2">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-blue-600 rounded-full"></span>
              Generation of timetables
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-blue-600 rounded-full"></span>
              Attendance management
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-blue-600 rounded-full"></span>
              Management of rooms and equipment
            </li>
          </ul>
        </>
      ),
      technologies: ["Java", "JavaFX", "MySQL", "Maven"],
      image: "/assets/images/javaProject.png",
      links: {
        docs: "https://github.com/medrifai/College-Administrative-Management-Desktop-App/blob/master/README.md",
        github: "https://github.com/medrifai/College-Administrative-Management-Desktop-App",
        demo: "#"
      }
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"/>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"/>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2 mb-6 text-sm font-semibold rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/20">
            Portfolio
          </span>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-700 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="mt-4 text-gray-600">Discover my latest achievements</div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => ( 
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100/50">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex flex-col lg:flex-row">
                  {/* Image Section */}
                  <div className="relative lg:w-2/5 h-64 lg:h-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-blue-900/5" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="relative lg:w-3/5 p-8 lg:p-12">
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map(tech => (
                        <span
                          key={tech}
                          className="px-4 py-1.5 rounded-full text-xs font-medium bg-blue-50 text-blue-600 border border-blue-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {project.title}
                    </h3>

                    <div className="text-gray-600 mb-8">
                      {project.description}
                    </div>

                    {/* Actions */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <motion.a
                        href={project.links.docs}
                        className="group/btn flex items-center justify-between px-6 py-3 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-600 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center gap-2">
                          <FileText size={18} />
                          <span>Documentation</span>
                        </div>
                        <ArrowRight size={16} className="opacity-0 group-hover/btn:opacity-100 transform group-hover/btn:translate-x-1 transition-all" />
                      </motion.a>

                      <motion.a
                        href={project.links.github}
                        className="group/btn flex items-center justify-between px-6 py-3 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-600 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center gap-2">
                          <Github size={18} />
                          <span>GitHub</span>
                        </div>
                        <ArrowRight size={16} className="opacity-0 group-hover/btn:opacity-100 transform group-hover/btn:translate-x-1 transition-all" />
                      </motion.a>

                      <motion.a
                        href={project.links.demo}
                        className="group/btn flex items-center justify-between px-6 py-3 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-600 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center gap-2">
                          <PlayCircle size={18} />
                          <span>Live Demo</span>
                        </div>
                        <ArrowRight size={16} className="opacity-0 group-hover/btn:opacity-100 transform group-hover/btn:translate-x-1 transition-all" />
                      </motion.a>
                    </div>
                  </div>
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