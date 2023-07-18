import Nav from "../components/Nav/nav";
import Filters from "./Filters";
import ServerBrowserHero from "./ServerBrowserHero";

export default function Explore() {
    return (
        <main>
            <Nav />
            <ServerBrowserHero />
            <Filters />
        </main>
    );
}
