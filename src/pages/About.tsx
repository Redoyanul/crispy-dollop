import React from 'react';
import { MapPin, Users, Target, Award, Calendar, Globe, BookOpen, Lightbulb } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: '2019',
      title: 'Club Foundation',
      description: 'BNMPC IT Club was established with a vision to promote IT education among students.',
    },
    {
      year: '2020',
      title: 'First Workshop',
      description: 'Conducted our first programming workshop with over 30 participants during pandemic.',
    },
    {
      year: '2021',
      title: 'Digital Expansion',
      description: 'Launched online learning programs and virtual tech events.',
    },
    {
      year: '2022',
      title: 'Inter-College Competition',
      description: 'Organized the first inter-college programming competition in the district.',
    },
    {
      year: '2023',
      title: 'National Recognition',
      description: 'Received recognition from Bangladesh Computer Society for outstanding contributions.',
    },
    {
      year: '2024',
      title: 'Industry Partnership',
      description: 'Established partnerships with leading tech companies for student internships.',
    },
  ];

  const achievements = [
    { icon: Users, title: '200+ Active Members', description: 'Growing community of tech enthusiasts', color: 'primary' },
    { icon: Award, title: '10+ National Awards', description: 'Recognition for excellence in IT education', color: 'success' },
    { icon: Calendar, title: '50+ Events', description: 'Workshops, seminars, and competitions', color: 'accent' },
    { icon: Globe, title: 'Industry Connections', description: 'Partnerships with leading tech companies', color: 'warning' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To propagate the features of IT among students and create a platform where technology meets entrepreneurship.',
    },
    {
      icon: Lightbulb,
      title: 'Vision',
      description: 'To be the leading IT club in Bangladesh, producing skilled tech professionals and entrepreneurs.',
    },
    {
      icon: BookOpen,
      title: 'Values',
      description: 'Innovation, Excellence, Collaboration, and Continuous Learning drive everything we do.',
    },
  ];

  return (
    <div className="pt-24 pb-12">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              About BNMPC IT Club
            </span>
          </h1>
          <p className="text-xl text-secondary-400 max-w-3xl mx-auto animate-fade-in leading-relaxed">
            Empowering students through technology education and fostering innovation 
            at Birshreshtha Noor Mohammad Public College, Dhaka, Bangladesh.
          </p>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-dark-800/50 backdrop-blur-sm border border-primary-500/30 rounded-xl p-8 hover:border-primary-500/60 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-white">{value.title}</h2>
                  <p className="text-secondary-400 text-lg leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* College Information */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 backdrop-blur-sm border border-primary-500/30 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                    Birshreshtha Noor Mohammad Public College
                  </span>
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary-400" />
                    <span className="text-secondary-300">Peelkhana, Dhaka-1205, Bangladesh</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-success-400" />
                    <span className="text-secondary-300">EIIN: 108161</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-accent-400" />
                    <span className="text-secondary-300">Established: 1962</span>
                  </div>
                </div>
                <p className="text-secondary-400 mt-6 leading-relaxed">
                  Our college has been a beacon of education for over six decades, and the IT Club 
                  continues this tradition by equipping students with modern technological skills 
                  and entrepreneurial mindset.
                </p>
              </div>
              <div className="bg-dark-800/50 backdrop-blur-sm border border-primary-500/30 rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Club Motto</h3>
                <blockquote className="text-3xl font-bold text-center">
                  <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                    "Where Tech Meets Future Entrepreneurs"
                  </span>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-success-400 to-primary-400 bg-clip-text text-transparent">
                Our Achievements
              </span>
            </h2>
            <p className="text-xl text-secondary-400">Milestones that mark our journey of excellence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              const colorMap = {
                primary: 'from-primary-500 to-primary-600',
                success: 'from-success-500 to-success-600',
                accent: 'from-accent-500 to-accent-600',
                warning: 'from-warning-500 to-warning-600',
              };
              
              return (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="bg-dark-800/50 backdrop-blur-sm border border-primary-500/30 rounded-xl p-6 hover:border-primary-500/60 transition-all duration-300 hover:scale-105">
                    <div className={`w-16 h-16 bg-gradient-to-br ${colorMap[achievement.color as keyof typeof colorMap]} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-white">{achievement.title}</h3>
                    <p className="text-secondary-400 text-sm">{achievement.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-accent-400 to-warning-400 bg-clip-text text-transparent">
                Our Journey
              </span>
            </h2>
            <p className="text-xl text-secondary-400">Key milestones in our club's history</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500"></div>

            {timeline.map((item, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full border-4 border-dark-900"></div>
                
                {/* Content */}
                <div className="ml-16 bg-dark-800/50 backdrop-blur-sm border border-primary-500/30 rounded-xl p-6 hover:border-primary-500/60 transition-all duration-300 w-full hover:scale-105">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="text-2xl font-bold text-primary-400">{item.year}</span>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-secondary-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;