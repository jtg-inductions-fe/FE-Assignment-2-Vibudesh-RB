import React from 'react';

import Link from 'components/Link/Link.component';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, Box, Typography } from '@mui/material';

import {
    StyledAccordionDetails,
    StyledAccordionSummary,
} from './Accordion.styles';
import { AccordionProps } from './Accordion.types';

const AccordionComponent: React.FC<AccordionProps> = ({
    label,
    icon: IconComponent,
    children,
}) => (
    <Accordion elevation={0}>
        <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box
                width={24}
                height={24}
                display="flex"
                alignItems="center"
                justifyContent="center"
                mr={4}
            >
                {IconComponent && (
                    <IconComponent style={{ width: 19.2, height: 19.2 }} />
                )}
            </Box>
            <Typography variant="h4">{label}</Typography>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
            {children.map((child, index) => (
                <Link
                    key={index}
                    to={child.to}
                    icon={child.icon}
                    label={child.label}
                />
            ))}
        </StyledAccordionDetails>
    </Accordion>
);

export default AccordionComponent;
