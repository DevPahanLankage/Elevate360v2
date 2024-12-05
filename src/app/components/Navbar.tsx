"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <nav className="w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="excellence-gradient text-2xl font-bold">
              Elevate360
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="text-white hover:text-white/80 px-3 py-2 text-base font-bold inline-flex items-center"
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Services
                <svg
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {/* Services Dropdown Menu */}
              <div
                className={`absolute left-0 mt-2 w-64 rounded-xl overflow-hidden transition-all duration-200 ease-in-out origin-top backdrop-blur-3xl bg-white/[0.02] shadow-[0_8px_32px_rgba(0,0,0,0.37)] border border-white/[0.05] z-[100] ${
                  servicesOpen
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <div className="py-2">
                  <Link
                    href="#"
                    className="block px-4 py-3 text-white hover:bg-white/[0.07] transition-colors duration-200"
                  >
                    Digital Strategy
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-3 text-white hover:bg-white/[0.07] transition-colors duration-200"
                  >
                    UX Design
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-3 text-white hover:bg-white/[0.07] transition-colors duration-200"
                  >
                    Digital Design
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-3 text-white hover:bg-white/[0.07] transition-colors duration-200"
                  >
                    Product Design
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-3 text-white hover:bg-white/[0.07] transition-colors duration-200"
                  >
                    Web Development
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-3 text-white hover:bg-white/[0.07] transition-colors duration-200"
                  >
                    Search Engine Optimisation (SEO)
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-3 text-white hover:bg-white/[0.07] transition-colors duration-200"
                  >
                    Strategic Client Services
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-3 text-white hover:bg-white/[0.07] transition-colors duration-200"
                  >
                    Social Media Marketing
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-3 text-white hover:bg-white/[0.07] transition-colors duration-200"
                  >
                    Content Creation
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-3 text-white hover:bg-white/[0.07] transition-colors duration-200"
                  >
                    Brand Strategy
                  </Link>
                </div>
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                className="text-white hover:text-white/80 px-3 py-2 text-base font-bold inline-flex items-center"
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                Solutions
                <svg
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                    solutionsOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {/* Solutions Dropdown Menu */}
              <div
                className={`absolute left-0 mt-2 w-64 rounded-xl overflow-hidden transition-all duration-200 ease-in-out origin-top backdrop-blur-3xl bg-white/[0.02] shadow-[0_8px_32px_rgba(0,0,0,0.37)] border border-white/[0.05] z-[100] ${
                  solutionsOpen
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <div className="py-2">
                  <Link
                    href="#"
                    className="block px-4 py-3 text-white hover:bg-white/[0.07] transition-colors duration-200"
                  >
                    Websites
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-3 text-white hover:bg-white/[0.07] transition-colors duration-200"
                  >
                    Web Applications
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-3 text-white hover:bg-white/[0.07] transition-colors duration-200"
                  >
                    Digital Transformation
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-3 text-white hover:bg-white/[0.07] transition-colors duration-200"
                  >
                    For Startups
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-3 text-white hover:bg-white/[0.07] transition-colors duration-200"
                  >
                    For Enterprise
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-3 text-white hover:bg-white/[0.07] transition-colors duration-200"
                  >
                    Custom Solutions
                  </Link>
                </div>
              </div>
            </div>

            {/* About Link */}
            <Link
              href="/about"
              className="text-white hover:text-white/80 px-3 py-2 text-base font-bold"
            >
              About
            </Link>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-sm text-white px-5 py-2.5 rounded-full text-base font-bold hover:bg-white/20 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-white hover:text-white/80 focus:outline-none glass-card"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 mobile-menu-backdrop"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-full max-w-sm mobile-menu z-50 mobile-menu-enter">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 mobile-menu-item">
                <Link
                  href="/"
                  className="excellence-gradient text-2xl font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  Elevate360
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-white/70 hover:text-white rounded-xl glass-card"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-6 px-6">
                <div className="space-y-6">
                  {/* Services Section */}
                  <div className="mobile-menu-item">
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="flex items-center justify-between w-full text-left text-white font-bold text-lg py-2"
                    >
                      <span>Services</span>
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`mobile-submenu ${
                        servicesOpen ? "expanded" : "collapsed"
                      }`}
                    >
                      {[
                        "Digital Strategy",
                        "UX Design",
                        "Digital Design",
                        "Product Design",
                        "Web Development",
                        "Search Engine Optimisation (SEO)",
                        "Strategic Client Services",
                        "Social Media Marketing",
                        "Content Creation",
                        "Brand Strategy",
                      ].map((service, index) => (
                        <Link
                          key={index}
                          href="#"
                          className="block py-2 pl-4 text-white/70 hover:text-white transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {service}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Solutions Section */}
                  <div className="mobile-menu-item">
                    <button
                      onClick={() => setSolutionsOpen(!solutionsOpen)}
                      className="flex items-center justify-between w-full text-left text-white font-bold text-lg py-2"
                    >
                      <span>Solutions</span>
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${
                          solutionsOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`mobile-submenu ${
                        solutionsOpen ? "expanded" : "collapsed"
                      }`}
                    >
                      {[
                        "Websites",
                        "Web Applications",
                        "Digital Transformation",
                        "For Startups",
                        "For Enterprise",
                        "Custom Solutions",
                      ].map((solution, index) => (
                        <Link
                          key={index}
                          href="#"
                          className="block py-2 pl-4 text-white/70 hover:text-white transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {solution}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/about"
                    className="block text-white font-bold text-lg py-2 mobile-menu-item"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                </div>
              </div>

              <div className="p-6 border-t border-white/10">
                <Link
                  href="/contact"
                  className="block w-full py-3 px-4 bg-white text-[#2A3663] text-center font-bold rounded-xl hover:bg-white/90 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
