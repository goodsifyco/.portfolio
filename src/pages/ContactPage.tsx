import React, { useState } from 'react';
import { Mail, Linkedin, Copy, Check, ExternalLink, Instagram, Video, ArrowUpRight } from 'lucide-react';
import { SOCIAL_LINKS, FOUNDER_INFO, CONTACT_EMAIL } from '../data/socialLinks';

export const ContactPage: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="bg-slate-50 text-slate-900">
      {/* Header */}
      <section className="pt-16 pb-14 sm:pt-20 sm:pb-16 bg-white border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-700 block mb-3">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Let's Connect
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            Have a project in mind, want to discuss a business opportunity, or interested in working together? Connect with GoodsifyCo through the channels below.
          </p>
        </div>
      </section>

      {/* Primary Contact Channels */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* OPTION 1: LinkedIn */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center mb-6">
                  <Linkedin className="w-5 h-5 text-sky-700" />
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                  Professional Network
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">
                  Connect on LinkedIn
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Follow GoodsifyCo's official company page on LinkedIn for announcements, updates, and direct messaging.
                </p>
              </div>

              <div>
                {SOCIAL_LINKS.linkedin.url && (
                  <a
                    href={SOCIAL_LINKS.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-2xs"
                  >
                    <span>Connect with GoodsifyCo</span>
                    <ExternalLink className="w-4 h-4 text-slate-300" />
                  </a>
                )}
                <p className="text-xs text-slate-400 text-center mt-2.5">
                  Official GoodsifyCo company page
                </p>
              </div>
            </div>

            {/* OPTION 2: Email */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center mb-6">
                  <Mail className="w-5 h-5 text-sky-700" />
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                  Direct Inquiries
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">
                  Email GoodsifyCo
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Send your enquiry directly to our official inbox. We typically reply within 24 to 48 business hours.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=GoodsifyCo%20Enquiry`}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-medium text-white bg-sky-700 hover:bg-sky-800 transition-colors shadow-2xs"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email GoodsifyCo</span>
                </a>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs">
                  <span className="text-slate-700 font-mono select-all truncate">
                    {CONTACT_EMAIL}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 px-2 py-1 rounded text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 transition-colors shrink-0"
                    title="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-medium">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Smaller Founder Contact Block */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                Founder Profile
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Connect with {FOUNDER_INFO.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-lg">
                Connect directly with the founder for partnerships, founder-to-founder dialogue, or collaborative discussions.
              </p>
            </div>

            <a
              href={FOUNDER_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-800 bg-slate-100 hover:bg-slate-200/80 border border-slate-300/80 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-sky-700" />
              <span>Founder LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          {/* Social Channels Section */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
            <h3 className="text-base font-bold text-slate-900 mb-2">
              Social Media Channels
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Official accounts connected to GoodsifyCo.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* LinkedIn */}
              {SOCIAL_LINKS.linkedin.url && (
                <a
                  href={SOCIAL_LINKS.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-slate-100/60 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-sky-700" />
                    <div>
                      <div className="text-xs text-slate-400">LinkedIn</div>
                      <div className="text-sm font-semibold text-slate-900">
                        {SOCIAL_LINKS.linkedin.handle}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-colors" />
                </a>
              )}

              {/* Instagram */}
              {SOCIAL_LINKS.instagram.url && (
                <a
                  href={SOCIAL_LINKS.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-slate-100/60 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <Instagram className="w-4 h-4 text-pink-600" />
                    <div>
                      <div className="text-xs text-slate-400">Instagram</div>
                      <div className="text-sm font-semibold text-slate-900">
                        {SOCIAL_LINKS.instagram.handle}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-colors" />
                </a>
              )}

              {/* TikTok */}
              {SOCIAL_LINKS.tiktok.url ? (
                <a
                  href={SOCIAL_LINKS.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-slate-100/60 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <Video className="w-4 h-4 text-slate-700" />
                    <div>
                      <div className="text-xs text-slate-400">TikTok</div>
                      <div className="text-sm font-semibold text-slate-900">
                        {SOCIAL_LINKS.tiktok.handle}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-colors" />
                </a>
              ) : (
                <div className="p-4 rounded-xl bg-slate-50/50 border border-slate-200/50 flex items-center justify-between opacity-75">
                  <div className="flex items-center gap-3">
                    <Video className="w-4 h-4 text-slate-400" />
                    <div>
                      <div className="text-xs text-slate-400">TikTok</div>
                      <div className="text-sm font-medium text-slate-600">
                        {SOCIAL_LINKS.tiktok.handle}
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    Pending
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
