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
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white/80 focus:outline-none"
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
        <div className="md:hidden bg-black/50 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="#services"
              className="text-white/70 hover:text-white block px-3 py-2 text-base"
            >
              Services
            </Link>
            <Link
              href="#testimonials"
              className="text-white/70 hover:text-white block px-3 py-2 text-base"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-white/70 hover:text-white block px-3 py-2 text-base"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
