import { IconButton } from '@mui/material';

import { StyledBox } from './IconButton.styles';
import { IconButtonProps } from './IconButton.types';

const IconButtonComponent = ({
    icon: Icon,
    rounded,
    onClick,
}: IconButtonProps) => (
    <StyledBox isRounded={rounded}>
        <IconButton color="secondary" onClick={onClick}>
            <Icon />
        </IconButton>
    </StyledBox>
);

export default IconButtonComponent;
