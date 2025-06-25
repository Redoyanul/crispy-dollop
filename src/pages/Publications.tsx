import React, { useState } from 'react';
import { BookOpen, Download, ExternalLink, Calendar, User, Tag, Search } from 'lucide-react';

const Publications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const publications = [
    {
      id: 1,
      title: 'Artificial Intelligence in Education: A Comprehensive Study',
      authors: ['Md. Aminul Islam', 'Fatema Khatun'],
      date: '2024-12-01',
      category: 'research',
      type: 'Research Paper',
      abstract: 'This paper explores the integration of AI technologies in educational systems and their impact on learning outcomes.',
      tags: ['AI', 'Education', 'Machine Learning', 'Technology'],
      downloadLink: '#',
      externalLink: 'https://example.com/paper1',
      downloads: 245,
      featured: true,
    },
    {
      id: 2,
      title: 'Blockchain Technology for Secure Digital Transactions',
      authors: ['Rahul Ahmed', 'Nazrul Islam'],
      date: '2024-11-15',
      category: 'technical',
      type: 'Technical Article',
      abstract: 'An in-depth analysis of blockchain implementation for enhancing security in digital payment systems.',
      tags: ['Blockchain', 'Security', 'Cryptocurrency', 'Digital Payments'],
      downloadLink: '#',
      externalLink: 'https://example.com/paper2',
      downloads: 189,
      featured: false,
    },
    {
      id: 3,
      title: 'Web Development Best Practices for Modern Applications',
      authors: ['Karim Rahman', 'Rashida Begum'],
      date: '2024-10-20',
      category: 'tutorial',
      type: 'Tutorial Guide',
      abstract: 'A comprehensive guide covering modern web development practices, frameworks, and optimization techniques.',
      tags: ['Web Development', 'React', 'Node.js', 'Best Practices'],
      downloadLink: '#',
      externalLink: 'https://example.com/paper3',
      downloads: 312,
      featured: true,
    },
    {
      id: 4,
      title: 'Mobile App Development Trends in 2024',
      authors: ['Fatema Rahman'],
      date: '2024-09-10',
      category: 'analysis',
      type: 'Market Analysis',
      abstract: 'Analysis of current trends in mobile application development and future predictions for the industry.',
      tags: ['Mobile Development', 'Flutter', 'React Native', 'Trends'],
      downloadLink: '#',
      externalLink: 'https://example.com/paper4',
      downloads: 156,
      featured: false,
    },
    {
      id: 5,
      title: 'Cybersecurity Challenges in IoT Devices',
      authors: ['Shafiullah Khan', 'Habibur Rahman'],
      date: '2024-08-25',
      category: 'research',
      type: 'Research Paper',
      abstract: 'Examining security vulnerabilities in Internet of Things devices and proposing mitigation strategies.',
      tags: ['Cybersecurity', 'IoT', 'Network Security', 'Privacy'],
      downloadLink: '#',
      externalLink: 'https://example.com/paper5',
      downloads: 203,
      featured: false,
    },
  ];

  const categories = [
    { key: 'all', label: 'All Publications' },
    { key: 'research', label: 'Research Papers' },
    { key: 'technical', label: 'Technical Articles' },
    { key: 'tutorial', label: 'Tutorial Guides' },
    { key: 'analysis', label: 'Market Analysis' },
  ];

  const filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         pub.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = filter === 'all' || pub.category === filter;
    return matchesSearch && matchesCategory;
  });

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
      case 'research': return 'primary';
      case 'technical': return 'success';
      case 'tutorial': return 'accent';
      case 'analysis': return 'warning';
      default: return 'primary';
    }
  };

  return (
    <div className="pt-24 pb-12">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">
              Publications
            </span>
          </h1>
          <p className="text-xl text-secondary-400 max-w-3xl mx-auto animate-fade-in">
            Research papers, technical articles, and educational content created by our club members
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
                  placeholder="Search publications, authors, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-dark-900/50 border border-primary-500/30 rounded-lg text-white placeholder-secondary-400 focus:border-primary-500 focus:outline-none transition-colors duration-300"
                />
              </div>

              {/* Filter */}
              <div className="lg:min-w-fit">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="w-full bg-dark-900/50 border border-primary-500/30 rounded-lg px-4 py-3 text-white focus:border-primary-500 focus:outline-none transition-colors duration-300"
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

      {/* Featured Publications */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-accent-400 to-success-400 bg-clip-text text-transparent">
                Featured Publications
              </span>
            </h2>
            <p className="text-xl text-secondary-400">Highlighted research and technical contributions</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {filteredPublications.filter(pub => pub.featured).map((publication) => {
              const categoryColor = getCategoryColor(publication.category);
              
              return (
                <div
                  key={publication.id}
                  className="bg-gradient-to-br from-accent-500/10 to-primary-500/10 backdrop-blur-sm border border-accent-500/60 rounded-xl p-8 hover:border-accent-500/80 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-${categoryColor}-500/20 text-${categoryColor}-400 border border-${categoryColor}-500/30`}>
                      {publication.type}
                    </span>
                    <span className="bg-gradient-to-r from-accent-500 to-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      FEATURED
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold text-white mb-4 hover:text-accent-400 transition-colors duration-300">
                    {publication.title}
                  </h3>
                  
                  <div className="flex items-center text-secondary-400 text-sm mb-4">
                    <User className="w-4 h-4 mr-2 text-primary-400" />
                    {publication.authors.join(', ')}
                  </div>

                  <div className="flex items-center text-secondary-400 text-sm mb-4">
                    <Calendar className="w-4 h-4 mr-2 text-success-400" />
                    {formatDate(publication.date)}
                  </div>

                  <p className="text-secondary-400 mb-6 leading-relaxed">{publication.abstract}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {publication.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary-500/20 text-primary-400 text-xs rounded-full border border-primary-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-secondary-400 mb-6">
                    <div className="flex items-center">
                      <Download className="w-4 h-4 mr-1 text-success-400" />
                      {publication.downloads} downloads
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button className="flex-1 bg-accent-500/20 hover:bg-accent-500/40 text-accent-400 py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center">
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                    <button className="px-4 py-3 bg-primary-500/20 hover:bg-primary-500/40 text-primary-400 rounded-lg transition-all duration-300 border border-primary-500/30">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Publications */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary-400 to-warning-400 bg-clip-text text-transparent">
                All Publications
              </span>
            </h2>
            <p className="text-xl text-secondary-400">
              {filteredPublications.length} publication{filteredPublications.length !== 1 ? 's' : ''} found
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPublications.map((publication) => {
              const categoryColor = getCategoryColor(publication.category);
              
              return (
                <div
                  key={publication.id}
                  className="bg-dark-800/50 backdrop-blur-sm border border-primary-500/30 rounded-xl p-6 hover:border-primary-500/60 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${categoryColor}-500/20 text-${categoryColor}-400 border border-${categoryColor}-500/30`}>
                      {publication.type}
                    </span>
                    <div className="flex items-center text-secondary-400 text-sm">
                      <Download className="w-4 h-4 mr-1 text-success-400" />
                      {publication.downloads}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300 line-clamp-2">
                    {publication.title}
                  </h3>
                  
                  <div className="flex items-center text-secondary-400 text-sm mb-2">
                    <User className="w-3 h-3 mr-1" />
                    {publication.authors[0]}{publication.authors.length > 1 && ` +${publication.authors.length - 1}`}
                  </div>

                  <div className="flex items-center text-secondary-400 text-sm mb-4">
                    <Calendar className="w-3 h-3 mr-1" />
                    {formatDate(publication.date)}
                  </div>

                  <p className="text-secondary-400 text-sm mb-4 line-clamp-3">{publication.abstract}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {publication.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary-500/20 text-primary-400 text-xs rounded-full border border-primary-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                    {publication.tags.length > 3 && (
                      <span className="px-2 py-1 bg-secondary-600 text-secondary-300 text-xs rounded-full">
                        +{publication.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex-1 bg-primary-500/20 hover:bg-primary-500/40 text-primary-400 py-2 px-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center">
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                    <button className="px-3 py-2 bg-accent-500/20 hover:bg-accent-500/40 text-accent-400 rounded-lg transition-all duration-300 border border-accent-500/30">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredPublications.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-secondary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-secondary-400 mb-2">No publications found</h3>
              <p className="text-secondary-500">Try adjusting your search terms or filter settings</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Publications;
