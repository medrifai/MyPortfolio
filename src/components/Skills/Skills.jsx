import { motion } from "framer-motion";
import { Code, Cpu, Database, Wrench } from "lucide-react"; // Remplacer "Tools" par "Wrench"

const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: <Code className="w-6 h-6 text-blue-500" />,
      skills: ["ReactJS", "TailwindCSS", "HTML5", "CSS3", "JavaScript (ES6+)"],
    },
    {
      category: "Backend Development",
      icon: <Cpu className="w-6 h-6 text-green-500" />,
      skills: ["Java", "Spring Boot", "Node.js", "RESTful APIs"],
    },
    {
      category: "Database Management",
      icon: <Database className="w-6 h-6 text-orange-500" />,
      skills: ["MySQL", "PostgreSQL", "SQL Server"],
    },
    {
      category: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6 text-purple-500" />, // Mise à jour avec "Wrench"
      skills: ["Git/GitHub", "Docker", "Postman", "VS Code", "IntelliJ IDEA"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-gray-50 to-white">
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
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-blue-50 text-blue-600">
              Mes Compétences
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent">
            My Skills
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillSet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100"
            >
              {/* Icon and Category */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center">
                  {skillSet.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {skillSet.category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="text-gray-700 space-y-2">
                {skillSet.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-50 text-blue-600"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
