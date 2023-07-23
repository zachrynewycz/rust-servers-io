import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isModalOpen: false,
    isServerInfoModalOpen: false,
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        toggleModal: (state) => {
            state.isModalOpen = !state.isModalOpen;
        },
        toggleIsServerInfoModalOpen: (state) => {
            state.isServerInfoModalOpen = !state.isServerInfoModalOpen;
        },
    },
});

export const { toggleModal, toggleIsServerInfoModalOpen } = modalSlice.actions;
