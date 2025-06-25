import React, { useState } from 'react';
import { Calendar, Users, Award, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [filter, setFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      title: 'Tech Innovation Summit 2024',
      date: '2024-12-01',
      category: 'event',
      type: 'event',
      participants: 180,
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Annual tech summit featuring industry leaders and innovative presentations.',
    },
    {
      id: 2,
      title: 'Programming Contest Winners',
      date: '2024-11-15',
      category: 'achievement',
      type: 'award',
      participants: 3,
      image: 'https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Our talented students securing top positions in the inter-college programming contest.',
    },
    {
      id: 3,
      title: 'AI Workshop Session',
      date: '2024-11-08',
      category: 'workshop',
      type: 'event',
      participants: 45,
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Hands-on workshop on artificial intelligence and machine learning applications.',
    },
    {
      id: 4,
      title: 'Executive Committee 2024',
      date: '2024-10-20',
      category: 'team',
      type: 'group',
      participants: 12,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Our dedicated executive committee members leading the club to new heights.',
    },
    {
      id: 5,
      title: 'Mobile Development Workshop',
      date: '2024-10-12',
      category: 'workshop',
      type: 'event',
      participants: 35,
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Learning Flutter and React Native for cross-platform mobile development.',
    },
    {
      id: 6,
      title: 'Hackathon Champions',
      date: '2024-09-30',
      category: 'achievement',
      type: 'award',
      participants: 15,
      image: 'https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Winning teams from our annual 24-hour hackathon showcasing innovative solutions.',
    },
    {
      id: 7,
      title: 'Cybersecurity Seminar',
      date: '2024-09-15',
      category: 'seminar',
      type: 'event',
      participants: 60,
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Learning ethical hacking and cybersecurity best practices.',
    },
    {
      id: 8,
      title: 'Tech Innovation Fair',
      date: '2024-08-25',
      category: 'exhibition',
      type: 'event',
      participants: 120,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Annual tech fair showcasing student projects and innovations.',
    },
  ];

  const filterOptions = [
    { key: 'all', label: 'All' },
    { key: 'event', label: 'Events' },
    { key: 'workshop', label: 'Workshops' },
    { key: 'achievement', label: 'Achievements' },
    { key: 'seminar', label: 'Seminars' },
    { key: 'team', label: 'Team' },
    { key: 'exhibition', label: 'Exhibitions' },
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'event': return 'primary';
      case 'workshop': return 'success';
      case 'achievement': return 'warning';
      case 'seminar': return 'accent';
      case 'team': return 'danger';
      case 'exhibition': return 'secondary';
      default: return 'primary';
    }
  };

  const openLightbox = (item: any) => {
    setSelectedImage(item);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
    } else {
      newIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredItems[newIndex]);
  };

  return (
    <div className="pt-24 pb-12">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-accent-400 to-warning-400 bg-clip-text text-transparent">
              Gallery
            </span>
          </h1>
          <p className="text-xl text-secondary-400 max-w-3xl mx-auto animate-fade-in">
            Capturing moments of learning, achievement, and community in our IT club journey
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-2 bg-dark-800/50 backdrop-blur-sm border border-primary-500/30 rounded-xl p-4">
              {filterOptions.map((option) => (
                <button
                  key={option.key}
                  onClick={() => setFilter(option.key)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    filter === option.key
                      ? 'bg-accent-500 text-white'
                      : 'bg-transparent text-secondary-400 hover:text-accent-400 hover:bg-accent-500/10'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => {
              const categoryColor = getCategoryColor(item.category);
              
              return (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-xl bg-dark-800/50 backdrop-blur-sm border border-primary-500/30 hover:border-primary-500/60 transition-all duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => openLightbox(item)}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent group-hover:from-dark-900/60 transition-all duration-300"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${categoryColor}-500/20 text-${categoryColor}-400 border border-${categoryColor}-500/30 backdrop-blur-sm`}>
                        {item.category.toUpperCase()}
                      </span>
                    </div>

                    {/* Type Icon */}
                    <div className="absolute top-3 right-3">
                      {item.type === 'award' && <Award className="w-5 h-5 text-warning-400" />}
                      {item.type === 'event' && <Calendar className="w-5 h-5 text-primary-400" />}
                      {item.type === 'group' && <Users className="w-5 h-5 text-success-400" />}
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-semibold text-sm mb-1 line-clamp-2">
                        {item.title}
                      </h3>
                      <div className="flex items-center justify-between text-xs text-secondary-300">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {formatDate(item.date)}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-3 h-3 mr-1" />
                          {item.participants}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-accent-400" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-400 mb-2">No images found</h3>
              <p className="text-secondary-500">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full w-full">
            {/* Navigation */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-dark-800/80 hover:bg-primary-500/80 text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-dark-800/80 hover:bg-primary-500/80 text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-dark-800/80 hover:bg-danger-500/80 text-white p-2 rounded-full transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="bg-dark-800/50 backdrop-blur-sm border border-primary-500/30 rounded-xl overflow-hidden">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full max-h-96 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium bg-${getCategoryColor(selectedImage.category)}-500/20 text-${getCategoryColor(selectedImage.category)}-400 border border-${getCategoryColor(selectedImage.category)}-500/30`}>
                    {selectedImage.category.toUpperCase()}
                  </span>
                  <div className="flex items-center space-x-4 text-sm text-secondary-400">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(selectedImage.date)}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {selectedImage.participants} participants
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{selectedImage.title}</h3>
                <p className="text-secondary-400">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;