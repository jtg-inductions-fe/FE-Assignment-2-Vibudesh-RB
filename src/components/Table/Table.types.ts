export type Column = {
    key: string;
    label: string;
    isStatus?: boolean;
};

export type TableProps = {
    title: string;
    description: string;
    columns: Column[];
    data: Record<string, string>[];
};
