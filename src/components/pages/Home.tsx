import React from 'react';
import Hero from '../assets/home/Hero';
import Features from '../assets/home/Features';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Database, Gauge, Workflow, Video, ExternalLink, Play, Monitor, Code, Sparkles } from 'lucide-react';
import PageHeader from '../common/PageHeader';

const Home = () => {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <Features />
      
      {/* Video Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black/20 backdrop-blur-sm p-8 rounded-lg border border-blue-500/20 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
                  <Video className="h-6 w-6 text-white" />
                </div>
                <h2 className="ml-4 text-2xl font-semibold text-white">Product Demo</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-lg font-medium text-blue-400 mb-2">Experience the Future of Cloud Architecture</h3>
                  <p className="text-gray-300 mb-4">
                    Watch our comprehensive product demonstration to see how AI Architecture Assistant revolutionizes cloud infrastructure design.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <Sparkles className="h-4 w-4 text-blue-500 mr-2" />
                      AI-Powered Design Recommendations
                    </li>
                    <li className="flex items-center">
                      <Monitor className="h-4 w-4 text-blue-500 mr-2" />
                      Interactive Architecture Visualization
                    </li>
                    <li className="flex items-center">
                      <Code className="h-4 w-4 text-blue-500 mr-2" />
                      Real-time Infrastructure as Code
                    </li>
                  </ul>
                </div>
                <div className="relative group">
                  <div className="aspect-video bg-black/40 rounded-lg overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <a
                        href="YOUR_SHAREPOINT_VIDEO_LINK"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group/play"
                      >
                        <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 group-hover/play:opacity-30 transition-opacity duration-300 scale-150 blur-xl" />
                        <div className="relative z-10 w-16 h-16 flex items-center justify-center rounded-full bg-blue-500 text-white group-hover/play:bg-blue-600 transition-colors duration-300">
                          <Play className="h-8 w-8" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <a
                  href="YOUR_SHAREPOINT_VIDEO_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 group"
                >
                  <span>Watch Full Demo</span>
                  <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <PageHeader
            title="Overview"
            description="AI Architecture Assistant helps you design, visualize, and implement cloud architectures across AWS, Azure, and Google Cloud Platform."
          />

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