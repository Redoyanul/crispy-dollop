import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Calendar, Code, Trophy, ChevronDown, Target, Lightbulb, Award } from 'lucide-react';
import TypingAnimation from '../components/TypingAnimation';
import CounterAnimation from '../components/CounterAnimation';

const Home = () => {
  const stats = [
    { number: 200, suffix: '+', label: 'Active Members' },
    { number: 50, suffix: '+', label: 'Events Held' },
    { number: 25, suffix: '+', label: 'Projects Completed' },
    { number: 10, suffix: '+', label: 'Awards Won' },
  ];

  const features = [
    {
      icon: Code,
      title: 'Programming Excellence',
      description: 'Master modern programming languages and frameworks through hands-on workshops and coding competitions.',
      color: 'primary',
    },
    {
      icon: Users,
      title: 'Tech Community',
      description: 'Join a vibrant community of like-minded students passionate about technology and innovation.',
      color: 'accent',
    },
    {
      icon: Trophy,
      title: 'Competitions',
      description: 'Participate in programming contests, hackathons, and tech competitions at national level.',
      color: 'success',
    },
    {
      icon: Calendar,
      title: 'Regular Events',
      description: 'Attend weekly workshops, seminars, and tech talks by industry experts and professionals.',
      color: 'warning',
    },
  ];

  const upcomingEvents = [
    {
      title: 'Web Development Workshop',
      date: 'March 15, 2025',
      time: '2:00 PM',
      description: 'Learn modern web development with React and Node.js',
      color: 'primary',
    },
    {
      title: 'AI & Machine Learning Seminar',
      date: 'March 22, 2025',
      time: '3:00 PM',
      description: 'Explore the future of artificial intelligence and its applications',
      color: 'accent',
    },
    {
      title: 'Programming Contest',
      date: 'March 30, 2025',
      time: '10:00 AM',
      description: 'Annual inter-college programming competition',
      color: 'success',
    },
  ];

  const achievements = [
    {
      icon: Target,
      title: 'Mission Driven',
      description: 'Propagating IT features among students with focused approach',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Hub',
      description: 'Fostering creativity and technological innovation',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Recognized for outstanding contributions to IT education',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <div className="w-40 h-40 mx-auto mb-8 relative">
              <img 
                src="/image.png" 
                alt="BNMPC IT Club Logo" 
                className="w-full h-full animate-pulse-glow rounded-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-accent-500/30 rounded-full animate-rotate"></div>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-success-400 bg-clip-text text-transparent">
              BNMPC IT Club
            </span>
          </h1>
          
          <div className="text-2xl sm:text-3xl lg:text-4xl text-secondary-300 mb-8 h-16 animate-slide-up">
            <TypingAnimation text="Where Tech Meets Future Entrepreneurs" speed={80} />
          </div>
          
          <p className="text-lg text-secondary-400 mb-12 max-w-3xl mx-auto animate-fade-in leading-relaxed">
            Birshreshtha Noor Mohammad Public College IT Club prevails with the view to propagate 
            the features of IT among students and nurture future tech leaders in Dhaka, Bangladesh.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-scale-in">
            <Link
              to="/contact"
              className="px-10 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl hover:scale-105 transform transition-all duration-300 flex items-center justify-center space-x-3 group shadow-lg hover:shadow-primary-500/25"
            >
              <span>Join Us Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/about"
              className="px-10 py-4 border-2 border-primary-500 text-primary-400 font-semibold rounded-xl hover:bg-primary-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <span>Learn More</span>
            </Link>
          </div>

          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-primary-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-dark-800/50 backdrop-blur-sm border border-primary-500/30 rounded-xl p-8 hover:border-primary-500/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/20">
                  <div className="text-4xl lg:text-6xl font-bold text-primary-400 mb-3">
                    <CounterAnimation end={stat.number} suffix={stat.suffix} />
                  </div>
                  <p className="text-secondary-400 font-medium text-lg">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Why Choose BNMPC IT Club?
              </span>
            </h2>
            <p className="text-xl text-secondary-400 max-w-3xl mx-auto">
              Discover the opportunities that await you in our thriving tech community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const colorMap = {
                primary: 'from-primary-500 to-primary-600',
                accent: 'from-accent-500 to-accent-600',
                success: 'from-success-500 to-success-600',
                warning: 'from-warning-500 to-warning-600',
              };
              
              return (
                <div
                  key={index}
                  className="bg-dark-800/50 backdrop-blur-sm border border-primary-500/30 rounded-xl p-8 hover:border-primary-500/60 transition-all duration-300 hover:scale-105 group hover:shadow-lg hover:shadow-primary-500/20"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${colorMap[feature.color as keyof typeof colorMap]} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-secondary-400 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-success-400 to-primary-400 bg-clip-text text-transparent">
                Our Achievements
              </span>
            </h2>
            <p className="text-xl text-secondary-400">What makes us stand out in the tech community</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="bg-gradient-to-br from-success-500/20 to-primary-500/20 backdrop-blur-sm border border-success-500/30 rounded-xl p-8 hover:border-success-500/60 transition-all duration-300 hover:scale-105">
                    <div className="w-20 h-20 bg-gradient-to-br from-success-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white">{achievement.title}</h3>
                    <p className="text-secondary-400">{achievement.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent-400 to-warning-400 bg-clip-text text-transparent">
                Upcoming Events
              </span>
            </h2>
            <p className="text-xl text-secondary-400">Join us for exciting tech events and workshops</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => {
              const colorMap = {
                primary: 'border-primary-500/30 hover:border-primary-500/60',
                accent: 'border-accent-500/30 hover:border-accent-500/60',
                success: 'border-success-500/30 hover:border-success-500/60',
              };
              
              return (
                <div
                  key={index}
                  className={`bg-dark-800/50 backdrop-blur-sm border ${colorMap[event.color as keyof typeof colorMap]} rounded-xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20`}
                >
                  <h3 className="text-xl font-semibold mb-4 text-white">{event.title}</h3>
                  <div className="text-primary-400 font-medium mb-3">{event.date} at {event.time}</div>
                  <p className="text-secondary-400 mb-6 leading-relaxed">{event.description}</p>
                  <Link
                    to="/events"
                    className="inline-flex items-center text-primary-400 hover:text-accent-400 transition-colors duration-300 font-medium"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/events"
              className="inline-flex items-center px-8 py-4 border-2 border-primary-500 text-primary-400 font-semibold rounded-xl hover:bg-primary-500 hover:text-white transition-all duration-300"
            >
              View All Events <ArrowRight className="w-5 h-5 ml-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary-500/20 to-accent-500/20 backdrop-blur-sm border border-primary-500/30 rounded-2xl p-12 hover:border-primary-500/50 transition-all duration-300">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Ready to Start Your Tech Journey?
              </span>
            </h2>
            <p className="text-xl text-secondary-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join BNMPC IT Club today and be part of a community that's shaping the future of technology in Bangladesh.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="px-10 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl hover:scale-105 transform transition-all duration-300 flex items-center justify-center space-x-3 group shadow-lg hover:shadow-primary-500/25"
              >
                <span>Join Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/contact"
                className="px-10 py-4 border-2 border-primary-500 text-primary-400 font-semibold rounded-xl hover:bg-primary-500 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;