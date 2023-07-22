import { formatWipeDate } from "@/app/utils/formatWipeDate";

interface IServerCardProps {
    data: any;
}

const ServerCard = ({ data }: IServerCardProps) => {
    return (
        <tr className="grid md:grid-cols-9 bg-[#1d1d1d] mt-3 py-3 px-8 hover:bg-neutral-700 cursor-pointer items-center min-w-[450px]">
            <td className="col-span-6 font-gilroy_bold tracking-wider pr-10 text-sm">
                {data.name}
                <br />
                <span className="font-sans text-neutral-400 text-xs">{data.details.map}</span>
            </td>
            <td>
                {data.players} / {data.maxPlayers}
            </td>
            <td>{formatWipeDate(data.details.rust_last_wipe)}</td>
            <td className="mx-auto">
                <img
                    className="w-6"
                    src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${data.country}.svg`}
                />
            </td>
        </tr>
    );
};

export default ServerCard;
