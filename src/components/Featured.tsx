import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const enterprises = [
  {
    name: "Coopmart Main",
    category: "Retail",
    image: "https://picsum.photos/seed/shop/600/400",
    description: "Our flagship retail branch serving the heart of Abra."
  },
  {
    name: "ADTEMPCO Hostel",
    category: "Hospitality",
    image: "https://picsum.photos/seed/hotel/600/400",
    description: "Modern, clean, and affordable lodging for travelers."
  },
  {
    name: "Coop Café",
    category: "Dining",
    image: "https://picsum.photos/seed/cafe/600/400",
    description: "Where community meets over great coffee and local treats."
  },
  {
    name: "Print & Design Shop",
    category: "Business",
    image: "https://picsum.photos/seed/print/600/400",
    description: "Professional printing services for all your business needs."
  }
];

const Featured = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold text-green-600 uppercase tracking-[0.2em] mb-4"
            >
              Our Enterprises
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-blue-900"
            >
              Showcasing Our <br /> Business Ecosystem
            </motion.h3>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/services" 
              className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors group"
            >
              View All Enterprises
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {enterprises.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-blue-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-blue-900 mb-2">{item.name}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
