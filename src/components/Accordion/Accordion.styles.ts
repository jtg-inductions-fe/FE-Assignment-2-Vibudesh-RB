import { AccordionDetails, AccordionSummary, styled } from '@mui/material';

export const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    color: theme.palette.text.primary,
    padding: `${theme.typography.pxToRem(8)} ${theme.typography.pxToRem(16)}`,
    minHeight: theme.spacing(16),
    '& .MuiAccordionSummary-content': {
        margin: 0,
        alignItems: 'center',
    },
    '& .MuiAccordionSummary-content.Mui-expanded': {
        margin: 0,
        padding: 0,
    },

    '&.Mui-expanded': {
        minHeight: theme.spacing(16),
    },
    '&:hover': {
        color: theme.palette.secondary.main,
        backgroundColor: 'transparent',
    },
    '&:active': {
        color: theme.palette.secondary.main,
        backgroundColor: 'transparent',
    },
}));

export const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
    padding: theme.spacing(0),
}));
