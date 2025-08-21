import { Typography } from '@mui/material';
import { ButtonProps } from '@mui/material/Button';

import StyledButton from './Button.styles';

const CustomButton = ({ children, ...props }: ButtonProps) => (
    <StyledButton {...props}>
        <Typography variant="button">{children}</Typography>
    </StyledButton>
);

export default CustomButton;
