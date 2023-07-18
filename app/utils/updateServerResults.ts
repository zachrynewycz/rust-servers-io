import getRustServersByFilter from "../api/getRustServersByFilter";
import { setRustServerData } from "../redux/slices/servers";
import { store } from "../redux/store";

export const updateServerResults = async () => {
    const servers = await getRustServersByFilter(store.getState().filters);
    store.dispatch(setRustServerData(servers.data));
};
