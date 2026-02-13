import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { websiteContent } from '../../data/content';

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const { about } = websiteContent;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" ref={ref} className="py-20  min-h-screen lg:py-32 bg-[rgba(210,207,212,1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 mb-4"
          >
            {about.title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {about.subtitle}
          </motion.p>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="bg-slate-200 rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300 border-l-4 border-coral-500"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-coral-500 to-coral-400 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-4">
              {about.mission.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {about.mission.text}
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-slate-200 rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300 border-l-4 border-teal-500"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-400 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">👁️</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-4">
              {about.vision.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {about.vision.text}
            </p>
          </motion.div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {about.values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-slate-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h4 className="text-xl font-bold text-navy-900 mb-3">
                {value.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
