import Hero from '@/src/components/Hero';
import Services from '@/src/components/Services';
import WhyChoose from '@/src/components/WhyChoose';
import Featured from '@/src/components/Featured';
import CTA from '@/src/components/CTA';
import { motion } from 'motion/react';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      
      {/* Trust Section / Stats */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-black text-blue-600">30+</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">Years of Service</p>
            </div>
            <div>
              <p className="text-4xl font-black text-blue-600">15+</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">Enterprises</p>
            </div>
            <div>
              <p className="text-4xl font-black text-blue-600">50k+</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">Active Members</p>
            </div>
            <div>
              <p className="text-4xl font-black text-blue-600">100%</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">Coop Owned</p>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <WhyChoose />
      <Featured />
      
      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Testimonials</h2>
            <h3 className="text-4xl font-extrabold text-blue-900">What Our Community Says</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Santos",
                role: "Member since 2015",
                text: "ADTEMPCO has been a lifeline for my small business. Their distribution services are reliable and their staff truly cares.",
                image: "https://i.pravatar.cc/150?u=maria"
              },
              {
                name: "Juan Dela Cruz",
                role: "Local Resident",
                text: "Coopmart is my go-to for fresh groceries. The prices are fair and the quality is always top-notch. Proud to be a member!",
                image: "https://i.pravatar.cc/150?u=juan"
              },
              {
                name: "Elena Reyes",
                role: "Business Partner",
                text: "Partnering with ADTEMPCO for distribution has helped us reach more customers in Abra than ever before. Highly professional.",
                image: "https://i.pravatar.cc/150?u=elena"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-3xl border border-gray-100"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full border-2 border-blue-100" referrerPolicy="no-referrer" />
                  <div>
                    <p className="font-bold text-blue-900">{testimonial.name}</p>
                    <p className="text-xs text-gray-500 font-medium">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </motion.div>
  );
};

export default Home;
