import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import PageHeader from '../assets/common/PageHeader';
import TryApplicationButton from '../common/TryApplicationButton';

const faqs = [
  {
    question: 'What cloud providers do you support?',
    answer: 'We support all major cloud providers including AWS, Azure, and Google Cloud Platform. Our AI is trained to understand and generate architectures for each platform, taking into account their specific services and best practices.',
  },
  {
    question: 'How do I get started with the AI Architecture Assistant?',
    answer: 'Getting started is simple: \n\n1. Sign up for an account\n2. Describe your requirements in plain English\n3. Select your preferred cloud provider\n4. Let our AI generate a comprehensive architecture design\n5. Review and customize the generated architecture',
  },
  {
    question: 'Can I export the architecture diagrams?',
    answer: 'Yes, you can export diagrams in multiple formats including:\n\n• PowerPoint presentations\n• PDF documents\n• High-resolution PNG images\n• Visio compatible formats\n\nAll exports include detailed annotations and documentation.',
  },
  {
    question: 'Do you provide cost estimates?',
    answer: 'Yes, we provide comprehensive cost analysis including:\n\n• Detailed monthly cost breakdowns\n• Service-by-service pricing\n• Cost optimization recommendations\n• Comparison of different service tiers\n• Reserved instance recommendations',
  },
  {
    question: 'How accurate are the AI-generated architectures?',
    answer: 'Our AI is trained on thousands of real-world architectures and follows industry best practices. The accuracy is ensured through:\n\n• Regular updates with latest cloud services\n• Compliance with security standards\n• Performance optimization patterns\n• Real-world deployment validation',
  },
  {
    question: 'Can I customize the generated architecture?',
    answer: 'Absolutely! You can customize every aspect of the generated architecture:\n\n• Modify service selections\n• Adjust scaling parameters\n• Add or remove components\n• Update security configurations\n• Customize networking setup',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Frequently Asked Questions"
          description="Find answers to common questions about our AI Architecture Assistant"
        />

        <div className="space-y-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-xl group-hover:opacity-75 transition-opacity duration-300" />
              <div className="bg-black/20 backdrop-blur-sm rounded-lg overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                <motion.button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left flex items-start justify-between focus:outline-none group"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start">
                    <HelpCircle className="h-6 w-6 text-blue-500 mr-3 mt-1 flex-shrink-0 group-hover:text-blue-400 transition-colors" />
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openIndex === index ? (
                      <Minus className="h-6 w-6 text-blue-500 group-hover:text-blue-400 transition-colors" />
                    ) : (
                      <Plus className="h-6 w-6 text-blue-500 group-hover:text-blue-400 transition-colors" />
                    )}
                  </motion.div>
                </motion.button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-gray-300 whitespace-pre-line">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <TryApplicationButton />
        </div>
      </div>
    </div>
  );
};

export default FAQ;