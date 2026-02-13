import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { websiteContent } from '../../data/content';

const Expertise = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const { expertise } = websiteContent;

  return (
    <section id="expertise" ref={ref} className="py-20 lg:py-32 bg-[rgba(210,207,212,1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-700 mb-4">
            {expertise.title}
          </h2>
          <p className="text-lg sm:text-xl text-navy-700 max-w-3xl mx-auto">
            {expertise.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative bg-white/50 backdrop-blur-glass rounded-2xl p-8 border border-white/20 hover:border-gold-500/50 transition-all duration-300 group"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-coral-gold opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" />
              
              {/* Number */}
              <div className="absolute top-4 right-4 text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              {/* Icon */}
              <div className="relative w-16 h-16 bg-gradient-coral-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">{item.icon}</span>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed relative z-10">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
