/**
 * Central configuration for GoodsifyCo verified channels and social profiles.
 * Update links here as profiles are confirmed or launched.
 */

export interface SocialLink {
  id: string;
  name: string;
  handle: string;
  url: string | null; // null if unconfirmed or pending
  isLive: boolean;
}

export const SOCIAL_LINKS: Record<string, SocialLink> = {
  linkedin: {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: 'GoodsifyCo',
    url: 'https://www.linkedin.com/company/goodsifyco/',
    isLive: true,
  },
  instagram: {
    id: 'instagram',
    name: 'Instagram',
    handle: 'GoodsifyCo',
    url: 'https://www.instagram.com/goodsifyco/',
    isLive: true,
  },
  tiktok: {
    id: 'tiktok',
    name: 'TikTok',
    handle: 'GoodsifyCo',
    url: null, // Profile link pending confirmation; kept unclickable to avoid broken links
    isLive: false,
  },
  email: {
    id: 'email',
    name: 'Email',
    handle: 'shopgoodsifyco@gmail.com',
    url: 'mailto:shopgoodsifyco@gmail.com?subject=GoodsifyCo%20Enquiry',
    isLive: true,
  },
};

export const FOUNDER_INFO = {
  name: 'Muhammad Ali',
  role: 'Founder',
  linkedinUrl: 'https://sa.linkedin.com/in/muhammad-ali-9a0b182ba',
};

export const CONTACT_EMAIL = 'shopgoodsifyco@gmail.com';
