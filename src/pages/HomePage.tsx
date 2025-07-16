import React, { useEffect, useState } from 'react';
import { Play, Award, Star, ArrowDown, Sparkles, Utensils, Clock } from 'lucide-react';

const HomePage: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const floatingElements = [
    { icon: Utensils, delay: 0, size: 'w-12 h-12' },
    { icon: Star, delay: 1, size: 'w-8 h-8' },
    { icon: Sparkles, delay: 2, size: 'w-10 h-10' },
    { icon: Award, delay: 3, size: 'w-14 h-14' },
  ];

  return (
    <div className="relative">
      {/* Floating Particles Background */}
      <div className="particles">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
        {/* Dynamic Background */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(212, 175, 55, 0.1) 0%, transparent 50%)`,
          }}
        />
        
        {/* Floating Elements */}
        {floatingElements.map((element, index) => {
          const Icon = element.icon;
          return (
            <div
              key={index}
              className={`absolute ${element.size} text-gold-500/30 floating`}
              style={{
                top: `${20 + (index * 15)}%`,
                left: `${10 + (index * 20)}%`,
                animationDelay: `${element.delay}s`,
                transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`,
              }}
            >
              <Icon className="w-full h-full" />
            </div>
          );
        })}

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 glass rounded-full mb-6">
              <Star className="w-4 h-4 text-gold-500 mr-2" />
              <span className="text-sm text-gold-500">Michelin ⭐⭐⭐ | Forbes 5-Star</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-reveal">
              <span className="gradient-text font-['Playfair_Display']">
                A Taste of Tomorrow
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto text-reveal">
              Dine Beyond Imagination in the World's Most Advanced Culinary Experience
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="liquid-button glass px-8 py-4 rounded-lg hover:bg-gold-500/20 transition-all duration-300 flex items-center justify-center space-x-2 hover-lift">
              <Play className="w-5 h-5 text-gold-500" />
              <span className="text-lg font-medium">Experience Preview</span>
            </button>
            
            <button className="liquid-button bg-gold-500 text-black px-8 py-4 rounded-lg hover:bg-gold-400 transition-all duration-300 flex items-center justify-center space-x-2 hover-lift pulse-glow">
              <Clock className="w-5 h-5" />
              <span className="text-lg font-medium">Reserve Now</span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-gold-500" />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text font-['Playfair_Display']">
              The Future of Fine Dining
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience molecular gastronomy meets AI-curated flavors in our revolutionary dining space
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Curated Menus",
                description: "Personalized dishes crafted by our quantum AI system based on your genetic taste profile",
                icon: Sparkles,
              },
              {
                title: "Molecular Gastronomy 3.0",
                description: "Revolutionary cooking techniques that transform ingredients at the atomic level",
                icon: Award,
              },
              {
                title: "Holographic Ambiance",
                description: "Immersive dining environments that transport you to different worlds with each course",
                icon: Star,
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="glass p-8 rounded-2xl hover-lift group cursor-pointer"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-gold-500 to-blue-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-gold-500 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text">
            Recognition & Awards
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "Michelin", subtitle: "3 Stars", year: "2024" },
              { title: "Forbes", subtitle: "5 Stars", year: "2024" },
              { title: "World's 50 Best", subtitle: "#1 Restaurant", year: "2024" },
              { title: "James Beard", subtitle: "Outstanding Chef", year: "2024" },
            ].map((award, index) => (
              <div key={index} className="glass p-6 rounded-lg hover-lift">
                <div className="text-2xl font-bold text-gold-500 mb-2">{award.title}</div>
                <div className="text-sm text-gray-300 mb-1">{award.subtitle}</div>
                <div className="text-xs text-gray-500">{award.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;