import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaDatabase, FaTools, FaGraduationCap, FaReact, FaNodeJs, FaPython, FaChartBar, FaBriefcase, FaUser, FaUniversity } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiMongodb, SiPostgresql, SiGit, SiDocker, SiSolana, SiPrisma } from 'react-icons/si';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = {
    languages: [
      { name: 'C/C++', icon: <FaCode className="text-blue-400" size={24} /> },
      { name: 'Python', icon: <FaPython className="text-yellow-400" size={24} /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" size={24} /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" size={24} /> },
      { name: 'SQL', icon: <FaDatabase className="text-blue-500" size={24} /> },
    ],
    frameworks: [
      { name: 'React.js', icon: <FaReact className="text-blue-400" size={24} /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500" size={24} /> },
      { name: 'Express.js', icon: <FaNodeJs className="text-gray-400" size={24} /> },
      { name: 'Next.js', icon: <FaReact className="text-black" size={24} /> },
      { name: 'Tailwind CSS', icon: <FaCode className="text-cyan-400" size={24} /> },
      { name: 'Prisma ORM', icon: <SiPrisma className="text-emerald-500" size={24} /> },
    ],
    databases: [
      { name: 'MongoDB', icon: <SiMongodb className="text-green-500" size={24} /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-500" size={24} /> },
    ],
    blockchain: [
      { name: 'Solana', icon: <SiSolana className="text-purple-500" size={24} /> },
    ],
    tools: [
      { name: 'Git', icon: <SiGit className="text-orange-500" size={24} /> },
      { name: 'Docker', icon: <SiDocker className="text-blue-500" size={24} /> },
      { name: 'PowerBI', icon: <FaChartBar className="text-yellow-500" size={24} /> },
    ],
  };

  const courses = [
    'Data Structures and Algorithms (DSA)',
    'Object Oriented Programming (OOPS)',
    'Database Management System (DBMS)',
    'Operating System (OS)',
  ];

  const experience = [
    {
      title: 'Full Stack Development Intern',
      company: "Kirat's Technologies",
      location: 'India (Remote)',
      period: 'Aug 2024 - Sept 2024',
      achievements: [
        'Spearheaded full-stack web application development in a team of 5 developers, coordinating frontend-backend integration and achieving 95% successful deployment rate.',
        'Implemented comprehensive testing strategies including unit, integration, and end-to-end testing, reducing production bugs by 60% and improving code quality.',
        'Architected and deployed RESTful APIs with 99.9% uptime, handling 100+ daily requests.',
        'Developed responsive user interfaces using React.js and modern CSS frameworks, achieving 100% cross-device compatibility and 30% improvement in user engagement metrics.',
      ],
    },
  ];

  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      school: 'Netaji Subhas University of Technology',
      period: '2021 - 2025',
      details: 'CGPA: 7.05',
    },
    {
      degree: 'CBSE Class XII',
      school: 'Rajkiya Pratibha Vikas Vidyalaya',
      period: '2020 - 2021',
      details: 'Percentage: 91.6%',
    },
    {
      degree: 'CBSE Class X',
      school: 'Rajkiya Pratibha Vikas Vidyalaya',
      period: '2018 - 2019',
      details: 'Percentage: 86.4%',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        {/* About Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-center text-white flex items-center justify-center">
            <FaUser className="mr-3 text-blue-400" /> About Me
          </h2>
          <motion.div
            variants={itemVariants}
            className="max-w-6xl mx-auto bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-colors"
          >
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                Hey there! I'm a passionate Full Stack Developer who loves turning complex problems into simple, beautiful, and intuitive solutions. My journey in tech began with a curiosity about how things work on the web, which led me to dive deep into both frontend and backend development.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                What excites me most about development is the perfect blend of creativity and logic. I enjoy crafting elegant user interfaces that not only look great but also provide seamless experiences. On the backend, I'm fascinated by building robust systems that can scale and handle real-world challenges.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My tech stack includes modern tools like React,Next.js, Node.js, Express.js, MongoDB, PostgreSQL, Prisma ORM, Tailwind CSS, Javascript and TypeScript, but I'm always eager to learn new technologies. I believe in writing clean, maintainable code and following best practices. Whether it's building RESTful APIs, implementing authentication systems, or optimizing database queries, I'm always up for a challenge.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
               I'm a firm believer in continuous learning and community collaboration. Let's connect and build something amazing together!
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto mb-16"
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-white flex items-center justify-center">
            <FaBriefcase className="mr-3 text-blue-400" /> Professional Experience
          </h3>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h4 className="text-2xl font-bold text-white">{exp.title}</h4>
                  <div className="text-blue-400 font-semibold">{exp.period}</div>
                </div>
                <div className="text-gray-400 mb-4">
                  {exp.company} • {exp.location}
                </div>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span className="text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto mb-16"
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-white flex items-center justify-center">
            <FaUniversity className="mr-3 text-blue-400" /> Education
          </h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h4 className="text-2xl font-bold text-white">{edu.degree}</h4>
                  <div className="text-blue-400 font-semibold">{edu.period}</div>
                </div>
                <div className="text-gray-400 mb-2">
                  {edu.school}
                </div>
                <div className="text-gray-300">
                  {edu.details}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-white">Technical Skills</h3>
          
          {/* Languages */}
          <motion.div variants={itemVariants} className="mb-12">
            <h4 className="text-xl font-semibold mb-4 text-blue-400 flex items-center">
              <FaCode className="mr-2" /> Programming Languages
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {skills.languages.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700/50 flex flex-col items-center hover:border-blue-500/50 transition-colors"
                >
                  {skill.icon}
                  <span className="mt-2 text-gray-300">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Frameworks */}
          <motion.div variants={itemVariants} className="mb-12">
            <h4 className="text-xl font-semibold mb-4 text-purple-400 flex items-center">
              <FaReact className="mr-2" /> Frameworks & Libraries
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {skills.frameworks.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700/50 flex flex-col items-center hover:border-purple-500/50 transition-colors"
                >
                  {skill.icon}
                  <span className="mt-2 text-gray-300">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Databases */}
          <motion.div variants={itemVariants} className="mb-12">
            <h4 className="text-xl font-semibold mb-4 text-green-400 flex items-center">
              <FaDatabase className="mr-2" /> Databases
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.databases.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700/50 flex flex-col items-center hover:border-green-500/50 transition-colors"
                >
                  {skill.icon}
                  <span className="mt-2 text-gray-300">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Blockchain */}
          <motion.div variants={itemVariants} className="mb-12">
            <h4 className="text-xl font-semibold mb-4 text-purple-400 flex items-center">
              <FaCode className="mr-2" /> Blockchain Technology
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.blockchain.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700/50 flex flex-col items-center hover:border-purple-500/50 transition-colors"
                >
                  {skill.icon}
                  <span className="mt-2 text-gray-300">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div variants={itemVariants} className="mb-12">
            <h4 className="text-xl font-semibold mb-4 text-yellow-400 flex items-center">
              <FaTools className="mr-2" /> Tools & Platforms
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.tools.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700/50 flex flex-col items-center hover:border-yellow-500/50 transition-colors"
                >
                  {skill.icon}
                  <span className="mt-2 text-gray-300">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Courses */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold mb-4 text-pink-400 flex items-center">
              <FaGraduationCap className="mr-2" /> Relevant Courses
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700/50 hover:border-pink-500/50 transition-colors"
                >
                  <span className="text-gray-300">{course}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 