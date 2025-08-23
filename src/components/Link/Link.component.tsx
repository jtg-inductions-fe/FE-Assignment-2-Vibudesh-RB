import { Link } from 'react-router';

import { Box, Chip, Typography } from '@mui/material';

import { ListItemLink, StyledBox } from './Link.styles';
import { LinkProps } from './Link.types';

const LinkComponent = ({
    key,
    to,
    icon: Icon,
    label,
    notificationCount,
}: LinkProps) => (
    <ListItemLink key={key} component={Link} to={`${to}`}>
        <Box display="flex" alignItems="center">
            <StyledBox>
                {Icon ? <Icon style={{ width: 19.2, height: 19.2 }} /> : null}
            </StyledBox>
            <Typography variant="h4">{label}</Typography>
        </Box>
        {notificationCount && (
            <Chip label={notificationCount} size="small" color="primary" />
        )}
    </ListItemLink>
);

export default LinkComponent;
