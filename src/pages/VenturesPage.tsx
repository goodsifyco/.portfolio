import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';
import { VENTURES } from '../data/ventures';

export const VenturesPage: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-900">
      {/* Header */}
      <section className="pt-16 pb-14 sm:pt-20 sm:pb-16 bg-white border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-700 block mb-3">
            Business Ecosystem
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Our Ventures
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            GoodsifyCo brings together several areas of business development, each focused on a different opportunity.
          </p>
        </div>
      </section>

      {/* Ventures List */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {VENTURES.map((venture, idx) => {
            const isExternal = venture.isExternal;
            return (
              <div
                key={venture.id}
                className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-2xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-6 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-mono font-semibold text-slate-400 block mb-1">
                      0{idx + 1} · {venture.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                      {venture.name}
                    </h2>
                  </div>

                  <div>
                    <span
                      className={`text-xs px-2.5 py-1 rounded-sm font-medium inline-block ${
                        venture.status === 'Existing website'
                          ? 'bg-sky-50 text-sky-800 border border-sky-200/70'
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {venture.status}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 text-slate-600 leading-relaxed text-base mb-8 whitespace-pre-line">
                  {venture.description}
                </div>

                {/* Areas List if available */}
                {venture.areas && venture.areas.length > 0 && (
                  <div className="mb-8 pt-4 border-t border-slate-100">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-900 block mb-3">
                      Focus Areas & Activities
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {venture.areas.map((area, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                          <span>{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action button */}
                <div className="pt-2">
                  {isExternal ? (
                    <div className="space-y-2">
                      <a
                        href={venture.buttonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-2xs"
                      >
                        <span>{venture.buttonText}</span>
                        <ExternalLink className="w-4 h-4 text-slate-300" />
                      </a>
                      <p className="text-xs text-slate-400">
                        Opens official live website in a new tab
                      </p>
                    </div>
                  ) : (
                    <Link
                      to={venture.buttonLink}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium text-slate-800 bg-slate-100 hover:bg-slate-200/80 border border-slate-300/80 transition-colors"
                    >
                      <span>{venture.buttonText}</span>
                      <ArrowRight className="w-4 h-4 text-slate-500" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom context note */}
      <section className="py-12 bg-white border-t border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500">
          <p>
            Venture scopes, sourcing criteria, and project arrangements are confirmed individually.
          </p>
        </div>
      </section>
    </div>
  );
};
