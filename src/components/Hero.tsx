import { motion } from 'motion/react';
import { ArrowRight, MapPin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Serving Communities with Heart</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-blue-900 leading-[1.1] tracking-tight">
              Your One-Stop <span className="text-green-600">Community</span> Enterprise
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Groceries • Hospitality • Fuel • Distribution • Business Services. 
              We bring essential services closer to you with the heart of a cooperative.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/services"
                className="group inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/branches"
                className="inline-flex items-center justify-center bg-white text-blue-900 border-2 border-blue-100 px-8 py-4 rounded-xl font-bold text-lg hover:border-blue-600 transition-all"
              >
                <MapPin className="mr-2 h-5 w-5 text-blue-600" />
                Find a Branch
              </Link>
            </div>

            <div className="flex items-center space-x-8 pt-8 border-t border-gray-200">
              <div>
                <p className="text-3xl font-bold text-blue-900">30+</p>
                <p className="text-sm text-gray-500 font-medium">Years of Service</p>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div>
                <p className="text-3xl font-bold text-blue-900">15+</p>
                <p className="text-sm text-gray-500 font-medium">Local Branches</p>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div>
                <p className="text-3xl font-bold text-blue-900">50k+</p>
                <p className="text-sm text-gray-500 font-medium">Happy Members</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://picsum.photos/seed/coop/800/1000" 
                alt="ADTEMPCO Community" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-yellow-400 p-6 rounded-2xl shadow-xl z-20 animate-bounce-slow">
              <Heart className="h-8 w-8 text-blue-900" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center space-x-4 border border-gray-100">
              <div className="bg-green-100 p-3 rounded-full">
                <ArrowRight className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">New Enterprise</p>
                <p className="text-lg font-bold text-blue-900">Coopmart Express</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
