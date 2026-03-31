import React from "react";
import logo from "../assets/logo_without-bg.png";

const Nav = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo + Brand */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-14 h-14" />
          <h2 className="text-xl mt-2 -ml-2 urbanist-norm font-bold text-[#184946]">
            Kraliyet
          </h2>
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-6 text-[#184946] font-bold">
          <a href="#products" className="hover:text-black">
            Products
          </a>
          <a href="#whyus" className="hover:text-black">
            Why Us
          </a>
          <a
            onClick={() => {
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              });
            }}
            className="cursor-pointer hover:text-black"
          >
            Contact
          </a>
        </div>

        {/* CTA */}
        <div>
          <a
            href="#products"
            className="bg-[#184946] text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Buy Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
