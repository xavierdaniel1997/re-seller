import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        <div className="footer-section">
          <h4 className="text-lg font-semibold mb-4">Popular Categories</h4>
          <ul>
            <li><a href="#" className="hover:underline">Cars</a></li>
            <li><a href="#" className="hover:underline">Flats for Rent</a></li>
            <li><a href="#" className="hover:underline">Jobs</a></li>
            <li><a href="#" className="hover:underline">Mobile Phones</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="text-lg font-semibold mb-4">About Us</h4>
          <ul>
            <li><a href="#" className="hover:underline">About OLX Group</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">OLX for Businesses</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="text-lg font-semibold mb-4">OLX</h4>
          <ul>
            <li><a href="#" className="hover:underline">Help</a></li>
            <li><a href="#" className="hover:underline">Sitemap</a></li>
            <li><a href="#" className="hover:underline">Legal & Privacy Information</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-gray-400"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="text-center py-4 border-t border-gray-700 mt-10">
        <p>&copy; 2024 OLX, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
