import * as React from 'react';

import StyledAvatar from 'components/Avatar/Avatar.styles';

import { Box, Popover, Typography } from '@mui/material';

import { StyledIconButton } from './ProfilePopOver.styles';
import { ProfilePopoverProps } from './ProfilePopOver.types';

const ProfilePopover = ({ name, email, imageUrl }: ProfilePopoverProps) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
        null,
    );

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'profile-popover' : undefined;

    return (
        <>
            <StyledIconButton onClick={handleClick}>
                <StyledAvatar src={imageUrl} alt={name} />
            </StyledIconButton>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <Box sx={{ p: 2, minWidth: 200 }}>
                    <Typography variant="subtitle1" noWrap>
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" noWrap>
                        {email}
                    </Typography>
                </Box>
            </Popover>
        </>
    );
};

export default ProfilePopover;
