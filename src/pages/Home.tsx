import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Database, Gauge, Workflow } from 'lucide-react';

const Home = () => {
  return (
    <main className="relative">
      <Hero />
      <Features />
      
      {/* Overview Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Overview</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI Architecture Assistant helps you design, visualize, and implement cloud architectures across AWS, Azure, and Google Cloud Platform. Powered by advanced AI, it generates comprehensive architecture designs, cost estimations, and infrastructure as code with just a simple description of your requirements.
            </p>
          </motion.div>

          {/* Use Cases */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-black/20 backdrop-blur-sm p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Web Applications</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Scalable web services</li>
                <li>• E-commerce platforms</li>
                <li>• Content management systems</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-black/20 backdrop-blur-sm p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Data Processing</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Big data pipelines</li>
                <li>• Real-time analytics</li>
                <li>• ETL workflows</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-black/20 backdrop-blur-sm p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Microservices</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Container orchestration</li>
                <li>• Service mesh</li>
                <li>• API gateways</li>
              </ul>
            </motion.div>
          </div>

          {/* How It Works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg">
                <Code2 className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">1. Select Cloud Provider</h3>
                <p className="text-gray-300">Choose between AWS, Azure, or Google Cloud Platform.</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg">
                <Database className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">2. Describe Requirements</h3>
                <p className="text-gray-300">Explain your architecture needs in plain English.</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg">
                <Workflow className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">3. Generate Architecture</h3>
                <p className="text-gray-300">AI analyzes requirements and generates comprehensive design.</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg">
                <Gauge className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">4. Review & Export</h3>
                <p className="text-gray-300">Export designs as PowerPoint or PDF for stakeholder review.</p>
              </div>
            </div>
          </motion.div>

          {/* Best Practices */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Best Practices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Architecture Design</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Follow cloud-native design principles</li>
                  <li>• Implement proper security measures</li>
                  <li>• Consider scalability from the start</li>
                  <li>• Plan for disaster recovery</li>
                </ul>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Cost Optimization</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Use auto-scaling effectively</li>
                  <li>• Choose right-sized resources</li>
                  <li>• Implement proper tagging</li>
                  <li>• Monitor and optimize regularly</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Example Prompts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Example Prompts</h2>
            <div className="space-y-4">
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg text-gray-300">
                "Design a scalable e-commerce platform with high availability and disaster recovery"
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg text-gray-300">
                "Create a microservices architecture for a real-time analytics platform"
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg text-gray-300">
                "Build a serverless data processing pipeline with event-driven architecture"
              </div>
            </div>
          </motion.div>

          {/* Application Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <a
              href="https://accndemo.azurewebsites.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Try the Application
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;