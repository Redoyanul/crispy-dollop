import React, { useState } from 'react';
import { Github, ExternalLink, Calendar, Users, Star, Filter, Code, Smartphone, Globe, Database } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'BNMPC Student Portal',
      description: 'Comprehensive web portal for students to access academic information, results, and college services.',
      image: 'https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'web',
      status: 'completed',
      github: 'https://github.com/bnmpc-it-club/student-portal',
      demo: 'https://portal.bnmpc.edu.bd',
      contributors: 6,
      stars: 45,
      date: '2024-12-15',
      featured: true,
    },
    {
      id: 2,
      title: 'Smart Attendance System',
      description: 'IoT-based attendance tracking system using RFID technology for automated student attendance.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Arduino', 'ESP32', 'Python', 'MySQL'],
      category: 'iot',
      status: 'completed',
      github: 'https://github.com/bnmpc-it-club/smart-attendance',
      demo: null,
      contributors: 4,
      stars: 32,
      date: '2024-11-20',
      featured: true,
    },
    {
      id: 3,
      title: 'College Mobile App',
      description: 'Cross-platform mobile application for accessing college information and services on the go.',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      category: 'mobile',
      status: 'in-progress',
      github: 'https://github.com/bnmpc-it-club/college-app',
      demo: null,
      contributors: 3,
      stars: 28,
      date: '2024-10-10',
      featured: false,
    },
    {
      id: 4,
      title: 'Library Management System',
      description: 'Digital solution for managing library books, member records, and automated book lending.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['PHP', 'MySQL', 'Bootstrap', 'jQuery'],
      category: 'web',
      status: 'completed',
      github: 'https://github.com/bnmpc-it-club/library-system',
      demo: 'https://library.bnmpc.edu.bd',
      contributors: 3,
      stars: 22,
      date: '2024-09-05',
      featured: false,
    },
    {
      id: 5,
      title: 'AI Chatbot Assistant',
      description: 'Intelligent chatbot to help students with queries about college procedures and academic information.',
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'TensorFlow', 'Flask', 'NLP'],
      category: 'ai',
      status: 'completed',
      github: 'https://github.com/bnmpc-it-club/ai-chatbot',
      demo: 'https://chatbot.bnmpc.edu.bd',
      contributors: 2,
      stars: 38,
      date: '2024-08-15',
      featured: true,
    },
    {
      id: 6,
      title: 'Event Management Platform',
      description: 'Platform for organizing and managing college events, registrations, and participant tracking.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Vue.js', 'Laravel', 'PostgreSQL'],
      category: 'web',
      status: 'in-progress',
      github: 'https://github.com/bnmpc-it-club/event-platform',
      demo: null,
      contributors: 5,
      stars: 15,
      date: '2024-07-20',
      featured: false,
    },
  ];

  const filterOptions = [
    { key: 'all', label: 'All Projects', icon: Code },
    { key: 'web', label: 'Web Development', icon: Globe },
    { key: 'mobile', label: 'Mobile Apps', icon: Smartphone },
    { key: 'ai', label: 'AI/ML', icon: Star },
    { key: 'iot', label: 'IoT', icon: Database },
  ];

  const statusColors = {
    completed: 'success',
    'in-progress': 'warning',
    planning: 'accent',
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="pt-24 pb-12">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-warning-400 to-primary-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl text-secondary-400 max-w-3xl mx-auto animate-fade-in">
            Innovative software solutions and applications developed by our talented club members
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Filter className="w-5 h-5 text-warning-400" />
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <button
                    key={option.key}
                    onClick={() => setFilter(option.key)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                      filter === option.key
                        ? 'bg-warning-500 text-white'
                        : 'bg-dark-800/50 text-secondary-400 hover:text-warning-400 hover:bg-warning-500/10'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{option.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              const statusColor = statusColors[project.status as keyof typeof statusColors];
              
              return (
                <div
                  key={project.id}
                  className={`group relative overflow-hidden rounded-xl border transition-all duration-300 hover:scale-105 ${
                    project.featured 
                      ? 'border-warning-500/60 bg-gradient-to-br from-warning-500/10 to-primary-500/10' 
                      : 'border-primary-500/30 bg-dark-800/50'
                  } backdrop-blur-sm hover:border-warning-500/80`}
                >
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-gradient-to-r from-warning-500 to-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        FEATURED
                      </span>
                    </div>
                  )}

                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-${statusColor}-500/20 text-${statusColor}-400 border border-${statusColor}-500/30`}>
                        {project.status.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-warning-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-secondary-400 text-sm mb-4 line-clamp-3">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-warning-500/20 text-warning-400 text-xs rounded-full border border-warning-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-secondary-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1 text-success-400" />
                          {project.contributors}
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-accent-400" />
                          {project.stars}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1 text-primary-400" />
                        {formatDate(project.date)}
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-dark-900/50 hover:bg-warning-500/20 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 border border-warning-500/30 hover:border-warning-500/60"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-warning-500 to-primary-500 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-warning-500/10 to-primary-500/10 backdrop-blur-sm border border-warning-500/30 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-warning-400 to-primary-400 bg-clip-text text-transparent">
                  Project Statistics
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-warning-400 mb-2">{projects.length}</div>
                <p className="text-secondary-400">Total Projects</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-success-400 mb-2">
                  {projects.filter(p => p.status === 'completed').length}
                </div>
                <p className="text-secondary-400">Completed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-400 mb-2">
                  {projects.reduce((sum, p) => sum + p.contributors, 0)}
                </div>
                <p className="text-secondary-400">Contributors</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-400 mb-2">
                  {projects.reduce((sum, p) => sum + p.stars, 0)}
                </div>
                <p className="text-secondary-400">GitHub Stars</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;