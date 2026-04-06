import { motion } from 'motion/react';
import { CheckCircle2, Users, ShieldCheck, Globe } from 'lucide-react';

const reasons = [
  {
    title: "Community-Driven",
    description: "Owned by the members, for the members. Every decision we make is for the betterment of our community.",
    icon: Users,
  },
  {
    title: "Multi-Service Ecosystem",
    description: "From retail to distribution, we provide a comprehensive range of services under one trusted brand.",
    icon: Globe,
  },
  {
    title: "Reliable & Trusted",
    description: "With decades of experience, we have built a reputation for reliability and integrity in all our operations.",
    icon: ShieldCheck,
  },
  {
    title: "Accessible Locations",
    description: "Our branches are strategically located to ensure that essential services are always within your reach.",
    icon: CheckCircle2,
  }
];

const WhyChoose = () => {
  return (
    <section className="py-24 bg-brand-green text-white overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/4"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold text-brand-blue uppercase tracking-[0.2em] mb-4"
            >
              The ADTEMPCO Advantage
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight"
            >
              Why Choose Our <br /> Cooperative?
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-green-50 mb-12 leading-relaxed max-w-xl"
            >
              We are more than just a business; we are a community-centered enterprise dedicated to providing value and heart in everything we do.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-4"
                >
                  <div className="bg-brand-blue p-3 rounded-xl w-fit">
                    <reason.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold">{reason.title}</h4>
                  <p className="text-green-100 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-green/20">
              <img 
                src="https://picsum.photos/seed/community/800/600" 
                alt="Community Impact" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-2xl hidden md:block">
              <p className="text-brand-blue text-4xl font-black mb-1">98%</p>
              <p className="text-gray-500 font-bold text-sm uppercase tracking-widest">Member Satisfaction</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
