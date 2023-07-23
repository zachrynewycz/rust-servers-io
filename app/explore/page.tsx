import Nav from "../components/Nav/nav";
import ServerModal from "../components/ServerInfoModal/ServerModal";
import ServerList from "../components/ServerList/ServerList";
import Filters from "./Filters";
import Pagination from "./Pagination";
import ServerBrowserHero from "./ServerBrowserHero";

export default function Explore() {
    return (
        <main>
            <Nav />
            <ServerBrowserHero />
            <Filters />
            <ServerList />
            <Pagination />
            <ServerModal />
        </main>
    );
}
