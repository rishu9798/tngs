import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { websiteContent } from '../../data/content';

const Quality = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const { quality } = websiteContent;

  return (
    <section id="quality" ref={ref} className=" min-h-screen py-20 lg:py-32 bg-[rgba(210,207,212,1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 mb-4">
            {quality.title}
          </h2>
          <p className="text-lg sm:text-xl text-navy-700 max-w-3xl mx-auto">
            {quality.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {quality.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative bg-white/80 backdrop-blur-md rounded-2xl p-8 lg:p-10 
                 border border-slate-200 hover:border-blue-400 
                 transition-all duration-300 overflow-hidden group shadow-md hover:shadow-xl"
                 >
              {/* Check mark background */}
              <div className="absolute bottom-0 right-0 text-9xl font-black text-white/5 group-hover:text-white/10 transition-colors leading-none">
                ✓
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4">

                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quality;
