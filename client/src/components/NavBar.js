import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-gray-800 py-4 text-white">
      <div className="container mx-auto">
        <ul className="flex justify-center space-x-6">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/medicines">Medicines</Link></li>
          <li><Link to="/racks">Racks</Link></li>
          <li><Link to="/locations">Locations</Link></li>
          <li><Link to="/bills">Bills</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
