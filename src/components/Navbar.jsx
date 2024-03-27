import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparant text-white'}`}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-black  hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. Menu open: "hidden", Menu closed: "block" */}
              <svg
                className={`block h-6 w-6 ${isMobileMenuOpen ? 'hidden' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              {/* Icon when menu is open. Menu open: "block", Menu closed: "hidden" */}
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? '' : 'hidden'}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-8 w-auto" src="image/logo.png" alt="Your Company" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <a href="/" className=" text-black hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">home</a>
                <a href="/about" className="text-black hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About Us</a>
                <a href="/blog" className="text-black hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Blog</a>
                <a href="/service" className="text-black hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Service</a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            
            {/* Profile dropdown */}
            
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          <a href="/" className="text-black  hover:text-black block rounded-md px-3 py-2 text-base font-medium">home</a>
          <a href="/about" className="text-black hover:text-black block rounded-md px-3 py-2 text-base font-medium">about</a>
          <a href="/blog" className="text-black hover:text-black block rounded-md px-3 py-2 text-base font-medium">blog</a>
          <a href="/service" className="text-black hover:text-black block rounded-md px-3 py-2 text-base font-medium">service</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
