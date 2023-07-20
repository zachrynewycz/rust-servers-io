import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
    searchQuery: string;
    minPlayers: number;
    maxPlayers: number;
    countries: string[];
    serverTypes: string[];
    sortBy: string;
    nextPageUrl: string;
    prevPageUrl: string;
}

const initialState: FiltersState = {
    searchQuery: "",
    minPlayers: 0,
    maxPlayers: 0,
    countries: [],
    serverTypes: [],
    nextPageUrl: "",
    prevPageUrl: "",
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
        setPrevPageUrl: (state, action: PayloadAction<string>) => {
            state.prevPageUrl = action.payload;
        },
        setNextPageUrl: (state, action: PayloadAction<string>) => {
            state.nextPageUrl = action.payload;
        },
    },
});

export const {
    setSearchQuery,
    setMinPlayers,
    setMaxPlayers,
    resetFilters,
    setCountries,
    setServerTypes,
    setSortBy,
    setNextPageUrl,
    setPrevPageUrl,
} = filterSlice.actions;
