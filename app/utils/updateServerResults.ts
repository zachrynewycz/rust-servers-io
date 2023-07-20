import getRustServersByFilter from "../api/getRustServersByFilter";
import { setNextPageUrl, setPrevPageUrl } from "../redux/slices/filters";
import { setRustServerData } from "../redux/slices/servers";
import { store } from "../redux/store";

export const updateServerResults = async (nextOrPrevPageUrl?: string) => {
    const servers = await getRustServersByFilter(store.getState().filters, nextOrPrevPageUrl);

    if (servers.links.next) store.dispatch(setNextPageUrl(servers.links.next));
    if (servers.links.prev) store.dispatch(setPrevPageUrl(servers.links.prev));
    store.dispatch(setRustServerData(servers.data));
};
