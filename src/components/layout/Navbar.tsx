import React from 'react';
import { NavLink } from 'react-router-dom';
import { Brain } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">AI Architect</span>
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${
                    isActive
                      ? 'text-white bg-blue-500'
                      : 'text-gray-300 hover:text-white hover:bg-blue-500/50'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/architecture"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${
                    isActive
                      ? 'text-white bg-blue-500'
                      : 'text-gray-300 hover:text-white hover:bg-blue-500/50'
                  }`
                }
              >
                Architecture
              </NavLink>
              <NavLink
                to="/deployment"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${
                    isActive
                      ? 'text-white bg-blue-500'
                      : 'text-gray-300 hover:text-white hover:bg-blue-500/50'
                  }`
                }
              >
                Deployment
              </NavLink>
              <NavLink
                to="/teams"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${
                    isActive
                      ? 'text-white bg-blue-500'
                      : 'text-gray-300 hover:text-white hover:bg-blue-500/50'
                  }`
                }
              >
                Teams
              </NavLink>
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${
                    isActive
                      ? 'text-white bg-blue-500'
                      : 'text-gray-300 hover:text-white hover:bg-blue-500/50'
                  }`
                }
              >
                FAQ
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;