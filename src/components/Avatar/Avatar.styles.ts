import { Avatar, styled } from '@mui/material';

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: theme.typography.pxToRem(32),
    height: theme.typography.pxToRem(32),
}));

export default StyledAvatar;
