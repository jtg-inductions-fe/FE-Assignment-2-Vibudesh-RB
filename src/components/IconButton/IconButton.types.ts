import { SvgIconComponent } from '@mui/icons-material';

export type IconButtonProps = {
    rounded?: boolean;
    icon: SvgIconComponent;
    onClick?: () => void;
};

export type StyledBoxProps = {
    isRounded?: boolean;
};
