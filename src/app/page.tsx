"use client";

import Link from "next/link";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: "-50px",
      }
    );

    const animatedElements = document.querySelectorAll(
      ".fade-up, .slide-in-left, .slide-in-right"
    );
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <div className="hero-gradient"></div>
      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section className="relative min-h-screen pt-8 sm:pt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12 2xl:gap-16">
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-lg mb-4 block font-bold"
                >
                  <span className="text-white">
                    Driven by Results, Defined by{" "}
                  </span>
                  <span className="excellence-gradient">Excellence</span>
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl"
                >
                  <span className="block text-white xl:inline">
                    Transform Your
                  </span>{" "}
                  <span className="block excellence-gradient xl:inline">
                    Digital Presence
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-6 text-lg text-white font-bold sm:mt-8 sm:text-xl leading-relaxed sm:leading-relaxed max-w-3xl"
                >
                  Elevate360 is a results-driven marketing agency focused on
                  enhancing your brand through innovative strategies and
                  customized solutions. We specialize in social media campaigns,
                  website development, cold calling, and building a strong
                  online presence to drive business success.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-start"
              >
                {/* Analytics Dashboard */}
                <div className="glass-card w-full p-6 space-y-6">
                  {/* Growth Metrics */}
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[#FAF6E3]/60 text-sm">Total Growth</p>
                      <p className="text-emerald-400 text-2xl font-bold">
                        +147%
                      </p>
                    </div>
                    <div className="animate-pulse">
                      <div className="h-12 w-24 bg-gradient-to-t from-[#B59F78]/20 to-[#B59F78]/5 rounded-lg relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#B59F78]/20"></div>
                        <div className="absolute bottom-0 left-0 w-full h-2 bg-[#B59F78]"></div>
                      </div>
                    </div>
                  </div>

                  {/* Engagement Graph */}
                  <div className="relative h-32">
                    <div className="absolute inset-0 flex items-end justify-between">
                      <div className="w-1/12 h-[20%] bg-[#FAF6E3]/20 rounded-t animate-graph-bar1"></div>
                      <div className="w-1/12 h-[40%] bg-[#FAF6E3]/20 rounded-t animate-graph-bar2"></div>
                      <div className="w-1/12 h-[30%] bg-[#FAF6E3]/20 rounded-t animate-graph-bar3"></div>
                      <div className="w-1/12 h-[60%] bg-[#FAF6E3]/20 rounded-t animate-graph-bar4"></div>
                      <div className="w-1/12 h-[45%] bg-[#FAF6E3]/20 rounded-t animate-graph-bar5"></div>
                      <div className="w-1/12 h-[80%] bg-[#FAF6E3]/20 rounded-t animate-graph-bar6"></div>
                      <div className="w-1/12 h-[70%] bg-[#FAF6E3]/20 rounded-t animate-graph-bar7"></div>
                      <div className="w-1/12 h-[90%] bg-[#FAF6E3]/20 rounded-t animate-graph-bar8"></div>
                    </div>
                  </div>

                  {/* Scrolling Metrics */}
                  <div className="space-y-3 overflow-hidden relative h-24">
                    <div className="animate-metric-scroll">
                      <div className="flex justify-between items-center py-2">
                        <span className="text-[#FAF6E3]/80 font-bold">
                          Instagram Reach
                        </span>
                        <span className="text-emerald-400 font-bold">
                          +82.6%
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-[#FAF6E3]/80 font-bold">
                          Facebook Engagement
                        </span>
                        <span className="text-emerald-400 font-bold">
                          +63.2%
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-[#FAF6E3]/80 font-bold">
                          LinkedIn Connections
                        </span>
                        <span className="text-emerald-400 font-bold">
                          +91.4%
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-[#FAF6E3]/80 font-bold">
                          Twitter Impressions
                        </span>
                        <span className="text-emerald-400 font-bold">
                          +75.8%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Live Indicators */}
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-[#FAF6E3]/60 text-sm">
                      Live Analytics
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl font-bold text-white mb-6 sm:text-5xl">
                Our <span className="excellence-gradient">Services</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service cards */}
              <div className="group">
                <div className="glass-card p-8 rounded-3xl">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 mx-auto relative">
                    <div className="absolute inset-0 bg-white/5 rounded-2xl rotate-45 group-hover:rotate-90 transition-all duration-500"></div>
                    <svg
                      className="w-8 h-8 text-white relative z-10 group-hover:scale-110 transition-transform duration-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">
                    Paid Advertising
                  </h3>
                  <p className="text-white mb-6 text-center">
                    Elevate360 enhances your online presence through strategic
                    paid advertising campaigns.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-white">
                      <span className="w-1.5 h-1.5 bg-[#ff3366] rounded-full mr-2"></span>
                      Facebook &amp; Instagram Ads
                    </li>
                    <li className="flex items-center text-white">
                      <span className="w-1.5 h-1.5 bg-[#ff3366] rounded-full mr-2"></span>
                      Google Ads Management
                    </li>
                    <li className="flex items-center text-white">
                      <span className="w-1.5 h-1.5 bg-[#ff3366] rounded-full mr-2"></span>
                      Performance Tracking
                    </li>
                  </ul>
                </div>
              </div>

              <div className="group">
                <div className="glass-card p-8 rounded-3xl">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 mx-auto relative">
                    <div className="absolute inset-0 bg-white/5 rounded-2xl rotate-45 group-hover:rotate-90 transition-all duration-500"></div>
                    <svg
                      className="w-8 h-8 text-white relative z-10 group-hover:scale-110 transition-transform duration-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">
                    Social Media Management
                  </h3>
                  <p className="text-white mb-6 text-center">
                    Elevate360 drives targeted traffic and maximizes ROI through
                    tailored social media campaigns.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-white">
                      <span className="w-1.5 h-1.5 bg-[#ff6b4d] rounded-full mr-2"></span>
                      Content Creation
                    </li>
                    <li className="flex items-center text-white">
                      <span className="w-1.5 h-1.5 bg-[#ff6b4d] rounded-full mr-2"></span>
                      Community Management
                    </li>
                    <li className="flex items-center text-white">
                      <span className="w-1.5 h-1.5 bg-[#ff6b4d] rounded-full mr-2"></span>
                      Analytics & Reporting
                    </li>
                  </ul>
                </div>
              </div>

              <div className="group">
                <div className="glass-card p-8 rounded-3xl">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 mx-auto relative">
                    <div className="absolute inset-0 bg-white/5 rounded-2xl rotate-45 group-hover:rotate-90 transition-all duration-500"></div>
                    <svg
                      className="w-8 h-8 text-white relative z-10 group-hover:scale-110 transition-transform duration-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">
                    Web Development
                  </h3>
                  <p className="text-white mb-6 text-center">
                    Elevate360 delivers custom, high-performance websites that
                    enhance your brand's online presence.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-white">
                      <span className="w-1.5 h-1.5 bg-[#b84dff] rounded-full mr-2"></span>
                      Responsive Design
                    </li>
                    <li className="flex items-center text-white">
                      <span className="w-1.5 h-1.5 bg-[#b84dff] rounded-full mr-2"></span>
                      SEO Optimization
                    </li>
                    <li className="flex items-center text-white">
                      <span className="w-1.5 h-1.5 bg-[#b84dff] rounded-full mr-2"></span>
                      Custom Solutions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="relative pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl font-bold text-white mb-6 sm:text-5xl">
                Client <span className="excellence-gradient">Success</span>{" "}
                Stories
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <div className="glass-card p-8 rounded-3xl">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mr-4">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Cashnuja Vanderwall
                      </h3>
                      <p className="text-white/80">Director, TicketVaultLK</p>
                    </div>
                  </div>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    "Elevate360 transformed our online presence. Their strategic
                    approach to social media management resulted in a 200%
                    increase in engagement."
                  </p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="glass-card p-8 rounded-3xl">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mr-4">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Krithika Najumudeen
                      </h3>
                      <p className="text-white/80">
                        Brand Manager, Soul&Beat - Official
                      </p>
                    </div>
                  </div>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    "The web development team at Elevate360 delivered beyond our
                    expectations. Our new website has significantly improved our
                    conversion rates."
                  </p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="relative pb-32">
          <div className="max-w-[85rem] mx-auto px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl font-bold text-white mb-6 sm:text-5xl">
                Get in <span className="excellence-gradient">Touch</span>
              </h2>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
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
                    className="w-full px-12 py-3 rounded-2xl glass-card no-hover !transform-none !transition-none text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 text-lg"
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
                    className="w-full px-12 py-3 rounded-2xl glass-card no-hover !transform-none !transition-none text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 text-lg"
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
                    className="w-full px-12 py-3 rounded-2xl glass-card no-hover !transform-none !transition-none text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 text-lg"
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
                    className="w-full px-12 py-3 rounded-2xl glass-card no-hover !transform-none !transition-none text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 text-lg"
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
                    className="w-full px-12 py-3 rounded-2xl glass-card no-hover !transform-none !transition-none text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 resize-none text-lg"
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
        </section>

        {/* Footer */}
        <footer className="mt-16 pb-8">
          <div className="container mx-auto px-6">
            <div className="glass-card no-hover rounded-3xl p-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Company Info */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    Elevate360
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Transforming businesses through innovative digital marketing
                    solutions.
                  </p>
                  <div className="flex space-x-4">
                    <Link
                      href="#"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </Link>
                    <Link
                      href="#"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                    <Link
                      href="#"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Quick Links
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="#services"
                        className="text-white/70 hover:text-white text-sm transition-colors"
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#testimonials"
                        className="text-white/70 hover:text-white text-sm transition-colors"
                      >
                        Testimonials
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#contact"
                        className="text-white/70 hover:text-white text-sm transition-colors"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Services */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Services
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="#"
                        className="text-white/70 hover:text-white text-sm transition-colors"
                      >
                        Social Media Marketing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-white/70 hover:text-white text-sm transition-colors"
                      >
                        Content Creation
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-white/70 hover:text-white text-sm transition-colors"
                      >
                        Brand Strategy
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Contact */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Contact
                  </h3>
                  <ul className="space-y-2">
                    <li className="text-white/70 text-sm">
                      <a
                        href="mailto:hello@elevate360.com"
                        className="hover:text-white transition-colors"
                      >
                        hello@elevate360.com
                      </a>
                    </li>
                    <li className="text-white/70 text-sm">
                      <a
                        href="tel:+1234567890"
                        className="hover:text-white transition-colors"
                      >
                        +1 (234) 567-890
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Copyright */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-center text-white/50 text-sm">
                  © {new Date().getFullYear()} Elevate360. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
