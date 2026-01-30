import React, { useState } from "react";
import useDataContext from "../contexts/DataContext";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import HeaderInfo from "./HeaderInfo";

const Header = () => {
  const { header } = useDataContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // todo: add more content.

  return (
    <header className="bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">

        {/* Logo */}
        <a
          href="/"
          aria-label="Regas Trading FZE homepage"
          className="flex items-center mx-auto lg:mx-0"
        >
          <img
            src="/brand_logo_nobg.png"
            alt="Regas Trading FZE company logo"
            className="aspect-video h-24 md:h-27"
          />
        </a>

        {/* Contact Info */}
        <HeaderInfo />
      </div>

      <nav className="bg-black" aria-label="Main navigation">
        {/* Desktop Navigation */}
        <ul className="hidden lg:flex justify-center items-center gap-1">
          {header.navigation.map((navItem, index) => (
            <li key={index} className="relative">
              <NavLink
                to={navItem.href}
                className="block uppercase font-medium text-sm xl:text-base px-4 xl:px-6 py-4 hover:bg-gray-800 transition-colors"
              >
                {navItem.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full px-4 py-4 flex justify-between items-center hover:bg-gray-800 transition-colors"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="uppercase font-medium text-sm">Menu</span>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {isMobileMenuOpen && (
            <ul className="bg-gray-900">
              {header.navigation.map((navItem, index) => (
                <li key={index} className="border-t border-gray-800">
                  <NavLink
                    to={navItem.href}
                    onClick={() => {
                      // setPage(navItem.name);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block uppercase font-medium text-sm px-4 py-3 hover:bg-gray-800 transition-colors"
                  >
                    {navItem.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
