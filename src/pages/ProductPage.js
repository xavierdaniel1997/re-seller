import React from 'react';
import { FaHeart, FaShareAlt } from 'react-icons/fa';

const ProductPage = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="flex rounded-md overflow-hidden w-10/12">
        <div className="w-3/5 flex justify-center items-center bg-black max-h-96">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Product"
            className="object-contain w-full max-h-96"
          />
        </div>
        <div className="w-2/5 px-4">
          <div className="flex justify-between items-center mb-4 p-4 shadow-md">
            <h1 className="text-2xl font-bold">₹ 1,28,000</h1>
            <div className="flex space-x-3">
              <FaShareAlt className="text-gray-600" />
              <FaHeart className="text-gray-600" />
            </div>
          </div>
          <div className="mb-4 p-4 shadow-md">
            <p className="text-gray-600 mb-4">2019 - 38,000 km</p>
            <p className="text-gray-600 mb-4">Urgent sale</p>
            <div>
              <p className="text-gray-800">AHW Colony, Port Blair, Andaman & Nicobar Islands</p>
              <p className="text-gray-400 text-sm">Today</p>
            </div>
          </div>
          <div className="flex items-center mb-6 shadow-md p-4">
            <div className="bg-gray-300 rounded-full h-16 w-16 flex items-center justify-center mr-4">
              <img
                src="https://via.placeholder.com/50"
                alt="User"
                className="rounded-full"
              />
            </div>
            <div>
              <p className="font-semibold">BUNNY</p>
            </div>
          </div>
          <div className="mb-6 mb-4 p-4 shadow-md">
            <h2 className="font-semibold">Posted in</h2>
            <p className="text-gray-800">AHW Colony, Port Blair, Andaman & Nicobar Islands</p>
          </div>
          <div className="border-t border-gray-300 pt-4">
            <iframe
              src="https://maps.google.com/maps?q=11.660893,92.742933&z=15&output=embed"
              width="100%"
              height="200"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
