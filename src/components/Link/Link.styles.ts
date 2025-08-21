import { ListItemButton, styled } from '@mui/material';

const ListItemLink = styled(ListItemButton)(({ theme }) => ({
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

export default ListItemLink;
