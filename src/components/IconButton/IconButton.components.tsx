import { IconButton } from '@mui/material';

import { StyledBox } from './IconButton.styles';
import { IconButtonProps } from './IconButton.types';

const IconButtonComponent = ({
    icon: Icon,
    rounded,
    onClick,
    active = false,
}: IconButtonProps) => (
    <StyledBox isRounded={rounded} isActive={active}>
        <IconButton
            color={active ? 'primary' : 'secondary'}
            onClick={onClick}
            sx={(theme) => ({
                '&:hover': {
                    color: theme.palette.primary.main,
                },
                color: active ? theme.palette.primary.main : undefined,
            })}
        >
            <Icon />
        </IconButton>
    </StyledBox>
);

export default IconButtonComponent;
