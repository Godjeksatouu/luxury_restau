import React, { useState, useEffect } from 'react';
import { Star, Wine, Clock, ChefHat, Filter, Search } from 'lucide-react';

const MenuPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDish, setSelectedDish] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { id: 'all', label: 'All Courses', count: 24 },
    { id: 'appetizers', label: 'Molecular Appetizers', count: 6 },
    { id: 'mains', label: 'Quantum Mains', count: 8 },
    { id: 'desserts', label: 'Levitating Desserts', count: 5 },
    { id: 'drinks', label: 'Neural Cocktails', count: 5 },
  ];

  const dishes = [
    {
      id: 1,
      name: "Quantum Spherification Caviar",
      description: "Edible spheres that burst with oceanic flavors, suspended in holographic gel",
      price: 285,
      category: "appetizers",
      rating: 4.9,
      prepTime: "12 min",
      ingredients: ["Molecular Caviar", "Edible Hologram", "Sea Essence", "Quantum Gel"],
      wine: "Champagne Dom Pérignon 2015",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      michelin: true,
    },
    {
      id: 2,
      name: "Levitating Wagyu Nebula",
      description: "A5 Wagyu beef that floats above your plate, infused with cosmic umami",
      price: 650,
      category: "mains",
      rating: 5.0,
      prepTime: "25 min",
      ingredients: ["A5 Wagyu", "Cosmic Dust", "Gravity Defier", "Umami Clouds"],
      wine: "Penfolds Grange 2018",
      image: "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=600",
      michelin: true,
    },
    {
      id: 3,
      name: "Temporal Truffle Paradox",
      description: "Black truffles that exist in multiple dimensions simultaneously",
      price: 420,
      category: "appetizers",
      rating: 4.8,
      prepTime: "15 min",
      ingredients: ["Black Truffle", "Time Crystals", "Dimension Foam", "Reality Sauce"],
      wine: "Barolo Riserva 2019",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600",
      michelin: true,
    },
    {
      id: 4,
      name: "Holographic Chocolate Constellation",
      description: "Dessert that projects edible stars while you eat, changes flavor with each bite",
      price: 180,
      category: "desserts",
      rating: 4.9,
      prepTime: "8 min",
      ingredients: ["Holographic Chocolate", "Edible Stars", "Flavor Crystals", "Light Essence"],
      wine: "Port Vintage 2000",
      image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600",
      michelin: false,
    },
    {
      id: 5,
      name: "Neural Synchronization Cocktail",
      description: "A drink that adapts to your brainwaves, creating unique flavors for each sip",
      price: 95,
      category: "drinks",
      rating: 4.7,
      prepTime: "5 min",
      ingredients: ["Neural Alcohol", "Brainwave Essence", "Synapse Foam", "Memory Bubbles"],
      wine: "Self-Adaptive",
      image: "https://images.pexels.com/photos/1640778/pexels-photo-1640778.jpeg?auto=compress&cs=tinysrgb&w=600",
      michelin: false,
    },
    {
      id: 6,
      name: "Metamorphic Lobster Prism",
      description: "Lobster that transforms through 7 different cooking states as you eat",
      price: 380,
      category: "mains",
      rating: 4.9,
      prepTime: "18 min",
      ingredients: ["Prismatic Lobster", "Phase Crystals", "Metamorphic Sauce", "Time Herbs"],
      wine: "Chablis Premier Cru 2021",
      image: "https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=600",
      michelin: true,
    },
  ];

  const filteredDishes = selectedCategory === 'all' 
    ? dishes 
    : dishes.filter(dish => dish.category === selectedCategory);

  return (
    <div className="pt-24 pb-16 relative">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text font-['Playfair_Display']">
            Quantum Gastronomy
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience molecular cuisine redefined by quantum physics and AI-assisted flavor engineering
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 liquid-button ${
                selectedCategory === category.id
                  ? 'bg-gold-500 text-black'
                  : 'glass text-gray-300 hover:text-gold-500'
              }`}
            >
              <span className="font-medium">{category.label}</span>
              <span className="ml-2 text-sm opacity-70">({category.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish, index) => (
            <div
              key={dish.id}
              className={`glass rounded-2xl overflow-hidden hover-lift cursor-pointer transition-all duration-500 ${
                selectedDish === dish.id ? 'ring-2 ring-gold-500 scale-105' : ''
              }`}
              onClick={() => setSelectedDish(selectedDish === dish.id ? null : dish.id)}
              style={{
                transform: `translateY(${scrollY * 0.02 * (index + 1)}px)`,
              }}
            >
              {/* Dish Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  {dish.michelin && (
                    <div className="bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star className="w-4 h-4 text-gold-500" />
                    </div>
                  )}
                  <div className="bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full flex items-center">
                    <Star className="w-3 h-3 text-gold-500 mr-1" />
                    <span className="text-xs text-white">{dish.rating}</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                  <div className="flex items-center text-xs text-white">
                    <Clock className="w-3 h-3 mr-1" />
                    {dish.prepTime}
                  </div>
                </div>
              </div>

              {/* Dish Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gold-500">{dish.name}</h3>
                  <span className="text-2xl font-bold text-white">${dish.price}</span>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {dish.description}
                </p>

                {/* Expanded Details */}
                {selectedDish === dish.id && (
                  <div className="space-y-4 border-t border-gray-700 pt-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gold-500 mb-2">Quantum Ingredients:</h4>
                      <div className="flex flex-wrap gap-2">
                        {dish.ingredients.map((ingredient, i) => (
                          <span key={i} className="text-xs bg-gold-500/20 text-gold-300 px-2 py-1 rounded-full">
                            {ingredient}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Wine className="w-4 h-4 text-gold-500" />
                      <span className="text-sm text-gray-300">Paired with: {dish.wine}</span>
                    </div>
                  </div>
                )}

                {/* Action Button */}
                <button className="w-full mt-4 bg-gradient-to-r from-gold-500 to-blue-400 text-black py-2 rounded-lg font-medium hover:from-gold-400 hover:to-blue-300 transition-all duration-300">
                  Add to Quantum Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;