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
      name: 'Lt Col Abu Sayed',
      position: 'Principal',
      image: 'data:image/jpeg;base64,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',
      bio: 'Leading the college with vision and dedication to educational excellence.',
    },
    {
      name: 'Fayaz Ahmed',
      position: 'Vice-Principal',
      image: 'noimg',
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
