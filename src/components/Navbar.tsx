import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'About', path: '/about', icon: <FaUser /> },
    { name: 'Projects', path: '/projects', icon: <FaBriefcase /> },
    { name: 'Contact', path: '/contact', icon: <FaEnvelope /> },
  ];

  return (
    <div className="fixed top-0 w-full z-50 flex justify-center mt-4 px-4 pointer-events-none">
      
      {/* Desktop Floating Dock */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className={`hidden md:flex items-center space-x-2 px-6 py-3 rounded-full pointer-events-auto transition-all duration-300 ${
          scrolled ? 'bg-black/80 backdrop-blur-md shadow-lg border border-white/10' : 'bg-transparent'
        }`}
      >
        <Link to="/" className="text-2xl font-black text-white mr-6 tracking-tighter">A.</Link>
        
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="relative px-4 py-2 rounded-full overflow-hidden group"
          >
            <span className={`relative z-10 font-bold transition-colors duration-300 ${
              location.pathname === link.path ? 'text-black' : 'text-neutral-400 hover:text-white'
            }`}>
              {link.name}
            </span>
            {location.pathname === link.path && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-white rounded-full -z-0"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </Link>
        ))}
      </motion.nav>

      {/* Mobile Navbar */}
      <div className={`md:hidden w-full max-w-sm pointer-events-auto flex items-center justify-between px-6 py-4 rounded-full transition-all duration-300 ${
        scrolled || isOpen ? 'bg-black/90 backdrop-blur-md shadow-lg border border-white/10' : 'bg-transparent'
      }`}>
        <Link to="/" className="text-2xl font-black text-white tracking-tighter">A.</Link>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 md:hidden pointer-events-auto"
          >
            <div className="bg-neutral-900 rounded-3xl shadow-xl border border-neutral-800 p-4 flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-4 rounded-2xl font-bold transition-all ${
                    location.pathname === link.path
                      ? 'bg-white text-black'
                      : 'text-neutral-300 hover:bg-neutral-800'
                  }`}
                >
                  <span className={location.pathname === link.path ? 'text-black' : 'text-neutral-500'}>
                    {link.icon}
                  </span>
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
