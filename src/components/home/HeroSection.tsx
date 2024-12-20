import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">New Season Arrivals</h1>
            <p className="text-lg mb-6">Check out this season's latest trends and styles</p>
            <Link 
              to="/shop"
              className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100"
            >
              Shop Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04" 
              alt="Fashion Banner"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};