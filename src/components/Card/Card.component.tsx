import React from 'react';

import { Typography } from '@mui/material';

import { Card, CardContent } from './Card.styles';
import CardContentItem from '../CardContnet/CardContent.component';
import { CardData } from '../CardContnet/CardContent.types';

interface CardComponentProps {
    items: CardData[];
    title: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ items, title }) => (
    <Card>
        <Typography variant="h3">{title}</Typography>
        {items.map((item, index) => (
            <CardContent key={index}>
                <CardContentItem item={item} />
            </CardContent>
        ))}
    </Card>
);

export default CardComponent;
