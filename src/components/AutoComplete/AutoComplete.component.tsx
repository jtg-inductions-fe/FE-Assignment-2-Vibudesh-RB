import React from 'react';

import { useNavigate } from 'react-router';

import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import { Search } from './AutoComplete.styles';
import { AutoCompleteProps } from './AutoComplete.types';
const AutoComplete = ({ options }: AutoCompleteProps) => {
    const navigate = useNavigate();
    const handleChange = (
        _: React.ChangeEvent<unknown>,
        value: string | null,
    ) => {
        if (value) {
            void navigate(`/product/${value}`);
        }
    };
    return (
        <Search>
            <Autocomplete
                id="free-solo-demo"
                freeSolo
                onChange={handleChange}
                options={options.map((option) => option)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder="Search"
                        slotProps={{
                            input: {
                                ...params.InputProps,
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                )}
            />
        </Search>
    );
};

export default AutoComplete;
