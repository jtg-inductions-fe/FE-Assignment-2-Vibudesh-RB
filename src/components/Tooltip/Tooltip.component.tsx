import React from 'react';

import { Tooltip } from '@mui/material';

import { TooltipProps } from './Tooltip.types';
const TooltipComponent: React.FC<TooltipProps> = ({ date, sales }) => (
    <Tooltip title={`${date}`}>
        <span>{`Sales: ${sales}`}</span>
    </Tooltip>
);

export default TooltipComponent;
