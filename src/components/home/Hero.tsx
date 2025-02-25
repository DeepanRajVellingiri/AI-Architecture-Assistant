import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, AlertCircle } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/tech-animation.gif"
          alt="Technology Animation"
          className="w-full h-full object-cover opacity-20"
          style={{ objectPosition: 'center' }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Demo Project Notice */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 inline-flex items-center px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/40"
          >
            <AlertCircle className="h-5 w-5 text-yellow-500 mr-2" />
            <span className="text-yellow-500 font-medium">
              THIS IS A DEMO PROJECT [MAY HAVE SOME ISSUES] - BUILT FOR GIT CATALYST HACKATHON
            </span>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <Brain className="h-24 w-24 text-blue-500" />
          </motion.div>
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="block bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
            >
              AI Architecture Assistant
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="block text-blue-500 mt-2"
            >
              Your intelligent cloud architecture companion
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-6 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl"
          >
            Design, visualize, and implement cloud architectures across AWS, Azure, and Google Cloud Platform with advanced AI assistance.
          </motion.p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-200"></div>
              <motion.a
                href="https://accndemo.azurewebsites.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg leading-none hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                whileHover={{
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                  textShadow: "0 0 8px rgba(255,255,255,0.5)"
                }}
                animate={{
                  background: ["linear-gradient(to right, #2563eb, #7c3aed)", "linear-gradient(to right, #7c3aed, #2563eb)"],
                }}
                transition={{
                  background: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }
                }}
              >
                Try the Application
                <ArrowRight className="ml-2 h-5 w-5 animate-pulse" />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/50 to-purple-600/50 opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
              </motion.a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <a
                href="#features"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border-2 border-blue-500 text-lg font-medium rounded-lg text-blue-500 hover:bg-blue-500 hover:text-white transform transition-all duration-200"
              >
                Explore Features
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;