import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Mail, Linkedin, ArrowUpRight } from 'lucide-react';
import { VENTURES } from '../data/ventures';
import { PROJECTS } from '../data/projects';
import { SOCIAL_LINKS, CONTACT_EMAIL } from '../data/socialLinks';

export const HomePage: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 sm:pt-28 sm:pb-28 bg-gradient-to-b from-sky-50/90 via-sky-50/30 to-slate-50 border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Secondary kicker line */}
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-sky-800 mb-5">
            Built through experience. Driven by ideas. Focused on growth.
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12] mb-6">
            Where Ideas Meet Reality.
          </h1>

          {/* Introduction */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 leading-relaxed font-normal mb-10">
            GoodsifyCo is a growing business brand focused on developing ideas, exploring opportunities, and building practical solutions across digital services, product sourcing, and entrepreneurship.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-xs"
            >
              <span>Explore Our Work</span>
              <ArrowRight className="w-4 h-4 text-slate-300" />
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-medium text-slate-800 bg-white border border-slate-300/80 hover:bg-slate-50 hover:border-slate-400 transition-colors"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-4 h-4 text-sky-700" />
            </Link>
          </div>
        </div>
      </section>

      {/* Short Introduction to the Business */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-700 block mb-2">
                About the Brand
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                A Practical Hub for Growth
              </h2>
            </div>
            <div className="md:col-span-8 space-y-5 text-slate-600 leading-relaxed text-base sm:text-lg font-normal">
              <p>
                GoodsifyCo serves as the central umbrella for our business initiatives, digital projects, and emerging concepts. Rather than confining focus to a single category, GoodsifyCo is built around practical curiosity—identifying areas where real value can be created, tested, and expanded.
              </p>
              <p className="text-base text-slate-600">
                From delivering web solutions through Goodsify Development to researching supply networks and structuring entrepreneurial ideas, each project is approached with realism, discipline, and a commitment to continuous improvement.
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 hover:text-sky-900 transition-colors"
                >
                  <span>Read our story & founder background</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Overview of Our Ventures */}
      <section className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-700 block mb-2">
                Our Ecosystem
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Active & Developing Ventures
              </h2>
            </div>
            <Link
              to="/ventures"
              className="text-sm font-semibold text-sky-700 hover:text-sky-900 inline-flex items-center gap-1"
            >
              <span>Explore all ventures</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VENTURES.map((v) => (
              <div
                key={v.id}
                className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                      {v.category}
                    </span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-sm font-medium ${
                        v.status === 'Existing website'
                          ? 'bg-sky-50 text-sky-700 border border-sky-200/60'
                          : 'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}
                    >
                      {v.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {v.name}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {v.description.split('\n')[0]}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  {v.isExternal ? (
                    <a
                      href={v.buttonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-sky-700 transition-colors"
                    >
                      <span>{v.buttonText}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <Link
                      to={v.buttonLink}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-sky-700 transition-colors"
                    >
                      <span>{v.buttonText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Small Preview of Our Work */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-700 block mb-2">
                Portfolio Preview
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Selected Work & Initiatives
              </h2>
            </div>
            <Link
              to="/work"
              className="text-sm font-semibold text-sky-700 hover:text-sky-900 inline-flex items-center gap-1"
            >
              <span>View full portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <div
                key={p.id}
                className="bg-slate-50/60 border border-slate-200/90 rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3 text-slate-500">
                    <span>{p.category}</span>
                    <span className="font-medium text-slate-600">{p.status}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {p.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60">
                  {p.liveUrl ? (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-sky-700 transition-colors"
                    >
                      <span>{p.actionText || 'View Live Website'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : p.internalLink ? (
                    <Link
                      to={p.internalLink}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-sky-700 transition-colors"
                    >
                      <span>{p.actionText || 'Learn More'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <span className="text-xs text-slate-400 font-medium">
                      Active Business Hub
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 sm:py-20 bg-slate-100/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">
            Have a project, business idea, or opportunity to discuss?
          </h2>
          <p className="text-base text-slate-600 max-w-xl mx-auto mb-8">
            We are always glad to connect with fellow entrepreneurs, businesses, and collaborators interested in practical next steps.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {SOCIAL_LINKS.linkedin.url && (
              <a
                href={SOCIAL_LINKS.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-xs"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span>Connect on LinkedIn</span>
              </a>
            )}

            <a
              href={`mailto:${CONTACT_EMAIL}?subject=GoodsifyCo%20Enquiry`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-medium text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 transition-colors"
            >
              <Mail className="w-4 h-4 text-slate-500" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
