import { ServiceDataType } from "./serviceOneData";

export const servicesTwoData:ServiceDataType[] = [
    {
        id: 1,
        icon: '/img/service/icon/s-icon-1.svg',
        title: 'GCC Advisory Services',
        description: 'Strategic guidance to navigate GCC complexities and optimize operations',
        link: '/service-details',
        delay: '.3',
    },
    {
        id: 2,
        icon: '/img/service/icon/s-icon-2.svg',
        title: 'Talent Heat Maps',
        description: 'Visualize talent distribution across regions to target best hiring locations',
        link: '/service-details',
        delay: '.5',
        active: true,
    },
    {
        id: 3,
        icon: '/img/service/icon/s-icon-3.svg',
        title: 'Location Strategy',
        description: 'Data-driven approach to choose optimal locations for recruitment',
        link: '/service-details',
        delay: '.7',
    },
    {
        id: 4,
        icon: '/img/service/icon/s-icon-4.svg',
        title: 'Talent Optimization',
        description: 'Strategies to attract, develop, and retain workforce aligned with market demands',
        link: '/service-details',
        delay: '.9',
    },
];
