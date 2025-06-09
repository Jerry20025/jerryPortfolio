import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="w-full flex flex-col justify-center items-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mt-12 mb-4">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Hi, I'm</span>{' '}
          <span className="text-white">Anil Kumar</span>
        </h1>
        <p className="text-gray-300 text-center text-lg max-w-2xl mb-8">
          I create beautiful and functional web experiences that make a difference. Let's build something amazing together!
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://github.com/Jerry20025" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaGithub size={28} />
          </a>
          <a href="https://www.linkedin.com/in/anil-kumar-46a720234/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaLinkedin size={28} />
          </a>
          <a href="https://x.com/iamdevil2002" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaTwitter size={28} />
          </a>
        </div>
        <a
          href="contact"
          className="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition-opacity text-lg shadow-md"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default Home; 