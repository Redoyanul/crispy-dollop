import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare, Facebook, Instagram, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    membershipInterest: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: target.checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      membershipInterest: false,
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: ['info@bnmpcitclub.org', 'president@bnmpcitclub.org'],
      color: 'primary',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+880 1234-567890', '+880 1987-654321'],
      color: 'success',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Birshreshtha Noor Mohammad Public College', 'Peelkhana, Dhaka-1205, Bangladesh'],
      color: 'accent',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 2:00 PM - 5:00 PM', 'Saturday: 10:00 AM - 2:00 PM'],
      color: 'warning',
    },
  ];

  const socialLinks = [
    { icon: Facebook, url: 'https://facebook.com/bnmpcitclub', color: 'blue-500' },
    { icon: Instagram, url: 'https://instagram.com/bnmpcitclub', color: 'pink-500' },
    { icon: Linkedin, url: 'https://linkedin.com/company/bnmpcitclub', color: 'blue-600' },
    { icon: Github, url: 'https://github.com/bnmpc-it-club', color: 'gray-400' },
  ];

  const faqs = [
    {
      question: 'How can I join BNMPC IT Club?',
      answer: 'Fill out the membership form below or visit our office during office hours. We welcome all students interested in technology.',
    },
    {
      question: 'What are the membership requirements?',
      answer: 'You must be a current student of BNMPC with a passion for technology. No prior programming experience is required.',
    },
    {
      question: 'Are there any membership fees?',
      answer: 'Yes, there is a nominal annual membership fee of 500 BDT to cover club activities and resources.',
    },
    {
      question: 'What activities does the club organize?',
      answer: 'We organize workshops, seminars, programming contests, hackathons, and tech talks throughout the year.',
    },
  ];

  return (
    <div className="pt-24 pb-12">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-xl text-secondary-400 max-w-3xl mx-auto animate-fade-in">
            Ready to join our tech community? Get in touch with us or visit our office at BNMPC
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const colorMap = {
                primary: 'from-primary-500 to-primary-600',
                success: 'from-success-500 to-success-600',
                accent: 'from-accent-500 to-accent-600',
                warning: 'from-warning-500 to-warning-600',
              };
              
              return (
                <div
                  key={index}
                  className="bg-dark-800/50 backdrop-blur-sm border border-primary-500/30 rounded-xl p-6 hover:border-primary-500/60 transition-all duration-300 hover:scale-105 text-center group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${colorMap[info.color as keyof typeof colorMap]} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-secondary-400 text-sm mb-1">{detail}</p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-dark-800/50 backdrop-blur-sm border border-primary-500/30 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  Send us a Message
                </span>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-300 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-secondary-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-dark-900/50 border border-primary-500/30 rounded-lg text-white placeholder-secondary-400 focus:border-primary-500 focus:outline-none transition-colors duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-300 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-secondary-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-dark-900/50 border border-primary-500/30 rounded-lg text-white placeholder-secondary-400 focus:border-primary-500 focus:outline-none transition-colors duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary-300 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-5 h-5 text-secondary-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-dark-900/50 border border-primary-500/30 rounded-lg text-white placeholder-secondary-400 focus:border-primary-500 focus:outline-none transition-colors duration-300"
                        placeholder="+880 1234-567890"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-secondary-300 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-900/50 border border-primary-500/30 rounded-lg text-white focus:border-primary-500 focus:outline-none transition-colors duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="membership">Membership Inquiry</option>
                      <option value="event">Event Information</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="general">General Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-300 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-secondary-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 bg-dark-900/50 border border-primary-500/30 rounded-lg text-white placeholder-secondary-400 focus:border-primary-500 focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="membershipInterest"
                    name="membershipInterest"
                    checked={formData.membershipInterest}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-primary-500 bg-dark-900 border-primary-500/30 rounded focus:ring-primary-500 focus:ring-2"
                  />
                  <label htmlFor="membershipInterest" className="ml-2 text-sm text-secondary-300">
                    I'm interested in becoming a club member
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold py-3 rounded-lg hover:scale-105 transform transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-dark-800/50 backdrop-blur-sm border border-primary-500/30 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Find Us</h3>
                <div className="bg-dark-900/50 rounded-lg h-64 flex items-center justify-center border border-primary-500/30">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary-400 mx-auto mb-4" />
                    <p className="text-secondary-400 mb-2">Birshreshtha Noor Mohammad Public College</p>
                    <p className="text-secondary-400">Peelkhana, Dhaka-1205, Bangladesh</p>
                    <p className="text-sm text-primary-400 mt-2">EIIN: 108161</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-dark-800/50 backdrop-blur-sm border border-primary-500/30 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-${social.color}/20 rounded-lg flex items-center justify-center hover:bg-${social.color}/40 transition-all duration-300 hover:scale-110 group`}
                      >
                        <Icon className={`w-6 h-6 text-${social.color} group-hover:scale-110 transition-transform duration-300`} />
                      </a>
                    );
                  })}
                </div>
                <p className="text-secondary-400 text-sm mt-4">
                  Stay updated with our latest events, workshops, and achievements by following us on social media.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-xl text-secondary-400">Quick answers to common questions</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-dark-800/50 backdrop-blur-sm border border-primary-500/30 rounded-xl p-6 hover:border-primary-500/60 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-secondary-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;