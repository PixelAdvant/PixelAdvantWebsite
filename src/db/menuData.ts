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
    title: 'About',
    link: '/about',
  },
  {
    title: 'Solutions',
    link: '/service',
  },
  {
    title: 'Models',
    link: '/project',
  },
  {
    title: 'Products',
    link: '/products/Click 100',
    submenu: [
      {
        title: 'Click 100',
        link: '/products/Click 100',
      },
      {
        title: 'Advantage plus',
        link: '/products/Advantage plus',
      },
      {
        title: 'Prices',
        link: '/products/prices',
      },
    ],
  },
  {
    title: 'Blog',
    link: '/news',
  },
];
