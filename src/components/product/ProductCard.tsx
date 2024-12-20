import React from 'react';
import { useCartStore } from '../../store/cartStore';
import { Product } from '../../types';
import { Price } from '../ui/Price';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [selectedSize, setSelectedSize] = React.useState(product.sizes[0]);
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="bg-white rounded shadow-sm hover:shadow-lg transition-shadow duration-200 p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full aspect-square object-cover mb-4"
      />
      <div>
        <h3 className="text-sm text-gray-600 font-medium truncate">{product.name}</h3>
        <div className="mt-1 flex items-center space-x-2">
          <Price
            amount={product.price}
            className="text-lg font-bold text-gray-900"
          />
          <span className="text-sm text-green-600">70% off</span>
        </div>
        <select
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
          className="mt-2 w-full px-2 py-1 border border-gray-300 rounded text-sm"
        >
          {product.sizes.map((size) => (
            <option key={size} value={size}>
              Size {size}
            </option>
          ))}
        </select>
        <button
          onClick={() => addItem(product, selectedSize)}
          className="mt-3 w-full bg-[#ff9f00] text-white py-2 rounded-sm hover:bg-[#f39000] font-medium"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};