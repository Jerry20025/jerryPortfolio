import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCode, FaReact, FaPython } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiMongodb, SiPostgresql } from 'react-icons/si';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-12 mb-20 px-4">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min"
      >
        
        {/* Intro Box - Spans 3 columns */}
        <motion.div variants={itemVariants} className="md:col-span-3 bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-8 md:p-10 relative overflow-hidden flex flex-col justify-center group">
          <h3 className="text-2xl font-black text-white mb-4 relative z-10 tracking-tight">About Me</h3>
          <p className="text-lg text-neutral-400 leading-relaxed relative z-10">
            Hey! I'm Anil, a Software Development Engineer currently building enterprise AI systems at Samsung Research Institute. I love bridging the gap between complex AI logic and real-world applications. Whether I'm designing multi-agent workflows with LangGraph, optimizing backend infrastructures, or building scalable full-stack apps, I'm always focused on creating tools that make a genuine impact. I'm obsessed with pushing the boundaries of what AI can do in production environments.
          </p>
        </motion.div>

        {/* Experience Box - Spans 3 columns */}
        <motion.div variants={itemVariants} className="md:col-span-3 bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-8 md:p-10">
          <div className="flex items-center mb-6">
            <FaBriefcase size={28} className="text-white mr-4" />
            <h3 className="text-xl font-black text-white tracking-tight">Experience</h3>
          </div>
          
          <div className="relative pl-4 border-l-2 border-white/10 ml-2">
            <div className="absolute w-3 h-3 bg-white rounded-full -left-[7px] top-2"></div>
            <div className="mb-2 flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
              <h4 className="text-lg font-bold text-white">Software Development Engineer</h4>
              <span className="text-sm font-bold text-emerald-400">Jul 2025 – Present</span>
            </div>
            <p className="text-sm font-bold text-neutral-400 mb-4">Samsung Research Institute – Delhi (SRI-D) Onsite</p>
            
            <ul className="space-y-3 text-neutral-400 text-sm leading-relaxed">
              <li className="flex items-start">
                <span className="text-white mr-2 mt-0.5">•</span>
                <span>Developed multiple digital signage applications on Samsung VXT CMS platform; delivered global technical support for enterprise-level signage deployments and content management workflows.</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2 mt-0.5">•</span>
                <span>Built an AI-powered enterprise chatbot using LangChain, RAG, mxbai-embed-large, FAISS, and PostgreSQL with multi-turn conversation persistence and session management.</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2 mt-0.5">•</span>
                <span>Developing agentic AI system using LangGraph and MCP servers for multi-step reasoning, dynamic tool invocation, and automated workflow orchestration.</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2 mt-0.5">•</span>
                <span>Built an agentic workflow and MCP to develop VXT signage apps, adopted by 10+ Samsung SDE engineers across orgs including SR Poland and SR China.</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2 mt-0.5">•</span>
                <span>Built POC for virtual try-on using open-source Hugging Face models (IDM-VTON, Fashion-VTON, Magic Tryon); applied quantization techniques to deploy on limited hardware within existing infrastructure.</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2 mt-0.5">•</span>
                <span>Delivered training to 30+ Engineers on Samsung’s internal agent builder and production AI topics: LLM Security, MCP & Compound AI Systems, Observability & Deployment, Multi-Agent Architectures, RAG & Vector Search, and Prompt Engineering.</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Technical Skills Box - Spans 3 columns */}
        <motion.div variants={itemVariants} className="md:col-span-3 bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-8 md:p-10">
          <div className="flex items-center mb-6">
            <FaCode size={28} className="text-white mr-4" />
            <h3 className="text-xl font-black text-white tracking-tight">Technical Skills</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-bold text-neutral-500 mb-3 uppercase tracking-wider">Languages & Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'JavaScript', 'TypeScript', 'C/C++', 'React.js', 'Next.js', 'Node.js', 'Express.js', 'FastAPI', 'Tailwind CSS', 'Prisma ORM', 'Mongoose'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-black/60 border border-white/10 rounded-lg text-xs font-bold text-white">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold text-neutral-500 mb-3 uppercase tracking-wider">Gen AI / LLMs</h4>
              <div className="flex flex-wrap gap-2">
                {['LangChain', 'LangGraph', 'RAG', 'FAISS', 'ChromaDB', 'Prompt Engineering', 'MCP Servers', 'Ollama', 'Agentic AI'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-black/60 border border-emerald-500/30 rounded-lg text-xs font-bold text-emerald-400">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold text-neutral-500 mb-3 uppercase tracking-wider">Databases</h4>
              <div className="flex flex-wrap gap-2">
                {['PostgreSQL', 'MongoDB'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-black/60 border border-white/10 rounded-lg text-xs font-bold text-white">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold text-neutral-500 mb-3 uppercase tracking-wider">Tools & Others</h4>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'Docker', 'Power BI'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-black/60 border border-white/10 rounded-lg text-xs font-bold text-white">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications Box - Spans 3 columns */}
        <motion.div variants={itemVariants} className="md:col-span-3 bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-8 md:p-10">
          <h3 className="text-xl font-black text-white tracking-tight mb-6">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Agentic AI Engineering with LangChain & LangGraph", issuer: "Eden Marco", link: "https://drive.google.com/file/d/1Q1AuKLkfsjTGhqJ6Jgxtj74vtt2jhM3e/view" },
              { title: "The Complete MCP Masterclass", issuer: "Paulo Dichone, Codestars", link: "https://drive.google.com/file/d/1IslaIQkOaucHYsyA0B4MUXbbHLHf-tbB/view" },
              { title: "Prompt Engineering Frameworks & Methodologies", issuer: "Start-Tech Academy", link: "https://drive.google.com/file/d/1SZ_Zl-UjNgx6xLP8QoYSMnFYZ3QRSZXZ/view" },
              { title: "0-1 Full Stack MERN Development", issuer: "100xDevs (Harkirat Singh)", link: "https://drive.google.com/file/d/1TIQOuGsySd6dZVhwpLcMbkdkjtwIzgvm/view" },
              { title: "Intro to ML with Scikit-Learn", issuer: "Udemy Business", link: "https://drive.google.com/file/d/1aqj0MRlM5Ud33wKx3MzGMQp7UF7cY7Dr/view" }
            ].map((cert, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-black/60 border border-white/10 hover:border-white/30 transition-colors flex flex-col justify-between">
                <h4 className="text-sm font-bold text-white mb-2 leading-tight">{cert.title}</h4>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs font-medium text-neutral-400">{cert.issuer}</span>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-emerald-400 hover:text-white transition-colors">View Link →</a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education Box */}
        <motion.div variants={itemVariants} className="md:col-span-3 bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-8">
          <div className="flex items-center mb-6">
            <FaGraduationCap size={28} className="text-white mr-4" />
            <h3 className="text-xl font-black text-white tracking-tight">Education Path</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-black/60 border border-white/10 hover:border-white transition-all group">
              <h4 className="font-bold text-white mb-1 transition-colors">B.Tech in CSE</h4>
              <p className="text-sm font-medium text-neutral-400 mb-2">Netaji Subhas University of Technology</p>
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10">
                <span className="text-xs font-bold text-white bg-white/10 border border-white/20 px-2 py-1 rounded">2021-2025</span>
                <span className="text-sm font-black text-white">CGPA: 7.15</span>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-black/60 border border-white/10 hover:border-white transition-all group">
              <h4 className="font-bold text-white mb-1 transition-colors">Class XII (CBSE)</h4>
              <p className="text-sm font-medium text-neutral-400 mb-2">Rajkiya Pratibha Vikas Vidyalaya</p>
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10">
                <span className="text-xs font-bold text-white bg-white/10 border border-white/20 px-2 py-1 rounded">2020-2021</span>
                <span className="text-sm font-black text-white">91.6%</span>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-black/60 border border-white/10 hover:border-white transition-all group">
              <h4 className="font-bold text-white mb-1 transition-colors">Class X (CBSE)</h4>
              <p className="text-sm font-medium text-neutral-400 mb-2">Rajkiya Pratibha Vikas Vidyalaya</p>
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10">
                <span className="text-xs font-bold text-white bg-white/10 border border-white/20 px-2 py-1 rounded">2018-2019</span>
                <span className="text-sm font-black text-white">86.4%</span>
              </div>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default About;