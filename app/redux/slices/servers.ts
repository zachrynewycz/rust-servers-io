import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IServerState {
    rustServerData: any[];
    selectedServer: any;
}

const initialState: IServerState = {
    rustServerData: [],
    selectedServer: {},
};

export const serversSlice = createSlice({
    name: "servers",
    initialState,
    reducers: {
        setRustServerData: (state, action: PayloadAction<any>) => {
            state.rustServerData = action.payload;
        },
        setSelectedServer: (state, action: PayloadAction<any>) => {
            state.selectedServer = action.payload;
        },
    },
});

export const { setRustServerData, setSelectedServer } = serversSlice.actions;
