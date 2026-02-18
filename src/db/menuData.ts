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
    link: '/pricing',
  },
  {
    title: 'Blog',
    link: '/news',
  },
];
