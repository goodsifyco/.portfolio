export interface Venture {
  id: string;
  name: string;
  tagline: string;
  category: string;
  status: 'Existing website' | 'In development';
  description: string;
  details?: string[];
  areas?: string[];
  buttonText: string;
  buttonLink: string;
  isExternal: boolean;
}

export const VENTURES: Venture[] = [
  {
    id: 'goodsify-development',
    name: 'Goodsify Development',
    tagline: 'Websites, Digital Experiences & Online Solutions',
    category: 'Digital Services & Web Development',
    status: 'Existing website',
    description:
      'Goodsify Development focuses on websites, digital experiences, and online solutions for businesses. The goal is to help businesses establish or improve their online presence through practical digital projects.',
    buttonText: 'Visit Goodsify Development',
    buttonLink: 'https://goodsifydevelopment.ai.studio/',
    isExternal: true,
  },
  {
    id: 'goodsify-supply',
    name: 'Goodsify Supply',
    tagline: 'Product Sourcing, Wholesale & Supplier Connections',
    category: 'Sourcing & Wholesale',
    status: 'In development',
    description:
      'Goodsify Supply focuses on product sourcing, supplier connections, and wholesale opportunities. It grew from practical experience with reselling and a wider interest in helping businesses and resellers explore products, suppliers, and potential supply arrangements.\n\nThe focus is on researching products, exploring supplier options, and coordinating sourcing opportunities where the requirements, pricing, shipping, and terms can be clearly understood.\n\nGoodsify Supply is being developed as part of the wider GoodsifyCo journey, with an emphasis on practical sourcing and building reliable business connections.',
    areas: [
      'Product and supplier research',
      'Sourcing enquiries',
      'Wholesale opportunities',
      'Supplier and product coordination',
    ],
    buttonText: 'Discuss a Sourcing Enquiry',
    buttonLink: '/contact',
    isExternal: false,
  },
  {
    id: 'goodsify-launchlab',
    name: 'Goodsify LaunchLab',
    tagline: 'Business-Launch Support & Entrepreneurial Strategy',
    category: 'Launch Support & Brand Direction',
    status: 'In development',
    description:
      'Goodsify LaunchLab is a business-launch support concept focused on helping aspiring entrepreneurs organize their ideas, explore brand direction, identify their target customers, and map out practical next steps towards getting started.',
    areas: [
      'Business idea organization',
      'Brand direction',
      'Launch planning',
      'Preparing to establish an online presence',
    ],
    buttonText: 'Discuss Your Idea',
    buttonLink: '/contact',
    isExternal: false,
  },
];
