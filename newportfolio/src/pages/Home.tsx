import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Home = () => {
  const name = "Anil Kumar";
  const nameArray = name.split("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              <motion.span 
                className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Hi, I'm
              </motion.span>{' '}
              <span className="text-white inline-block">
                {nameArray.map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.1,
                      delay: 0.5 + index * 0.1,
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            </h1>
            <motion.p 
              className="text-2xl md:text-3xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              Full Stack Developer
            </motion.p>
            <motion.p 
              className="text-gray-300 text-lg max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.7 }}
            >
              I craft elegant solutions to complex problems, building web experiences that are both beautiful and functional.
            </motion.p>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center space-x-8 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.9 }}
          >
            <motion.a 
              href="https://github.com/Jerry20025" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <FaGithub size={32} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/anil-kumar-46a720234/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <FaLinkedin size={32} />
            </motion.a>
            <motion.a 
              href="https://x.com/anil_kumar_2002" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <FaTwitter size={32} />
            </motion.a>
          </motion.div>

          {/* Skills Preview */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.1 }}
          >
            <motion.div 
              className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-colors"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-white font-semibold mb-2">Frontend</h3>
              <p className="text-gray-400">React, TypeScript, Tailwind, Javascript</p>
            </motion.div>
            <motion.div 
              className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-colors"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-white font-semibold mb-2">Backend</h3>
              <p className="text-gray-400">Node.js, Express, MongoDB, Postgresql, REST API</p>
            </motion.div>
            <motion.div 
              className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-colors"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-white font-semibold mb-2">Tools</h3>
              <p className="text-gray-400">Git, Postman, npm</p>
            </motion.div>
            <motion.div 
              className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-colors"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-white font-semibold mb-2">Design</h3>
              <p className="text-gray-400">UI/UX, Responsive, Material UI</p>
            </motion.div>
          </motion.div>

          {/* Additional Info */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.3 }}
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