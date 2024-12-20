import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { useCartStore } from '../../store/cartStore';

export const Header = () => {
  const { isAuthenticated, user } = useAuthStore();
  const { items } = useCartStore();

  return (
    <header className="bg-[#2874f0] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex flex-col">
              <span className="text-xl font-bold tracking-tight">TurboDriftThreads</span>
              <span className="text-xs italic">Accelerate Your Style</span>
            </Link>
            
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full bg-white text-gray-900 px-4 py-2 rounded-sm focus:outline-none"
                />
                <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            {isAuthenticated ? (
              <div className="relative group">
                <button className="flex items-center space-x-1 hover:bg-[#3d85f5] px-3 py-2 rounded">
                  <User className="w-5 h-5" />
                  <span>{user?.name}</span>
                </button>
                <div className="absolute right-0 w-48 mt-2 bg-white rounded-md shadow-lg hidden group-hover:block">
                  {user?.role === 'admin' && (
                    <Link
                      to="/admin"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Admin Dashboard
                    </Link>
                  )}
                  <button
                    onClick={() => useAuthStore.getState().logout()}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-white text-[#2874f0] px-8 py-1 font-medium rounded hover:bg-gray-100"
              >
                Login
              </Link>
            )}
            
            <Link to="/cart" className="relative hover:bg-[#3d85f5] px-3 py-2 rounded">
              <ShoppingCart className="w-5 h-5" />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-[#2874f0] rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {items.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};