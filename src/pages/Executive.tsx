import React, { useState } from 'react';
import { Mail, Linkedin, Github, User, Crown, Shield, Users } from 'lucide-react';

const Executive = () => {
  const [selectedYear, setSelectedYear] = useState('2024-2025');

  const years = [
    '2024-2025',
    '2023-2024',
    '2022-2023',
    '2021-2022',
    '2020-2021',
    '2019-2020',
  ];

  const adminPanel = [
    {
      name: 'Prof. Dr. Md. Abdul Karim',
      position: 'Principal',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Leading the college with vision and dedication to educational excellence.',
    },
    {
      name: 'Prof. Rashida Begum',
      position: 'Vice-Principal',
      image: 'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Supporting academic programs and student development initiatives.',
    },
    {
      name: 'Mr. Shafiullah Khan',
      position: 'Moderator',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Faculty advisor providing guidance and mentorship to the IT Club.',
    },
  ];

  const coModerators = [
    {
      name: 'Ms. Fatema Rahman',
      position: 'Co-Moderator',
      department: 'Computer Science',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Mr. Karim Ahmed',
      position: 'Co-Moderator',
      department: 'Mathematics',
      image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Ms. Nasreen Akter',
      position: 'Co-Moderator',
      department: 'Physics',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Mr. Rafiqul Islam',
      position: 'Co-Moderator',
      department: 'English',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Ms. Salma Khatun',
      position: 'Co-Moderator',
      department: 'Chemistry',
      image: 'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Mr. Habibur Rahman',
      position: 'Co-Moderator',
      department: 'Biology',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const executiveData = {
    '2024-2025': [
      {
        name: 'Md. Aminul Islam',
        position: 'President',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
        bio: 'Leading the club with passion for technology and innovation. Computer Science student with expertise in web development.',
        email: 'president@bnmpcitclub.org',
        linkedin: 'aminul-islam',
        github: 'aminul-islam',
      },
      {
        name: 'Fatema Khatun',
        position: 'Vice President',
        image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
        bio: 'Passionate about AI and machine learning. Currently pursuing advanced studies in data science.',
        email: 'vp@bnmpcitclub.org',
        linkedin: 'fatema-khatun',
        github: 'fatema-khatun',
      },
      {
        name: 'Rahul Ahmed',
        position: 'General Secretary',
        image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400',
        bio: 'Organizes events and manages club activities. Expert in project management.',
        email: 'secretary@bnmpcitclub.org',
        linkedin: 'rahul-ahmed',
        github: 'rahul-ahmed',
      },
      {
        name: 'Nazrul Islam',
        position: 'Treasurer',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
        bio: 'Manages financial activities and budgets. Skilled in financial analysis.',
        email: 'treasurer@bnmpcitclub.org',
        linkedin: 'nazrul-islam',
        github: 'nazrul-islam',
      },
      {
        name: 'Rashida Begum',
        position: 'Secretary of Graphics',
        image: 'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=400',
        bio: 'Creative designer handling all visual communications and branding.',
        email: 'graphics@bnmpcitclub.org',
        linkedin: 'rashida-begum',
        github: 'rashida-begum',
      },
      {
        name: 'Karim Rahman',
        position: 'Organizing Secretary',
        image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400',
        bio: 'Coordinates events and manages logistics for all club activities.',
        email: 'organizing@bnmpcitclub.org',
        linkedin: 'karim-rahman',
        github: 'karim-rahman',
      },
    ],
    '2023-2024': [
      {
        name: 'Md. Rafiq Ahmed',
        position: 'President',
        image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
        bio: 'Former president who established many club traditions.',
        email: 'rafiq@bnmpcitclub.org',
        linkedin: 'rafiq-ahmed',
        github: 'rafiq-ahmed',
      },
      // Add more members for previous years...
    ],
    // Add data for other years...
  };

  const currentExecutives = executiveData[selectedYear as keyof typeof executiveData] || [];

  return (
    <div className="pt-24 pb-12">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Executive Committee
            </span>
          </h1>
          <p className="text-xl text-secondary-400 max-w-3xl mx-auto animate-fade-in">
            Meet the dedicated leaders driving innovation and excellence in our IT club
          </p>
        </div>
      </section>

      {/* Admin Panel */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-warning-400 to-danger-400 bg-clip-text text-transparent">
                Administrative Panel
              </span>
            </h2>
            <p className="text-xl text-secondary-400">College administration supporting our IT initiatives</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {adminPanel.map((admin, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-warning-500/10 to-danger-500/10 backdrop-blur-sm border border-warning-500/30 rounded-xl p-8 hover:border-warning-500/60 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="relative mb-6">
                  <img
                    src={admin.image}
                    alt={admin.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-warning-500/30"
                  />
                  <div className="absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-2">
                    <Crown className="w-6 h-6 text-warning-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{admin.name}</h3>
                <p className="text-warning-400 font-medium mb-4">{admin.position}</p>
                <p className="text-secondary-400 text-sm">{admin.bio}</p>
              </div>
            ))}
          </div>

          {/* Co-Moderators */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Co-Moderators</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coModerators.map((coMod, index) => (
              <div
                key={index}
                className="bg-dark-800/50 backdrop-blur-sm border border-primary-500/30 rounded-xl p-6 hover:border-primary-500/60 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="relative mb-4">
                  <img
                    src={coMod.image}
                    alt={coMod.name}
                    className="w-16 h-16 rounded-full mx-auto object-cover border-2 border-primary-500/30"
                  />
                  <div className="absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-1">
                    <Shield className="w-4 h-4 text-primary-400" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-1">{coMod.name}</h4>
                <p className="text-primary-400 text-sm mb-1">{coMod.position}</p>
                <p className="text-secondary-400 text-xs">{coMod.department}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Panel Members */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Panel Members
              </span>
            </h2>
            <p className="text-xl text-secondary-400">Student leaders by academic year</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Year Selector */}
            <div className="lg:w-1/4">
              <div className="bg-dark-800/50 backdrop-blur-sm border border-primary-500/30 rounded-xl p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-white mb-4">Academic Years</h3>
                <div className="space-y-2">
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                        selectedYear === year
                          ? 'bg-primary-500 text-white'
                          : 'text-secondary-400 hover:text-primary-400 hover:bg-primary-500/10'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Executive Members */}
            <div className="lg:w-3/4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentExecutives.map((member, index) => (
                  <div
                    key={index}
                    className="bg-dark-800/50 backdrop-blur-sm border border-primary-500/30 rounded-xl overflow-hidden hover:border-primary-500/60 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="p-6 text-center">
                      <div className="relative mb-4">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary-500/30"
                        />
                        <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-gradient-to-br from-primary-500/20 to-accent-500/20"></div>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                      <p className="text-primary-400 font-medium mb-4">{member.position}</p>
                      <p className="text-secondary-400 text-sm mb-6">{member.bio}</p>
                      
                      {/* Social Links */}
                      <div className="flex justify-center space-x-4">
                        <a
                          href={`mailto:${member.email}`}
                          className="p-2 bg-primary-500/20 rounded-lg hover:bg-primary-500/40 transition-colors duration-300"
                        >
                          <Mail className="w-4 h-4 text-primary-400" />
                        </a>
                        <a
                          href={`https://linkedin.com/in/${member.linkedin}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-primary-500/20 rounded-lg hover:bg-primary-500/40 transition-colors duration-300"
                        >
                          <Linkedin className="w-4 h-4 text-primary-400" />
                        </a>
                        <a
                          href={`https://github.com/${member.github}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-primary-500/20 rounded-lg hover:bg-primary-500/40 transition-colors duration-300"
                        >
                          <Github className="w-4 h-4 text-primary-400" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {currentExecutives.length === 0 && (
                <div className="text-center py-12">
                  <Users className="w-16 h-16 text-secondary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-secondary-400 mb-2">No data available</h3>
                  <p className="text-secondary-500">Executive committee information for {selectedYear} will be updated soon.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Executive;