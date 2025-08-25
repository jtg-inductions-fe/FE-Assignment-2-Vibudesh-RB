import { Box, ListItemButton, styled } from '@mui/material';

export const ListItemLink = styled(ListItemButton)(({ theme }) => ({
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: theme.spacing(15),
    padding: `${theme.typography.pxToRem(2)} ${theme.typography.pxToRem(16)}`,
    borderRadius: '10px',
    '&:hover': {
        color: theme.palette.primary.main,
        backgroundColor: 'transparent',
    },

    '&.Mui-selected': {
        color: theme.palette.primary.main,
        backgroundColor: 'transparent',
    },
    '&.Mui-selected .MuiTypography-root': {
        color: theme.palette.primary.main,
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

// export const StyledChip=styled(Chip)(({theme})=>({

// }))
