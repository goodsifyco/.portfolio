import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Ventures', path: '/ventures' },
  { name: 'Our Work', path: '/work' },
  { name: 'Contact', path: '/contact' },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-xs border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-1 group text-slate-900 focus-visible:outline-2 focus-visible:outline-sky-600 rounded-sm"
            aria-label="GoodsifyCo Home"
          >
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              Goodsify<span className="text-sky-700 font-semibold">Co</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors py-1 relative ${
                    isActive
                      ? 'text-sky-700 font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-sky-600'
                      : 'text-slate-600 hover:text-slate-950'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-slate-900 bg-sky-50 border border-sky-200/80 hover:bg-sky-100 hover:border-sky-300 transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-sky-700" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-sky-600"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 shadow-sm">
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-sky-50 text-sky-800 font-semibold border-l-3 border-sky-600'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <div className="pt-3 border-t border-slate-100">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 transition-colors"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4 text-slate-300" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
