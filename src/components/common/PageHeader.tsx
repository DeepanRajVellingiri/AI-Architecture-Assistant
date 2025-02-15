import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
        {title}
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
        {description}
      </p>
    </motion.div>
  );
};

export default PageHeader;