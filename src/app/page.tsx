"use client";

import Link from "next/link";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import ServiceModal from "./components/ServiceModal";

export default function Home() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      title: "Paid Advertising",
      description:
        "Transform your digital presence with our data-driven paid advertising strategies. We specialize in creating targeted campaigns that maximize ROI and drive meaningful conversions across all major platforms.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
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
      ),
      shortDesc:
        "Elevate360 enhances your online presence through strategic paid advertising campaigns.",
      features: [
        "Facebook & Instagram Ads",
        "Google Ads Management",
        "Performance Tracking",
        "Audience Targeting",
        "A/B Testing",
        "ROI Optimization",
      ],
      accentColor: "#ff3366",
    },
    {
      title: "Social Media Management",
      description:
        "Elevate your brand's social presence with our comprehensive social media management services. We create engaging content, build meaningful connections, and drive organic growth across all major platforms.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
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
      ),
      shortDesc:
        "Elevate360 drives targeted traffic and maximizes ROI through tailored social media campaigns.",
      features: [
        "Content Creation",
        "Community Management",
        "Analytics & Reporting",
        "Brand Voice Development",
        "Engagement Strategies",
        "Crisis Management",
      ],
      accentColor: "#ff6b4d",
    },
    {
      title: "Web Development",
      description:
        "Create a powerful online presence with our custom web development solutions. We build modern, responsive websites that not only look stunning but also drive conversions and provide exceptional user experiences.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
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
      ),
      shortDesc:
        "Elevate360 delivers custom, high-performance websites that enhance your brand's online presence.",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Custom Solutions",
        "Performance Optimization",
        "Security Implementation",
        "Ongoing Maintenance",
      ],
      accentColor: "#b84dff",
    },
  ];

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
                <div className="glass-card w-full p-6 space-y-6 rounded-3xl">
                  {/* Growth Metrics */}
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[#FAF6E3]/60 text-sm">Total Growth</p>
                      <p className="text-emerald-400 text-2xl font-bold">
                        +147%
                      </p>
                    </div>
                    <div className="animate-pulse">
                      <div className="h-12 w-24 bg-gradient-to-t from-[#B59F78]/20 to-[#B59F78]/5 rounded-xl relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#B59F78]/20"></div>
                        <div className="absolute bottom-0 left-0 w-full h-2 bg-[#B59F78]"></div>
                      </div>
                    </div>
                  </div>

                  {/* Engagement Graph */}
                  <div className="relative h-32">
                    <div className="absolute inset-0 flex items-end justify-between">
                      <div className="w-1/12 h-[20%] bg-[#FAF6E3]/20 rounded-t-lg animate-graph-bar1"></div>
                      <div className="w-1/12 h-[40%] bg-[#FAF6E3]/20 rounded-t-lg animate-graph-bar2"></div>
                      <div className="w-1/12 h-[30%] bg-[#FAF6E3]/20 rounded-t-lg animate-graph-bar3"></div>
                      <div className="w-1/12 h-[60%] bg-[#FAF6E3]/20 rounded-t-lg animate-graph-bar4"></div>
                      <div className="w-1/12 h-[45%] bg-[#FAF6E3]/20 rounded-t-lg animate-graph-bar5"></div>
                      <div className="w-1/12 h-[80%] bg-[#FAF6E3]/20 rounded-t-lg animate-graph-bar6"></div>
                      <div className="w-1/12 h-[70%] bg-[#FAF6E3]/20 rounded-t-lg animate-graph-bar7"></div>
                      <div className="w-1/12 h-[90%] bg-[#FAF6E3]/20 rounded-t-lg animate-graph-bar8"></div>
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
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group cursor-pointer"
                  onClick={() => setSelectedService(index)}
                >
                  <div className="glass-card p-8 rounded-3xl">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 mx-auto relative">
                      <div className="absolute inset-0 bg-white/5 rounded-2xl rotate-45 group-hover:rotate-90 transition-all duration-500"></div>
                      <div className="relative z-10 group-hover:scale-110 transition-transform duration-500">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 text-center">
                      {service.title}
                    </h3>
                    <p className="text-white mb-6 text-center">
                      {service.shortDesc}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center text-white">
                          <span
                            className="w-1.5 h-1.5 rounded-full mr-2"
                            style={{ background: service.accentColor }}
                          ></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-center">
                      <button
                        className="px-8 py-3 rounded-xl text-white font-semibold transition-all duration-300"
                        style={{
                          background: service.accentColor,
                          boxShadow: `0 8px 32px ${service.accentColor}40`,
                        }}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
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

        <Footer />
      </div>

      {/* Service Modals */}
      {services.map((service, index) => (
        <ServiceModal
          key={index}
          isOpen={selectedService === index}
          onClose={() => setSelectedService(null)}
          title={service.title}
          description={service.description}
          features={service.features}
          icon={service.icon}
          accentColor={service.accentColor}
        />
      ))}
    </div>
  );
}
