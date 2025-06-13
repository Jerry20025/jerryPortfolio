import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const socialLinks = [
  { icon: <FaGithub size={18} />, href: 'https://github.com/Jerry20025' },
  { icon: <FaLinkedin size={18} />, href: 'https://www.linkedin.com/in/anil-kumar-46a720234/' },
  { icon: <FaTwitter size={18} />, href: 'https://x.com/iamdevil2002' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sidebar for md+ screens */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-56 bg-gray-900 border-r border-gray-800 flex-col items-center py-8 z-50">
        {/* Logo/Title */}
        <div className="mb-10">
          <Link to="/" className="text-3xl font-extrabold text-cyan-400">A</Link>
          <div className="text-base font-semibold text-white mt-2">Anil Kumar</div>
          <div className="text-xs text-gray-400">Developer</div>
        </div>
        {/* Navigation */}
        <nav className="flex-1 w-full">
          <ul className="space-y-2 px-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="block py-2 px-4 rounded text-gray-300 hover:text-cyan-400 transition-colors text-lg"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Social Icons */}
        <div className="flex space-x-4 mt-10">
          {socialLinks.map((link, idx) => (
            <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
              {link.icon}
            </a>
          ))}
        </div>
      </aside>
      {/* Topbar for mobile screens */}
      <nav className="flex md:hidden fixed top-0 left-0 w-full h-16 bg-gray-900 border-b border-gray-800 z-50 items-center px-4 justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="text-2xl font-extrabold text-cyan-400">A</Link>
          <span className="text-base font-semibold text-white">Anil Kumar</span>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-300 hover:text-cyan-400 focus:outline-none"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        {/* Overlay menu */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex flex-col items-center justify-center">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-gray-300 hover:text-cyan-400"
            >
              <FaTimes size={32} />
            </button>
            <ul className="space-y-8 text-center">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-2xl text-gray-300 hover:text-cyan-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar; 