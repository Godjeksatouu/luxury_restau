import React, { useState } from 'react';
import { Calendar, Clock, Users, Star, Phone, Mail, CreditCard, Shield, Brain } from 'lucide-react';

const ReservationPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedGuests, setSelectedGuests] = useState(2);
  const [selectedExperience, setSelectedExperience] = useState('quantum');
  const [aiPrediction, setAiPrediction] = useState<string | null>(null);

  const experiences = [
    {
      id: 'quantum',
      name: 'Quantum Gastronomy',
      description: 'Our signature molecular dining experience with AI-curated flavors',
      price: 650,
      duration: '3 hours',
      availability: 'High',
    },
    {
      id: 'neural',
      name: 'Neural Synchronization',
      description: 'Dishes that adapt to your brainwaves and emotional state',
      price: 850,
      duration: '4 hours',
      availability: 'Medium',
    },
    {
      id: 'temporal',
      name: 'Temporal Dining',
      description: 'Experience food from past, present, and future simultaneously',
      price: 1200,
      duration: '5 hours',
      availability: 'Limited',
    },
  ];

  const timeSlots = [
    { time: '17:30', availability: 'Available', demand: 'low' },
    { time: '18:00', availability: 'Limited', demand: 'medium' },
    { time: '18:30', availability: 'Available', demand: 'low' },
    { time: '19:00', availability: 'High Demand', demand: 'high' },
    { time: '19:30', availability: 'Limited', demand: 'medium' },
    { time: '20:00', availability: 'Available', demand: 'low' },
    { time: '20:30', availability: 'Limited', demand: 'medium' },
    { time: '21:00', availability: 'Available', demand: 'low' },
  ];

  const handleAiPrediction = () => {
    const predictions = [
      "Based on your dining history, we recommend the Quantum Gastronomy experience at 19:30 for optimal flavor synchronization.",
      "Our AI suggests the Neural Synchronization menu would perfectly complement your preferred dining time.",
      "Temporal Dining at 20:00 would create the ideal ambiance for your party size.",
      "Your taste profile indicates a 94% satisfaction rate with our Quantum experience at 18:30.",
    ];
    setAiPrediction(predictions[Math.floor(Math.random() * predictions.length)]);
  };

  return (
    <div className="pt-24 pb-16 relative">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text font-['Playfair_Display']">
            Reserve Your Future
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Secure your seat at tomorrow's most revolutionary dining experience
          </p>
        </div>

        {/* AI Prediction */}
        <div className="glass p-6 rounded-2xl mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gold-500">AI Dining Assistant</h3>
                <p className="text-sm text-gray-400">Powered by Quantum Neural Networks</p>
              </div>
            </div>
            <button
              onClick={handleAiPrediction}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-400 hover:to-purple-400 transition-all duration-300"
            >
              Get AI Recommendation
            </button>
          </div>
          
          {aiPrediction && (
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 rounded-lg border border-blue-500/20">
              <p className="text-gray-300">{aiPrediction}</p>
            </div>
          )}
        </div>
      </div>

      {/* Reservation Form */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="glass p-8 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Experience Selection */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gold-500">Choose Your Experience</h3>
                <div className="space-y-4">
                  {experiences.map((exp) => (
                    <div
                      key={exp.id}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                        selectedExperience === exp.id
                          ? 'border-gold-500 bg-gold-500/10'
                          : 'border-gray-700 hover:border-gold-500/50'
                      }`}
                      onClick={() => setSelectedExperience(exp.id)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-white">{exp.name}</h4>
                        <span className="text-gold-500 font-bold">${exp.price}</span>
                      </div>
                      <p className="text-gray-300 text-sm mb-2">{exp.description}</p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-400">Duration: {exp.duration}</span>
                        <span className={`px-2 py-1 rounded-full ${
                          exp.availability === 'High' 
                            ? 'bg-green-500/20 text-green-400' 
                            : exp.availability === 'Medium'
                            ? 'bg-yellow-500/20 text-yellow-400'
                            : 'bg-red-500/20 text-red-400'
                        }`}>
                          {exp.availability}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Date & Guests */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gold-500 mb-2">Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gold-500 mb-2">Guests</label>
                  <select
                    value={selectedGuests}
                    onChange={(e) => setSelectedGuests(Number(e.target.value))}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Right Column - Time Selection */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gold-500">Select Time</h3>
                <div className="grid grid-cols-2 gap-3">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.time}
                      onClick={() => setSelectedTime(slot.time)}
                      className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                        selectedTime === slot.time
                          ? 'border-gold-500 bg-gold-500/10'
                          : 'border-gray-700 hover:border-gold-500/50'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-lg font-semibold text-white">{slot.time}</div>
                        <div className={`text-xs ${
                          slot.demand === 'high' 
                            ? 'text-red-400' 
                            : slot.demand === 'medium'
                            ? 'text-yellow-400'
                            : 'text-green-400'
                        }`}>
                          {slot.availability}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Details */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gold-500">Guest Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Security Features */}
          <div className="mt-8 p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg">
            <h3 className="text-lg font-semibold text-gold-500 mb-4">Advanced Security Features</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-gray-300">Biometric Verification</span>
              </div>
              <div className="flex items-center space-x-3">
                <Brain className="w-5 h-5 text-purple-400" />
                <span className="text-sm text-gray-300">Neural Pattern Lock</span>
              </div>
              <div className="flex items-center space-x-3">
                <CreditCard className="w-5 h-5 text-green-400" />
                <span className="text-sm text-gray-300">Quantum Encryption</span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 text-center">
            <button className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-gold-500 to-blue-400 text-black text-lg font-semibold rounded-lg hover:from-gold-400 hover:to-blue-300 transition-all duration-300 hover-lift pulse-glow">
              Secure My Quantum Reservation
            </button>
            <p className="text-sm text-gray-400 mt-4">
              Your reservation will be confirmed via neural link within 0.3 seconds
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;