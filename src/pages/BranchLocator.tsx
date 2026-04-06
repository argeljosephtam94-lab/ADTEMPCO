import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Search, Filter } from 'lucide-react';

const branches = [
  {
    name: "Coopmart Main Branch",
    address: "Bangued, Abra",
    phone: "+63 (XXX) XXX-XXXX",
    hours: "8:00 AM - 7:00 PM",
    type: "Retail",
    coordinates: { lat: 17.59, lng: 120.62 }
  },
  {
    name: "ADTEMPCO Hostel",
    address: "Zone 5, Bangued, Abra",
    phone: "+63 (XXX) XXX-XXXX",
    hours: "24/7",
    type: "Hospitality",
    coordinates: { lat: 17.592, lng: 120.618 }
  },
  {
    name: "Coopmart Express - Bucay",
    address: "Bucay, Abra",
    phone: "+63 (XXX) XXX-XXXX",
    hours: "8:00 AM - 6:00 PM",
    type: "Retail",
    coordinates: { lat: 17.53, lng: 120.71 }
  },
  {
    name: "Distribution Hub",
    address: "San Juan, Abra",
    phone: "+63 (XXX) XXX-XXXX",
    hours: "7:00 AM - 5:00 PM",
    type: "Distribution",
    coordinates: { lat: 17.72, lng: 120.73 }
  }
];

const BranchLocator = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gray-50 min-h-screen"
    >
      {/* Header */}
      <section className="bg-brand-green py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Branch Locator</h1>
          <p className="text-green-50 max-w-xl mx-auto">Find an ADTEMPCO enterprise near you. We are growing to serve you better.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar / Search */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search by location..." 
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                />
              </div>
              
              <div className="space-y-4">
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter by Service
                </p>
                <div className="flex flex-wrap gap-2">
                  {['All', 'Retail', 'Hospitality', 'Distribution', 'Business'].map(filter => (
                    <button 
                      key={filter}
                      className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${filter === 'All' ? 'bg-brand-green text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4 overflow-y-auto max-h-[600px] pr-2 custom-scrollbar">
              {branches.map((branch, index) => (
                <motion.div 
                  key={branch.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:border-brand-green transition-all cursor-pointer group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-brand-blue group-hover:text-brand-green transition-colors">{branch.name}</h3>
                    <span className="bg-brand-green/10 text-brand-green px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                      {branch.type}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p className="flex items-start"><MapPin className="h-4 w-4 mr-2 text-brand-green shrink-0 mt-0.5" /> {branch.address}</p>
                    <p className="flex items-center"><Phone className="h-4 w-4 mr-2 text-brand-green shrink-0" /> {branch.phone}</p>
                    <p className="flex items-center"><Clock className="h-4 w-4 mr-2 text-brand-green shrink-0" /> {branch.hours}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="lg:col-span-2 h-[400px] lg:h-auto min-h-[500px] bg-gray-200 rounded-[3rem] shadow-inner relative overflow-hidden flex items-center justify-center border-4 border-white shadow-xl">
            <div className="absolute inset-0 bg-blue-50/50 flex flex-col items-center justify-center p-12 text-center">
              <div className="bg-white p-8 rounded-full shadow-2xl mb-6">
                <MapPin className="h-16 w-16 text-brand-green animate-bounce" />
              </div>
              <h3 className="text-2xl font-bold text-brand-blue mb-2">Interactive Map</h3>
              <p className="text-gray-500 max-w-sm">In a production environment, this would be a Google Maps or Mapbox integration showing all {branches.length} locations.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BranchLocator;
