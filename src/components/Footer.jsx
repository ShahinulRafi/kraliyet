import React from "react";
import logo from "../assets/logo_without-bg.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Kraliyet Logo" className="w-14 h-14" />
            <h2 className="text-2xl font-bold tracking-wide">
              Kraliyet
            </h2>
          </div>

          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            Premium caps built for everyday style. Clean design, reliable quality, and fast delivery.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Products</li>
            <li className="hover:text-white cursor-pointer">Order</li>
          </ul>
        </div>

        {/* Social + Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>

          <div className="flex gap-4 mb-4">
            <a className="hover:text-gray-300 transition">
              {/* Twitter */}
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775..." />
              </svg>
            </a>

            <a className="hover:text-gray-300 transition">
              {/* YouTube */}
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631..." />
              </svg>
            </a>

            <a className="hover:text-gray-300 transition">
              {/* Facebook */}
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5..." />
              </svg>
            </a>
          </div>

          <p className="text-gray-400 text-sm">
            Contact: 01XXXXXXXXX
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Kraliyet. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;