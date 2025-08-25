import { SvgIconComponent } from '@mui/icons-material';

export type LinkProps = {
    key?: number;
    to: string;
    icon?: SvgIconComponent;
    label: string;
    notificationCount?: number;
};
