import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-primary text-white mt-16">
      <div className="container-custom py-12 px-10 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold mb-4">MediLab</h3>
            <p className="text-gray-200 leading-relaxed">
              Your trusted partner in healthcare services and medical laboratory testing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-base">
              <li><Link to="/" className="text-gray-300 hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <ul className="text-gray-200 space-y-3 text-base">
              <li>123 Medical Center Drive</li>
              <li>New York, NY 10001</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@medilab.com</li>
            </ul>
          </div>

         
        {/* Social Links */}
<div>
  <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
  <div className="flex space-x-5">
    <a
      href="#"
      className="text-gray-300 hover:text-white transform hover:scale-110 hover:-translate-y-1 transition duration-300 ease-in-out"
    >
      <FaFacebook size={24} />
    </a>
    <a
      href="#"
      className="text-gray-300 hover:text-white transform hover:scale-110 hover:-translate-y-1 transition duration-300 ease-in-out"
    >
      <FaTwitter size={24} />
    </a>
    <a
      href="#"
      className="text-gray-300 hover:text-white transform hover:scale-110 hover:-translate-y-1 transition duration-300 ease-in-out"
    >
      <FaInstagram size={24} />
    </a>
    <a
      href="#"
      className="text-gray-300 hover:text-white transform hover:scale-110 hover:-translate-y-1 transition duration-300 ease-in-out"
    >
      <FaLinkedin size={24} />
    </a>
  </div>
</div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-gray-200 text-sm">
          <p>&copy; {new Date().getFullYear()} MediLab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
