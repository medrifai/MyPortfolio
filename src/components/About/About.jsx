import { motion } from "framer-motion";
import { ArrowDown, FileDown, Github, Linkedin, Mail } from "lucide-react";
import React from "react";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen relative bg-gradient-to-b from-blue-50 to-white">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-60 -left-40 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pt-32 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-teal-400 text-transparent bg-clip-text">
                  Full Stack Developer
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600">
                Turning Ideas into Reality
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-gray-600 leading-relaxed">
              Passionate Full Stack Developer specialized in Spring Boot &
              React, with a keen eye for creating seamless user experiences. I
              transform complex problems into elegant solutions through clean,
              efficient code.
            </motion.p>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4">
              <a
                href="https://github.com/medrifai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300"
                aria-label="GitHub Profile">
                <Github className="w-6 h-6 text-gray-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-rifai-2411b8263/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300"
                aria-label="LinkedIn Profile">
                <Linkedin className="w-6 h-6 text-gray-700" />
              </a>
              <a
                href="mailto:rifaii.mohameed@gmail.com"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300"
                aria-label="Email Contact">
                <Mail className="w-6 h-6 text-gray-700" />
              </a>
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 flex-wrap">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300">
                Get in Touch
                <ArrowDown className="ml-2 w-4 h-4" />
              </a>
              <a
                href="/assets/docs/CV_Mohamed_RIFAI.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors duration-300">
                Download CV
                <FileDown className="ml-2 w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Profile Image/Illustration */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-full aspect-square max-w-xs mx-auto group">
              {/* Gradient Background Blur with Enhanced Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/40 to-teal-400/40 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500" />

              {/* Modern Container with Face-Focused Zoom and Bottom Crop */}
              <div
                className="relative bg-gradient-to-br from-blue-50/90 to-teal-50/90 rounded-full overflow-hidden 
      border-2 border-white/30 shadow-lg hover:shadow-xl 
      transition-all duration-300 ease-in-out">
                <div className="relative w-full h-full">
                  <img
                    src="/assets/images/Profile.me.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover object-top 
          transform scale-[1.6] translate-y-[17%] translate-x-[12%]
          group-hover:scale-[1.7] 
          transition-transform duration-300 
          hover:brightness-110"
                    loading="lazy"
                  />
                  {/* Gradient Mask to Crop Bottom */}
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-transparent to-white 
          via-transparent via-70% 
          pointer-events-none"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="p-2 bg-white rounded-full shadow-lg">
            <ArrowDown className="w-5 h-5 text-blue-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
