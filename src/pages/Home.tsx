import { FaGithub, FaLinkedin, FaTwitter, FaArrowRight, FaReact, FaPython } from 'react-icons/fa';
import { SiTypescript, SiMongodb } from 'react-icons/si';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const name = "Anil Kumar";
  
  // Floating animation variants
  const floatVariants = (delay: number, duration: number, yOffset: number) => ({
    initial: { y: 0, opacity: 0, scale: 0.8 },
    animate: { 
      y: [0, yOffset, 0], 
      opacity: 1, 
      scale: 1,
      transition: { 
        y: { duration, repeat: Infinity, ease: "easeInOut", delay },
        opacity: { duration: 1, delay: 0.5 },
        scale: { duration: 1, delay: 0.5, type: "spring" }
      } 
    }
  });

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-144px)] overflow-hidden text-center max-w-6xl mx-auto relative px-4">
      
      {/* Floating Orbital Elements */}
      <motion.div variants={floatVariants(0, 6, -20)} initial="initial" animate="animate" className="absolute top-1/4 left-10 md:left-20 hidden md:flex items-center justify-center w-16 h-16 bg-neutral-900 rounded-2xl shadow-xl border border-neutral-800 text-white">
        <FaReact size={32} />
      </motion.div>
      <motion.div variants={floatVariants(1.5, 7, 25)} initial="initial" animate="animate" className="absolute top-1/3 right-10 md:right-20 hidden md:flex items-center justify-center w-16 h-16 bg-neutral-900 rounded-2xl shadow-xl border border-neutral-800 text-white">
        <FaPython size={32} />
      </motion.div>
      <motion.div variants={floatVariants(2.5, 5, -15)} initial="initial" animate="animate" className="absolute bottom-1/4 left-20 md:left-32 hidden md:flex items-center justify-center w-14 h-14 bg-neutral-900 rounded-2xl shadow-xl border border-neutral-800 text-white">
        <SiTypescript size={28} />
      </motion.div>
      <motion.div variants={floatVariants(1, 8, 20)} initial="initial" animate="animate" className="absolute bottom-1/3 right-20 md:right-32 hidden md:flex items-center justify-center w-14 h-14 bg-neutral-900 rounded-2xl shadow-xl border border-neutral-800 text-white">
        <SiMongodb size={28} />
      </motion.div>

      <div className="flex flex-col items-center justify-center z-10 px-4 mt-8 md:mt-0">
        
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-4 tracking-tighter text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="block">{name}</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">
            AI Engineer
          </span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="inline-block mt-4 mb-8 bg-neutral-900 border border-neutral-800 px-8 py-3 rounded-full shadow-lg"
        >
          <p className="text-lg md:text-xl font-bold text-white tracking-widest uppercase">
            SDE & AI <span className="text-neutral-500">Architect</span>
          </p>
        </motion.div>
      </div>

      {/* Description */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-base md:text-xl text-neutral-400 max-w-3xl mb-8 leading-relaxed font-medium z-10"
      >
        I build scalable AI systems and full-stack applications. Currently an SDE at Samsung Research Institute, where I focus on bringing complex agentic workflows and intelligent tools into production.
      </motion.p>

      {/* Action Area */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-6 z-10"
      >
        <Link to="/projects">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 rounded-full bg-white text-black font-bold text-lg flex items-center shadow-2xl transition-all"
          >
            Explore My Work <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </Link>

        {/* Social Links Dock */}
        <div className="flex items-center gap-6 px-8 py-4 bg-neutral-900 border border-neutral-800 shadow-xl rounded-full">
          <a href="https://github.com/Jerry20025" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white hover:scale-110 transition-all">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/anil-kumar-46a720234/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white hover:scale-110 transition-all">
            <FaLinkedin size={24} />
          </a>
          <a href="https://x.com/anil_kumar_2002" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white hover:scale-110 transition-all">
            <FaTwitter size={24} />
          </a>
        </div>
      </motion.div>

    </div>
  );
};

export default Home;
