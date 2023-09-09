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
                <p>
                    {data.players} / {data.maxPlayers}
                </p>
            </div>
            <div className="cursor-pointer" onClick={copyToClipboard}>
                <h3>
                    IP Address <img className="inline-block w-4 ml-2 mb-1" src="/images/icons/copy.svg" alt="copy"/>
                </h3>
                <p>{data.ip}</p>
            </div>
            <div>
                <h3>Country</h3>
                <p>
                    <img
                        className="w-7"
                        src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${data.country}.svg`}
                        alt="country"
                    />
                </p>
            </div>
            <div>
                <h3>Rank</h3>
                <p>#{data.rank}</p>
            </div>
            <div>
                <h3>Uptime</h3>
                <p>{formatUptime(data.details.rust_uptime)}</p>
            </div>
            <div>
                <h3>Last wipe</h3>
                <p>{formatWipeDate(data.details.rust_last_wipe)}</p>
            </div>

            {data.details.rust_url && (
                <div>
                    <h3>Website</h3>
                    <p>
                        <a className="underline block" href={data.details.rust_url}>
                            {data.details.rust_url.slice(0, 25)}
                        </a>
                    </p>
                </div>
            )}
            <div>
                <h3>Offical server</h3>
                <p>{data.details.official ? "True" : "False"}</p>
            </div>
        </div>
    );
};

export default InfoTable;
