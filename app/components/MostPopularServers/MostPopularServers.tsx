import getPopularRustServers from "@/app/api/getPopularRustServers";
import ServerCard from "./ServerCard";

const MostPopularServers = async () => {
    const servers = await getPopularRustServers();

    return (
        <div className="py-32">
            <h1 className="text-center font-bebas text-6xl text-stone-200">popular servers</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto mt-10">
                {servers.data?.map((server: any, index: number) => (
                    <ServerCard key={index} data={server} index={index} />
                ))}
            </div>
        </div>
    );
};

export default MostPopularServers;
