import Hero from "./components/Hero/Hero";
import MostPopularServers from "./components/MostPopularServers/MostPopularServers";
import Nav from "./components/Nav/nav";

export default function Home() {
    return (
        <main>
            <Nav />
            <Hero />
            <MostPopularServers />
        </main>
    );
}
