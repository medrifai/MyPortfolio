import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  Briefcase,
  Building,
  ChevronRight,
  ExternalLink,
  Github,
  Image as ImageIcon,
  Link as LinkIcon,
  Play,
  Sparkles,
  X
} from "lucide-react";
import React, { useState } from 'react';

const Experience = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "OCP Group",
      duration: "July 2024 - September 2024",
      description:
        "Developed a web application for monitoring production equipment performance, including real-time KPI calculations and maintenance tracking.",
      achievements: [
        "Designed the database and backend using Spring Boot",
        "Implemented the frontend with TailwindCSS",
        "Deployed the application using Docker for cross-platform compatibility",
      ],
      tech: ["Spring Boot", "TailwindCSS", "MySQL", "Docker", "Git"],
      images: [
        {
          title: "Home Vue",
          description: "Home Page indicating what we offer",
          url: "assets/images/Home.jpg"
        },
        {
          title: "Maintenance Tracking",
          description: "Interface de suivi de maintenance des équipements",
          url: "assets/images/Maintenances.jpg"
        },
        {
          title: "Alerts Analytics",
          description: "Showing Alerts Status & Description ",
          url: "assets/images/Alerts.jpg"
        }
      ],
      links: [
        {
          title: "Documentation Technique",
          url: "#",
          type: "docs",
          icon: <ExternalLink className="w-4 h-4" />
        },
        {
          title: "GitHub Repository",
          url: "https://github.com/medrifai/Ocp_equipment_monitoring",
          type: "github",
          icon: <Github className="w-4 h-4" />
        },
        {
          title: "Démo Live",
          url: "#",
          type: "demo",
          icon: <Play className="w-4 h-4" />
        }
      ]
    }
  ];

  const ImageModal = ({ image, onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative bg-white rounded-2xl max-w-4xl w-full overflow-hidden"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>
        <div className="p-6">
          <img 
            src={image.url} 
            alt={image.title}
            className="w-full rounded-lg shadow-lg mb-4"
          />
          <h3 className="text-xl font-bold mb-2">{image.title}</h3>
          <p className="text-gray-600">{image.description}</p>
        </div>
      </motion.div>
    </div>
  );

  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"/>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"/>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div className="inline-block">
            <span className="inline-block px-6 py-2 mb-6 text-sm font-semibold rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/20">
              Expérience Professionnelle
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-700 to-blue-600 bg-clip-text text-transparent mb-6">
            Mes Réalisations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Découvrez mes projets et leurs impacts concrets à travers des métriques et des démonstrations visuelles
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100/50"
            >
              {/* Experience Header */}
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                  <Briefcase className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                    <span className="px-4 py-1 text-sm font-semibold rounded-full bg-blue-100 text-blue-700">
                      {exp.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Building className="w-4 h-4" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                </div>
              </div>
              
              {/* Project Images */}
              <div className="mb-8">
                <h4 className="flex items-center gap-3 text-xl font-bold text-gray-900 mb-6">
                  <ImageIcon className="w-6 h-6 text-blue-500" />
                  Captures d'écran du Projet
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {exp.images.map((image, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      onClick={() => setSelectedImage(image)}
                      className="group relative rounded-xl overflow-hidden cursor-pointer"
                    >
                      <img 
                        src={image.url} 
                        alt={image.title}
                        className="w-full h-48 object-cover transform transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white font-medium">Voir plus</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="mb-8">
                <h4 className="flex items-center gap-3 text-xl font-bold text-gray-900 mb-4">
                  <LinkIcon className="w-6 h-6 text-blue-500" />
                  Ressources du Projet
                </h4>
                <div className="flex flex-wrap gap-4">
                  {exp.links.map((link, i) => (
                    <motion.a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all group"
                    >
                      {link.icon}
                      <span>{link.title}</span>
                      <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Description & Achievements */}
              <div className="mb-8">
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  {exp.description}
                </p>
                <div className="mb-8">
                  <h4 className="flex items-center gap-3 text-xl font-bold text-gray-900 mb-4">
                    <Award className="w-6 h-6 text-blue-500" />
                    Réalisations Clés
                  </h4>
                  <ul className="grid gap-4">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <span className="w-2 h-2 mt-2 rounded-full bg-blue-500" />
                        <span className="flex-1">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="flex items-center gap-3 text-xl font-bold text-gray-900 mb-4">
                  <Sparkles className="w-6 h-6 text-blue-500" />
                  Technologies Utilisées
                </h4>
                <div className="flex flex-wrap gap-3">
                  {exp.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="inline-block px-4 py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-50 to-blue-50 text-blue-700 border border-blue-100 hover:shadow-md transition-shadow"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <ImageModal 
            image={selectedImage} 
            onClose={() => setSelectedImage(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;