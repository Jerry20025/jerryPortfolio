import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaCode, FaLock } from 'react-icons/fa';
import { SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb, SiExpress, SiPrisma, SiPostgresql, SiFirebase, SiCloudflare, SiChakraui, SiIpfs, SiSolana, SiJavascript, SiHtml5 } from 'react-icons/si';
import toast, { Toaster } from 'react-hot-toast';

// Import images
import paymentApp from '../assets/Dummy Payment App.png';
import cryptoDashboard from '../assets/Crypto Dashboard.jpeg';
import githubStalker from '../assets/GitHub Stalker.jpeg';
import eventManagement from '../assets/Event Management.jpeg';
import walletAdapter from '../assets/wallet Adapter.jpeg';
import decentralized from '../assets/Decentralized.png';
import blog from '../assets/blog.png';
import portfolio from '../assets/portfolio.png';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: '-50px 0px',
  });

  const handleLiveClick = (liveUrl: string, projectName: string) => {
    if (!liveUrl) {
      toast.error(`Sorry, ${projectName} is not deployed yet!`);
      return;
    }
    window.open(liveUrl, '_blank');
  };

  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing my projects and skills, built with React and TypeScript.',
      image: portfolio,
      period: 'Mar 2024',
      technologies: [
        { name: 'React.js', icon: <SiReact className="text-blue-400" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: 'Framer Motion', icon: <SiReact className="text-blue-400" /> },
      ],
      github: 'https://github.com/Jerry20025/newportfolio',
      live: '',
      features: [
        'Responsive design with modern UI/UX principles',
        'Smooth animations using Framer Motion',
        'Interactive project showcase with detailed information',
        'Dark mode with gradient backgrounds',
      ],
    },
    {
      title: 'Decentralized File Storage with NFT Access Control',
      description: 'A secure decentralized file storage system with NFT-based access control and Solana blockchain integration.',
      image: decentralized,
      period: 'Mar 2025',
      technologies: [
        { name: 'React.js', icon: <SiReact className="text-blue-400" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
        { name: 'Chakra UI', icon: <SiChakraui className="text-teal-500" /> },
        { name: 'IPFS', icon: <SiIpfs className="text-blue-500" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
        { name: 'Solana', icon: <SiSolana className="text-purple-500" /> },
      ],
      github: 'https://github.com/Jerry20025/Decentralised-System-and-blockchain',
      live: '',
      features: [
        'Client-side AES-256 encryption and IPFS storage (90% reduced server costs)',
        'NFT-based file ownership verification system',
        'Duplicate file detection and secure file sharing',
        'Solana wallet integration for NFT minting and transfer',
      ],
    },
    {
      title: 'Web Blog Site',
      description: 'A high-performance blog site with AI assistance, built using modern technologies and serverless architecture.',
      image: blog,
      period: 'Jun 2025',
      technologies: [
        { name: 'React.js', icon: <SiReact className="text-blue-400" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: 'Cloudflare Workers', icon: <SiCloudflare className="text-orange-500" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-500" /> },
        { name: 'Prisma', icon: <SiPrisma className="text-emerald-500" /> },
        { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
      ],
      github: 'https://github.com/Jerry20025/Blogging',
      live: '',
      features: [
        'Serverless backend using Cloudflare Workers (70-80% reduced operational workload)',
        'Prisma with PostgreSQL for efficient data handling (40% faster query response)',
        'Firebase authentication integration',
        'AI assistance for content summarization and Q&A',
      ],
    },
    {
      title: 'Dummy Payment App',
      description: 'A comprehensive MERN stack-based payment application with secure authentication and role-based access control.',
      image: paymentApp,
      period: 'Mar 2024',
      technologies: [
        { name: 'React.js', icon: <SiReact className="text-blue-400" /> },
        { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
        { name: 'Express.js', icon: <SiExpress className="text-gray-400" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
        { name: 'JWT', icon: <FaLock className="text-purple-500" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
      ],
      github: 'https://github.com/Jerry20025/MERN-Payment',
      live: '',
      features: [
        'JWT-based authentication for secure login',
        'Role-based access control for user management',
        'Efficient payment processing with MongoDB',
        'Scalable and reliable payment solution',
      ],
    },
    {
      title: 'Solana Wallet Adapter',
      description: 'A secure and versatile wallet adapter for Solana blockchain, supporting multiple wallets and essential blockchain operations.',
      image: walletAdapter,
      period: 'Apr 2025',
      technologies: [
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
        { name: 'React.js', icon: <SiReact className="text-blue-400" /> },
        { name: 'Solana', icon: <SiSolana className="text-purple-500" /> },
      ],
      github: 'https://github.com/Jerry20025/wallet-adapter',
      live: '',
      features: [
        'Multi-wallet support (Phantom, Solflare, etc.)',
        'Secure transaction signing without private key access',
        'Account balance viewing and airdrop requests',
        'Solana blockchain integration',
      ],
    },
    {
      title: 'Event Management Application',
      description: 'A full-stack event management solution built with TypeScript and modern web technologies, featuring calendar integration and API management.',
      image: eventManagement,
      period: 'Nov 2024',
      technologies: [
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
        { name: 'React.js', icon: <SiReact className="text-blue-400" /> },
        { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-500" /> },
        { name: 'Prisma', icon: <SiPrisma className="text-emerald-500" /> },
      ],
      github: 'https://github.com/Jerry20025/Event-Management',
      live: '',
      features: [
        'Calendar integration for event scheduling',
        'API integration and management',
        'Database optimization with Prisma ORM',
        'Responsive design with Tailwind CSS',
      ],
    },
    {
      title: 'GitHub Profile Stalker',
      description: 'An intuitive tool for exploring GitHub profiles, built with vanilla JavaScript and HTML, showcasing API integration and DOM manipulation skills.',
      image: githubStalker,
      period: 'Oct 2024',
      technologies: [
        { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
      ],
      github: 'https://github.com/Jerry20025/Stalker-',
      live: 'https://jerry20025.github.io/Stalker-/',
      features: [
        'GitHub API integration for profile data fetching',
        'Dynamic DOM manipulation for real-time updates',
        'Repository and follower information display',
        'Random profile exploration feature',
      ],
    },
    {
      title: 'Crypto Dashboard',
      description: 'A modern cryptocurrency dashboard built with React.js and Chakra UI, featuring real-time data visualization and market insights.',
      image: cryptoDashboard,
      period: 'Jun 2024',
      technologies: [
        { name: 'React.js', icon: <SiReact className="text-blue-400" /> },
        { name: 'Chakra UI', icon: <SiChakraui className="text-teal-500" /> },
        { name: 'React Router', icon: <SiReact className="text-blue-400" /> },
      ],
      github: 'https://github.com/Jerry20025/reactDashBoard',
      live: 'https://vite-ashen-beta.vercel.app/',
      features: [
        'Advanced React Router implementation for seamless navigation',
        'Responsive design using Chakra UI components',
        'Interactive charts and market insights',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: '#1F2937',
            color: '#fff',
            border: '1px solid #374151',
          },
          success: {
            style: {
              background: '#065F46',
            },
          },
          error: {
            style: {
              background: '#991B1B',
            },
          },
        }}
      />
      <div className="w-full max-w-6xl mx-auto px-2 sm:px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-center text-white flex items-center justify-center">
            <FaCode className="mr-2 sm:mr-3 text-blue-400" /> My Projects
          </h2>
          <p className="text-gray-300 text-base sm:text-lg text-center max-w-3xl mx-auto">
            Here are some of my recent projects showcasing my expertise in full-stack development, blockchain integration, and modern web technologies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="w-full space-y-8 sm:space-y-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-colors overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 p-4 sm:p-8">
                <div className="relative group flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-64 object-contain rounded-lg"
                  />
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center space-x-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-gray-700 transition-colors bg-white/90 p-2 rounded-full"
                    >
                      <FaGithub size={24} />
                    </a>
                    <button
                      onClick={() => handleLiveClick(project.live, project.title)}
                      className="text-black hover:text-gray-700 transition-colors bg-white/90 p-2 rounded-full"
                    >
                      <FaExternalLinkAlt size={24} />
                    </button>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg sm:text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                    <span className="text-xs sm:text-base text-blue-400 font-semibold whitespace-nowrap">
                      {project.period}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base mb-2">
                    {project.description}
                  </p>
                  <div className="mb-2">
                    <span className="text-blue-400 font-semibold">Key Features</span>
                    <ul className="list-disc list-inside text-gray-300 text-xs sm:text-sm ml-4">
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-2">
                    <span className="text-blue-400 font-semibold">Technologies Used</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="flex items-center px-2 py-1 bg-gray-900/60 rounded text-xs sm:text-sm font-medium text-gray-200 gap-1">
                          {tech.icon} {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects; 