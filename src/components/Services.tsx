import { motion } from 'motion/react';
import { ShoppingBag, Bed, Truck, Briefcase, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Coopmart (Retail)",
    description: "Your community grocery providing fresh produce and daily essentials at fair prices.",
    icon: ShoppingBag,
    color: "bg-blue-600",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    title: "Hospitality",
    description: "Comfortable lodging and event spaces designed for travelers and community gatherings.",
    icon: Bed,
    color: "bg-green-600",
    lightColor: "bg-green-50",
    textColor: "text-green-600",
  },
  {
    title: "Coca-Cola Distribution",
    description: "Reliable distribution partner serving local businesses with efficient delivery systems.",
    icon: Truck,
    color: "bg-red-600",
    lightColor: "bg-red-50",
    textColor: "text-red-600",
  },
  {
    title: "Business Services",
    description: "From printing to logistics, we support local entrepreneurs with professional tools.",
    icon: Briefcase,
    color: "bg-yellow-500",
    lightColor: "bg-yellow-50",
    textColor: "text-yellow-600",
  },
  {
    title: "Product Brands",
    description: "Locally made products that showcase the craftsmanship and quality of our community.",
    icon: Tag,
    color: "bg-purple-600",
    lightColor: "bg-purple-50",
    textColor: "text-purple-600",
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4"
          >
            Our Ecosystem
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6"
          >
            Essential Services for Every Need
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            We operate a diverse range of enterprises designed to serve our members and the wider community with excellence and integrity.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white border border-gray-100 p-8 rounded-3xl hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`${service.lightColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <service.icon className={`h-8 w-8 ${service.textColor}`} />
              </div>
              <h4 className="text-2xl font-bold text-blue-900 mb-4">{service.title}</h4>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              <Link 
                to="/services" 
                className={`inline-flex items-center font-bold ${service.textColor} group/btn`}
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
