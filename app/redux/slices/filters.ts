import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
    searchQuery: string;
    minPlayers: number;
    maxPlayers: number;
    page: number;
    countries: string[];
    serverTypes: string[];
    sortBy: string;
}

const initialState: FiltersState = {
    searchQuery: "",
    minPlayers: 0,
    maxPlayers: 0,
    page: 1,
    countries: [],
    serverTypes: [],
    sortBy: "",
};

export const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },
        setMinPlayers: (state, action: PayloadAction<number>) => {
            state.minPlayers = action.payload;
        },
        setMaxPlayers: (state, action: PayloadAction<number>) => {
            state.maxPlayers = action.payload;
        },
        incrementPage: (state) => {
            state.page += 1;
        },
        decrementPage: (state) => {
            state.page = Math.max(state.page - 1, 1);
        },
        resetFilters: () => initialState,
        setCountries: (state, action: PayloadAction<string[]>) => {
            state.countries = [...action.payload];
        },
        setServerTypes: (state, action: PayloadAction<string[]>) => {
            state.serverTypes = [...action.payload];
        },
        setSortBy: (state, action: PayloadAction<string>) => {
            state.sortBy = action.payload;
        },
    },
});

export const {
    setSearchQuery,
    setMinPlayers,
    setMaxPlayers,
    incrementPage,
    decrementPage,
    resetFilters,
    setCountries,
    setServerTypes,
    setSortBy,
} = filterSlice.actions;
