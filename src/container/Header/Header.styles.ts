import { Box, Stack, styled } from '@mui/material';

export const StyledHeader = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `${theme.typography.pxToRem(12)} ${theme.typography.pxToRem(20)}`,
    position: 'sticky',
    top: 0,
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: `${theme.palette.primary.contrastText}`,
    border: `${theme.typography.pxToRem(1)} solid ${theme.palette.grey[200]}`,
}));

export const HeaderBox = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
}));
