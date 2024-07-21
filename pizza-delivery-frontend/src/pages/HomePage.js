import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const pizzas = [
  { id: 1, name: 'Margherita', price: 10.99, image: 'https://t3.ftcdn.net/jpg/04/44/86/70/360_F_444867086_79U7yvSiS6LaEWo8nN0ZYX8CJ7NhvhJh.jpg' },
  { id: 2, name: 'Pepperoni', price: 12.99, image: 'https://media.istockphoto.com/id/521403691/photo/hot-homemade-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=PaISuuHcJWTEVoDKNnxaHy7L2BTUkyYZ06hYgzXmTbo=' },
  { id: 3, name: 'Vegetarian', price: 11.99, image: 'https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg' },
  { id: 4, name: 'Hawaiian', price: 13.99, image: 'https://media.istockphoto.com/id/1349383878/photo/hawaiian-pizza-with-ham-and-pineapple.jpg?s=612x612&w=0&k=20&c=P7rJNWhe1utWDDXUa4ZyZdnl4C5he8jfWD-dKf_hefI=' },
];

const HomePage = () => {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
  
    const addToCart = (pizza) => {
      setCart(prevCart => {
        const existingItem = prevCart.find(item => item.id === pizza.id);
        if (existingItem) {
          return prevCart.map(item =>
            item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        }
        return [...prevCart, { ...pizza, quantity: 1 }];
      });
    };
  
    const removeFromCart = (pizzaId) => {
      setCart(prevCart => prevCart.filter(item => item.id !== pizzaId));
    };
  
    const getTotalPrice = () => {
      return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };
  
    return (
      <div className="relative">
        <h1 className="text-3xl font-bold mb-6">Welcome to Pizza Delights</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={pizza.image} alt={pizza.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{pizza.name}</h2>
                <p className="text-gray-600 mb-4">${pizza.price.toFixed(2)}</p>
                <button 
                  onClick={() => addToCart(pizza)}
                  className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/orders" className="text-red-600 hover:text-red-800 font-semibold">
            View Your Order History
          </Link>
        </div>
  
        {/* Cart Button */}
        <button 
          onClick={() => setIsCartOpen(!isCartOpen)}
          className="fixed bottom-4 right-4 bg-red-500 text-white p-4 rounded-full shadow-lg hover:bg-red-600 transition"
        >
          🛒 ({cart.reduce((total, item) => total + item.quantity, 0)})
        </button>
  
        {/* Cart Sidebar */}
        {isCartOpen && (
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-4 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Your Cart</h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <>
                {cart.map(item => (
                  <div key={item.id} className="mb-4 border-b pb-2">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p>Quantity: {item.quantity}</p>
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <div className="mt-4">
                  <p className="font-bold">Total: ${getTotalPrice().toFixed(2)}</p>
                  <button className="w-full bg-green-500 text-white py-2 rounded mt-4 hover:bg-green-600 transition">
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    );
  };
  
  export default HomePage;