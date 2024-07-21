import React, { useState, useEffect } from 'react';

const UserProfilePage = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  useEffect(() => {
    // In a real app, you would fetch user data from an API here
    setUser({
      name: 'John Doe',
      email: 'john@example.com',
      phone: '(123) 456-7890',
      address: '123 Main St, Anytown, USA',
    });
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send the updated user data to an API here
    alert('Profile updated successfully!');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Address</label>
          <textarea
            id="address"
            name="address"
            value={user.address}
            onChange={handleChange}
            rows="3"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UserProfilePage;