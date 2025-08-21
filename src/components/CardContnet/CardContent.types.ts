export type CardData = {
    type: 'customer' | 'product';
    title: string; // for customer:name | product:title
    subtitle: string; // for customer:email | product:framework
    amount?: number; // for customer:amount in $ (optional)
    finalSales?: number; // for product:number of sales (optional)
    avatar?: string; // optional avatar URL
};

export type CardContentItemProps = {
    item: CardData;
};
