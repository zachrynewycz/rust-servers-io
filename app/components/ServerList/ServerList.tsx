"use client";
import { RootState } from "@/app/redux/store";
import { useSelector } from "react-redux";
import ServerCard from "./ServerCard";

const ServerList = () => {
    const servers = useSelector((state: RootState) => state.servers.rustServerData);
    console.log(servers);
    return (
        <table className="max-w-5xl mx-auto text-stone-200">
            <thead className="font-gilroy_bold">
                <tr className="grid grid-cols-8 text-left">
                    <th className="col-span-5 ml-5">Name</th>
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
