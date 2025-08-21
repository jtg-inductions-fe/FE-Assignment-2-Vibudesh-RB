import { Box, ListItemButton, styled } from '@mui/material';

export const ListItemLink = styled(ListItemButton)(({ theme }) => ({
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: theme.spacing(2),
    '&:hover': {
        color: theme.palette.secondary.main,
        backgroundColor: 'transparent',
    },
    '&:active': {
        color: theme.palette.secondary.main,
        backgroundColor: 'transparent',
    },
})) as typeof ListItemButton;

export const StyledBox = styled(Box)(({ theme }) => ({
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing(4),
}));
