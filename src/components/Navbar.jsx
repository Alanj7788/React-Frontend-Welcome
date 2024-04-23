import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import logo from '../assets/image.png';
import {FaBars, FaXmark} from 'react-icons/fa6'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Changed Window.scrollY to window.scrollY
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Added event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Added empty dependency array to run the effect only once

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    { link: "Testimonial", path: "testimonial" },
    { link: "FAQ", path: "faq" },
  ];

  return (
    <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
      <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" :""}`}>
        {/*for large devices */}
        <div className="flex justify-between items-center text-base gap-8">
          <a href="" className="text-2xl font-semibold flex items-center space-x-3">
            <img src={logo} alt="" className="w-12 inline-block items-center"/>
            <span className="text-[#263238]">AYINU</span>
          </a>

          <ul className='md:flex space-x-12 hidden'>
            {
              navItems.map(({link,path})=> <Link to={path} spy={true} smooth={true} offset={-100} key={path} className="block text-base text-gray900 hover:text-brandPrimary first:font-medium">{link}</Link>)
              
            }
             
          </ul>

 {/* btn for large devices */}
 <div className="space-x-12 hidden lg:flex items-center">
  <a href="/" className="hidden lg:flex items-center text-brandPrimary hover:text-gray900">Login</a>
  <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDarkGrey">Sign up</button>
</div>

       {/* menu button for only mobile devices */}
<div className="md:hidden">
  <button
  onClick={toggleMenu}
  className="hover:text-[#6bce96] focus:outline-none focus:text-brandPrimary">
    {isMenuOpen ? (<FaXmark className="h-6 w-6 text-brandPrimary" />) : (<FaBars
    className="h-6 w-6" />)}
  </button>
</div>
        </div>

        {/*nav items for mobile */}
        <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen?"block fixed top-0 right-0 left-0" :"hidden"}`}>
        {
              navItems.map(({link,path})=> <Link to={path} spy={true} smooth={true} offset={-100} key={path} className="block text-base text-gray900 hover:text-brandPrimary first:font-medium">{link}</Link>)
              
            }
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
