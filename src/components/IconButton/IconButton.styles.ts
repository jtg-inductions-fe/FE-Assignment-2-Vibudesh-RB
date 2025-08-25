import { Box, styled } from '@mui/material';

import { StyledBoxProps } from './IconButton.types';

export const StyledBox = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'isRounded',
})<StyledBoxProps>(({ theme, isRounded, isActive = false }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: isRounded ? '50%' : '0',
    width: 32,
    height: 32,
    color: isActive ? theme.palette.primary.main : theme.palette.secondary.main,
    boxShadow: isRounded ? theme.shadows[2] : 'none',
}));
