import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb, SiPrisma, SiPostgresql, SiCloudflare, SiChakraui, SiIpfs, SiSolana, SiJavascript, SiHtml5 } from 'react-icons/si';

import paymentApp from '../assets/Dummy Payment App.png';
import cryptoDashboard from '../assets/Crypto Dashboard.jpeg';
import githubStalker from '../assets/GitHub Stalker.jpeg';
import eventManagement from '../assets/Event Management.jpeg';
import walletAdapter from '../assets/wallet Adapter.jpeg';
import decentralized from '../assets/Decentralized.png';
import blog from '../assets/blog.png';
import portfolio from '../assets/portfolio.png';
import taskflow from '../assets/taskflow.png';

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const projects = [
    {
      title: 'TaskFlow – JIRA Alternative',
      description: 'Architected a multi-tenant RESTful API with a highly normalized schema on Supabase + Prisma ORM for complex relational queries across organizations and ticket hierarchies.',
      image: taskflow,
      period: 'Mar 2026 - Sep 2026',
      technologies: [
        { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
        { name: 'Prisma', icon: <SiPrisma className="text-emerald-500" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-500" /> },
      ],
      github: 'https://github.com/Jerry20025/Task-Flow',
      live: 'https://task-flow-sf4j.vercel.app/',
      features: ['Connection pooling via PgBouncer', 'Stateless auth with signed JWTs', 'Async event & email pipelines'],
    },
    {
      title: 'Web Blog Platform',
      description: 'Built a full-stack blog platform using React.js, TypeScript, PostgreSQL, Prisma ORM, Cloudflare Workers, and Firebase auth.',
      image: blog,
      period: 'Jun 2024 - Jul 2024',
      technologies: [
        { name: 'React.js', icon: <SiReact className="text-blue-400" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
        { name: 'Prisma', icon: <SiPrisma className="text-emerald-500" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-500" /> },
      ],
      github: 'https://github.com/Jerry20025/Blogging',
      live: 'https://blogging-snowy-zeta.vercel.app/',
      features: [
        'Connection pooling with Prisma + PostgreSQL',
        'Serverless backend via Cloudflare Workers',
        'AI-powered summarization and Q&A module'
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
        { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
      ],
      github: 'https://github.com/Jerry20025/MERN-Payment',
      live: '',
      features: ['JWT-based authentication', 'Role-based access control', 'Efficient payment processing'],
    },
    {
      title: 'Decentralized File Storage with NFT Access Control',
      description: 'A secure decentralized file storage system with NFT-based access control and Solana blockchain integration.',
      image: decentralized,
      period: 'Mar 2025',
      technologies: [
        { name: 'React.js', icon: <SiReact className="text-blue-400" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
        { name: 'IPFS', icon: <SiIpfs className="text-blue-500" /> },
        { name: 'Solana', icon: <SiSolana className="text-purple-500" /> },
      ],
      github: 'https://github.com/Jerry20025/Decentralised-System-and-blockchain',
      live: '',
      features: ['Client-side AES-256 encryption', 'NFT-based file ownership', 'Solana wallet integration'],
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
      features: ['Multi-wallet support', 'Secure transaction signing', 'Solana blockchain integration'],
    },
    {
      title: 'Event Management Application',
      description: 'A full-stack event management solution featuring calendar integration and API management.',
      image: eventManagement,
      period: 'Nov 2024',
      technologies: [
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
        { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-500" /> },
      ],
      github: 'https://github.com/Jerry20025/Event-Management',
      live: '',
      features: ['Calendar scheduling', 'API management', 'Database optimization with Prisma'],
    },
    {
      title: 'GitHub Profile Stalker',
      description: 'An intuitive tool for exploring GitHub profiles, built with vanilla JavaScript and HTML, showcasing API integration.',
      image: githubStalker,
      period: 'Oct 2024',
      technologies: [
        { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
      ],
      github: 'https://github.com/Jerry20025/Stalker-',
      live: 'https://jerry20025.github.io/Stalker-/',
      features: ['GitHub API integration', 'Dynamic DOM manipulation', 'Random profile exploration'],
    },
    {
      title: 'Crypto Dashboard',
      description: 'A modern cryptocurrency dashboard featuring real-time data visualization and market insights.',
      image: cryptoDashboard,
      period: 'Jun 2024',
      technologies: [
        { name: 'React.js', icon: <SiReact className="text-blue-400" /> },
        { name: 'Chakra UI', icon: <SiChakraui className="text-teal-500" /> },
      ],
      github: 'https://github.com/Jerry20025/reactDashBoard',
      live: 'https://vite-ashen-beta.vercel.app/',
      features: ['Advanced React Router', 'Interactive charts', 'Market insights'],
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing my projects and skills, built with React and TypeScript.',
      image: portfolio,
      period: 'Mar 2024',
      technologies: [
        { name: 'React.js', icon: <SiReact className="text-blue-400" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
      ],
      github: 'https://github.com/Jerry20025/jerryPortfolio',
      live: 'https://jerry-portfolio-psi.vercel.app/',
      features: ['Responsive modern UI/UX', 'Smooth Framer Motion animations', 'Dark/Light mode support'],
    },
  ];

  return (
    <div className="py-12">
      <div className="w-full max-w-7xl mx-auto px-4">
        


      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <AnimatePresence mode="popLayout">
          {projects.map((project) => (
              <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, type: "spring" }}
              key={project.title}
              whileHover={{ y: -5 }}
              className="bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col group relative"
            >
              
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-black/60 border-b border-white/10">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
                />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold text-white border border-white/10 shadow-sm">
                  {project.period}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col relative z-10">
                <div className="flex justify-between items-start mb-3 gap-4">
                  <h3 className="text-xl font-black text-white leading-tight">{project.title}</h3>
                  <div className="flex gap-3 mt-1 shrink-0">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors hover:scale-110">
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-emerald-400 transition-colors hover:scale-110">
                        <FaExternalLinkAlt size={18} />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-neutral-400 text-sm font-medium mb-4 flex-1">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs font-bold text-neutral-400">
                        <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="flex items-center px-2.5 py-1 bg-black/60 border border-white/10 rounded-lg text-xs font-bold text-white">
                        <span className="mr-1.5">{tech.icon}</span> {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
    </div>
  );
};

export default Projects;