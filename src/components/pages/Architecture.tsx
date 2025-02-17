import React from 'react';
import { motion } from 'framer-motion';
import {
  Cloud,
  Database,
  Server,
  Shield,
  Monitor,
  Key,
  Globe,
  BarChart,
  Zap,
  TrendingUp,
  DollarSign,
  Target,
  Sparkles,
  Code,
  Palette,
  Lock,
  Smartphone,
  GitBranch,
  Mic,
  LineChart,
} from 'lucide-react';
import PageHeader from '../assets/common/PageHeader';

const architectureComponents = [
  {
    title: 'Azure Web App Service',
    icon: Cloud,
    description: 'Hosts the web application code and makes it accessible over the Internet.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Azure Application Insights',
    icon: Monitor,
    description: 'Monitors the web application for performance and errors. Provides insights into user behavior and application health.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Azure Storage',
    icon: Database,
    description: 'Stores the web application content, such as images, videos, and log files.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Azure Database for MySQL',
    icon: Server,
    description: "Stores the web application's data with high availability and scalability.",
    color: 'from-orange-500 to-yellow-500',
  },
  {
    title: 'Azure Redis Cache',
    icon: Zap,
    description: 'Improves web application performance by caching frequently accessed data.',
    color: 'from-red-500 to-pink-500',
  },
  {
    title: 'Azure Key Vault',
    icon: Key,
    description: 'Securely stores and manages secrets, such as database passwords.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Azure CDN',
    icon: Globe,
    description: 'Speeds up the delivery of static content, such as images and CSS files.',
    color: 'from-teal-500 to-green-500',
  },
  {
    title: 'Azure Load Balancer',
    icon: BarChart,
    description: 'Distributes incoming traffic across multiple web app instances for scalability.',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Google Gemini API',
    icon: Sparkles,
    description: 'Leverages advanced AI capabilities for intelligent architecture design and optimization recommendations.',
    color: 'from-emerald-500 to-teal-500',
  },
];

const techStack = [
  {
    category: "Frontend",
    items: [
      { name: "React with TypeScript", description: "Type-safe component development" },
      { name: "Tailwind CSS", description: "Utility-first styling framework" },
      { name: "Three.js & React Three Fiber", description: "3D visualization capabilities" },
      { name: "Mermaid.js", description: "Diagram generation" },
    ]
  },
  {
    category: "AI & Integration",
    items: [
      { name: "Google AI (Gemini Pro)", description: "Advanced AI capabilities" },
      { name: "Azure AD", description: "Secure authentication" },
      { name: "PPTX & PDF Export", description: "Document generation" },
    ]
  }
];

const designFeatures = [
  { icon: Smartphone, name: "Responsive Layout", description: "Optimized for all screen sizes" },
  { icon: Palette, name: "Modern UI", description: "Clean and professional interface" },
  { icon: Zap, name: "Interactive Elements", description: "Dynamic components and animations" },
  { icon: Shield, name: "Accessibility", description: "WCAG compliant design" },
];

const roadmap = [
  {
    quarter: "Q2 2024",
    features: [
      "Voice Command Integration",
      "Real-time Cost Tracking Dashboard",
      "Enhanced AI Recommendations",
      "Dark Mode Support"
    ]
  },
  {
    quarter: "Q3 2024",
    features: [
      "Multi-cloud Cost Comparison",
      "Advanced Security Analysis",
      "Team Collaboration Features",
      "Custom Template Library"
    ]
  },
  {
    quarter: "Q4 2024",
    features: [
      "AI-Powered Performance Optimization",
      "Automated Documentation Generation",
      "Integration with Popular DevOps Tools",
      "Enhanced Visualization Options"
    ]
  },
  {
    quarter: "Q1 2025",
    features: [
      "Predictive Cost Analysis",
      "Advanced Compliance Checking",
      "Real-time Architecture Validation",
      "Extended API Ecosystem"
    ]
  }
];

