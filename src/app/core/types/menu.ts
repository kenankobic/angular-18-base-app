export interface MenuItem {
    icon: string;
    label: string;
    link: string;
}

export const MENU: MenuItem[] = [
    {
        icon: 'dashboard',
        label: 'Dashboard',
        link: '/dashboard'
    },
    {
        icon: 'people',
        label: 'Users',
        link: '/users'
    },
    {
        icon: 'settings',
        label: 'Settings',
        link: '/settings'
    },
]