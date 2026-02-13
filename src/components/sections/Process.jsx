import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { websiteContent } from '../../data/content';

const Process = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const { process } = websiteContent;

  return (
    <section id="process" ref={ref} className="min-h-screen py-20 lg:py-32 bg-[rgba(210,207,212,1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 mb-4">
            {process.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {process.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {process.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative bg-slate-200 rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Number Badge */}
              <div className="absolute -top-6 left-8">
                <div className="w-16 h-16 bg-gradient-coral-gold rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-black text-white">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="mt-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                  {step.description}
                </p>
              </div>

              {/* Connector Line (for desktop) */}
              {index < process.steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-coral-500 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