const Architecture = () => {
  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Cloud Architecture"
          description="Comprehensive cloud solutions designed for scalability and performance"
        />

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-16 p-8 bg-black/20 backdrop-blur-sm rounded-lg border border-blue-500/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-50" />
          <h2 className="text-2xl font-semibold text-white mb-8 text-center relative z-10">Architecture Overview</h2>
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
            <img
              src=""
              alt="Azure Architecture Animation"
              className="w-full h-full object-contain rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </motion.div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {architectureComponents.map((component, index) => (
            <motion.div
              key={component.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl group-hover:opacity-75 transition-opacity duration-300" />
              <div className="relative p-6 bg-black/40 backdrop-blur-sm rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${component.color}`}>
                    <component.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-white">{component.title}</h3>
                </div>
                <p className="text-gray-300">{component.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Problem Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 p-8 bg-black/20 backdrop-blur-sm rounded-lg border border-blue-500/20"
        >
          <h2 className="text-2xl font-semibold text-white mb-8 text-center">Problem Statement</h2>
          <div className="space-y-6 text-gray-300">
            <p className="text-lg">Organizations face several critical challenges in cloud architecture planning:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Time-consuming manual architecture design process (40-80 hours per project)</li>
              <li>High risk of costly design errors and security vulnerabilities</li>
              <li>Complex cost estimation across multiple cloud services</li>
              <li>Lack of standardization in architecture documentation</li>
              <li>Difficulty in comparing multi-cloud solutions</li>
              <li>Shortage of experienced cloud architects ($150-200K/year per architect)</li>
            </ul>
          </div>
        </motion.div>

        {/* Impact Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-white mb-8 text-center">Impact Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-black/20 backdrop-blur-sm rounded-lg border border-blue-500/20">
              <DollarSign className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Financial Impact</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-blue-400 mb-2">Cost Savings:</h4>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Reduce design time by 80%</li>
                    <li>• Save $15,000-30,000 per project</li>
                    <li>• Cut review costs by 60%</li>
                    <li>• Minimize redesign work by 75%</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-blue-400 mb-2">Revenue Generation:</h4>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Subscription: $500K-2M/year</li>
                    <li>• Professional services: $200K-500K/year</li>
                    <li>• Training: $100K-300K/year</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-6 bg-black/20 backdrop-blur-sm rounded-lg border border-blue-500/20">
              <TrendingUp className="h-8 w-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Operational Impact</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-blue-400 mb-2">Efficiency Gains:</h4>
                  <ul className="space-y-1 text-gray-300">
                    <li>• 90% faster architecture design</li>
                    <li>• 70% reduction in documentation time</li>
                    <li>• 60% fewer design iterations</li>
                    <li>• 50% faster stakeholder approval</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-blue-400 mb-2">Quality Improvements:</h4>
                  <ul className="space-y-1 text-gray-300">
                    <li>• 80% reduction in design errors</li>
                    <li>• 95% compliance with best practices</li>
                    <li>• 70% better standardization</li>
                    <li>• 100% consistent documentation</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-6 bg-black/20 backdrop-blur-sm rounded-lg border border-blue-500/20">
              <Target className="h-8 w-8 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Business Impact</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-blue-400 mb-2">Competitive Advantage:</h4>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Faster time-to-market</li>
                    <li>• Lower project costs</li>
                    <li>• Better architecture quality</li>
                    <li>• Reduced risk</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-blue-400 mb-2">Market Position:</h4>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Innovation leader in cloud design</li>
                    <li>• Trusted advisor status</li>
                    <li>• Industry recognition</li>
                    <li>• Partner ecosystem growth</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 p-8 bg-black/20 backdrop-blur-sm rounded-lg border border-blue-500/20"
        >
          <h2 className="text-2xl font-semibold text-white mb-8 text-center">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techStack.map((section) => (
              <div key={section.category}>
                <h3 className="text-xl font-semibold text-blue-400 mb-4">{section.category}</h3>
                <div className="space-y-4">
                  {section.items.map((item) => (
                    <div key={item.name} className="flex items-start">
                      <Code className="h-5 w-5 text-blue-500 mt-1 mr-3" />
                      <div>
                        <h4 className="text-white font-medium">{item.name}</h4>
                        <p className="text-gray-300 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Design Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {designFeatures.map((feature) => (
            <div key={feature.name} className="p-6 bg-black/20 backdrop-blur-sm rounded-lg border border-blue-500/20">
              <feature.icon className="h-8 w-8 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{feature.name}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-white mb-8 text-center">Product Roadmap 2024-2025</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmap.map((quarter) => (
              <div key={quarter.quarter} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl group-hover:opacity-75 transition-opacity duration-300" />
                <div className="relative p-6 bg-black/40 backdrop-blur-sm rounded-lg border border-blue-500/20 h-full">
                  <h3 className="text-xl font-semibold text-blue-400 mb-4">{quarter.quarter}</h3>
                  <ul className="space-y-3">
                    {quarter.features.map((feature) => (
                      <li key={feature} className="flex items-start text-gray-300">
                        <Sparkles className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Architecture;