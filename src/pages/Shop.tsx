import React from 'react';
import { ProductGrid } from '../components/product/ProductGrid';
import { products } from '../data/products';

export const Shop = () => {
  return (
    <div>
      <div className="bg-white p-4 mb-4 rounded shadow-sm">
        <h1 className="text-xl font-medium text-gray-800">Men's Fashion</h1>
        <p className="text-sm text-gray-500 mt-1">Premium Collection</p>
      </div>
      <ProductGrid products={products} />
    </div>
  );
};