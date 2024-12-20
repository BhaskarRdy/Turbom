import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { CategorySection } from '../components/home/CategorySection';
import { ProductGrid } from '../components/product/ProductGrid';
import { products } from '../data/products';

export const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="space-y-12">
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CategorySection />
        <div className="py-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Featured Products</h2>
          <ProductGrid products={featuredProducts} />
        </div>
      </div>
    </div>
  );
};