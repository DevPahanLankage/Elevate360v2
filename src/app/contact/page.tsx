"use client";

import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen overflow-hidden">
      <div className="hero-gradient"></div>
      <div className="relative z-10">
        <Navbar />

        {/* Contact Form Section */}
        <section className="relative pt-20 pb-32">
          <div className="max-w-[85rem] mx-auto px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl font-bold text-white mb-6 sm:text-5xl">
                Get in <span className="excellence-gradient">Touch</span>
              </h2>
            </motion.div>

            <div className="glass-card p-8 rounded-3xl">
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                action="https://api.web3forms.com/submit"
                method="POST"
                className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="19952a92-d88f-439c-bc5d-367f501f2d78"
                />

                <div className="space-y-8 w-full">
                  <div className="space-y-3">
                    <label
                      htmlFor="name"
                      className="block text-white/90 font-bold text-lg"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="glass-input w-full px-12 py-3 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 text-lg"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="space-y-3">
                    <label
                      htmlFor="email"
                      className="block text-white/90 font-bold text-lg"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="glass-input w-full px-12 py-3 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 text-lg"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="space-y-3">
                    <label
                      htmlFor="phone"
                      className="block text-white/90 font-bold text-lg"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="glass-input w-full px-12 py-3 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 text-lg"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div className="space-y-3">
                    <label
                      htmlFor="subject"
                      className="block text-white/90 font-bold text-lg"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="glass-input w-full px-12 py-3 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 text-lg"
                      placeholder="What is this about?"
                    />
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="space-y-3">
                    <label
                      htmlFor="message"
                      className="block text-white/90 font-bold text-lg"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={10}
                      className="glass-input w-full px-12 py-3 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 resize-none text-lg"
                      placeholder="Your message..."
                    ></textarea>
                  </div>

                  <div className="flex justify-start">
                    <button
                      type="submit"
                      className="px-12 py-4 bg-white hover:bg-white/90 rounded-2xl text-[#2A3663] font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </motion.form>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
