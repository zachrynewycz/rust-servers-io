import { createSlice } from "@reduxjs/toolkit";

interface IState {
    showGroupModal: boolean;
}

const INITIAL_STATE: IState = {
    showGroupModal: false,
};

export const uiSlice = createSlice({
    name: "ui",
    initialState: INITIAL_STATE,
    reducers: {
        toggleGroupModal: (state) => {
            state.showGroupModal = !state.showGroupModal;
        },
    },
});

export const { toggleGroupModal } = uiSlice.actions;
