import { formatWipeDate } from "@/app/utils/formatWipeDate";

interface IServerCardProps {
    data: any;
}

const ServerCard = ({ data }: IServerCardProps) => {
    return (
        <tr className="grid grid-cols-8 bg-neutral-800 mt-4 p-5">
            <td className="col-span-5 font-gilroy_bold">{data.name}</td>
            <td>
                {data.players} / {data.maxPlayers}
            </td>
            <td>{formatWipeDate(data.details.rust_last_wipe)}</td>
            <td className="text-center">{data.country}</td>
        </tr>
    );
};

export default ServerCard;
