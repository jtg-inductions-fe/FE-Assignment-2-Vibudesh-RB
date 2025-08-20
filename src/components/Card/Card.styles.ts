import { List, ListItem, styled } from '@mui/material';

export const Card = styled(List)(({ theme }) => ({
    borderRadius: theme.typography.pxToRem(16),
    padding: theme.typography.pxToRem(24),
}));

export const CardContent = styled(ListItem)(() => ({
    padding: 0,
}));
