import { getPlayerCounts } from "@/app/api/getPlayerCounts";

const ConcurrentPlayers = async () => {
    const players = await getPlayerCounts();
    console.log(players);
    return (
        <div>
            <h1>{players.players}</h1>
        </div>
    );
};

export default ConcurrentPlayers;
