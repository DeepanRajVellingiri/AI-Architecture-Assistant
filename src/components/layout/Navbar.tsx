import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Brain, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <Brain className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">AI Architect</span>
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
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
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
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
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
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
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
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
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
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

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/40 backdrop-blur-md rounded-lg mt-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-white bg-blue-500'
                      : 'text-gray-300 hover:text-white hover:bg-blue-500/50'
                  }`
                }
                onClick={closeMenu}
              >
                Home
              </NavLink>
              <NavLink
                to="/architecture"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-white bg-blue-500'
                      : 'text-gray-300 hover:text-white hover:bg-blue-500/50'
                  }`
                }
                onClick={closeMenu}
              >
                Architecture
              </NavLink>
              <NavLink
                to="/deployment"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-white bg-blue-500'
                      : 'text-gray-300 hover:text-white hover:bg-blue-500/50'
                  }`
                }
                onClick={closeMenu}
              >
                Deployment
              </NavLink>
              <NavLink
                to="/teams"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-white bg-blue-500'
                      : 'text-gray-300 hover:text-white hover:bg-blue-500/50'
                  }`
                }
                onClick={closeMenu}
              >
                Teams
              </NavLink>
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-white bg-blue-500'
                      : 'text-gray-300 hover:text-white hover:bg-blue-500/50'
                  }`
                }
                onClick={closeMenu}
              >
                FAQ
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;