import React, { useState } from 'react';
import { BookOpen, Download, ExternalLink, Search, Filter, Star, Clock } from 'lucide-react';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const resources = [
    {
      id: 1,
      title: 'Complete Web Development Guide',
      description: 'Comprehensive guide covering HTML, CSS, JavaScript, React, and Node.js with practical examples.',
      category: 'web-development',
      type: 'guide',
      format: 'PDF',
      size: '2.5 MB',
      downloads: 1250,
      rating: 4.8,
      date: '2024-12-01',
      downloadLink: '#',
      tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
      featured: true,
    },
    {
      id: 2,
      title: 'Python Programming Fundamentals',
      description: 'Learn Python from basics to advanced topics including data structures, algorithms, and OOP.',
      category: 'programming',
      type: 'tutorial',
      format: 'Video Series',
      size: '1.2 GB',
      downloads: 980,
      rating: 4.7,
      date: '2024-11-15',
      downloadLink: '#',
      tags: ['Python', 'Programming', 'Data Structures', 'Algorithms'],
      featured: false,
    },
    {
      id: 3,
      title: 'Machine Learning Cheat Sheet',
      description: 'Quick reference guide for machine learning algorithms, formulas, and implementation tips.',
      category: 'ai-ml',
      type: 'cheat-sheet',
      format: 'PDF',
      size: '800 KB',
      downloads: 2100,
      rating: 4.9,
      date: '2024-11-30',
      downloadLink: '#',
      tags: ['Machine Learning', 'AI', 'Algorithms', 'Data Science'],
      featured: true,
    },
    {
      id: 4,
      title: 'Database Design Best Practices',
      description: 'Learn how to design efficient and scalable databases with proper normalization and indexing.',
      category: 'database',
      type: 'guide',
      format: 'PDF',
      size: '1.8 MB',
      downloads: 750,
      rating: 4.6,
      date: '2024-10-20',
      downloadLink: '#',
      tags: ['Database', 'SQL', 'Design', 'Optimization'],
      featured: false,
    },
    {
      id: 5,
      title: 'Mobile App Development with Flutter',
      description: 'Step-by-step tutorial for building cross-platform mobile applications using Flutter and Dart.',
      category: 'mobile',
      type: 'tutorial',
      format: 'Video + Code',
      size: '3.2 GB',
      downloads: 650,
      rating: 4.5,
      date: '2024-09-10',
      downloadLink: '#',
      tags: ['Flutter', 'Dart', 'Mobile', 'Cross-platform'],
      featured: false,
    },
    {
      id: 6,
      title: 'Cybersecurity Fundamentals',
      description: 'Essential cybersecurity concepts, tools, and practices for protecting digital assets.',
      category: 'cybersecurity',
      type: 'course',
      format: 'Mixed',
      size: '2.8 GB',
      downloads: 890,
      rating: 4.7,
      date: '2024-08-25',
      downloadLink: '#',
      tags: ['Security', 'Ethical Hacking', 'Network Security', 'Encryption'],
      featured: true,
    },
  ];

  const categories = [
    { key: 'all', label: 'All Resources' },
    { key: 'web-development', label: 'Web Development' },
    { key: 'programming', label: 'Programming' },
    { key: 'ai-ml', label: 'AI & ML' },
    { key: 'database', label: 'Database' },
    { key: 'mobile', label: 'Mobile Development' },
    { key: 'cybersecurity', label: 'Cybersecurity' },
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = filterCategory === 'all' || resource.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'guide': return '📚';
      case 'tutorial': return '🎥';
      case 'cheat-sheet': return '📋';
      case 'course': return '🎓';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'guide': return 'primary';
      case 'tutorial': return 'success';
      case 'cheat-sheet': return 'accent';
      case 'course': return 'warning';
      default: return 'primary';
    }
  };

  return (
    <div className="pt-24 pb-12">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-primary-400 to-success-400 bg-clip-text text-transparent">
              Learning Resources
            </span>
          </h1>
          <p className="text-xl text-secondary-400 max-w-3xl mx-auto animate-fade-in">
            Access our curated collection of tutorials, guides, and learning materials to enhance your tech skills
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-dark-800/50 backdrop-blur-sm border border-primary-500/30 rounded-xl p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-secondary-400" />
                <input
                  type="text"
                  placeholder="Search resources, topics, or technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-dark-900/50 border border-primary-500/30 rounded-lg text-white placeholder-secondary-400 focus:border-primary-500 focus:outline-none transition-colors duration-300"
                />
              </div>

              {/* Filter */}
              <div className="flex items-center space-x-4 lg:min-w-fit">
                <Filter className="w-5 h-5 text-primary-400" />
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="bg-dark-900/50 border border-primary-500/30 rounded-lg px-4 py-3 text-white focus:border-primary-500 focus:outline-none transition-colors duration-300"
                >
                  {categories.map((category) => (
                    <option key={category.key} value={category.key} className="bg-dark-900">
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary-400 to-success-400 bg-clip-text text-transparent">
                Featured Resources
              </span>
            </h2>
            <p className="text-xl text-secondary-400">Most popular and highly-rated learning materials</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {filteredResources.filter(resource => resource.featured).map((resource) => {
              const typeColor = getTypeColor(resource.type);
              
              return (
                <div
                  key={resource.id}
                  className="group bg-gradient-to-br from-primary-500/10 to-success-500/10 backdrop-blur-sm border border-primary-500/60 rounded-xl p-6 hover:border-primary-500/80 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{getTypeIcon(resource.type)}</span>
                      <div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium bg-${typeColor}-500/20 text-${typeColor}-400 border border-${typeColor}-500/30`}>
                          {resource.type.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <span className="bg-gradient-to-r from-primary-500 to-success-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      FEATURED
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                    {resource.title}
                  </h3>
                  
                  <p className="text-secondary-400 mb-4">{resource.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary-500/20 text-primary-400 text-xs rounded-full border border-primary-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-secondary-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Download className="w-4 h-4 mr-1 text-success-400" />
                        {resource.downloads.toLocaleString()}
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-warning-400" />
                        {resource.rating}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1 text-accent-400" />
                        {formatDate(resource.date)}
                      </div>
                    </div>
                    <div className="text-primary-400 font-medium">
                      {resource.format} • {resource.size}
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-primary-500 to-success-500 text-white font-semibold py-3 rounded-lg hover:scale-105 transform transition-all duration-300 flex items-center justify-center space-x-2 group/btn">
                    <Download className="w-4 h-4 group-hover/btn:animate-bounce" />
                    <span>Download Resource</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-success-400 to-accent-400 bg-clip-text text-transparent">
                All Resources
              </span>
            </h2>
            <p className="text-xl text-secondary-400">
              {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''} found
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => {
              const typeColor = getTypeColor(resource.type);
              
              return (
                <div
                  key={resource.id}
                  className="bg-dark-800/50 backdrop-blur-sm border border-primary-500/30 rounded-xl p-6 hover:border-primary-500/60 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl">{getTypeIcon(resource.type)}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${typeColor}-500/20 text-${typeColor}-400 border border-${typeColor}-500/30`}>
                        {resource.type}
                      </span>
                    </div>
                    <div className="flex items-center text-warning-400 text-sm">
                      <Star className="w-4 h-4 mr-1" />
                      {resource.rating}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300 line-clamp-2">
                    {resource.title}
                  </h3>
                  
                  <p className="text-secondary-400 text-sm mb-4 line-clamp-3">{resource.description}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {resource.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary-500/20 text-primary-400 text-xs rounded-full border border-primary-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                    {resource.tags.length > 3 && (
                      <span className="px-2 py-1 bg-secondary-600 text-secondary-300 text-xs rounded-full">
                        +{resource.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs text-secondary-400 mb-4">
                    <div className="flex items-center">
                      <Download className="w-3 h-3 mr-1" />
                      {resource.downloads.toLocaleString()}
                    </div>
                    <div>{resource.format} • {resource.size}</div>
                    <div>{formatDate(resource.date)}</div>
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex-1 bg-primary-500/20 hover:bg-primary-500/40 text-primary-400 py-2 px-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-1 text-sm border border-primary-500/30">
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                    <button className="px-3 py-2 bg-success-500/20 hover:bg-success-500/40 text-success-400 rounded-lg transition-all duration-300 border border-success-500/30">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-secondary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-secondary-400 mb-2">No resources found</h3>
              <p className="text-secondary-500">Try adjusting your search terms or filter settings</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Resources;