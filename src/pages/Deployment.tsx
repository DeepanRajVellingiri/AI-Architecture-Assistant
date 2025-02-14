import React from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  Package,
  Server,
  Settings,
  AlertCircle,
  CheckCircle2,
  Workflow,
  GitBranch,
  MonitorCheck,
  Shield,
  Rocket,
  ArrowRight,
} from 'lucide-react';

const deploymentSteps = [
  {
    title: 'Prerequisites',
    icon: Terminal,
    items: [
      'Install Azure CLI',
      'Azure account setup',
      'Log in to Azure Portal',
      'Configure local environment',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Build Process',
    icon: Package,
    items: [
      'Run npm run build',
      'Verify build output',
      'Test production build',
      'Prepare deployment package',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Azure Setup',
    icon: Server,
    items: [
      'Create Resource Group',
      'Configure Web App Service',
      'Set up deployment credentials',
      'Configure deployment slots',
    ],
    color: 'from-orange-500 to-yellow-500',
  },
  {
    title: 'Configuration',
    icon: Settings,
    items: [
      'Environment variables',
      'Application settings',
      'Connection strings',
      'Runtime stack settings',
    ],
    color: 'from-green-500 to-emerald-500',
  },
];

const monitoringFeatures = [
  {
    title: 'Application Insights',
    icon: MonitorCheck,
    description: 'Real-time performance monitoring and analytics',
  },
  {
    title: 'Security Center',
    icon: Shield,
    description: 'Advanced threat protection and security monitoring',
  },
  {
    title: 'Deployment Center',
    icon: Rocket,
    description: 'Continuous deployment and release management',
  },
  {
    title: 'Version Control',
    icon: GitBranch,
    description: 'Source code management and deployment history',
  },
];

const Deployment = () => {
  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/30 to-black/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
            Deployment Guide
          </h1>
          <p className="text-xl text-gray-300">
            Step-by-step instructions for deploying your application to Azure
          </p>
        </motion.div>

        {/* Quick Start */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16 p-8 bg-black/20 backdrop-blur-sm rounded-lg border border-blue-500/20"
        >
          <h2 className="text-2xl font-semibold text-white mb-8 text-center">Quick Start</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 text-gray-300">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Terminal className="w-6 h-6 text-blue-500" />
              </div>
              <div>npm run build</div>
            </div>
            <div className="flex items-center space-x-4 text-gray-300">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-blue-500" />
              </div>
              <div>az login</div>
            </div>
            <div className="flex items-center space-x-4 text-gray-300">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Rocket className="w-6 h-6 text-blue-500" />
              </div>
              <div>az webapp up</div>
            </div>
          </div>
        </motion.div>

        {/* Deployment Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {deploymentSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl group-hover:opacity-75 transition-opacity duration-300" />
              <div className="relative p-6 bg-black/40 backdrop-blur-sm rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${step.color}`}>
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-white">{step.title}</h3>
                </div>
                <ul className="space-y-3">
                  {step.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + itemIndex * 0.1 }}
                      className="flex items-center text-gray-300"
                    >
                      <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Monitoring Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-white mb-8 text-center">Monitoring & Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {monitoringFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-black/20 backdrop-blur-sm rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
              >
                <feature.icon className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-black/20 backdrop-blur-sm rounded-lg p-8 border border-blue-500/20"
        >
          <h2 className="text-2xl font-semibold text-white mb-8 text-center">Important Notes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <AlertCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Environment Variables</h3>
                <p className="text-gray-300">
                  Ensure all environment variables are properly configured in Azure App Service
                  application settings.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Workflow className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Deployment Slots</h3>
                <p className="text-gray-300">
                  Use staging slots for zero-downtime deployments and testing before production.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Deployment;