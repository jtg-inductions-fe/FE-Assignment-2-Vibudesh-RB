import React from 'react';

import { Link } from 'react-router';

import { Box, Chip, Typography } from '@mui/material';

import ListItemLink from './Link.styles';
import { LinkProps } from './Link.types';

const LinkComponent: React.FC<LinkProps> = ({
    key,
    to,
    icon: Icon,
    label,
    notificationCount,
}) => (
    <ListItemLink key={key} component={Link} to={`${to}`}>
        <Box display="flex" alignItems="center">
            <Box
                width={24}
                height={24}
                display="flex"
                alignItems="center"
                justifyContent="center"
                mr={4}
            >
                {Icon ? <Icon style={{ width: 19.2, height: 19.2 }} /> : null}
            </Box>
            <Typography variant="h4">{label}</Typography>
        </Box>
        {notificationCount && (
            <Chip label={notificationCount} size="small" color="primary" />
        )}
    </ListItemLink>
);

export default LinkComponent;
