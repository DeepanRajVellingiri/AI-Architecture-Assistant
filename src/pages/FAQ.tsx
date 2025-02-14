import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What cloud providers do you support?',
    answer: 'We support all major cloud providers including AWS, Azure, and Google Cloud Platform.',
  },
  {
    question: 'How do I get started with the AI Architecture Assistant?',
    answer: 'Simply describe your requirements in plain English, and our AI will generate a comprehensive architecture design.',
  },
  {
    question: 'Can I export the architecture diagrams?',
    answer: 'Yes, you can export diagrams in multiple formats including PowerPoint and PDF for stakeholder review.',
  },
  {
    question: 'Do you provide cost estimates?',
    answer: 'Yes, we provide detailed monthly cost breakdowns and optimization recommendations for your architecture.',
  },
  {
    question: 'How accurate are the AI-generated architectures?',
    answer: 'Our AI is trained on industry best practices and real-world architectures, ensuring high-quality, production-ready designs.',
  },
  {
    question: 'Can I customize the generated architecture?',
    answer: 'Yes, you can modify any aspect of the generated architecture to meet your specific requirements.',
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300">Find answers to common questions about our AI Architecture Assistant</p>
        </motion.div>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/20 backdrop-blur-sm p-6 rounded-lg"
            >
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;