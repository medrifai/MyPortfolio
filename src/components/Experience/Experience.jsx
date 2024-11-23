import { motion } from "framer-motion";
import { Briefcase, Sparkles } from "lucide-react"; // Pour les icônes, utilisez `lucide-react`

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "OCP Group",
      duration: "August 2024",
      description:
        "Developed a web application for monitoring production equipment performance, including real-time KPI calculations and maintenance tracking.",
      achievements: [
        "Designed the database and backend using Spring Boot",
        "Implemented the frontend with React and TailwindCSS",
        "Deployed the application using Docker for cross-platform compatibility",
      ],
      tech: ["Spring Boot", "ReactJS", "TailwindCSS", "MySQL", "Docker"],
    },
    {
      title: "Summer Job",
      company: "PepsiCo",
      duration: "July 2024",
      description:
        "Assisted in inventory management and operational tasks at the regional distribution center.",
      achievements: [
        "Streamlined inventory tracking processes",
        "Improved organizational workflow through effective teamwork",
      ],
      tech: ["Excel", "Team Collaboration"],
    },
    {
      title: "Part-time Worker",
      company: "Local Fish Store",
      duration: "June 2023",
      description:
        "Handled customer service and inventory management for a local fish store.",
      achievements: [
        "Enhanced customer satisfaction with personalized service",
        "Managed stock efficiently to meet demand",
      ],
      tech: ["Customer Relations", "Inventory Management"],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            className="inline-block"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-green-50 text-green-600">
              Mon Parcours
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-green-700 to-green-900 bg-clip-text text-transparent">
            Professional Experience
          </h2>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-green-700 flex items-center justify-center text-white text-xl">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {exp.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-600">
                    {exp.company} &middot; {exp.duration}
                  </p>
                </div>
              </div>

              <div className="text-gray-700 space-y-4">
                <p>{exp.description}</p>

                <div>
                  <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-3">
                    <Sparkles className="w-5 h-5 text-green-500" />
                    Achievements
                  </h4>
                  <ul className="space-y-2 list-disc pl-5">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="text-gray-700"
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-3">
                    <Sparkles className="w-5 h-5 text-blue-500" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {exp.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-green-50 text-green-600"
                      >
                        {tech}
                      </motion.span>
                    ))}
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

export default Experience;
