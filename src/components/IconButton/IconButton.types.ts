import { SvgIconComponent } from '@mui/icons-material';

export type IconButtonProps = {
    rounded?: boolean;
    icon: SvgIconComponent;
    onClick?: () => void;
    active?: boolean;
};

export type StyledBoxProps = {
    isRounded?: boolean;
    isActive?: boolean;
};
