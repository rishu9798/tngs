import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { websiteContent } from '../../data/content';

const Industries = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const { industries } = websiteContent;

  const colorMap = {
    coral: 'from-coral-500 to-coral-400',
    teal: 'from-teal-500 to-teal-400',
    gold: 'from-gold-500 to-gold-400',
  };

  return (
    <section id="industries" ref={ref} className="min-h-screen py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 mb-4">
            {industries.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {industries.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -15 }}
              className="relative bg-cream rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Decorative background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/30 to-transparent rounded-full blur-2xl transform translate-x-8 -translate-y-8" />
              </div>

              {/* Top border accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colorMap[sector.color]}`} />

              {/* Emoji */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-7xl mb-6 relative z-10"
              >
                {sector.emoji}
              </motion.div>

              {/* Name */}
              <h3 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-4 relative z-10">
                {sector.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                {sector.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
