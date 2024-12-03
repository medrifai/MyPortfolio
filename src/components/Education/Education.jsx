import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section 1: Cycle Ingénieur */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center mb-24"
        >
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <div className="text-sm text-blue-600 font-semibold mb-2">2023 - 2026</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Cycle Ingénieur en Génie Informatique</h2>
            <p className="text-gray-600 mb-6">
              Diplôme de Cycle Ingénieur en Génie Informatique - 2023 à 2026. 
              Une formation qui me permet d'approfondir mes connaissances en informatique et de participer à des projets technologiques.
            </p>
            <button className="px-6 py-2 text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:bg-indigo-700 rounded-lg">
              Voir le Diplôme
            </button>
          </div>
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 w-full mt-8 lg:mt-0"
          >
            <img 
              src="assets/images/FST_Settat.jpg" 
              alt="Établissement actuel" 
              className="rounded-lg shadow-lg w-3/4 h-64 object-cover mx-auto"
            />
          </motion.div>
        </motion.div>

        {/* Section 2: Alternance DEUG */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row-reverse items-center mb-24"
        >
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <div className="text-sm text-green-600 font-semibold mb-2">2021 - 2023</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Alternance DEUG en Mathématiques Appliquées</h2>
            <p className="text-gray-600 mb-6">
              Diplôme DEUG en Mathématiques Appliquées à la Faculté des Sciences Ain Chouk - 2021 à 2023. 
              Ce parcours m’a permis de développer des compétences en mathématiques appliquées et en algorithmie.
            </p>
            <button className="px-6 py-2 text-white bg-gradient-to-r from-green-600 to-teal-600 hover:bg-teal-700 rounded-lg">
              Voir le Diplôme
            </button>
          </div>
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 w-full mt-8 lg:mt-0"
          >
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
          className="flex flex-col lg:flex-row items-center"
        >
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <div className="text-sm text-red-600 font-semibold mb-2">2019 - 2021</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Baccalauréat Sciences Maths B</h2>
            <p className="text-gray-600 mb-6">
              Baccalauréat Sciences Mathématiques B - 2019 à 2021. 
              Une base solide en mathématiques, physique, et sciences appliquées.
            </p>
            <button className="px-6 py-2 text-white bg-gradient-to-r from-red-600 to-orange-600 hover:bg-orange-700 rounded-lg">
              Voir le Diplôme
            </button>
          </div>
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 w-full mt-8 lg:mt-0"
          >
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
