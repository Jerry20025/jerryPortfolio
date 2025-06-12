import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Hi, I'm</span>{' '}
              <span className="text-white">Anil Kumar</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8">
              Full Stack Developer
            </p>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-12">
              I craft elegant solutions to complex problems, building web experiences that are both beautiful and functional.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center space-x-8 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <a href="https://github.com/Jerry20025" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
              <FaGithub size={32} />
            </a>
            <a href="https://www.linkedin.com/in/anil-kumar-46a720234/" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
              <FaLinkedin size={32} />
            </a>
            <a href="https://x.com/anil_kumar_2002" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
              <FaTwitter size={32} />
            </a>
          </motion.div>

          {/* Skills Preview */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-colors transform hover:scale-105">
              <h3 className="text-white font-semibold mb-2">Frontend</h3>
              <p className="text-gray-400">React, TypeScript, Tailwind, Javascript</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-colors transform hover:scale-105">
              <h3 className="text-white font-semibold mb-2">Backend</h3>
              <p className="text-gray-400">Node.js, Express, MongoDB, Postgresql, REST API</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-colors transform hover:scale-105">
              <h3 className="text-white font-semibold mb-2">Tools</h3>
              <p className="text-gray-400">Git, Postman, npm</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-colors transform hover:scale-105">
              <h3 className="text-white font-semibold mb-2">Design</h3>
              <p className="text-gray-400">UI/UX, Responsive, Material UI</p>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Passionate about creating seamless user experiences and writing clean, maintainable code.
              Always eager to learn and adapt to new technologies.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home; 