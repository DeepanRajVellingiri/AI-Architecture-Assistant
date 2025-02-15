import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const TryApplicationButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-200" />
      <motion.a
        href="https://accndemo.azurewebsites.net/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg leading-none hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)",
          textShadow: "0 0 8px rgba(255,255,255,0.5)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        Try the Application
        <motion.div
          className="ml-2 flex items-center"
          animate={{
            x: [0, 4, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ArrowRight className="h-5 w-5" />
        </motion.div>
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/50 to-purple-600/50 opacity-0 group-hover:opacity-20 transition-opacity duration-200" />
      </motion.a>
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
    </motion.div>
  );
};

export default TryApplicationButton;