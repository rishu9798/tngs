import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { websiteContent } from '../../data/content';

const Contact = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const { contact } = websiteContent;

  return (
    <section id="contact" ref={ref} className=" min-h-screen relative py-20 lg:py-32 bg-gradient-navy overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [20, -20, 20],
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-coral-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [-20, 20, -20],
            y: [20, -20, 20],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl"
        />
      </div>

      {/* Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {contact.title}
          </h2>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient-coral-gold mb-16">
            {contact.subtitle}
          </p>
        </motion.div>

        <div className="space-y-6 mb-16 gap-20 ">
          {Object.values(contact.details).map((detail, index) => (
            <motion.a
              key={index}
              href={detail.link}
              target={detail.link.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center   justify-center bg-white/10 backdrop-blur-glass border-2 border-white/20 hover:border-gold-500/50 rounded-full px-8 py-4 text-white font-semibold transition-all duration-300 hover:bg-white/20 w-full max-w-md"
            >
              <span className="text-2xl mr-4  ">{detail.icon}</span>
              <span className="text-lg sm:text-xl">{detail.text}</span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="border-t border-white/20 pt-12"
        >
          <p className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Thank You
          </p>
          <p className="text-lg sm:text-xl text-gray-300 italic">
            Stitching Trust into Every Uniform
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
