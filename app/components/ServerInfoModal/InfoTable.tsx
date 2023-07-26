import { formatUptime } from "@/app/utils/formatUptime";
import { formatWipeDate } from "@/app/utils/formatWipeDate";

const InfoTable = ({ data }: any) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(data.ip);
    };

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-7 gap-y-4 server-info-table my-7">
            <div>
                <h3 className="text-neutral-300">Player count</h3>
                <h1>
                    {data.players} / {data.maxPlayers}
                </h1>
            </div>
            <div className="cursor-pointer" onClick={copyToClipboard}>
                <h3>
                    IP Address <img className="inline-block w-4 ml-2 mb-1" src="/images/icons/copy.svg" />
                </h3>
                <h1>{data.ip}</h1>
            </div>
            <div>
                <h3>Country</h3>
                <h1>
                    <img
                        className="w-7"
                        src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${data.country}.svg`}
                    />
                </h1>
            </div>
            <div>
                <h3>Rank</h3>
                <h1>#{data.rank}</h1>
            </div>
            <div>
                <h3>Uptime</h3>
                <h1>{formatUptime(data.details.rust_uptime)}</h1>
            </div>
            <div>
                <h3>Last wipe</h3>
                <h1>{formatWipeDate(data.details.rust_last_wipe)}</h1>
            </div>

            {data.details.rust_url && (
                <div>
                    <h3>Website</h3>
                    <h1>
                        <a className="underline" href={data.details.rust_url}>
                            {data.details.rust_url.slice(0, 25)}
                        </a>
                    </h1>
                </div>
            )}
            <div>
                <h3>Offical server</h3>
                <h1>{data.details.official ? "True" : "False"}</h1>
            </div>
        </div>
    );
};

export default InfoTable;
