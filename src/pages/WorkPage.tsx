import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Check } from 'lucide-react';
import { PROJECTS } from '../data/projects';

export const WorkPage: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-900">
      {/* Header */}
      <section className="pt-16 pb-14 sm:pt-20 sm:pb-16 bg-white border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-700 block mb-3">
            Portfolio
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Our Work
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            A selection of digital projects and business initiatives connected to the GoodsifyCo journey.
          </p>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-2xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-6 border-b border-slate-100">
                <div>
                  <div className="text-xs text-slate-400 font-mono mb-1">
                    0{idx + 1} · {project.category}
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    {project.title}
                  </h2>
                </div>

                <div>
                  <span
                    className={`text-xs px-2.5 py-1 rounded-sm font-medium inline-block ${
                      project.status === 'Existing website'
                        ? 'bg-sky-50 text-sky-800 border border-sky-200/70'
                        : 'bg-slate-100 text-slate-700 border border-slate-200'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              <p className="text-base text-slate-600 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Highlights if provided */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="mb-8 p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 block mb-2.5">
                    Project Scope & Highlights
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Button */}
              <div className="pt-2">
                {project.liveUrl ? (
                  <div className="space-y-1.5">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-2xs"
                    >
                      <span>{project.actionText || 'View Live Website'}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-300" />
                    </a>
                    <p className="text-xs text-slate-400">
                      External website
                    </p>
                  </div>
                ) : project.internalLink ? (
                  <Link
                    to={project.internalLink}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-slate-800 bg-slate-100 hover:bg-slate-200/80 border border-slate-300/80 transition-colors"
                  >
                    <span>{project.actionText || 'Learn More'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  </Link>
                ) : (
                  <div className="inline-flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <span className="w-2 h-2 rounded-full bg-slate-400" />
                    <span>Central hub active & evolving</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-white border-t border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-3">
            Interested in starting a project or discussing a collaboration?
          </h2>
          <p className="text-sm text-slate-600 max-w-lg mx-auto mb-6">
            We welcome direct enquiries about web development, product sourcing, or entrepreneurial opportunities.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 transition-colors"
          >
            <span>Let's Connect</span>
            <ArrowRight className="w-4 h-4 text-slate-300" />
          </Link>
        </div>
      </section>
    </div>
  );
};
