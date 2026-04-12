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
    title: 'About Us',
    link: '/about',
    submenu: [
      { title: 'Leadership Team', link: '/about/leadership-team' },
      { title: 'Careers', link: '/careers' },
      { title: 'Contact Us', link: '/contact' },
    ],
  },
  {
    title: 'Recruitment Solutions',
    link: '/recruitment',
    submenu: [
      { title: 'Click-100 Platform', link: '/click100-platform' },
      { title: 'Consulting & Advisory', link: '/recruitment/advisory-consultancy' },
      { title: 'Smart Talent Acquisition', link: '/recruitment/hire-global-talent' },
      { title: 'Talent Management', link: '/recruitment/workforce-strategy' },
    ],
  },
  {
    title: 'Digital Engineering',
    link: '/digital-engineering',
    submenu: [
      { title: 'Application Engineering', link: '/digital-engineering/application-engineering' },
      { title: 'Quality Engineering', link: '/digital-engineering/quality-engineering' },
      { title: 'Technical & Business Architecture', link: '/digital-engineering/architecture' },
      { title: 'Product Development', link: '/digital-engineering/product-development' },
      { title: 'IT Services', link: '/digital-engineering/it-services' },
      { title: 'Digital Marketing Services', link: '/digital-engineering/digital-marketing-services' },
    ],
  },
  {
    title: 'GCC Solutions',
    link: '/gcc-solutions',
    submenu: [
      { title: 'Consulting and Advisory', link: '/gcc-solutions/consulting-advisory' },
      { title: 'GCC Engagement Models', link: '/gcc-solutions/engagement-models' },
      { title: 'Talent & Workspace Solutions', link: '/gcc-solutions/talent-workspace' },
      { title: 'Legal Services', link: '/gcc-solutions/legal-services' },
    ],
  },
  {
    title: 'Resources',
    link: '/resources',
    submenu: [
      { title: 'Blogs', link: '/blog' },
      { title: 'Whitepapers', link: '/resources/whitepapers' },
      { title: 'Case Studies', link: '/resources/case-studies' },
      { title: 'Brochure', link: '/resources/brochure' },
    ],
  },
];
