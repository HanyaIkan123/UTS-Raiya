import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex justify-around text-white">
        <li>
          <Link
            to="/"
            className="hover:text-gray-300 hover:bg-blue-600 p-2 rounded transition-all duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/rating"
            className="hover:text-gray-300 hover:bg-blue-600 p-2 rounded transition-all duration-200"
          >
            Rating WebSite Kami
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
