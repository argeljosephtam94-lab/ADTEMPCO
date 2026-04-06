import { motion } from 'motion/react';
import { ShoppingBag, Bed, Truck, Briefcase, Tag, CheckCircle2, ArrowRight } from 'lucide-react';

const serviceDetails = [
  {
    id: "coopmart",
    title: "Coopmart (Retail)",
    icon: ShoppingBag,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    description: "Our retail arm provides high-quality groceries, fresh produce, and household essentials at competitive prices. We prioritize local sourcing to support our community farmers.",
    features: ["Fresh Produce Daily", "Fair Pricing", "Member Discounts", "Local Sourcing"],
    image: "https://picsum.photos/seed/grocery/800/600"
  },
  {
    id: "hospitality",
    title: "Hospitality & Lodging",
    icon: Bed,
    color: "text-green-600",
    bgColor: "bg-green-50",
    description: "Experience warm hospitality at our hostel and event spaces. Perfect for travelers, business meetings, and community celebrations with modern amenities and heart-driven service.",
    features: ["Clean & Modern Rooms", "Event Spaces", "Free WiFi", "Central Location"],
    image: "https://picsum.photos/seed/lodging/800/600"
  },
  {
    id: "distribution",
    title: "Coca-Cola Distribution",
    icon: Truck,
    color: "text-red-600",
    bgColor: "bg-red-50",
    description: "As a trusted distribution partner, we ensure that local businesses have reliable access to essential beverage products through our efficient logistics network.",
    features: ["Reliable Delivery", "Business Support", "Wide Coverage", "Efficient Logistics"],
    image: "https://picsum.photos/seed/truck/800/600"
  },
  {
    id: "business",
    title: "Business Services",
    icon: Briefcase,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    description: "We provide professional business support services including printing, design, and logistics to help local entrepreneurs grow their ventures.",
    features: ["Printing & Design", "Logistics Support", "Business Consulting", "Member Perks"],
    image: "https://picsum.photos/seed/office/800/600"
  }
];

const ServicesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      {/* Header */}
      <section className="bg-green-600 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6"
          >
            Our Services
          </motion.h1>
          <p className="text-xl text-green-50 max-w-2xl mx-auto leading-relaxed">
            A diverse ecosystem of enterprises designed to serve every aspect of your daily life with quality and care.
          </p>
        </div>
      </section>

      {/* Service Sections */}
      <div className="py-24 space-y-32">
        {serviceDetails.map((service, index) => (
          <section key={service.id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={index % 2 !== 0 ? 'lg:order-2' : ''}
              >
                <div className={`${service.bgColor} p-4 rounded-2xl w-fit mb-8`}>
                  <service.icon className={`h-10 w-10 ${service.color}`} />
                </div>
                <h2 className="text-4xl font-extrabold text-blue-900 mb-6">{service.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {service.description}
                </p>
                <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-center space-x-3 text-gray-700 font-medium">
                      <CheckCircle2 className={`h-5 w-5 ${service.color}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`inline-flex items-center justify-center px-8 py-4 rounded-2xl font-bold text-white shadow-xl transition-all hover:scale-105 ${service.id === 'coopmart' ? 'bg-blue-600 shadow-blue-100' : service.id === 'hospitality' ? 'bg-green-600 shadow-green-100' : service.id === 'distribution' ? 'bg-red-600 shadow-red-100' : 'bg-yellow-600 shadow-yellow-100'}`}>
                  Inquire Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`relative ${index % 2 !== 0 ? 'lg:order-1' : ''}`}
              >
                <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-50">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>
    </motion.div>
  );
};

export default ServicesPage;
