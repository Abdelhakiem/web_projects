import React from 'react';
import { assets } from '../assets/frontend_assets/assets';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="flex items-center justify-between px-8 py-4">
      <img src={assets.logo} alt="Logo" className="w-auto h-10" />
      
      <ul className="flex gap-8 text-sm font-medium text-gray-500">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
             'flex flex-col items-center text-gray-500'
          }
        >
          <h2>Home</h2>
        </NavLink>
        <NavLink 
          to="/collection" 
          className={({ isActive }) => 
             'flex flex-col items-center text-gray-500'
          }
        >
          <h2>Collection</h2>
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => 
             'flex flex-col items-center text-gray-500'
          }
        >
          <h2>About</h2>
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => 
             'flex flex-col items-center text-gray-500'
          }
        >
          <h2>Contact</h2>
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img src={assets.search_icon} alt="Search" className="w-5 h-5 cursor-pointer"/>
        <img src={assets.profile_icon} alt="Profile" className="w-5 h-5 cursor-pointer"/>
        <img src={assets.cart_icon} alt="Cart" className="w-5 h-5 cursor-pointer"/>
      </div>
    </div>
  );
};

export default Nav;
