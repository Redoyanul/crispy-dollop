import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Monitor, Users, Calendar, Code, BookOpen, Camera, Mail, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activitiesOpen, setActivitiesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: Monitor },
    { path: '/about', label: 'About', icon: Users },
    { path: '/executive', label: 'Executive', icon: Users },
    { 
      path: '/activities', 
      label: 'Activities', 
      icon: Calendar,
      dropdown: [
        { path: '/events', label: 'Events' },
        { path: '/workshops', label: 'Workshops' },
        { path: '/publications', label: 'Publications' },
        { path: '/projects', label: 'Projects' },
      ]
    },
    { path: '/resources', label: 'Resources', icon: BookOpen },
    { path: '/gallery', label: 'Gallery', icon: Camera },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark-900/95 backdrop-blur-sm shadow-lg shadow-primary-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <img src="/image.png" alt="BNMPC IT Club" className="w-8 h-8" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                BNMPC IT Club
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path || 
                             (item.dropdown && item.dropdown.some(sub => sub.path === location.pathname));
              
              if (item.dropdown) {
                return (
                  <div key={item.path} className="relative group">
                    <button
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                        isActive
                          ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                          : 'text-gray-300 hover:text-primary-400 hover:bg-primary-500/10'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-48 bg-dark-800/95 backdrop-blur-sm border border-primary-500/30 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="block px-4 py-3 text-sm text-gray-300 hover:text-primary-400 hover:bg-primary-500/10 transition-colors duration-300 first:rounded-t-lg last:rounded-b-lg"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 group ${
                    isActive
                      ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                      : 'text-gray-300 hover:text-primary-400 hover:bg-primary-500/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-primary-400 hover:bg-primary-500/10 transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-2 pb-4 animate-slide-down">
            <div className="bg-dark-800/95 backdrop-blur-sm rounded-lg border border-primary-500/30 overflow-hidden">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path ||
                               (item.dropdown && item.dropdown.some(sub => sub.path === location.pathname));
                
                if (item.dropdown) {
                  return (
                    <div key={item.path}>
                      <button
                        onClick={() => setActivitiesOpen(!activitiesOpen)}
                        className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium transition-colors duration-300 border-b border-primary-500/10 ${
                          isActive
                            ? 'bg-primary-500/20 text-primary-400'
                            : 'text-gray-300 hover:text-primary-400 hover:bg-primary-500/10'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <Icon className="w-5 h-5" />
                          <span>{item.label}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activitiesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {activitiesOpen && (
                        <div className="bg-dark-900/50">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              onClick={() => setIsOpen(false)}
                              className="block px-8 py-3 text-sm text-gray-300 hover:text-primary-400 hover:bg-primary-500/10 transition-colors duration-300 border-b border-primary-500/5 last:border-b-0"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium transition-colors duration-300 border-b border-primary-500/10 last:border-b-0 ${
                      isActive
                        ? 'bg-primary-500/20 text-primary-400'
                        : 'text-gray-300 hover:text-primary-400 hover:bg-primary-500/10'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;