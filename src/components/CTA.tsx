import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, MapPin } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-green rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-green-100"
        >
          {/* Decorative circles */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 rounded-full opacity-20"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/5 rounded-full opacity-20"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Ready to be part of our <span className="text-brand-blue">Growing Community?</span>
            </h2>
            <p className="text-xl text-green-50 leading-relaxed">
              Whether you're looking for quality services or want to become a member-owner, we're here to serve you with a heart.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center bg-brand-blue text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-brand-blue transition-all shadow-xl"
              >
                Become a Member
                <Users className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/branches"
                className="inline-flex items-center justify-center bg-white/10 text-white border-2 border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all"
              >
                Locate a Branch
                <MapPin className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <p className="text-green-200 text-sm font-medium pt-4">
              Join over 50,000 members who trust ADTEMPCO for their daily needs.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
