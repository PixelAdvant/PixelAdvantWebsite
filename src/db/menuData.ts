type MenuLink = {
  title: string;
  link: string;
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
  submenu?: SubMenuDataType[];
};


export const menuData: MenuItemDataType[] = [
  {
    title: 'Home',
    link: '/',
  },
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
        link: '/careers',
      },
    ],
  },
  {
    title: 'Solutions',
    link: '/service',
    submenu: [
      {
        title: 'Consulting & Advisory',
        link: '/service-details',
      },
      {
        title: 'Smart Talent Acquisition',
        link: '/service-details',
      },
      {
        title: 'AI Led Talent Supply',
        link: '/service-details',
      },
      {
        title: 'Talent Management',
        link: '/service-details',
      },
      {
        title: 'Managed Services',
        link: '/service-details',
      },
      {
        title: 'Workspace Solutions',
        link: '/service-details',
      },
    ],
  },
  {
    title: 'Models',
    link: '/project',
    submenu: [
      {
        title: 'Captive Model',
        link: '/project-details',
      },
      {
        title: 'Shared Services Model',
        link: '/project-details',
      },
      {
        title: 'Build Operate Transfer',
        link: '/project-details',
      },
    ],
  },
  {
    title: 'Insights',
    link: '/blog',
  },
  {
    title: 'Contact',
    link: '/contact',
  },
];
