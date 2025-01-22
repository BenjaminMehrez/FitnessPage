import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '/logo.png'

function Navigation() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="text-white sticky top-0 z-50 h-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center gap-2">
                            <img src={logo} alt="Logo" className="w-28" />
                        </Link>
                    </div>

                    {/* Hamburger Menu (Mobile) */}
                    <div className="md:hidden transition duration-300">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none transition duration-300">
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className={`${isOpen ? "block" : "hidden"} bg-black absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto md:flex`}>
                        <ul className="flex flex-col md:flex-row items-center md:gap-8 gap-4 py-4 md:py-0 px-8 md:px-0">
                            <li>
                                <Link to="/" className="link transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="link transition-colors">About</Link>
                            </li>
                            <li>
                                <Link to="/products" className="link transition-colors">Products</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="link transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Navigation;
