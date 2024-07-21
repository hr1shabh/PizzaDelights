import React, { useState, useEffect } from 'react';

const mockOrders = [
  { id: 1, date: '2024-07-20', total: 25.98, status: 'Delivered' },
  { id: 2, date: '2024-07-21', total: 34.97, status: 'In Transit' },
  { id: 3, date: '2024-07-22', total: 19.99, status: 'Preparing' },
];

const OrderHistoryPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // In a real app, you would fetch orders from an API here
    setOrders(mockOrders);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Order History & Tracking</h1>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left">Order ID</th>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-left">Total</th>
              <th className="px-6 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t">
                <td className="px-6 py-4">{order.id}</td>
                <td className="px-6 py-4">{order.date}</td>
                <td className="px-6 py-4">${order.total.toFixed(2)}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded ${
                    order.status === 'Delivered' ? 'bg-green-200 text-green-800' :
                    order.status === 'In Transit' ? 'bg-blue-200 text-blue-800' :
                    'bg-yellow-200 text-yellow-800'
                  }`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistoryPage;