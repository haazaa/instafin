import Link from "next/link";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">I</span>
              </div>
              <span className="ml-2 text-xl font-bold">InstaFin</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              AI-powered financial solutions that transform how businesses
              access capital, manage risk, and grow sustainably.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/solutions#smb"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Small Businesses
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions#enterprise"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Large Enterprises
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions#suppliers"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Suppliers
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions#investors"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Investors
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300 text-sm">
                <Mail className="h-4 w-4 mr-2" />
                hello@instafin.com
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Phone className="h-4 w-4 mr-2" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <MapPin className="h-4 w-4 mr-2" />
                San Francisco, CA
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 InstaFin. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
