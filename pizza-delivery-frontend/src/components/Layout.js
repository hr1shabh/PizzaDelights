import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-red-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Pizza Delights</Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link 
                  to="/" 
                  className={`hover:text-red-200 ${location.pathname === '/' ? 'font-bold' : ''}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/orders" 
                  className={`hover:text-red-200 ${location.pathname === '/orders' ? 'font-bold' : ''}`}
                >
                  Orders
                </Link>
              </li>
              <li>
                <Link 
                  to="/profile" 
                  className={`hover:text-red-200 ${location.pathname === '/profile' ? 'font-bold' : ''}`}
                >
                  Profile
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto mt-8 px-4">
        {children}
      </main>
      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          &copy; 2024 Pizza Delights. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;