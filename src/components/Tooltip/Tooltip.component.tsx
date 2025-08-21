import { Tooltip, TooltipProps as MuiTooltipProps } from '@mui/material';

export interface TooltipProps extends MuiTooltipProps {
    children: React.ReactElement;
}

const TooltipComponent = ({ title, children, ...rest }: TooltipProps) => (
    <Tooltip title={title} {...rest}>
        {children}
    </Tooltip>
);

export default TooltipComponent;
