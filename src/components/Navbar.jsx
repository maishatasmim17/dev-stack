import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-2xs transition-all">
      <div className="max-w-[1200px] mx-auto pl-8 sm:pl-14 lg:pl-20 xl:pl-24 pr-4 sm:pr-8 lg:pr-10 xl:pr-12 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-white font-extrabold text-sm shadow-xs">
            DS
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            DevStack
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a
            href="#home"
            className="text-[#e11d48] font-semibold hover:text-[#be123c] transition"
          >
            Home
          </a>
          <a
            href="#technologies"
            className="text-slate-600 font-medium hover:text-slate-900 transition"
          >
            Technologies
          </a>
          <a
            href="#projects"
            className="text-slate-600 font-medium hover:text-slate-900 transition"
          >
            Projects
          </a>
          <a
            href="#about"
            className="text-slate-600 font-medium hover:text-slate-900 transition"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-slate-600 font-medium hover:text-slate-900 transition"
          >
          </a>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-5">
          <button className="text-sm font-semibold text-slate-700 hover:text-slate-900 transition cursor-pointer">
            Sign In
          </button>
          <button className="px-5 py-2 rounded-full bg-[#e11d48] hover:bg-[#be123c] text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs cursor-pointer">
            Sign Up
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button className="px-4 py-1.5 rounded-full bg-[#e11d48] text-white text-xs font-semibold">
            Sign Up
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-1.5 text-slate-700 hover:text-slate-900 text-xl font-bold cursor-pointer"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 bg-white border-b border-gray-100 space-y-3">
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="block text-[#e11d48] font-semibold py-1"
          >
            Home
          </a>
          <a
            href="#technologies"
            onClick={() => setMenuOpen(false)}
            className="block text-slate-600 font-medium py-1"
          >
            Technologies
          </a>
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="block text-slate-600 font-medium py-1"
          >
            Projects
          </a>
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="block text-slate-600 font-medium py-1"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block text-slate-600 font-medium py-1"
          >
            Contact
          </a>
          <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
            <button className="text-sm font-semibold text-slate-700 py-1">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;