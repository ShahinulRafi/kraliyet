import React from "react";
import logo from "../assets/logo_without-bg.png";
import {
  FaWhatsapp,
  FaFacebookF,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#090f0e] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between lg:px-6 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Kraliyet Logo" className="w-14 h-14" />
            <h2 className="mt-2 -ml-3 text-xl text-[#184946] font-bold tracking-wide">
              Kraliyet
            </h2>
          </div>

          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            Premium caps for everyday style. Clean look, solid quality, fast
            delivery.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#home" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-white transition">
                Products
              </a>
            </li>
            <li>
              <a href="#whyus" className="hover:text-white transition">
                Why Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <a
            href="https://wa.me/8801575808989"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition mb-3"
          >
            <FaWhatsapp />
            WhatsApp
          </a>

          <a
            href="https://www.facebook.com/share/18UJAaMfQY/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition mb-3"
          >
            <FaFacebookF />
            Facebook
          </a>

          <p className="flex items-center gap-3 text-gray-400 text-sm mb-2">
            <FaPhoneAlt />
            01575808989
          </p>

          <p className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
            <FaMapMarkerAlt className="mt-1" />
            Chattogram, Bangladesh <br />
            (Delivery Available Nationwide)
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Kraliyet. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
