function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100 mt-20 pt-16 pb-12 pl-8 sm:pl-14 lg:pl-20 xl:pl-24 pr-4 sm:pr-8 lg:pr-10 xl:pr-12">
      <div className="max-w-[1200px] mx-auto">
        {/* Top 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Brand & Info */}
          <div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-white font-extrabold text-xs shadow-xs">
                DS
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900">
                Dev<span className="text-[#e11d48]">Stack</span>
              </span>
            </div>

            <p className="text-xs text-slate-500 mt-3.5 max-w-[260px] leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            <div className="flex items-center gap-4 mt-5 text-xs font-semibold text-slate-700">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition">
                GitHub
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition">
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Column 2: PRODUCT */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              PRODUCT
            </h4>
            <div className="flex flex-col space-y-2 mt-3.5 text-xs text-slate-500">
              <a href="#home" className="hover:text-slate-900 transition">
                Home
              </a>
              <a href="#technologies" className="hover:text-slate-900 transition">
                Technologies
              </a>
              <a href="#projects" className="hover:text-slate-900 transition">
                Projects
              </a>
            </div>
          </div>

          {/* Column 3: COMPANY */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              COMPANY
            </h4>
            <div className="flex flex-col space-y-2 mt-3.5 text-xs text-slate-500">
              <a href="#about" className="hover:text-slate-900 transition">
                About
              </a>
              <a href="#contact" className="hover:text-slate-900 transition">
                Contact
              </a>
              <a href="#careers" className="hover:text-slate-900 transition">
                Careers
              </a>
            </div>
          </div>

          {/* Column 4: LEGAL */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              LEGAL
            </h4>
            <div className="flex flex-col space-y-2 mt-3.5 text-xs text-slate-500">
              <a href="#privacy" className="hover:text-slate-900 transition">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-slate-900 transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 DevStack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-600 transition">
              Privacy
            </a>
            <a href="#terms" className="hover:text-slate-600 transition">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;