import React, { useState } from 'react';
import { Wrench, Clock, Users, Star, Calendar, Code, Database, Smartphone, Globe } from 'lucide-react';

const Workshops = () => {
  const [filter, setFilter] = useState('all');

  const upcomingWorkshops = [
    {
      id: 1,
      title: 'Full Stack Web Development Bootcamp',
      date: '2025-03-20',
      duration: '3 Days',
      level: 'Intermediate',
      category: 'web',
      instructor: 'Md. Rafiq Ahmed',
      participants: 25,
      maxParticipants: 30,
      rating: 4.9,
      price: 'Free',
      description: 'Comprehensive bootcamp covering React, Node.js, MongoDB, and deployment strategies.',
      topics: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Deployment'],
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true,
    },
    {
      id: 2,
      title: 'Mobile App Development with Flutter',
      date: '2025-04-10',
      duration: '2 Days',
      level: 'Beginner',
      category: 'mobile',
      instructor: 'Fatema Rahman',
      participants: 18,
      maxParticipants: 25,
      rating: 4.7,
      price: 'Free',
      description: 'Learn to build cross-platform mobile applications using Flutter and Dart.',
      topics: ['Flutter', 'Dart', 'UI Design', 'State Management', 'API Integration'],
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false,
    },
    {
      id: 3,
      title: 'Database Design and Optimization',
      date: '2025-04-25',
      duration: '1 Day',
      level: 'Advanced',
      category: 'database',
      instructor: 'Karim Hassan',
      participants: 15,
      maxParticipants: 20,
      rating: 4.8,
      price: 'Free',
      description: 'Master database design principles, normalization, and performance optimization.',
      topics: ['SQL', 'Database Design', 'Normalization', 'Indexing', 'Performance Tuning'],
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false,
    },
  ];

  const pastWorkshops = [
    {
      id: 4,
      title: 'Python Programming Fundamentals',
      date: '2024-12-15',
      category: 'programming',
      participants: 35,
      rating: 4.6,
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 5,
      title: 'Git and Version Control',
      date: '2024-11-28',
      category: 'tools',
      participants: 28,
      rating: 4.5,
      image: 'https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const categories = [
    { key: 'all', label: 'All Workshops', icon: Wrench },
    { key: 'web', label: 'Web Development', icon: Globe },
    { key: 'mobile', label: 'Mobile Development', icon: Smartphone },
    { key: 'database', label: 'Database', icon: Database },
    { key: 'programming', label: 'Programming', icon: Code },
  ];

  const filteredWorkshops = filter === 'all' 
    ? upcomingWorkshops 
    : upcomingWorkshops.filter(workshop => workshop.category === filter);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'success';
      case 'Intermediate': return 'warning';
      case 'Advanced': return 'danger';
      default: return 'primary';
    }
  };

  return (
    <div className="pt-24 pb-12">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-success-400 to-primary-400 bg-clip-text text-transparent">
              Workshops
            </span>
          </h1>
          <p className="text-xl text-secondary-400 max-w-3xl mx-auto animate-fade-in">
            Hands-on learning experiences designed to enhance your technical skills and practical knowledge
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.key}
                    onClick={() => setFilter(category.key)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                      filter === category.key
                        ? 'bg-success-500 text-white'
                        : 'bg-dark-800/50 text-secondary-400 hover:text-success-400 hover:bg-success-500/10'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{category.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-success-400 to-accent-400 bg-clip-text text-transparent">
                Upcoming Workshops
              </span>
            </h2>
            <p className="text-xl text-secondary-400">Join our hands-on learning sessions</p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredWorkshops.map((workshop) => {
              const levelColor = getLevelColor(workshop.level);
              
              return (
                <div
                  key={workshop.id}
                  className={`group relative overflow-hidden rounded-xl border transition-all duration-300 hover:scale-105 ${
                    workshop.featured 
                      ? 'border-success-500/60 bg-gradient-to-br from-success-500/10 to-primary-500/10' 
                      : 'border-primary-500/30 bg-dark-800/50'
                  } backdrop-blur-sm hover:border-success-500/80`}
                >
                  {workshop.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-gradient-to-r from-success-500 to-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        FEATURED
                      </span>
                    </div>
                  )}

                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={workshop.image}
                      alt={workshop.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-${levelColor}-500/20 text-${levelColor}-400 border border-${levelColor}-500/30`}>
                        {workshop.level}
                      </span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-dark-900/80 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {workshop.price}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-success-400 transition-colors duration-300">
                      {workshop.title}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-secondary-400 text-sm">
                        <Calendar className="w-4 h-4 mr-2 text-primary-400" />
                        {formatDate(workshop.date)}
                      </div>
                      <div className="flex items-center text-secondary-400 text-sm">
                        <Clock className="w-4 h-4 mr-2 text-success-400" />
                        {workshop.duration}
                      </div>
                      <div className="flex items-center text-secondary-400 text-sm">
                        <Users className="w-4 h-4 mr-2 text-accent-400" />
                        {workshop.participants}/{workshop.maxParticipants} registered
                      </div>
                      <div className="flex items-center text-secondary-400 text-sm">
                        <Star className="w-4 h-4 mr-2 text-warning-400" />
                        {workshop.rating} rating
                      </div>
                    </div>

                    <p className="text-secondary-400 text-sm mb-4">{workshop.description}</p>

                    <div className="mb-4">
                      <p className="text-sm font-medium text-white mb-2">Topics Covered:</p>
                      <div className="flex flex-wrap gap-1">
                        {workshop.topics.map((topic, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-success-500/20 text-success-400 text-xs rounded-full border border-success-500/30"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-secondary-400">
                        <span className="font-medium text-white">Instructor:</span> {workshop.instructor}
                      </p>
                    </div>

                    <button className="w-full bg-gradient-to-r from-success-500 to-primary-500 text-white font-semibold py-3 rounded-lg hover:scale-105 transform transition-all duration-300">
                      Register Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Past Workshops */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-accent-400 to-warning-400 bg-clip-text text-transparent">
                Past Workshops
              </span>
            </h2>
            <p className="text-xl text-secondary-400">Successfully completed learning sessions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastWorkshops.map((workshop) => (
              <div
                key={workshop.id}
                className="bg-dark-800/50 backdrop-blur-sm border border-primary-500/30 rounded-xl overflow-hidden hover:border-primary-500/60 transition-all duration-300 hover:scale-105 group"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{workshop.title}</h3>
                  <p className="text-primary-400 text-sm mb-2">{formatDate(workshop.date)}</p>
                  <div className="flex items-center justify-between text-sm text-secondary-400">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1 text-success-400" />
                      {workshop.participants} participants
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-warning-400" />
                      {workshop.rating}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Workshops;