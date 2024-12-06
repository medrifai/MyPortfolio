import { motion } from "framer-motion";
import { FileDown } from "lucide-react";

const Education = () => {
  return (
    <section
      id="education"
      className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section 1: Cycle Ingénieur */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center mb-24">
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <div className="text-sm text-blue-600 font-semibold mb-2">
              2023 - 2026
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Cycle Ingénieur en Génie Informatique
            </h2>
            <p className="text-gray-600 mb-6">
              Diplôme de Cycle Ingénieur en Génie Informatique - 2023 à 2026.
              Une formation qui me permet d'approfondir mes connaissances en
              informatique et de participer à des projets technologiques.
            </p>
            <button
              className="px-6 py-2 text-white bg-gray-400 cursor-not-allowed rounded-lg opacity-50"
              disabled>
              Voir diplôme
            </button>
          </div>
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 w-full mt-8 lg:mt-0">
            <img
              src="assets/images/FST_Settat.jpg"
              alt="Établissement actuel"
              className="rounded-lg shadow-lg w-3/4 h-64 object-cover mx-auto"
            />
          </motion.div>
        </motion.div>

        {/* Section 2: DEUG */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row-reverse items-center mb-24">
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <div className="text-sm text-blue-600 font-semibold mb-2">
              2021 - 2023
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Alternance DEUG en Mathématiques Appliquées
            </h2>
            <p className="text-gray-600 mb-6">
              Diplôme DEUG en Mathématiques Appliquées à la Faculté des Sciences
              Ain Chouk - 2021 à 2023. Ce parcours m’a permis de développer des
              compétences en mathématiques appliquées et en algorithmie.
            </p>
            <a
              href="/assets/docs/DEUG_Mohamed_RIFAI.pdf"
              download
              className="group relative px-6 py-2 overflow-hidden text-white 
  bg-gradient-to-r from-blue-600 to-indigo-600 
  rounded-lg inline-block text-center
  transition-all duration-300 ease-in-out
  hover:scale-105 hover:shadow-xl
  active:scale-95
  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
  transform hover:rotate-1 hover:-translate-y-1
  before:absolute before:inset-0 before:bg-white/20 before:opacity-0 
  hover:before:opacity-20 before:transition-opacity before:duration-300">
              <span className="relative z-10 flex items-center justify-center gap-2">
                <FileDown className="w-5 h-5 transition-transform group-hover:rotate-6" />
                Voir le Diplôme
              </span>
            </a>
          </div>
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 w-full mt-8 lg:mt-0">
            <img
              src="assets/images/FSAC.jpg"
              alt="Faculté des Sciences Ain Chouk"
              className="rounded-lg shadow-lg w-3/4 h-64 object-cover mx-auto"
            />
          </motion.div>
        </motion.div>

        {/* Section 3: Bac Sciences Maths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <div className="text-sm text-blue-600 font-semibold mb-2">
              2019 - 2021
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Baccalauréat Sciences Maths B
            </h2>
            <p className="text-gray-600 mb-6">
              Baccalauréat Sciences Mathématiques B - 2019 à 2021. Une base
              solide en mathématiques, physique, et sciences appliquées.
            </p>
            <a
              href="/assets/docs/BAC_Mohamed_RIFAI.pdf"
              download
              className="group relative px-6 py-2 overflow-hidden text-white 
  bg-gradient-to-r from-blue-600 to-indigo-600 
  rounded-lg inline-block text-center
  transition-all duration-300 ease-in-out
  hover:scale-105 hover:shadow-xl
  active:scale-95
  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
  transform hover:rotate-1 hover:-translate-y-1
  before:absolute before:inset-0 before:bg-white/20 before:opacity-0 
  hover:before:opacity-20 before:transition-opacity before:duration-300">
              <span className="relative z-10 flex items-center justify-center gap-2">
                <FileDown className="w-5 h-5 transition-transform group-hover:rotate-6" />
                Voir le Diplôme
              </span>
            </a>
          </div>
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 w-full mt-8 lg:mt-0">
            <img
              src="assets/images/CRPTA.png"
              alt="CRPTA Lycée"
              className="rounded-lg shadow-lg w-3/4 h-64 object-cover mx-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
