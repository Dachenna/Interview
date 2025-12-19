import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png'; 

const Navbar = ({ onOpenSchedule }) => {
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  return (
    <nav className='  main flex justify-between items-center p-4 w-full z-10'>

      {/* Left Side: This always shows the logo regardless of the page */}

      <div className="flex items-center gap-2 p-5">
        <img src={Logo} alt="logo" />
        <span className='font-bold text-xl family-plus-bold'>CarePulse</span>
      </div>
      
      {/* Right side: This is will always be displayed */}
      {isMainPage &&  (
        <div className='flex gap-2'>
          <button onClick={onOpenSchedule}>Add schedule</button>
        </div>
      )  }
    </nav>
  );
};

export default Navbar;