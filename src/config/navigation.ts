import {
    CardStackIcon,
    DashboardIcon,
    ExitIcon,
} from '@radix-ui/react-icons';

export type NavItem = {
    link: string;
    label: string;
    icon: typeof DashboardIcon;
};

export const navigationData: Record<string, NavItem[]> = {
    insurer: [
        { link: '/home', label: 'Home', icon: DashboardIcon },
        { link: '/listings', label: 'Listing', icon: CardStackIcon },
    ],
};

export const footerNavigation = [
    { link: '/logout', label: 'Logout', icon: ExitIcon },
];
