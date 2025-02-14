import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart,
  Cloud,
  Code2,
  FileJson,
  GitBranch,
  LineChart,
  Settings,
  Zap,
} from 'lucide-react';

const features = [
  {
    name: 'Architecture Description',
    description: 'Detailed analysis of components, services, and their relationships with best practices.',
    icon: Cloud,
  },
  {
    name: 'Architecture Diagram',
    description: 'Interactive visual representations using industry-standard notation and patterns.',
    icon: GitBranch,
  },
  {
    name: 'Cost Estimation',
    description: 'Detailed monthly cost breakdowns with optimization recommendations.',
    icon: BarChart,
  },
  {
    name: 'Infrastructure as Code',
    description: 'Production-ready Terraform configurations with deployment instructions.',
    icon: Code2,
  },
  {
    name: 'Real-time Analytics',
    description: 'Monitor and analyze your architecture performance in real-time.',
    icon: LineChart,
  },
  {
    name: 'Export Options',
    description: 'Export your architecture designs in multiple formats including PDF and PowerPoint.',
    icon: FileJson,
  },
  {
    name: 'Automated Optimization',
    description: 'AI-powered suggestions for improving your architecture.',
    icon: Settings,
  },
  {
    name: 'Quick Integration',
    description: 'Seamlessly integrate with your existing cloud infrastructure.',
    icon: Zap,
  },
];

const Features = () => {
  return (
    <div id="features" className="py-24 bg-black/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 sm:text-4xl"
          >
            Key Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto"
          >
            Everything you need to design and implement cloud architectures
          </motion.p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 bg-black/20 backdrop-blur-sm rounded-lg border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="relative">
                  <feature.icon
                    className="h-12 w-12 text-blue-500"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-white">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;