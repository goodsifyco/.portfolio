import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Instagram, Video, ExternalLink } from 'lucide-react';
import { SOCIAL_LINKS, CONTACT_EMAIL } from '../data/socialLinks';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200/80 pt-14 pb-12 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-100">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-3">
            <Link to="/" className="inline-block">
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Goodsify<span className="text-sky-700 font-semibold">Co</span>
              </span>
            </Link>
            <p className="text-sm font-medium text-slate-700">
              Where Ideas Meet Reality.
            </p>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              The central portfolio connecting business projects, digital solutions, product sourcing, and entrepreneurial initiatives.
            </p>
          </div>

          {/* Quick navigation */}
          <div className="md:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3.5">
              Pages
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-slate-600 hover:text-slate-950 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-600 hover:text-slate-950 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/ventures" className="text-slate-600 hover:text-slate-950 transition-colors">
                  Our Ventures
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-slate-600 hover:text-slate-950 transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-slate-950 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Verified channels */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3.5">
              Connect
            </div>
            <div className="space-y-2 text-sm">
              <div>
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=GoodsifyCo%20Enquiry`}
                  className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span className="truncate">{CONTACT_EMAIL}</span>
                </a>
              </div>

              <div className="flex items-center gap-3 pt-2">
                {SOCIAL_LINKS.linkedin.url && (
                  <a
                    href={SOCIAL_LINKS.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md text-slate-500 hover:text-sky-700 hover:bg-slate-50 transition-colors border border-slate-200/60"
                    aria-label="GoodsifyCo on LinkedIn"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}

                {SOCIAL_LINKS.instagram.url && (
                  <a
                    href={SOCIAL_LINKS.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md text-slate-500 hover:text-pink-600 hover:bg-slate-50 transition-colors border border-slate-200/60"
                    aria-label="GoodsifyCo on Instagram"
                    title="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                )}

                {/* TikTok - verified or pending */}
                {SOCIAL_LINKS.tiktok.url ? (
                  <a
                    href={SOCIAL_LINKS.tiktok.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors border border-slate-200/60"
                    aria-label="GoodsifyCo on TikTok"
                    title="TikTok"
                  >
                    <Video className="w-4 h-4" />
                  </a>
                ) : (
                  <span
                    className="p-2 rounded-md text-slate-300 border border-slate-200/40 cursor-not-allowed"
                    title="TikTok profile pending"
                    aria-label="TikTok profile pending confirmation"
                  >
                    <Video className="w-4 h-4" />
                  </span>
                )}
              </div>

              <div className="pt-2 text-xs text-slate-500">
                <a
                  href="https://goodsifydevelopment.ai.studio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-500 hover:text-sky-700 transition-colors"
                >
                  <span>Goodsify Development Live Site</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {currentYear} GoodsifyCo. All rights reserved.</p>
          <p className="text-slate-400">
            Building. Developing. Growing.
          </p>
        </div>
      </div>
    </footer>
  );
};
