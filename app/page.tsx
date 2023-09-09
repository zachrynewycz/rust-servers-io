import GroupSizeModal from "./components/GroupSizeModal/GroupSizeModal";
import Hero from "./components/Hero/Hero";
import MostPopularServers from "./components/MostPopularServers/MostPopularServers";
import Nav from "./components/Nav/nav";

export default function Home() {
    return (
        <>
            <Nav />
            <Hero />
            <MostPopularServers />
            <GroupSizeModal />
        </>
    );
}
