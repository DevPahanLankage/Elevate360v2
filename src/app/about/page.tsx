"use client";

import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen overflow-hidden">
      <div className="hero-gradient"></div>
      <div className="relative z-10">
        <Navbar />

        {/* About Hero Section */}
        <section className="relative pt-20 pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h1 className="text-4xl font-bold text-white mb-6 sm:text-5xl">
                About <span className="excellence-gradient">Elevate360</span>
              </h1>
              <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
                We are a team of passionate digital innovators committed to
                transforming businesses through cutting-edge marketing solutions
                and technology.
              </p>
            </motion.div>

            {/* About Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-card p-8 rounded-3xl"
              >
                <h2 className="text-2xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-white/90 leading-relaxed">
                  At Elevate360, our mission is to empower businesses with
                  innovative digital solutions that drive growth and create
                  lasting impact. We combine creativity, technology, and
                  strategy to help our clients thrive in the digital landscape.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="glass-card p-8 rounded-3xl"
              >
                <h2 className="text-2xl font-bold text-white mb-6">
                  Our Vision
                </h2>
                <p className="text-white/90 leading-relaxed">
                  We envision a future where every business, regardless of size,
                  can harness the full potential of digital marketing and
                  technology to achieve extraordinary success and meaningful
                  connections with their audience.
                </p>
              </motion.div>

              {/* Values */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="glass-card p-8 rounded-3xl md:col-span-2"
              >
                <h2 className="text-2xl font-bold text-white mb-6">
                  Our Values
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      Innovation
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      We constantly push boundaries and embrace new technologies
                      to deliver cutting-edge solutions.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      Excellence
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      We strive for excellence in everything we do, ensuring the
                      highest quality in our deliverables.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      Integrity
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      We maintain the highest standards of integrity and
                      transparency in all our client relationships.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Team */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="glass-card p-8 rounded-3xl md:col-span-2"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Our Team</h2>
                <p className="text-white/90 leading-relaxed mb-8">
                  Our diverse team of experts brings together years of
                  experience in digital marketing, design, development, and
                  strategy. We&apos;re united by our passion for creating
                  exceptional digital experiences and driving measurable results
                  for our clients.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-white"
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
                    <h3 className="text-xl font-bold text-white mb-2">
                      Strategy Team
                    </h3>
                    <p className="text-white/90">
                      Digital strategy and business transformation experts
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Creative Team
                    </h3>
                    <p className="text-white/90">
                      Design and content creation specialists
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Tech Team
                    </h3>
                    <p className="text-white/90">
                      Development and technical implementation experts
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
