import { Autocomplete, styled } from '@mui/material';

export const Search = styled(Autocomplete)(({ theme }) => ({
    '& .MuiInputBase-root.MuiOutlinedInput-root': {
        width: theme.typography.pxToRem(402),
        height: theme.typography.pxToRem(45),
        backgroundColor: theme.palette.background.paper,
        opacity: 1,
        padding: `${theme.typography.pxToRem(13)} ${theme.typography.pxToRem(15)}`,
        borderRadius: theme.typography.pxToRem(16),
        boxSizing: 'border-box',
        boxShadow: `0 ${theme.typography.pxToRem(4)} ${theme.typography.pxToRem(4)} 0 ${theme.palette.grey[400]}`,
    },
})) as typeof Autocomplete;
