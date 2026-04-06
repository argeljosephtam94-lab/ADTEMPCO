import { Link } from 'react-router-dom';
import { Heart, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-white p-2 rounded-lg">
                <Heart className="h-6 w-6 text-blue-900" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-none tracking-tight">ADTEMPCO</span>
                <span className="text-[10px] font-medium text-yellow-400 uppercase tracking-widest">Enterprises</span>
              </div>
            </Link>
            <p className="text-blue-100 text-sm leading-relaxed">
              One cooperative. Multiple essential services. Serving communities with heart since our inception.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-yellow-400">Quick Links</h3>
            <ul className="space-y-4 text-sm text-blue-100">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/branches" className="hover:text-white transition-colors">Branch Locator</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-yellow-400">Enterprises</h3>
            <ul className="space-y-4 text-sm text-blue-100">
              <li><Link to="/services" className="hover:text-white transition-colors">Coopmart Retail</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Hospitality & Lodging</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Coca-Cola Distribution</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Business Services</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Product Brands</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-yellow-400">Contact Info</h3>
            <ul className="space-y-4 text-sm text-blue-100">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400 shrink-0" />
                <span>Abra, Philippines</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400 shrink-0" />
                <span>+63 (XXX) XXX-XXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400 shrink-0" />
                <span>info@adtempco.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center text-xs text-blue-300">
          <p>© 2026 ADTEMPCO Enterprises. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
