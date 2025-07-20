import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed bottom-0 left-0 right-0 z-30 bg-gray-900/95 backdrop-blur-md border-t border-gray-800"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-2 md:mb-0 flex-1 text-center">
            <span className="text-gray-400">© 2025 AI Tools Hub. All rights reserved.</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="https://coff.ee/bjyotibrat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"
            >
              <Coffee className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Jyotibrat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/B_Jyotibrat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/bindupautra-jyotibrat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;