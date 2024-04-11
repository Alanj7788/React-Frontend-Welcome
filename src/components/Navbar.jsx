import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

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

  const navigates = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    { link: "Testimonial", path: "testimonial" },
    { link: "FAQ", path: "faq" },
  ];

  return (
    <header className={`w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 ${isSticky ? 'sticky' : ''}`}>
      <nav>
        <div>
          {/* Used `className` instead of `class`, added href="#home" for example */}
          <a href="#home">Campus Connect Pro</a>
          {/* Displaying navigation links */}
          {navigates.map((item, index) => (
            <a key={index} href={`#${item.path}`}>{item.link}</a>
          ))}
        </div>
        {/* Button to toggle menu */}
        <button onClick={toggleMenu}>Toggle Menu</button>
      </nav>
    </header>
  );
};

export default Navbar;
