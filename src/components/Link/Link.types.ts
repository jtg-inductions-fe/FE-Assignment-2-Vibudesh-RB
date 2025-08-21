import { SvgIconComponent } from '@mui/icons-material';

export interface LinkProps {
    key: number;
    to: string;
    icon?: SvgIconComponent;
    label: string;
    notificationCount?: number;
}
