import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { websiteContent } from '../../data/content';
import { useState } from 'react';

const Contact = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const { contact } = websiteContent;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit =()=>{
      // e.preventDefault()
      setSubmitted(true)
  }






  return (
    <section id="contact" ref={ref} className=" min-h-screen relative py-20 lg:py-32 bg-[rgba(210,207,212,1)] overflow-hidden">
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[rgba(30,64,175,1)] mb-6">
            {contact.title}
          </h2>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-700  mb-16">
            {contact.subtitle}
          </p>
        </motion.div>
        

        <div className="flex flex-col items-center gap-6 mb-16">
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
              className="flex items-center text-slate-900  justify-center bg-white/70 backdrop-blur-md border border-white/60 hover:border-gold-500/50 rounded-full px-8 py-4  font-semibold transition-all duration-300 hover:bg-white/20 w-full max-w-md"
            >
              <span className="text-2xl mr-4  ">{detail.icon}</span>
              <span className="text-lg sm:text-xl">{detail.text}</span>
            </motion.a>
          ))}
        </div>
  <motion.form
  action='https://formspree.io/f/mwvnljdr'
  method='POST'
  onSubmit={handleSubmit}
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
  transition={{ delay: 0.6, duration: 0.6 }}
  className="bg-slate-200 backdrop-blur-md border border-white/60 rounded-3xl p-8 max-w-2xl mx-auto mb-20 space-y-6 shadow-xl"
>
  <h3 className="text-2xl font-bold text-gray-800 text-center">
    Send Us a Message
  </h3>

  {/* Name */}
  <div>
    <label className="block text-gray-700 font-medium mb-2">
      Full Name
    </label>
    <input
    name='Name'
      type="text"
      placeholder="Enter your name"
      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
      required
    />
  </div>

  {/* Contact */}
  <div>
    <label className="block text-gray-700 font-medium mb-2">
      Contact Number
    </label>
    <input
      type="tel"
      name='Phone'
      placeholder="Enter your contact number"
      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
      required
    />
  </div>

  {/* Email */}
  <div>
    <label className="block text-gray-700 font-medium mb-2">
      Email Address
    </label>
    <input
      type="email"
      name='email'
      placeholder="Enter your email"
      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
      required
    />
  </div>

  {/* Reason Dropdown */}
  <div>
    <label className="block text-gray-700 font-medium mb-2">
      Reason for Contacting
    </label>
    <select
    name='reason for contacting'
      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
      required
    >
      <option value="">Select a Solution</option>
      <option value="corporate">Corporate Solutions</option>
      <option value="healthcare">Healthcare Solutions</option>
      <option value="hospitality">Hospitality Solutions</option>
      <option value="education">Education Solutions</option>
    </select>
  </div>

 <button
  type="submit"
  disabled={submitted}
  className={`w-full font-semibold py-3 rounded-xl transition duration-300 shadow-md 
    ${submitted 
      ? "bg-green-600 cursor-not-allowed" 
      : "bg-blue-600 hover:bg-blue-700"
    } text-white`}
>
  {submitted ? "Submitted ✅" : "Submit"}
</button>

</motion.form>


        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="border-t border-white/20 pt-12"
        >
          <p className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Thank You
          </p>
          <p className="text-lg sm:text-xl text-gray-600 italic">
            Stitching Trust into Every Uniform
          </p>
        </motion.div>
      </div>
      
    </section>
    
  );
};

export default Contact;
