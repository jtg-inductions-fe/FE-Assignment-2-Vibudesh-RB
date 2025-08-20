import { Button as MuiButton, styled } from '@mui/material';

const StyledButton = styled(MuiButton)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
    padding: `${theme.typography.pxToRem(9)} ${theme.typography.pxToRem(17)}`,
    borderRadius: theme.typography.pxToRem(12),
    textTransform: 'inherit',
    '&:hover': {
        backgroundColor: theme.palette.secondary.light,
    },
    '&:active': {
        backgroundColor: theme.palette.secondary.dark,
    },
    '&:disabled': {
        backgroundColor: '#90caf9',
        color: '#e3f2fd',
    },
}));

export default StyledButton;
