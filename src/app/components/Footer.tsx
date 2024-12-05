import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="glass-card static rounded-3xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Elevate360</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Transforming businesses through innovative digital marketing
                solutions.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="mailto:hi.elevate360@gmail.com"
                  className="text-white/70"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
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
                  <Link href="#services" className="text-white/70 text-sm">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-white/70 text-sm">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-white/70 text-sm">
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
                  <Link href="#" className="text-white/70 text-sm">
                    Social Media Marketing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 text-sm">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 text-sm">
                    Brand Strategy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-white/70 text-sm">
                  <a
                    href="mailto:hi.elevate360@gmail.com"
                    className="text-white/70"
                  >
                    hi.elevate360@gmail.com
                  </a>
                </li>
                <li className="text-white/70 text-sm">
                  <a href="tel:+16474714355" className="text-white/70">
                    +1 (647) 471-4355
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
  );
}
