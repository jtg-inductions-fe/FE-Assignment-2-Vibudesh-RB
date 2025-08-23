import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import { Search } from './AutoComplete.styles';
import { AutoCompleteProps } from './AutoComplete.types';
const AutoComplete = ({ options, onChange }: AutoCompleteProps) => (
    <Search
        id="free-solo-demo"
        freeSolo
        onChange={onChange}
        options={options.map((option) => option)}
        renderInput={(params) => (
            <TextField
                {...params}
                placeholder="Search"
                color="primary"
                slotProps={{
                    input: {
                        ...params.InputProps,
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon color="secondary" />
                            </InputAdornment>
                        ),
                    },
                }}
            />
        )}
    />
);

export default AutoComplete;
