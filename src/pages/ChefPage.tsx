import React, { useState, useEffect } from 'react';
import { Play, Award, Users, Clock, Star, ChefHat, Utensils, Trophy, BookOpen } from 'lucide-react';

const ChefPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const achievements = [
    { year: '2024', award: 'Michelin 3-Star', organization: 'Michelin Guide' },
    { year: '2024', award: 'World\'s Best Chef', organization: 'World\'s 50 Best' },
    { year: '2023', award: 'James Beard Outstanding Chef', organization: 'James Beard Foundation' },
    { year: '2023', award: 'Quantum Gastronomy Pioneer', organization: 'Culinary Institute of the Future' },
  ];

  const techniques = [
    {
      name: 'Molecular Deconstruction',
      description: 'Breaking down ingredients to their atomic level and reconstructing them',
      mastery: 98,
    },
    {
      name: 'Temporal Cooking',
      description: 'Manipulating time to age ingredients in controlled quantum fields',
      mastery: 95,
    },
    {
      name: 'Neural Flavor Mapping',
      description: 'Creating dishes that adapt to individual taste preferences in real-time',
      mastery: 92,
    },
    {
      name: 'Holographic Plating',
      description: 'Presenting dishes with edible holographic elements',
      mastery: 89,
    },
  ];

  const menuSections = [
    {
      id: 'profile',
      title: 'Chef Profile',
      icon: ChefHat,
    },
    {
      id: 'philosophy',
      title: 'Culinary Philosophy',
      icon: BookOpen,
    },
    {
      id: 'techniques',
      title: 'Advanced Techniques',
      icon: Utensils,
    },
    {
      id: 'achievements',
      title: 'Achievements',
      icon: Trophy,
    },
  ];

  return (
    <div className="pt-24 pb-16 relative">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text font-['Playfair_Display']">
            Master Chef Quantum
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneer of Molecular Gastronomy 3.0 and Architect of Tomorrow's Flavors
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {menuSections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 liquid-button ${
                  activeSection === section.id
                    ? 'bg-gold-500 text-black'
                    : 'glass text-gray-300 hover:text-gold-500'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{section.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Profile Section */}
        {activeSection === 'profile' && (
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="glass p-8 rounded-2xl">
                <div className="aspect-[4/5] bg-gradient-to-br from-gold-500/20 to-blue-500/20 rounded-xl mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <ChefHat className="w-24 h-24 text-gold-500 mx-auto mb-4" />
                    <p className="text-gray-400">Master Chef Portrait</p>
                  </div>
                </div>
                <div className="text-center">
                  <button className="w-full bg-gradient-to-r from-gold-500 to-blue-400 text-black py-3 rounded-lg font-semibold hover:from-gold-400 hover:to-blue-300 transition-all duration-300 flex items-center justify-center space-x-2">
                    <Play className="w-5 h-5" />
                    <span>Watch Chef's Journey</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-gold-500 mb-4">About the Master</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Chef Quantum revolutionized the culinary world by becoming the first chef to successfully 
                  integrate quantum physics with molecular gastronomy. With over 20 years of experience and 
                  a PhD in Quantum Culinary Sciences, they have redefined what it means to create food.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Their groundbreaking work in temporal cooking and neural flavor mapping has earned them 
                  recognition as the most innovative chef of the 21st century.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-gold-500 mb-2">20+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="glass p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-gold-500 mb-2">3★</div>
                  <div className="text-sm text-gray-400">Michelin Stars</div>
                </div>
                <div className="glass p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-gold-500 mb-2">50+</div>
                  <div className="text-sm text-gray-400">Global Awards</div>
                </div>
                <div className="glass p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-gold-500 mb-2">1st</div>
                  <div className="text-sm text-gray-400">Quantum Chef</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Philosophy Section */}
        {activeSection === 'philosophy' && (
          <div className="max-w-4xl mx-auto">
            <div className="glass p-8 rounded-2xl mb-8">
              <h3 className="text-3xl font-bold text-gold-500 mb-6 text-center">Culinary Philosophy</h3>
              <div className="space-y-6">
                <blockquote className="text-2xl font-light text-center italic text-gray-300 border-l-4 border-gold-500 pl-6">
                  "Food is not just sustenance—it's a journey through time, space, and consciousness. 
                  Every dish should tell a story that exists beyond the physical realm."
                </blockquote>
                
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-gold-500 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-black" />
                    </div>
                    <h4 className="text-xl font-semibold text-gold-500 mb-2">Innovation</h4>
                    <p className="text-gray-300 text-sm">
                      Pushing boundaries with quantum-enhanced cooking techniques
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-gold-500 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-black" />
                    </div>
                    <h4 className="text-xl font-semibold text-gold-500 mb-2">Connection</h4>
                    <p className="text-gray-300 text-sm">
                      Creating dishes that connect minds and souls through taste
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-gold-500 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-black" />
                    </div>
                    <h4 className="text-xl font-semibold text-gold-500 mb-2">Timelessness</h4>
                    <p className="text-gray-300 text-sm">
                      Crafting experiences that transcend temporal boundaries
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Techniques Section */}
        {activeSection === 'techniques' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gold-500 mb-4">Mastered Techniques</h3>
              <p className="text-gray-300">Revolutionary cooking methods that define the future of gastronomy</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {techniques.map((technique, index) => (
                <div key={index} className="glass p-6 rounded-2xl hover-lift">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-semibold text-gold-500">{technique.name}</h4>
                    <span className="text-sm text-gray-400">{technique.mastery}% Mastery</span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{technique.description}</p>
                  
                  <div className="relative">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-gold-500 to-blue-400 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${technique.mastery}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Achievements Section */}
        {activeSection === 'achievements' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gold-500 mb-4">Awards & Recognition</h3>
              <p className="text-gray-300">A legacy of culinary excellence and innovation</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="glass p-6 rounded-2xl hover-lift">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-gold-500 to-blue-400 rounded-full flex items-center justify-center">
                      <Trophy className="w-8 h-8 text-black" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gold-500">{achievement.award}</h4>
                      <p className="text-gray-400">{achievement.organization}</p>
                      <p className="text-sm text-gray-500">{achievement.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="px-8 py-4 bg-gradient-to-r from-gold-500 to-blue-400 text-black font-semibold rounded-lg hover:from-gold-400 hover:to-blue-300 transition-all duration-300 hover-lift">
                View Complete Portfolio
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChefPage;