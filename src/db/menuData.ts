type MenuLink = {
  title: string;
  link: string;
  openInNewTab?: boolean;
};

export type MegaColumnDataType = {
  title: string;
  description?: string;
  link?: string;
  openInNewTab?: boolean;
  links: MenuLink[];
};

export type MegaMenuDataType = {
  image: string;
  title: string;
  links: MenuLink[];
};

export type SubMenuDataType = {
  title: string;
  link: string;
  submenu?: MenuLink[];
};

export type MenuItemDataType = {
  title: string;
  link: string;
  megamenu?: MegaMenuDataType[];
  megaColumns?: MegaColumnDataType[];
  submenu?: SubMenuDataType[];
};


export const menuData: MenuItemDataType[] = [
  {
    title: 'About',
    link: '/about',
    submenu: [
      {
        title: 'About Us',
        link: '/about',
      },
      {
        title: 'Leadership Team',
        link: '/team',
      },
      {
        title: 'Careers',
        link: '/jobs',
      },
    ],
  },
  {
    title: 'Solutions',
    link: '/service',
    megaColumns: [
      {
        title: 'Consulting and Advisory',
        description: 'Strategic business guidance',
        links: [
          {
            title: 'GCC Advisory Services',
            link: '/solutions/consulting-advisory',
          },
          {
            title: 'Benchmarking Insights',
            link: '/solutions/consulting-advisory',
          },
          {
            title: 'Market Research',
            link: '/solutions/consulting-advisory',
          },
        ],
      },
      {
        title: 'Talent Solutions',
        description: 'AI-powered hiring solutions',
        links: [
          {
            title: 'Smart Talent Acquisition with AI-Led Innovation',
            link: '/solutions/smart-talent-acquisition',
          },
          {
            title: 'AI Led Talent Supply Process',
            link: '/solutions/ai-led-talent-supply',
          },
          {
            title: 'Talent Management Solutions',
            link: '/solutions/talent-management',
          },
        ],
      },
      {
        title: 'Managed Services',
        description: 'Streamlined business operations',
        links: [
          {
            title: 'End-to-End Managed Services',
            link: '/solutions/managed-services',
          },
          {
            title: 'HR Shared Services',
            link: '/solutions/managed-services',
          },
          {
            title: 'Support Services',
            link: '/solutions/managed-services',
          },
        ],
      },
      {
        title: 'Workspace Solution',
        description: 'Smart workspace planning',
        links: [
          {
            title: 'Innovative Workspace Strategies',
            link: '/solutions/workspace-solutions',
          },
          {
            title: 'Innovative Workspace Design Consultation',
            link: '/solutions/workspace-solutions',
          },
          {
            title: 'Scalable Workspace Solutions',
            link: '/solutions/workspace-solutions',
          },
        ],
      },
    ],
  },
  {
    title: 'Models',
    link: '/project',
    megaColumns: [
      {
        title: 'Captive Model',
        description: 'Dedicated GCC ownership',
        links: [
          {
            title: 'Fully Owned GCC Operations',
            link: '/models/captive-model',
          },
          {
            title: 'Long-Term Capability Build',
            link: '/models/captive-model',
          },
        ],
      },
      {
        title: 'Shared Services Model',
        description: 'Centralized service delivery',
        links: [
          {
            title: 'Multi-Function Delivery Hub',
            link: '/models/shared-services-model',
          },
          {
            title: 'Standardized Service Governance',
            link: '/models/shared-services-model',
          },
        ],
      },
      {
        title: 'Build Operate Transfer',
        description: 'Accelerated setup and transition',
        links: [
          {
            title: 'Faster GCC Launch',
            link: '/models/build-operate-transfer',
          },
          {
            title: 'Structured Ownership Transition',
            link: '/models/build-operate-transfer',
          },
        ],
      },
    ],
  },
  {
    title: 'Products',
    link: '/products',
    megaColumns: [
      {
        title: 'Click 100',
        description: 'Pioneering value-centric workforces with AI and analytics',
        link: 'https://pixeladvant.github.io/Click100-Landing/',
        openInNewTab: true,
        links: [
          {
            title: 'Talent Network',
            link: '/products/click-100',
          },
          {
            title: 'AI/ML Based Recruiting Intelligence',
            link: '/products/click-100',
          },
          {
            title: 'Automation',
            link: '/products/click-100',
          },
        ],
      },
      {
        title: 'Advantage plus',
        description: 'Pioneering value-centric workforces with AI and analytics',
        links: [
          {
            title: 'Advantage Plus',
            link: '/products/advantage-plus',
          },
        ],
      },
    ],
  },
  {
    title: 'Blogs',
    link: '/blog',
  },
  {
    title: 'Jobs',
    link: '/jobs',
  },
  {
    title: 'Contact',
    link: '/contact',
  },
];
