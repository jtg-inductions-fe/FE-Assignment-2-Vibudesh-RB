import { Typography } from '@mui/material';

import { Card, CardContent } from './Card.styles';
import { CardComponentProps } from './Card.types';
import CardContentItem from '../CardContnet/CardContent.component';

const CardComponent = ({ items, title }: CardComponentProps) => (
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
