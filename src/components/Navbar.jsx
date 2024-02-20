import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`p-2 w-full fixed text-xl z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white text-black shadow-md' : ''}`}>
            <div className="container mx-auto flex flex-wrap items-center">
                <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                    <a className="text-white no-underline hover:text-white hover:no-underline" href="#">
                        <img src="/image/logo.png" alt="Logo" />
                    </a>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMenu} className=" top-5 absolute left-5 text-slate-800 hover:text-black focus:text-black focus:outline-none">
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3 6h18v2H3V6zM3 11h18v2H3v-2zm18 5H3v2h18v-2z"
                            />
                        </svg>
                    </button>
                </div>

                <div className={`flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end md:flex ${isOpen ? 'block' : 'hidden'}`}>
                    <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                        <li className="mr-3">
                            <a className={`inline-block no-underline py-2 px-4 ${isScrolled ? 'text-black' : 'text-white'} hover:text-blue-800 hover:text-underline`} href="/">Home</a>
                        </li>
                        <li className="mr-3">
                            <a className={`inline-block no-underline py-2 px-4 ${isScrolled ? 'text-black' : 'text-white'} hover:text-blue-800 hover:text-underline`} href="/about">About Us</a>
                        </li>
                        <li className="mr-3">
                            <a className={`inline-block no-underline py-2 px-4 ${isScrolled ? 'text-black' : 'text-white'} hover:text-blue-800 hover:text-underline`} href="#">Portfolio</a>
                        </li>
                        <li className="mr-3">
                            <a className={`inline-block no-underline py-2 px-4 ${isScrolled ? 'text-black' : 'text-white'} hover:text-blue-800 hover:text-underline`} href="/blog">Blogs</a>
                        </li>
                        <li className="mr-3">
                            <a className={`inline-block no-underline py-2 px-4 ${isScrolled ? 'text-black' : 'text-white'} hover:text-blue-800 hover:text-underline`} href="#">Services</a>
                        </li>
                        <li className="mr-3">
                            <a className={`inline-block no-underline py-2 px-4 ${isScrolled ? 'text-black' : 'text-white'} hover:text-blue-800 hover:text-underline`} href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
