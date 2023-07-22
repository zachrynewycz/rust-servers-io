"use client";
import { RootState } from "@/app/redux/store";
import { useSelector } from "react-redux";
import ServerCard from "./ServerCard";
import Loading from "./Loading";

const ServerList = () => {
    const servers = useSelector((state: RootState) => state.servers.rustServerData);

    if (!servers || !servers.length) return <Loading />;

    return (
        <table className="max-w-5xl mx-auto text-stone-200 w-full">
            <thead className="font-gilroy_bold">
                <tr className="md:grid grid-cols-9 text-left px-5 hidden">
                    <th className="col-span-6 ml-5">Name</th>
                    <th>Players</th>
                    <th>Last wiped</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                {servers && servers.map((server: any) => <ServerCard data={server.attributes} key={server.id} />)}
            </tbody>
        </table>
    );
};

export default ServerList;
