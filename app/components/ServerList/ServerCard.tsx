"use client";
import { toggleIsServerInfoModalOpen } from "@/app/redux/slices/modal";
import { setSelectedServer } from "@/app/redux/slices/servers";
import { formatWipeDate } from "@/app/utils/formatWipeDate";
import { useDispatch } from "react-redux";

const ServerCard = ({ data }: any) => {
    const dispatch = useDispatch();

    const handleCardClick = () => {
        dispatch(setSelectedServer(data));
        dispatch(toggleIsServerInfoModalOpen());
    };

    return (
        <tr
            onClick={handleCardClick}
            className="grid md:grid-cols-9 bg-[#1d1d1d] mt-3 py-3 px-8 hover:bg-neutral-700 cursor-pointer items-center min-w-[450px]"
        >
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
