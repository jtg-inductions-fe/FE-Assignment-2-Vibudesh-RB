import { Box, styled } from '@mui/material';

export const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',

    gap: `${theme.typography.pxToRem(22)}`,
    padding: `${theme.typography.pxToRem(16)} ${theme.typography.pxToRem(6)}`,
}));
