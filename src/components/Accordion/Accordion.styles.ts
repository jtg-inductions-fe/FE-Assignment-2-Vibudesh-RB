import { AccordionDetails, AccordionSummary, Box, styled } from '@mui/material';

export const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    color: theme.palette.text.primary,
    padding: `${theme.typography.pxToRem(2)} ${theme.typography.pxToRem(16)}`,
    borderRadius: `${theme.typography.pxToRem(10)}`,
    minHeight: theme.spacing(6),

    '& .MuiAccordionSummary-content': {
        margin: 0,
        alignItems: 'center',
    },
    '& .MuiAccordionSummary-content.Mui-expanded': {
        margin: 0,
        padding: 0,
    },

    '&.Mui-expanded': {
        minHeight: theme.spacing(6),
    },

    '&:hover': {
        color: theme.palette.primary.main,
        backgroundColor: 'transparent',
    },
}));

export const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: `${theme.typography.pxToRem(22)} 0 ${theme.typography.pxToRem(16)}`,
}));

export const StyledBox = styled(Box)(({ theme }) => ({
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing(4),
}));
