import { Box, styled } from '@mui/material';

import { StyledBoxProps } from './IconButton.types';

export const StyledBox = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'isRounded',
})<StyledBoxProps>(({ theme, isRounded }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: isRounded ? '50%' : '0',
    width: 32,
    height: 32,

    boxShadow: isRounded ? theme.shadows[2] : 'none',
}));
