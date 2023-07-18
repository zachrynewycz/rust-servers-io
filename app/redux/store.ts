import { configureStore } from "@reduxjs/toolkit";
import { modalSlice } from "./slices/modal";
import { filterSlice } from "./slices/filters";
import { serversSlice } from "./slices/servers";

export const store = configureStore({
    reducer: {
        modal: modalSlice.reducer,
        filters: filterSlice.reducer,
        servers: serversSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
