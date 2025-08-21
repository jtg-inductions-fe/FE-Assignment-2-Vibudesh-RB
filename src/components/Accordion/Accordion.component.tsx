import Link from 'components/Link/Link.component';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, Typography } from '@mui/material';

import {
    StyledAccordionDetails,
    StyledAccordionSummary,
    StyledBox,
} from './Accordion.styles';
import { AccordionProps } from './Accordion.types';

const AccordionComponent = ({
    label,
    icon: IconComponent,
    children,
}: AccordionProps) => (
    <Accordion elevation={0}>
        <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
            <StyledBox>
                {IconComponent && (
                    <IconComponent style={{ width: 19.2, height: 19.2 }} />
                )}
            </StyledBox>
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
