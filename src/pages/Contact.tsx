import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    project: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', project: '', email: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
  };

  const socialLinks = [
    { icon: <FaGithub size={20} />, url: "https://github.com/Jerry20025", label: "GitHub" },
    { icon: <FaLinkedin size={20} />, url: "https://www.linkedin.com/in/anil-kumar-46a720234/", label: "LinkedIn" },
    { icon: <FaTwitter size={20} />, url: "https://x.com/anil_kumar_2002", label: "Twitter" },
  ];

  const inputClass = "bg-transparent border-b-2 border-neutral-700 focus:border-white outline-none px-2 py-1 text-white font-black placeholder:text-neutral-600 transition-colors text-center min-w-[120px] md:min-w-[180px] w-auto inline-block";

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-[calc(100vh-144px)]">
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-5xl bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl p-6 sm:p-10 md:p-14 relative"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-white"></div>

        <form onSubmit={handleSubmit} className="relative z-10">
          
          {/* Landscape / Inline flowing sentence scaled to fit without truncation */}
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-500 leading-loose text-center md:text-left">
            <motion.span initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="inline-block mr-2 md:mr-3 text-neutral-400">
              Hi Anil, my name is 
              <input 
                type="text" 
                required 
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={`ml-2 md:ml-3 mr-2 md:mr-3 ${inputClass}`} 
              />
            </motion.span>
            
            <motion.span initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="inline-block mr-2 md:mr-3">
              and I'd like to discuss a 
              <input 
                type="text" 
                required 
                placeholder="Project / Idea"
                value={formData.project}
                onChange={(e) => setFormData({...formData, project: e.target.value})}
                className={`ml-2 md:ml-3 mr-2 md:mr-3 ${inputClass}`} 
              />
              with you.
            </motion.span>

            <motion.span initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="inline-block">
              You can reach me at 
              <input 
                type="email" 
                required 
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className={`ml-2 md:ml-3 ${inputClass}`} 
              />
              .
            </motion.span>
          </div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.5 }}
            className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            {/* Social Dock */}
            <div className="flex gap-6">
              {socialLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            {/* Submit Button */}
            <AnimatePresence mode="wait">
              <motion.button
                key={submitStatus}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
                className={`flex items-center gap-3 px-8 py-4 rounded-full text-lg font-black transition-all shadow-xl ${
                  submitStatus === 'success' ? 'bg-emerald-500 text-white' : 'bg-white text-black hover:bg-neutral-200'
                }`}
              >
                {isSubmitting ? 'SENDING...' : submitStatus === 'success' ? 'SENT' : 'SEND MESSAGE'}
                {!isSubmitting && submitStatus !== 'success' && <FaPaperPlane />}
              </motion.button>
            </AnimatePresence>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;