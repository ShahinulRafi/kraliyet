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
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Kraliyet Logo" className="w-16 h-16" />
            <div className="mt-4 -ml-4">
              <h2 className="text-xl text-[#184946] font-bold tracking-wide urbanist-norm ">
                Kraliyet
              </h2>
            </div>
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
              <a href="#home" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-white">
                Products
              </a>
            </li>
            <li>
              <a href="#whyus" className="hover:text-white">
                Why Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          {/* WhatsApp */}
          <a
            href="https://wa.me/8801XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition mb-3"
          >
            <FaWhatsapp />
            <span>WhatsApp</span>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition mb-3"
          >
            <FaFacebookF />
            <span>Facebook</span>
          </a>

          {/* Phone */}
          <p className="flex items-center gap-3 text-gray-400 text-sm mb-2">
            <FaPhoneAlt />
            01XXXXXXXXX
          </p>

          {/* Address */}
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
