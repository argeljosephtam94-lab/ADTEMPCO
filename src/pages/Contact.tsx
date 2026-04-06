import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram } from 'lucide-react';

const Contact = () => {
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
            Get in Touch
          </motion.h1>
          <p className="text-xl text-green-50 max-w-2xl mx-auto leading-relaxed font-medium">
            Have questions about our services or want to become a member? We're here to help you with an open heart.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-extrabold text-blue-900 mb-6">Contact Information</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Reach out to us through any of our channels. Our team is ready to assist you with your inquiries.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-green/10 p-3 rounded-xl">
                      <MapPin className="h-6 w-6 text-brand-green" />
                    </div>
                    <div>
                      <p className="font-bold text-brand-blue">Main Office</p>
                      <p className="text-gray-600">Bangued, Abra, Philippines</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-green/10 p-3 rounded-xl">
                      <Phone className="h-6 w-6 text-brand-green" />
                    </div>
                    <div>
                      <p className="font-bold text-brand-blue">Phone</p>
                      <p className="text-gray-600">+63 (XXX) XXX-XXXX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-green/10 p-3 rounded-xl">
                      <Mail className="h-6 w-6 text-brand-green" />
                    </div>
                    <div>
                      <p className="font-bold text-brand-blue">Email</p>
                      <p className="text-gray-600">info@adtempco.org</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-brand-blue mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-100 p-4 rounded-2xl hover:bg-brand-green hover:text-white transition-all">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="bg-gray-100 p-4 rounded-2xl hover:bg-brand-green hover:text-white transition-all">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="bg-gray-100 p-4 rounded-2xl hover:bg-brand-green hover:text-white transition-all">
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-gray-100"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:ring-2 focus:ring-brand-green outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:ring-2 focus:ring-brand-green outline-none transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:ring-2 focus:ring-brand-green outline-none transition-all appearance-none">
                    <option>General Inquiry</option>
                    <option>Membership Application</option>
                    <option>Business Partnership</option>
                    <option>Enterprise Feedback</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                  <textarea 
                    rows={5}
                    placeholder="How can we help you today?"
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:ring-2 focus:ring-brand-green outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button className="w-full bg-brand-green text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-blue transition-all shadow-xl shadow-brand-green/10 flex items-center justify-center space-x-2">
                  <span>Send Message</span>
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
