import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'DeepanRaj Vellingiri',
    role: 'Azure/AWS Cloud Engineer',
    description: 'Microsoft Security Researcher',
    linkedin: 'url.com',
    image: '/assets/deepan.jpg'
  },
  {
    name: 'Murugan Subramanian',
    role: 'Developer Lead',
    description: 'Azure - IAC',
    linkedin: 'url.com',
    image: '/assets/murugan.jpg'
  }
];

const Teams = () => {
  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
            Our Team
          </h1>
          <p className="text-xl text-gray-300">
            Meet the experts behind AI Architecture Assistant
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl group-hover:opacity-75 transition-opacity duration-300" />
              <div className="relative p-6 bg-black/40 backdrop-blur-sm rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500 flex-shrink-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                    <p className="text-blue-400">{member.role}</p>
                    <p className="text-gray-300">{member.description}</p>
                    <div className="mt-2 flex space-x-3">
                      <a
                        href={`https://${member.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-400 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center bg-black/20 backdrop-blur-sm p-8 rounded-lg border border-blue-500/20"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-gray-300 mb-6">
            Interested in learning more about our services? Get in touch with our team.
          </p>
          <a
            href="mailto:contact@example.com"
            className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Mail className="h-5 w-5 mr-2" />
            Contact for More Details
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Teams;