import React from 'react';
import { Linkedin, ExternalLink, ArrowRight } from 'lucide-react';
import { FOUNDER_INFO } from '../data/socialLinks';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-900">
      {/* Page Header */}
      <section className="pt-16 pb-14 sm:pt-20 sm:pb-16 bg-white border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-700 block mb-3">
            About GoodsifyCo
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Our Story
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            A practical look at how GoodsifyCo started, where our focus lies, and the principles that guide our work.
          </p>
        </div>
      </section>

      {/* Main Narrative Section */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 shadow-2xs space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
            <p>
              GoodsifyCo began taking shape in 2024, building on earlier experience selling products through Facebook Marketplace and learning how online selling works in practice.
            </p>

            <p>
              What started with buying, selling, understanding products, and connecting with customers gradually developed into a wider interest in reselling, sourcing, business development, and building brands.
            </p>

            <p>
              As experience grew, so did the ambition. GoodsifyCo began moving beyond individual product sales towards exploring digital services, websites, business launch support, supplier connections, and technology-focused ideas.
            </p>

            <p>
              Today, GoodsifyCo brings these interests together under one brand. We are continuing to learn, build, test ideas, and develop projects with a long-term focus on practical business opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do & Principles */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-700 block mb-2">
              Focus & Scope
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">
              What We Do
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              GoodsifyCo connects business development, digital projects, product sourcing, and entrepreneurial ideas. Each venture has its own focus, while the wider goal is to build useful solutions and explore new opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono font-semibold text-sky-700 block mb-3">01</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Practical Thinking
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Grounding ideas in real-world feasibility, practical steps, and achievable business execution.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono font-semibold text-sky-700 block mb-3">02</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Continuous Learning
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Learning through hands-on experience, exploring new tools, and adapting with every project.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono font-semibold text-sky-700 block mb-3">03</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Long-Term Growth
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Building durable business connections and sustainable opportunities designed to grow over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 shadow-2xs">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-700 block mb-2">
                Leadership
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
                Meet the Founder
              </h2>
              <div className="text-lg font-semibold text-slate-900 mb-6">
                {FOUNDER_INFO.name}
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed text-base mb-8">
                <p>
                  Muhammad Ali is the founder behind GoodsifyCo. His interest in business developed through online selling and reselling, growing into an ambition to build brands, explore digital solutions, connect with suppliers, and develop new business ideas.
                </p>
                <p>
                  Through GoodsifyCo, he is working to bring these interests together while continuing to learn, build practical experience, and explore opportunities for future growth.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href={FOUNDER_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-2xs"
                >
                  <Linkedin className="w-4 h-4 text-sky-400" />
                  <span>Connect with Muhammad on LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-slate-950 px-3 py-2"
                >
                  <span>Contact GoodsifyCo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
