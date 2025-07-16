import React, { useState, useEffect } from 'react';
import { ChefHat, Calendar, User, Star, Clock, Wine, Utensils, Sparkles } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import ReservationPage from './pages/ReservationPage';
import ChefPage from './pages/ChefPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for premium experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-gold-500 mb-4 mx-auto"></div>
          <div className="text-gold-500 text-xl font-light tracking-wider">
            luxury vsm
          </div>
          <div className="text-gray-400 text-sm mt-2">
            Preparing your culinary journey...
          </div>
        </div>
      </div>
    );
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'menu':
        return <MenuPage />;
      case 'reservations':
        return <ReservationPage />;
      case 'chef':
        return <ChefPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="relative">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;