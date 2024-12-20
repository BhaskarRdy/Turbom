import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'formal',
    name: 'Formal Wear',
    image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7',
    link: '/category/formal'
  },
  {
    id: 'casual',
    name: 'Casual Wear',
    image: 'https://images.unsplash.com/photo-1552831388-6a0b3575b32a',
    link: '/category/casual'
  },
  {
    id: 'ethnic',
    name: 'Ethnic Wear',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050',
    link: '/category/ethnic'
  },
  {
    id: 'sports',
    name: 'Sports Wear',
    image: 'https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1',
    link: '/category/sports'
  }
];

export const CategorySection = () => {
  return (
    <div className="py-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Link 
            key={category.id}
            to={category.link}
            className="group relative overflow-hidden rounded-lg"
          >
            <img 
              src={category.image}
              alt={category.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <span className="text-white text-lg font-medium">{category.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};