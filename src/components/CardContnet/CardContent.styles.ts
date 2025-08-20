import { Card, CardContent, Stack, styled, Typography } from '@mui/material';

export const CardWrapper = styled(Card)(({ theme }) => ({
    width: '100%',
    boxShadow: 'none',
    padding: `${theme.typography.pxToRem(9)} ${theme.typography.pxToRem(0)}`,
}));

export const CardWrapperContent = styled(CardContent)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,

    '&:last-child': {
        paddingBottom: theme.typography.pxToRem(9),
    },
}));

export const StyledStack = styled(Stack)(() => ({
    display: 'flex',
    alignItems: 'center',
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
}));
