import { Link, useLocation } from 'react-router'; // react-router-dom is typical

import { Box, Chip, Typography } from '@mui/material';

import { ListItemLink, StyledBox } from './Link.styles';
import { LinkProps } from './Link.types';

const LinkComponent = ({
    to,
    icon: Icon,
    label,
    notificationCount,
}: LinkProps) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <ListItemLink component={Link} to={to} selected={isActive}>
            <Box display="flex" alignItems="center">
                <StyledBox>
                    {Icon ? (
                        <Icon style={{ width: 19.2, height: 19.2 }} />
                    ) : null}
                </StyledBox>
                <Typography variant="h4">{label}</Typography>
            </Box>
            {notificationCount && (
                <Chip
                    label={notificationCount}
                    size="small"
                    color="warning"
                    variant="filled"
                    sx={(theme) => ({ color: theme.palette.error.main })}
                />
            )}
        </ListItemLink>
    );
};

export default LinkComponent;
