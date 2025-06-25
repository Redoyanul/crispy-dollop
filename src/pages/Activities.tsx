import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Wrench, BookOpen, Code, ArrowRight, Users, Award, Target } from 'lucide-react';

const Activities = () => {
  const activityTypes = [
    {
      title: 'Events',
      description: 'Seminars, tech talks, and networking sessions with industry experts',
      icon: Calendar,
      link: '/events',
      color: 'primary',
      stats: '25+ Events',
    },
    {
      title: 'Workshops',
      description: 'Hands-on learning sessions on latest technologies and programming languages',
      icon: Wrench,
      link: '/workshops',
      color: 'success',
      stats: '15+ Workshops',
    },
    {
      title: 'Publications',
      description: 'Research papers, articles, and technical documentation by our members',
      icon: BookOpen,
      link: '/publications',
      color: 'accent',
      stats: '8+ Publications',
    },
    {
      title: 'Projects',
      description: 'Innovative software solutions and applications developed by club members',
      icon: Code,
      link: '/projects',
      color: 'warning',
      stats: '20+ Projects',
    },
  ];

  const highlights = [
    {
      icon: Users,
      title: 'Community Engagement',
      description: 'Building a strong tech community within the college',
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Achieving excellence in various competitions and events',
    },
    {
      icon: Target,
      title: 'Skill Development',
      description: 'Focusing on practical skills and industry readiness',
    },
  ];

  return (
    <div className="pt-24 pb-12">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Our Activities
            </span>
          </h1>
          <p className="text-xl text-secondary-400 max-w-3xl mx-auto animate-fade-in">
            Explore the diverse range of activities that make BNMPC IT Club a hub of innovation and learning
          </p>
        </div>
      </section>

      {/* Activity Types */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activityTypes.map((activity, index) => {
              const Icon = activity.icon;
              const colorMap = {
                primary: 'from-primary-500 to-primary-600',
                success: 'from-success-500 to-success-600',
                accent: 'from-accent-500 to-accent-600',
                warning: 'from-warning-500 to-warning-600',
              };
              
              return (
                <Link
                  key={index}
                  to={activity.link}
                  className="group block"
                >
                  <div className="bg-dark-800/50 backdrop-blur-sm border border-primary-500/30 rounded-xl p-8 hover:border-primary-500/60 transition-all duration-300 hover:scale-105 text-center h-full">
                    <div className={`w-20 h-20 bg-gradient-to-br ${colorMap[activity.color as keyof typeof colorMap]} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-primary-400 transition-colors duration-300">
                      {activity.title}
                    </h3>
                    <p className="text-secondary-400 mb-4 leading-relaxed">
                      {activity.description}
                    </p>
                    <div className="text-primary-400 font-semibold mb-4">
                      {activity.stats}
                    </div>
                    <div className="flex items-center justify-center text-primary-400 group-hover:text-accent-400 transition-colors duration-300">
                      <span className="mr-2">Explore</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-success-400 to-primary-400 bg-clip-text text-transparent">
                Activity Highlights
              </span>
            </h2>
            <p className="text-xl text-secondary-400">What makes our activities special</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-success-500/10 to-primary-500/10 backdrop-blur-sm border border-success-500/30 rounded-xl p-8 hover:border-success-500/60 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-success-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{highlight.title}</h3>
                  <p className="text-secondary-400">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary-500/20 to-accent-500/20 backdrop-blur-sm border border-primary-500/30 rounded-2xl p-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Join Our Activities
              </span>
            </h2>
            <p className="text-xl text-secondary-300 mb-8 max-w-2xl mx-auto">
              Be part of our vibrant community and participate in activities that will shape your tech career
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="px-10 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl hover:scale-105 transform transition-all duration-300 flex items-center justify-center space-x-3 group"
              >
                <span>Get Involved</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/events"
                className="px-10 py-4 border-2 border-primary-500 text-primary-400 font-semibold rounded-xl hover:bg-primary-500 hover:text-white transition-all duration-300"
              >
                View Upcoming Events
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;