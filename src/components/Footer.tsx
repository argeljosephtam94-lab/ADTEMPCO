import { Link } from 'react-router-dom';
import { Heart, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-green text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-xl h-16 w-auto">
                <img 
                  src="https://storage.googleapis.com/ai-studio-static/adtempco-logo.png" 
                  alt="ADTEMPCO Logo" 
                  className="h-full w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </Link>
            <p className="text-green-50 text-sm leading-relaxed">
              One cooperative. Multiple essential services. Serving communities with heart since our inception.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-blue transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-blue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4 text-sm text-green-50">
              <li><Link to="/" className="hover:text-brand-blue transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-blue transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-brand-blue transition-colors">Our Services</Link></li>
              <li><Link to="/branches" className="hover:text-brand-blue transition-colors">Branch Locator</Link></li>
              <li><Link to="/contact" className="hover:text-brand-blue transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Enterprises</h3>
            <ul className="space-y-4 text-sm text-green-50">
              <li><Link to="/services" className="hover:text-brand-blue transition-colors">Coopmart Retail</Link></li>
              <li><Link to="/services" className="hover:text-brand-blue transition-colors">Hospitality & Lodging</Link></li>
              <li><Link to="/services" className="hover:text-brand-blue transition-colors">Coca-Cola Distribution</Link></li>
              <li><Link to="/services" className="hover:text-brand-blue transition-colors">Business Services</Link></li>
              <li><Link to="/services" className="hover:text-brand-blue transition-colors">Product Brands</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Info</h3>
            <ul className="space-y-4 text-sm text-green-50">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-white shrink-0 mt-1" />
                <span>Abra, Philippines</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-white shrink-0" />
                <span>+63 (XXX) XXX-XXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-white shrink-0" />
                <span>info@adtempco.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-green-100">
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
