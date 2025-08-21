export type AutoCompleteProps = {
    options: string[];
    onChange: (_: React.ChangeEvent<unknown>, value: string | null) => void;
};
