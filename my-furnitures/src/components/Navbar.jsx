import React, { useState } from 'react'; 
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaXmark } from 'react-icons/fa6';

const Navbar = () => {
    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/products', label: 'Products' },
        { path: '/about', label: 'About' },
    ];

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State for managing mobile menu visibility
    const location = useLocation();

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu state
    };

    return (
        <header className="bg-gray-100 fixed right-0 left-0 top-0 z-50 h-14">
            <nav className="px-4 py-2 max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <a href="/" className="text-2xl font-bold text-black">
                    Ashirbaad <span className="text-green-700">Furnitures</span>
                </a>

                {/* Mobile menu button */}
                <div className="md:hidden text-black flex items-center">
                    <button 
                        onClick={toggleMobileMenu} // Add onClick to toggle the mobile menu
                        className='cursor-pointer hover:text-green-700'
                    >
                        {isMobileMenuOpen ? <FaXmark /> : <FaBars />}
                    </button>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8">
                    <ul className="flex space-x-8 text-black">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link 
                                  to={item.path} 
                                  className={`text-black hover:text-gray-500 ${location.pathname === item.path ? 'text-green-700' : ''}`} // Add active class
                                >
                                  {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && ( // Conditionally render the mobile menu
                <div className="md:hidden text-white">
                    <ul className="flex flex-col space-y-2 bg-white p-4 shadow-lg">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link 
                                to={item.path} 
                                className={` text-black hover:text-gray-500 ${location.pathname === item.path ? 'text-green-700' : ''}`} // Add active class
                                onClick={toggleMobileMenu}
                                >{item.label}
                                </Link>
                            </li>
                        ))}
                        
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;
