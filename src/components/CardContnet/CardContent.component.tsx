import React from 'react';

import StyledAvatar from 'components/Avatar/Avatar.styles';

import { Divider, Stack, Typography } from '@mui/material';

import {
    CardWrapper,
    CardWrapperContent,
    StyledStack,
    StyledTypography,
} from './CardContent.styles';
import { CardData } from './CardContent.types';
interface CardContentItemProps {
    item: CardData;
}

const CardContentItem: React.FC<CardContentItemProps> = ({ item }) => (
    <CardWrapper>
        <CardWrapperContent>
            <StyledStack direction="row" spacing={2} alignItems="center">
                {item.avatar && (
                    <StyledAvatar alt={item.title} src={item.avatar} />
                )}
                <div>
                    <Typography variant="subtitle1">{item.title}</Typography>
                    <StyledTypography variant="caption">
                        {item.subtitle}
                    </StyledTypography>
                </div>
            </StyledStack>

            {item.amount !== undefined && (
                <Typography variant="subtitle1">
                    {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                    }).format(item.amount)}
                </Typography>
            )}

            {item.finalSales !== undefined && (
                <Stack direction="row" alignItems={'center'} spacing={1}>
                    <Typography variant="subtitle1">
                        {item.finalSales}
                    </Typography>

                    <StyledTypography variant="subtitle1">
                        sales
                    </StyledTypography>
                </Stack>
            )}
        </CardWrapperContent>
        <Divider />
    </CardWrapper>
);

export default CardContentItem;
