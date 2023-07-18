import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IServerState {
    rustServerData: any[];
}

const initialState: IServerState = {
    rustServerData: [],
};

export const serversSlice = createSlice({
    name: "servers",
    initialState,
    reducers: {
        setRustServerData: (state, action: PayloadAction<any>) => {
            state.rustServerData = action.payload;
        },
    },
});

export const { setRustServerData } = serversSlice.actions;
