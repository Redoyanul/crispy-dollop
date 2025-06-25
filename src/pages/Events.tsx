import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Filter, ArrowRight } from 'lucide-react';

const Events = () => {
  const [filter, setFilter] = useState('all');

  const upcomingEvents = [
    {
      id: 1,
      title: 'Tech Innovation Summit 2025',
      date: '2025-03-15',
      time: '9:00 AM - 5:00 PM',
      location: 'Main Auditorium, BNMPC',
      type: 'seminar',
      description: 'Annual summit featuring industry leaders discussing the future of technology and innovation in Bangladesh.',
      attendees: 150,
      maxAttendees: 200,
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true,
    },
    {
      id: 2,
      title: 'AI & Machine Learning Conference',
      date: '2025-03-22',
      time: '2:00 PM - 6:00 PM',
      location: 'Computer Lab Complex',
      type: 'conference',
      description: 'Deep dive into artificial intelligence applications and machine learning algorithms with hands-on demonstrations.',
      attendees: 85,
      maxAttendees: 100,
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true,
    },
    {
      id: 3,
      title: 'Startup Pitch Competition',
      date: '2025-04-05',
      time: '10:00 AM - 4:00 PM',
      location: 'Innovation Hub',
      type: 'competition',
      description: 'Students present their startup ideas to a panel of investors and industry experts.',
      attendees: 45,
      maxAttendees: 60,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false,
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: 'Digital Bangladesh Vision 2024',
      date: '2024-12-10',
      type: 'seminar',
      description: 'Exploring the role of IT in achieving Digital Bangladesh goals.',
      attendees: 180,
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 5,
      title: 'Tech Career Fair 2024',
      date: '2024-11-25',
      type: 'career',
      description: 'Connecting students with leading tech companies for internships and jobs.',
      attendees: 220,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const filterTypes = [
    { key: 'all', label: 'All Events' },
    { key: 'seminar', label: 'Seminars' },
    { key: 'conference', label: 'Conferences' },
    { key: 'competition', label: 'Competitions' },
    { key: 'career', label: 'Career Events' },
  ];

  const filteredUpcomingEvents = filter === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.type === filter);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getDaysUntil = (dateString: string) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    const diffTime = eventDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'seminar': return 'primary';
      case 'conference': return 'success';
      case 'competition': return 'accent';
      case 'career': return 'warning';
      default: return 'primary';
    }
  };

  return (
    <div className="pt-24 pb-12">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Events
            </span>
          </h1>
          <p className="text-xl text-secondary-400 max-w-3xl mx-auto animate-fade-in">
            Join us for inspiring seminars, conferences, and networking events that connect you with the tech industry
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Filter className="w-5 h-5 text-primary-400" />
            <div className="flex flex-wrap gap-2">
              {filterTypes.map((type) => (
                <button
                  key={type.key}
                  onClick={() => setFilter(type.key)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    filter === type.key
                      ? 'bg-primary-500 text-white'
                      : 'bg-dark-800/50 text-secondary-400 hover:text-primary-400 hover:bg-primary-500/10'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary-400 to-success-400 bg-clip-text text-transparent">
                Upcoming Events
              </span>
            </h2>
            <p className="text-xl text-secondary-400">Don't miss these exciting opportunities to learn and network</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {filteredUpcomingEvents.map((event) => {
              const daysUntil = getDaysUntil(event.date);
              const typeColor = getTypeColor(event.type);
              const colorMap = {
                primary: 'border-primary-500/60 from-primary-500/10 to-primary-600/10',
                success: 'border-success-500/60 from-success-500/10 to-success-600/10',
                accent: 'border-accent-500/60 from-accent-500/10 to-accent-600/10',
                warning: 'border-warning-500/60 from-warning-500/10 to-warning-600/10',
              };
              
              return (
                <div
                  key={event.id}
                  className={`group relative overflow-hidden rounded-xl border transition-all duration-300 hover:scale-105 ${
                    event.featured 
                      ? `${colorMap[typeColor as keyof typeof colorMap]} bg-gradient-to-br` 
                      : 'border-primary-500/30 bg-dark-800/50'
                  } backdrop-blur-sm hover:border-primary-500/80`}
                >
                  {event.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        FEATURED
                      </span>
                    </div>
                  )}

                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-${typeColor}-500/20 text-${typeColor}-400 border border-${typeColor}-500/30`}>
                        {event.type.toUpperCase()}
                      </span>
                    </div>
                    {daysUntil <= 7 && daysUntil > 0 && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-danger-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                          {daysUntil} DAYS LEFT
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-secondary-400 text-sm">
                        <Calendar className="w-4 h-4 mr-2 text-primary-400" />
                        {formatDate(event.date)}
                      </div>
                      <div className="flex items-center text-secondary-400 text-sm">
                        <Clock className="w-4 h-4 mr-2 text-success-400" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-secondary-400 text-sm">
                        <MapPin className="w-4 h-4 mr-2 text-accent-400" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-secondary-400 text-sm">
                        <Users className="w-4 h-4 mr-2 text-warning-400" />
                        {event.attendees}/{event.maxAttendees} registered
                      </div>
                    </div>

                    <p className="text-secondary-400 text-sm mb-6">{event.description}</p>

                    <button className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold py-3 rounded-lg hover:scale-105 transform transition-all duration-300 flex items-center justify-center space-x-2 group/btn">
                      <span>Register Now</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-accent-400 to-warning-400 bg-clip-text text-transparent">
                Past Events
              </span>
            </h2>
            <p className="text-xl text-secondary-400">Highlights from our recent successful events</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((event) => {
              const typeColor = getTypeColor(event.type);
              
              return (
                <div
                  key={event.id}
                  className="bg-dark-800/50 backdrop-blur-sm border border-primary-500/30 rounded-xl overflow-hidden hover:border-primary-500/60 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${typeColor}-500/20 text-${typeColor}-400 border border-${typeColor}-500/30`}>
                        {event.type.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                    <p className="text-primary-400 text-sm mb-2">{formatDate(event.date)}</p>
                    <p className="text-secondary-400 text-sm mb-3">{event.description}</p>
                    <div className="flex items-center text-secondary-400 text-sm">
                      <Users className="w-4 h-4 mr-2 text-success-400" />
                      {event.attendees} attendees
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;