import { SvgIconComponent } from '@mui/icons-material';

export type AccordionProps = {
    label: string;
    icon: SvgIconComponent;
    children: {
        label: string;
        to: string;
        icon?: SvgIconComponent;
    }[];
};
