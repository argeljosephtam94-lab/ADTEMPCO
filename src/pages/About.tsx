import { motion } from 'motion/react';
import { Heart, Target, Eye, Users } from 'lucide-react';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      {/* Header */}
      <section className="bg-brand-green py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6"
          >
            Our Story
          </motion.h1>
          <p className="text-xl text-green-50 max-w-2xl mx-auto leading-relaxed">
            Serving communities with heart. Discover the journey of ADTEMPCO and our commitment to cooperative excellence.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-brand-blue uppercase tracking-[0.2em] mb-4">The Beginning</h2>
              <h3 className="text-4xl font-extrabold text-brand-green mb-8">A Journey of Community Empowerment</h3>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  ADTEMPCO started with a simple vision: to create a self-sustaining ecosystem where community members could support one another through shared enterprises and financial services.
                </p>
                <p>
                  Over the decades, we have grown from a small group of visionaries into a multi-enterprise cooperative serving tens of thousands of members across the region. Our growth has always been driven by the needs of our community.
                </p>
                <p>
                  Today, ADTEMPCO stands as a beacon of cooperative success, proving that when people work together with a common heart, they can build something truly extraordinary.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://picsum.photos/seed/history/800/600" 
                alt="ADTEMPCO History" 
                className="rounded-[3rem] shadow-2xl border-8 border-gray-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-3xl shadow-2xl hidden md:block border border-gray-100">
                <img 
                  src="https://storage.googleapis.com/ai-studio-static/adtempco-logo.png" 
                  alt="ADTEMPCO Logo" 
                  className="h-20 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100"
            >
              <div className="bg-brand-green/10 p-4 rounded-2xl w-fit mb-8">
                <Target className="h-8 w-8 text-brand-green" />
              </div>
              <h4 className="text-3xl font-bold text-brand-green mb-6">Our Mission</h4>
              <p className="text-gray-600 leading-relaxed text-lg">
                To foster community stability through accessible financial services, responsible savings, and local enterprise growth, ensuring that every member has the opportunity to thrive.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100"
            >
              <div className="bg-brand-green/10 p-4 rounded-2xl w-fit mb-8">
                <Eye className="h-8 w-8 text-brand-green" />
              </div>
              <h4 className="text-3xl font-bold text-brand-green mb-6">Our Vision</h4>
              <p className="text-gray-600 leading-relaxed text-lg">
                To be the leading community-centered enterprise in the region, recognized for our heart-driven service and our contribution to a sustainable and prosperous local economy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm font-bold text-brand-green uppercase tracking-[0.2em] mb-4">Leadership</h2>
          <h3 className="text-4xl font-extrabold text-brand-green mb-16">The Heart Behind the Vision</h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-4">
                <div className="aspect-square rounded-3xl overflow-hidden bg-gray-100 border-4 border-white shadow-lg">
                  <img src={`https://i.pravatar.cc/300?img=${i + 10}`} alt="Leader" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-bold text-blue-900 text-lg">Leader Name {i}</p>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Position Title</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
