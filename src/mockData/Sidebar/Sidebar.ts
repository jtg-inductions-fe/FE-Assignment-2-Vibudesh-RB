import ReportIcon from '@mui/icons-material/Assessment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';

const sidebarData = [
    [
        {
            label: 'Dashboard',
            to: '/',
            icon: DashboardIcon,
        },

        {
            label: 'Dashboard',
            to: '/dash',
            icon: DashboardIcon,
        },
        {
            label: 'Users',
            icon: PersonIcon,
            children: [
                { label: 'All Users', to: '/users' },
                { label: 'Add User', to: '/users/add' },
                { label: 'All Users', to: '/users' },
            ],
        },
        {
            label: 'Messages',
            to: '/mess',
            icon: EmailIcon,
        },
        {
            label: 'Messages',
            to: '/messages',
            icon: EmailIcon,
            notificationCount: 7,
        },
    ],
    {
        label: 'Messages',
        to: '/me',
        icon: EmailIcon,
        notificationCount: 7,
    },
    {
        label: 'Reports',
        icon: ReportIcon,
        children: [
            { label: 'Sales Report', to: '/reports/sales' },
            { label: 'User Report', to: '/reports/users' },
        ],
    },
    {
        label: 'Notifications',
        to: '/notifications',
        icon: NotificationsIcon,
    },
    [
        {
            label: 'Settings',
            icon: SettingsIcon,
            children: [
                { label: 'General', to: '/settings/general' },
                { label: 'Security', to: '/settings/security' },
            ],
        },
    ],
];

export default sidebarData;
