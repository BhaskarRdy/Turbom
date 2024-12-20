import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductGrid } from '../components/product/ProductGrid';
import { products } from '../data/products';

export const CategoryPage = () => {
  const { category } = useParams();
  const categoryProducts = products.filter(p => p.category === category);

  return (
    <div className="py-8">
      <div className="bg-white p-4 mb-6 rounded shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-900 capitalize">
          {category} Collection
        </h1>
        <p className="text-gray-500 mt-1">
          Discover our {category} collection
        </p>
      </div>
      <ProductGrid products={categoryProducts} />
    </div>
  );
};