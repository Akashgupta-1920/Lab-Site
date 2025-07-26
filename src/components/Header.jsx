import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <nav className="container-custom py-6 px-12">
        <div className="flex justify-between items-center w-full">
          
          {/* Logo + Tagline */}
          <div className="flex flex-col">
            <Link to="/" className="text-3xl font-bold text-primary tracking-wide">
              TheLabMate
            </Link>
            <span className="text-sm text-gray-500">Your Trusted Lab Companion</span>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center text-xl ml-auto space-x-10 border-gray-300 pl-12">
            <Link to="/" className="hover transition duration-300">Home</Link>
            <Link to="/about" className="hover transition duration-300">About Us</Link>
            <Link to="/services" className="hover transition duration-300">Our Services</Link>
            <Link to="/contact" className="hover transition duration-300">Contact Us</Link>
            <Link to="/cart" className="relative hover:text-primary transition duration-300 flex items-center gap-2">
              <FaShoppingCart />
              <span>Cart</span>
              {/* Optional: Badge for cart count */}
              {/* <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-1">2</span> */}
            </Link>
            <Link to="/login" className="btn-primary px-7 py-2 rounded-full text-white">Login</Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-screen opacity-100 pt-4' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col bg-white rounded-md shadow-lg p-5 space-y-5 mt-4">
            <Link to="/" className="hover:text-primary" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="hover:text-primary" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link to="/services" className="hover:text-primary" onClick={() => setIsOpen(false)}>Our Services</Link>
            <Link to="/contact" className="hover:text-primary" onClick={() => setIsOpen(false)}>Contact Us</Link>
            <Link to="/cart" className="hover:text-primary" onClick={() => setIsOpen(false)}>
              <div className="flex items-center gap-2">
                <FaShoppingCart />
                <span>Cart</span>
              </div>
            </Link>
            <Link to="/login" className="btn-primary text-center py-2 rounded-full text-white" onClick={() => setIsOpen(false)}>Login</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
