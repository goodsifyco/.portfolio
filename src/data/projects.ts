export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  status: 'Existing website' | 'Current project' | 'In development' | string;
  liveUrl?: string;
  actionText?: string;
  internalLink?: string;
  caseStudyDetails?: string;
  highlights?: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'goodsify-development-website',
    title: 'Goodsify Development',
    category: 'Website / Digital Services',
    description:
      "A website for presenting Goodsify Development's digital services, project enquiries, and available service plans.",
    status: 'Existing website',
    liveUrl: 'https://goodsifydevelopment.ai.studio/',
    actionText: 'View Live Website',
    highlights: [
      'Digital presence for web services',
      'Structured enquiry options',
      'Transparent service plans',
    ],
  },
  {
    id: 'goodsifyco-portfolio',
    title: 'GoodsifyCo Portfolio',
    category: 'Brand / Business Portfolio',
    description:
      "The central portfolio bringing together GoodsifyCo's story, ventures, digital work, and business contact channels.",
    status: 'Current project',
    // Deliberately no unconfirmed public URL - button is omitted gracefully
    highlights: [
      'Multi-page central business hub',
      'Ventures & initiatives directory',
      'Direct founder & business channels',
    ],
  },
  {
    id: 'goodsify-supply-project',
    title: 'Goodsify Supply',
    category: 'Sourcing / Wholesale',
    description:
      'A developing sourcing and wholesale initiative focused on product research, supplier connections, and opportunities for resellers and businesses.',
    status: 'In development',
    internalLink: '/ventures',
    actionText: 'View Venture Details',
    highlights: [
      'Supplier exploration & coordination',
      'Product & market evaluation',
      'Practical sourcing workflows',
    ],
  },
];
