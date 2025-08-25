import { SvgIconComponent } from '@mui/icons-material';

export type SidebarChild = {
    label: string;
    to: string;
};

export type SidebarItem = {
    label: string;
    to?: string;
    icon: SvgIconComponent;
    notificationCount?: number;
    children?: SidebarChild[];
};

export type SidebarProps = {
    items: (SidebarItem | SidebarItem[])[];
};
